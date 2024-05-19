/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const AddUser = ({ userDetails }) => {
  userDetails.startDate !== userDetails.endDate;
  return (
    <div>
      <button>Edit</button>
      <button>Delete</button>
      <button>Add</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((details, index) => (
            <tr key={index}>
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

export default AddUser;
