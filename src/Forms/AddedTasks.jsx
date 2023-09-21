import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
const AddedTasks = ({ DeleteUser, getEditFormInput, item }) => {
  return (
    <tbody key={item.id} className="container">
      <tr
        id="task_Table"
        className="d-flex bg-white justify-content-around shadow rounded my-2 "
      >
        <td className="d-flex flex-column flex-lg-row gap-4 text-start small-text">
          <span>
            {" "}
            <b>Task:</b> {item.data.task}
          </span>{" "}
          <span>
            {" "}
            <b>Personell:</b> {item.data.person}
          </span>{" "}
        </td>
        <td className="d-flex flex-sm-column gap-4 flex-lg-row small-text">
          {" "}
          <span>
            {" "}
            <b>Start:</b> {item.data.startDate}
          </span>{" "}
          <span>
            {" "}
            <b>End:</b> {item.data.dueDate}
          </span>{" "}
        </td>
        <td></td>
        {/* <td>
          <button className="btn btn-info rounded">View Task</button>
        </td> */}
        <td className="d-flex gap-3 align-items-center ">
          <FontAwesomeIcon
            icon={faTrash}
            className="text-danger"
            onClick={() => DeleteUser(item)}
          />
          <a href="#editModal">
            <FontAwesomeIcon
              icon={faPenToSquare}
              id={item.id}
              className="text-warning"
              onClick={() => getEditFormInput(item.id)}
            />
          </a>
        </td>
      </tr>
    </tbody>
  );
};

export default AddedTasks;
