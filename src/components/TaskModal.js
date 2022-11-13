import React from "react";
import axios from "../axios";
import { useEffect, useState } from "react";

const TaskModal = ({ onClick1, isVisible, data }) => {
  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-md flex justify-center items-center">
          <div className=" flex flex-col w-[90%] h-[90%] z-11  bg-white rounded-md text-center ml-10">
            <div
              onClick={onClick1}
              className=" flex flex-col w-full h-[10%]  items-end pr-3  "
            >
              <h1 className="text-sm ml-10 text-darkBlue cursor-pointer">
                close
              </h1>
            </div>
            <h1 className="font-bold text-4xl text-darkBlue mt-7">Add Task</h1>

            {/* all task here to show */}

            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Name
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Type
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Email
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Total
                    </th>
                  </tr>
                </thead>

                {data?.map((item) => (
                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.FirstName}
                      </td>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.Type}
                      </td>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.email}
                      </td>
                      <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.total ? item.total : 0}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>

            {/* abc */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TaskModal;
