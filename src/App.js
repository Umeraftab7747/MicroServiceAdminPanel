import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Dashboard from "pages/Dashboard";
import Settings from "pages/Settings";
import Tables from "pages/Tables";
import LoginPage from "./pages/LoginPage";
import AddContractor from "./pages/AddContractor";
import AllContractor from "./pages/AllContractor";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  const history = useHistory();
  const [Logins, setLogins] = React.useState(false);

  React.useEffect(() => {
    let login = localStorage.getItem("Admin");
    let data = JSON.parse(login);
    if (data) {
      setLogins(true);
      history.push("/");
    } else {
      setLogins(false);
      history.push("/");
    }
  }, [Logins]);

  return (
    <>
      {Logins ? (
        <>
          <Sidebar />
          <div className="md:ml-64">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/AddContractor" component={AddContractor} />
              <Route exact path="/AllContractor" component={AllContractor} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </>
      ) : (
        <>
          <Route exact path="/" component={LoginPage} />
        </>
      )}
    </>
  );
}

export default App;
