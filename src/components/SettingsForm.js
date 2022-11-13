import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Input from "@material-tailwind/react/Input";

import axios from "../axios";
import { useEffect, useState } from "react";

export default function SettingsForm() {
  const [Category, setCategory] = useState("");
  const [name, setname] = useState("");
  const [hourOne, sethourOne] = useState("");
  const [hourTwo, sethourTwo] = useState("");
  const [hourThree, sethourThree] = useState("");

  const AddData = () => {
    axios
      .post("/Admin/CreateService", {
        category: Category,
        name: name,
        hourOne: hourOne,
        hourTwo: hourTwo,
        hourThree: hourThree,
      })
      .then((res) => {
        // console.warn(res.data);
        alert("Added");
        setname("");
        sethourOne("");
        sethourTwo("");
        sethourThree("");
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
          <h2 className="text-white text-2xl">Add Service</h2>
        </div>
      </CardHeader>
      <CardBody>
        <form>
          {/* drop down */}
          <div className="flex flex-wrap mb-5 ">
            <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
              Select Category
            </h6>

            <select
              id="countries"
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="Handyman">Handyman</option>
              <option value="Smart home Installation">
                Smart home Installation
              </option>
              <option value="Home Threater">Home Threater</option>
            </select>
          </div>

          {/* drop down */}

          <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
            Service name
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
            1 Hours Charge
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-12/12 mb-10 font-light">
              <Input
                onChange={(e) => {
                  sethourOne(e.target.value);
                }}
                type="text"
                value={hourOne}
                color="purple"
                placeholder="Address"
              />
            </div>
          </div>

          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            2 Hours Charge
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-12/12 mb-10 font-light">
              <Input
                onChange={(e) => {
                  sethourTwo(e.target.value);
                }}
                value={hourTwo}
                type="text"
                color="purple"
                placeholder="Address"
              />
            </div>
          </div>

          <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
            3 Hours Charge
          </h6>
          <div className="flex flex-wrap mt-10">
            <div className="w-full lg:w-12/12 mb-10 font-light">
              <Input
                onChange={(e) => {
                  sethourThree(e.target.value);
                }}
                value={hourThree}
                type="text"
                color="purple"
                placeholder="Address"
              />
            </div>
          </div>

          {/*  */}
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
}
