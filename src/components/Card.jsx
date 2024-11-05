import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="border-2 border-black relative flex-shrink-0 w-60 h-80 bg-blue-200 rounded-[30px] text-white px-5 py-10 mt-1 mb-1 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className=" footer absolute bottom-0  w-full  left-0  ">
        <div className="flex justify-between items-center px-3 py-2  mb-2 text-gray-800">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center">
            {data.close ? (
              <IoMdClose color="#fff"/>
            ) : (
              <MdOutlineFileDownload size=".9em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4  ${data.tag.tagColor === "blue" ?"bg-blue-600" : "bg-green-600"} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
