/* eslint-disable react/prop-types */

import { useState } from "react";
import UserTable from "./UserTable";

const CreateUser = ({ userDetails, setUserDetails }) => {
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
  const handleAdd = () => {
    if (new Date(currentUser.startDate) > new Date(currentUser.endDate)) {
      setError("Start date cannot be greater than end date");
      return;
    }
    setUserDetails([...userDetails, { ...currentUser, id: Date.now() }]);
    setCurrentUser({
      id: null,
      firstName: "",
      lastName: "",
      startDate: "",
      endDate: "",
    });
    setError("");
  };

  const handleUpdate = () => {
    if (new Date(currentUser.startDate) > new Date(currentUser.endDate)) {
      setError("Start date cannot be greater than end date");
      return;
    }
    setUserDetails(
      userDetails.map((user) =>
        user.id === currentUser.id ? currentUser : user
      )
    );
    setCurrentUser({
      id: null,
      firstName: "",
      lastName: "",
      startDate: "",
      endDate: "",
    });
    setIsEditing(false);
    setError("");
  };
  const handleDelete = (id) => {
    setUserDetails(userDetails.filter((user) => user.id !== id));
    setError("");
  };

  return (
    <div>
      <h1>{isEditing ? "Edit User" : "Add User"}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isEditing ? handleUpdate() : handleAdd();
        }}
      >
        <input
          type="text"
          placeholder="First Name"
          value={currentUser.firstName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, firstName: e.target.value })
          }
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={currentUser.lastName}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, lastName: e.target.value })
          }
          required
        />
        <input
          type="date"
          placeholder="Start Date"
          value={currentUser.startDate}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, startDate: e.target.value })
          }
          required
        />
        <input
          type="date"
          placeholder="End Date"
          value={currentUser.endDate}
          onChange={(e) =>
            setCurrentUser({ ...currentUser, endDate: e.target.value })
          }
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <UserTable
        userDetails={userDetails}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CreateUser;
