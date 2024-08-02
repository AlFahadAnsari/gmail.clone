import { collection, deleteDoc, doc } from "firebase/firestore";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdArrowBack,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { db } from "../Firebase/FireBase";
import toast from "react-hot-toast";

function Mail() {
  const selectedMail = useSelector((state) => state.model.selectEmail);
  const navi = useNavigate();
  const params =useParams()

  const handleDelete = async (id)=>{
    try {
        await deleteDoc(doc(db , "emails", id))
        navi("/")
        toast.success("delete successfull")
    } catch (error) {
        toast.error("something went wrong ")
    }
  }
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdKeyboardArrowLeft size={"20px"} onClick={() => navi("/")} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <BiArchiveIn size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineReport size={"20px"} />
          </div>
          <div
            onClick={() => handleDelete(params.id)}
            className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <MdDeleteOutline size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineMarkEmailUnread size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineWatchLater size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineAddTask size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineDriveFileMove size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            disabled={false}
            className="hover:rounded-full hover:bg-gray-100"
          >
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button
            disabled={false}
            className="hover:rounded-full hover:bg-gray-100"
          >
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto p-4">
        <div className="flex justify-between bg-white items-center gap-1">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">{selectedMail?.subject}</h1>
            <p className="bg-gray-200 px-2 rounded-md">Inbox</p>
          </div>
          <div className="flex-none text-gray-400 my-5">
            <p>{new Date(selectedMail?.time?.seconds * 1000).toUTCString()}</p>
          </div>
        </div>

        <div className="text-gray-500 text-sm">
          <h1>{selectedMail?.to}</h1>
          <h1>To Me</h1>
        </div>

        <div className="my-10 text-gray-500">{selectedMail?.message}</div>
      </div>
    </div>
  );
}

export default Mail;
