import StatusCard from "components/StatusCard";
import PageVisitsCard from "components/PageVisitsCard";
import TrafficCard from "components/TrafficCard";
import axios from "../axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [data, setdata] = useState("");
  const [users, setusers] = useState("");
  const [Contractor, setContractor] = useState("");
  const [AllBook, setAllBook] = useState("");
  // const [AllService, setAllService] = useState("");

  useEffect(() => {
    AllServices();
    AllUsers();
    AllContracts();
    AllBookServices();
  }, [data, users, Contractor]);

  const AllServices = () => {
    axios
      .get("/Admin/GetAllService")
      .then((res) => {
        // console.warn(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          console.warn("Error");
        }
      });
  };
  const AllUsers = () => {
    axios
      .get("/Admin/AllUsers")
      .then((res) => {
        console.warn(res.data);
        setusers(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          console.warn("Error");
        }
      });
  };
  const AllContracts = () => {
    axios
      .get("/Admin/GetAllContractor")
      .then((res) => {
        setContractor(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
        }
      });
  };
  const AllBookServices = () => {
    axios
      .post("/Admin/AllServices")
      .then((res) => {
        console.warn(res.data);
        setAllBook(res.data);
      })
      .catch((err) => {
        console.warn(err.response.data);
        if (err.response.data) {
          console.warn("Error");
        }
      });
  };

  return (
    <>
      <div className="bg-light-blue-500 px-3 md:px-8 h-40" />
      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5"></div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Services"
              amount={data.length}
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="groups"
              title="Users"
              amount={users.length}
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Contracts"
              amount={Contractor.length}
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <PageVisitsCard data={AllBook} />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              {/* <TrafficCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
