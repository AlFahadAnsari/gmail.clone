import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/sliceApp";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/FireBase";
import { serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";

type Inputs = {
  to: string;
  subject: string;
  message: string;
};

function SendMail() {
  const open = useSelector((state) => state.model.open);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      // Add server timestamp along with the data
      const emailData = {
        ...data,
        time: serverTimestamp(), // Add server timestamp
      };

      await addDoc(collection(db, "emails"), emailData);

      dispatch(setOpen(false));
      toast.success("emails has been send");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error state or feedback to the user
    }
  };

  return (
    <div
      className={` ${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 />
        </div>
      </div>
      <form
        className="flex flex-col p-3 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("to", {
            required: "Recipient's email is required",
            pattern: /^\S+@\S+$/i,
          })}
          name="to"
          type="email"
          placeholder="Recipient's Email"
          className="outline-none py-1"
        />
        {errors.to && (
          <span className="text-red-500">Recipient's email is required</span>
        )}
        <hr />
        <input
          {...register("subject")}
          name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <hr />
        <textarea
          {...register("message", { required: "Message body is required" })}
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="outline-none py-1"
        />
        {errors.message && (
          <span className="text-red-500">Message body is required</span>
        )}
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail;
