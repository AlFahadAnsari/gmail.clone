import { useState } from "react";
import { IoMdAdd, IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {  MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from '../redux/sliceApp';

function SideBar() {
  // const [open , setOpen]=useState(false)
  const dispatch = useDispatch()
  const SidebarItems = [
    {
      icon: <LuPencil size={20} />,
      text: "Inbox",
    },
    {
      icon: <IoMdStar size={20} />,
      text: "Starred",
    },
    {
      icon: <MdOutlineWatchLater size={20} />,
      text: "Snoozed",
    },
    {
      icon: <TbSend2 size={20} />,
      text: "Sent",
    },
    {
      icon: <MdOutlineDrafts size={20} />,
      text: "Draft",
    },
    {
      icon: <MdOutlineKeyboardArrowDown size={20} />,
      text: "More",
    },
  ];
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(true))} className=" flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#c2e7ff]" >
          {/* {console.log(dispatch(setOpen(true)))} */}
          <LuPencil size={20} />
          Compose
        </button>
      </div>

      {/* parts  */}

      <div className="text-gray-400">
        {SidebarItems.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-[#d2e2fc] hover:cursor-pointer "
              >
                {item.icon}
                <p>{item.text}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
