import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Massages from "./Massages";

function Inbox() {
  const [line, setLine] = useState(0);
  const mailType = [
    {
      icon: <MdInbox />,
      text: "Primary",
    },
    {
      icon: <GoTag />,
      text: "Promotions",
    },
    {
      icon: <FaUserFriends />,
      text: "Social",
    },
  ];
  return (
    <div className="flex-1 bg-white rounded-xl mx-5 my-2">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-2">
            <MdCropSquare size={20} />
            <FaCaretDown size={20} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={20} />
          </div>
          <div className="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 500</p>
          <MdKeyboardArrowLeft size={24}/>
          <MdKeyboardArrowRight size={24}/>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <>
                <button
                  key={index}
                  onClick={() => setLine(index)}
                  className={`${
                    line === index
                      ? "border-b-4 border-b-blue-600 text-blue-600"
                      : "border-b-4 border-b-transparent"
                  } flex items-center p-4 gap-5 w-52 hover:bg-gray-100`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </button>
              </>
            );
          })}
        </div>
        <Massages />
      </div>
    </div>
  );
}

export default Inbox;
