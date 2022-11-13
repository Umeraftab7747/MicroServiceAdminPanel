import React from "react";
// import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  // const navigate = useNavigate();
  const [user, setuser] = React.useState("");

  React.useEffect(() => {
    let login = localStorage.getItem("User");
    let data = JSON.parse(login);
    if (data) {
      // navigate("/");
      setuser(data);
    } else {
      // navigate("/login");
    }
  }, [Component]);

  return (
    <>
      <Component data={user} />
    </>
  );
};

export default Protected;
