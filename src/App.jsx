import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import UserManagement from "./components/UserManagement";
import CreateUser from "./components/CreateUser";

const App = () => {
  const [userDetails, setUserDetails] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      startDate: "2022-01-01",
      endDate: "2023-01-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2021-06-15",
      endDate: "2022-06-15",
    },
  ]);

  return (
    <div>
      <h1>
        <Link to="/">Home Page</Link>
      </h1>
      <button>
        <Link to="/createuser">Create User</Link>
      </button>
      <Routes>
        <Route path="/" element={<UserManagement />} />
        <Route
          path="/createuser"
          element={
            <CreateUser
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
