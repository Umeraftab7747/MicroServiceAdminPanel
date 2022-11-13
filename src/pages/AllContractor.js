import ContractCard from "components/ContractCard";
import TaskModal from "../components/TaskModal";
import React from "react";
import axios from "../axios";

const AllContractor = () => {
  const [visible, setvisible] = React.useState(false);
  const [sdata, setsdata] = React.useState([]);

  React.useEffect(() => {
    console.warn("HGELLLELLLELL");
    AllContracts();
  }, [sdata]);

  const AllContracts = () => {
    axios
      .post("/Admin/AllServices")
      .then((res) => {
        console.log(res.data);
        setsdata(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
        }
      });
  };

  return (
    <>
      <TaskModal
        isVisible={visible}
        onClick1={() => {
          setvisible(false);
        }}
        data={sdata}
      />
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <ContractCard
              onClick={() => {
                setvisible(true);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContractor;
