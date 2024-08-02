import { GiHamburgerMenu } from "react-icons/gi";
import gmailImg from "../../assets/Gmail_Logo_128px.webp";
import { CiSearch } from "react-icons/ci";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineSettings } from "react-icons/md";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import avatarImg from "../../assets/Screenshot_2022-06-04-22-38-55-74_1c337646f29875672b5a61192b9010f9.jpg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/sliceApp";

function Navbar() {
  const [inputs, setInputs] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearch(inputs));
  }, [inputs]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {/*  hamburger */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100">
            <GiHamburgerMenu size={24} />
          </div>
          <img src={gmailImg} alt="" className="w-8" />
          <h1 className="text-2xl text-gray-600 font-medium">Gmail</h1>
        </div>
      </div>

      {/*  input  */}
      <div className="md:block hidden w-[50%] ">
        <div className="flex bg-[#EAF1FB]  rounded-full mr-30 px-2 py-3">
          <CiSearch size={24} className="text-gray-700" />
          <input
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
            type="text"
            placeholder="Search Email"
            className="rounded-full w-full bg-transparent outline-none px-1 mx-2"
          />
        </div>
      </div>

      {/* quetions mark  */}

      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <MdOutlineSettings size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={20} />
          </div>
          <div className="cursor-pointer">
            <Avatar src={avatarImg} size={"30"} round={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
