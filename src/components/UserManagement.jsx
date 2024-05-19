import { useState } from "react";
import UserTable from "./UserTable";

const UserManagement = () => {
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
  const [currentUser, setCurrentUser] = useState({
    id: null,
    firstName: "",
    lastName: "",
    startDate: "",
    endDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setError("");
  };

  const handleDelete = (id) => {
    setUserDetails(userDetails.filter((user) => user.id !== id));
    setError("");
  };

  return (
    <div>
      <h1>User Data</h1>
      <UserTable
        userDetails={userDetails}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default UserManagement;
