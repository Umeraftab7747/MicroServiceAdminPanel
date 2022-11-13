import React from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const Logins = () => {
    if (email === "admin@admin.com" && password === "123") {
      alert("LOGIN");
      localStorage.setItem("Admin", true);
      history.push("/home");
    } else {
      alert("Something went wrong check again !");
    }
  };

  return (
    <div className="grid grid-row-1">
      <div className="flex flex-col text-center bg-darkBlue h-screen text-sm justify-center items-center">
        <div className="flex flex-col space-y-10 text-white justify-center items-center w-[90%] h-[90%] ">
          <div className="flex flex-col max-w-sm space-y-2 justify-center items-center ">
            <h1 className="font-bold text-4xl mt-24">Admin Panel Login</h1>
            <p className="text-xs">Login to Your Admin Account !</p>
          </div>

          <div className="flex flex-col space-y-5 w-[90%] h-[90%] ">
            <div className="grid grid-cols-1 text-black text-xs gap-5">
              <input
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                type="text"
                placeholder="Username or Email Address"
                className="p-4 border-[1px] border-gray-400 rounded-md"
              />
              <input
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                className="p-4 border-[1px] border-gray-400 rounded-md"
              />
            </div>

            <div className="flex w-[100%] align-center text-center justify-center items-center self-center">
              <button
                onClick={() => {
                  Logins();
                }}
                className="py-3 px-10 w-[50%] rounded-lg text-black text-md bg-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
