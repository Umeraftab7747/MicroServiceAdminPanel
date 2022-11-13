import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

import Input from "@material-tailwind/react/Input";

import axios from "../axios";
import { useEffect, useState } from "react";

const ContractorForm = () => {
  const [name, setname] = useState("");
  const [service, setservice] = useState("");

  const AddData = () => {
    axios
      .post("/Admin/CreateContractor", {
        name: name,
        service: service,
      })
      .then((res) => {
        // console.warn(res.data);
        alert("Added");
        setname("");
        setservice("");
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          console.warn("Error");
        }
      });
  };

  return (
    <Card>
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Add Contractor</h2>
        </div>
      </CardHeader>
      <CardBody>
        <form>
          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Contractor name
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
              <Input
                onChange={(e) => {
                  setname(e.target.value);
                }}
                value={name}
                type="text"
                color="purple"
                placeholder="Service Name"
              />
            </div>
          </div>

          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            Contractor Service
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-12/12 mb-10 font-light">
              <Input
                onChange={(e) => {
                  setservice(e.target.value);
                }}
                value={service}
                type="text"
                color="purple"
                placeholder="Write Contractor Service"
              />
            </div>
          </div>
        </form>
        <button
          onClick={() => {
            AddData();
          }}
          className="bg-purple-500 px-8 py-2 rounded-lg text-white text-center"
        >
          <a>Add</a>
        </button>
      </CardBody>
    </Card>
  );
};

export default ContractorForm;
