import { Link, Route, Routes } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import AddUser from "./components/AddUser";

let userDetails = [
  {
    userName: "John",
    firstName: "John",
    lastName: "Doe",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    userName: "John",
    firstName: "John",
    lastName: "Doe",
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    userName: "John",
    firstName: "John",
    lastName: "Doe",
    startDate: new Date(),
    endDate: new Date(),
  },
];

function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <button>
        <Link to="/createuser">Create User</Link>
      </button>
      <Routes>
        <Route
          path="/createuser"
          element={<CreateUser userDetails={userDetails} />}
        />
        <Route
          path="/adduser"
          element={<AddUser userDetails={userDetails} />}
        />
      </Routes>
    </div>
  );
}

export default App;
