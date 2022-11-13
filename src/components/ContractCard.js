import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import axios from "../axios";
import { useEffect, useState } from "react";

const ContractCard = ({ onClick }) => {
  // const [data, setdata] = useState("");
  const [sdata, setsdata] = useState("");

  useEffect(() => {
    // AllServices();
    AllContracts();
  }, []);

  // const AllServices = () => {
  //   axios
  //     .get("/Admin/AllServices")
  //     .then((res) => {
  //       setdata(res.data);
  //     })
  //     .catch((err) => {
  //       console.warn(err.response.data);
  //       if (err.response.data) {
  //         console.warn("Error");
  //       }
  //     });
  // };

  const AllContracts = () => {
    axios
      .get("/Admin/GetAllContractor")
      .then((res) => {
        setsdata(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
        }
      });
  };

  if (sdata.length === 0) {
    return (
      <div
        role="status"
        className="flex flex-1 w-full h-full justify-center align-center"
      >
        <span class="sr-only text-white">Nothing to Display</span>
      </div>
    );
  }

  if (sdata.length < 0) {
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
        <h2 className="text-white text-2xl">All Contractors</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Contractor Name
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"></th>

                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Assign Job
                </th>
              </tr>
            </thead>
            <tbody>
              {/* h1 */}

              {sdata.map((item) => (
                <tr>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    {item.name}
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                    <button
                      onClick={onClick}
                      className="bg-gradient-to-tr from-purple-500 to-purple-700 px-8 py-2 rounded-lg text-white text-center"
                    >
                      Assign
                    </button>
                  </th>
                  <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ContractCard;
