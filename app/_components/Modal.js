"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { createPost, editCalendarEvent, editPost } from "../_lib/actions";
import Form from "./Form";
import IncomingEventsList from "./IncomingEventsList";

const Modal = ({
  onClose,
  title,
  dayInfo = null,
  type,
  userId,
  text,
  data,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  let modalContent;
  if (type === "posts")
    modalContent = (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgb(229,231,235,0.3)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-20">
        <div className="w-xl h-[20rem]">
          <div className="dark:bg-blue-950 bg-gray-100 h-full w-full p-4 shadow-2xl">
            <div className="flex justify-end text-2xl">
              <button
                className="cursor-pointer transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-300"
                id="x"
                onClick={handleCloseClick}
              >
                <HiXMark />
              </button>
            </div>

            <Form
              type="post"
              action={text ? editPost : createPost}
              userId={userId}
              close={onClose}
              text={text}
              data={data}
            />
          </div>
        </div>
      </div>
    );
  if (type === "calendar")
    modalContent = (
      <div
        id="overlay"
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[rgb(229,231,235,0.3)] dark:bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-20"
      >
        <div className="w-xl h-[20rem]">
          <div className="dark:bg-blue-950 bg-gray-100 h-full w-full p-4 shadow-2xl">
            <div className="flex justify-end text-2xl">
              <button
                className="cursor-pointer transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-300"
                onClick={handleCloseClick}
              >
                <HiXMark />
              </button>
            </div>
            {title && (
              <h1 className="text-2xl font-semibold text-center mb-8">
                {title}
              </h1>
            )}
            <IncomingEventsList data={dayInfo} userId={userId} />
          </div>
        </div>
      </div>
    );
  if (type === "calendarEdit")
    modalContent = (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div className="w-xl h-[20rem]">
          <div className="dark:bg-blue-950 bg-gray-100 h-full w-full p-4 shadow-2xl">
            <div className="flex justify-end text-2xl">
              <button
                className="cursor-pointer transition-[background-color,_box-shadow] rounded-md focus:ring-4 dark:ring-blue-800 outline-none focus:outline-none ring-amber-300"
                id="x"
                onClick={handleCloseClick}
              >
                <HiXMark />
              </button>
            </div>

            <Form
              type="calendarEdit"
              action={editCalendarEvent}
              userId={userId}
              close={onClose}
              text={text}
              data={data}
            />
          </div>
        </div>
      </div>
    );
  return mounted
    ? createPortal(modalContent, document.getElementById("modal-root"))
    : null;
};

export default Modal;
