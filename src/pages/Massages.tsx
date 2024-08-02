import { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../Firebase/FireBase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/sliceApp";

const Massages = () => {
  const emails = useSelector((state) => state.model.emails);
  const searchInput = useSelector((state) => state.model.searchText);
  const [filteredEmails, setFilteredEmails] = useState(emails);

  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("time", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe();
  }, [dispatch]);

  useEffect(() => {
    if (emails) {
      const filtered = emails.filter((email) =>
        email.subject?.toLowerCase().includes(searchInput.toLowerCase()) || email.message?.toLowerCase().includes(searchInput.toLowerCase())  
      );
      setFilteredEmails(filtered);
    }
  }, [emails, searchInput]);

  return (
    <div>
      {filteredEmails &&
        filteredEmails.map((email) => <Message key={email.id} email={email} />)}
    </div>
  );
};

export default Massages;
