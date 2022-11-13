import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import axios from "../axios";
import { useEffect, useState } from "react";

export default function CardTable() {
  const [data, setdata] = useState("");

  useEffect(() => {
    AllServices();
    // AllBookServices();
  }, [data]);

  const AllServices = () => {
    axios
      .get("/Admin/GetAllService")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          alert("email already register !");
        }
      });
  };

  const DeleteFunctionApi = (id) => {
    axios
      .post("/Admin/DeleteService", {
        id: id,
      })
      .then((res) => {
        // console.warn(res.data);
        alert("deleted");
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          console.warn("Error");
        }
      });
  };

  if (data.length === 0) {
    return (
      <div
        role="status"
        className="flex flex-1 w-full h-full justify-center align-center"
      >
        <span class="sr-only text-white">Nothing to Display</span>
      </div>
    );
  }

  if (data.length < 0) {
    return (
      <div
        role="status"
        className="flex flex-1 w-full h-full justify-center align-center"
      >
        <span class="sr-only text-white">Loading...</span>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">All services</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Service Name
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Category
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Function
                </th>
              </tr>
            </thead>
            <tbody>
              {/* h1 */}
              {data.map((item) => (
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.ServiceName}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.Category}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{" "}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <button
                      onClick={() => {
                        DeleteFunctionApi(item._id);
                      }}
                      className="bg-red-500 px-8 py-2 rounded-lg cursor-pointer text-white text-center"
                    >
                      <a>Delete</a>
                    </button>
                  </th>
                </tr>
              ))}

              {/* h1 */}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
