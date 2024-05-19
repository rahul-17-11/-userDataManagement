/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CreateUser = ({ userDetails }) => {
  return (
    <div>
      <button>
        <Link to="/adduser">Add User</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((details, index) => (
            <tr key={index}>
              <td>{details.userName}</td>
              <td>{details.firstName}</td>
              <td>{details.lastName}</td>
              <td>{details.startDate}</td>
              <td>{details.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreateUser;
