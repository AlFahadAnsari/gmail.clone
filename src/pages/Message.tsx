import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../redux/sliceApp";
import {motion} from "framer-motion"

const Message = ({ email }) => {
  const navigate = useNavigate();
const dispatch = useDispatch()


  const handleMail = () => {
    dispatch(setSelectedEmail(email))
    navigate(`/mail/${email.id}`);
  };

  return (
    <motion.div
    initial={{opacity:0 , y:-20}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.5}}
      onClick={handleMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare size={20} />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine size={20} />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate inline-block max-w-full">
          {email.message}
        </p>
      </div>
      <div className="flex-none text-gray-600">
      <p>{new Date(email?.time?.seconds*1000).toUTCString()}</p>
      </div>
    </motion.div>
  );
};

export default Message;
