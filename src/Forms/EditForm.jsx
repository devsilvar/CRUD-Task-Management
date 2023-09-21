import React from "react";

const EditForm = ({ handleUpdate, handleEdit, closeModal, state }) => {
  return (
    <form
      action=""
      className="editModal bg-white rounded w-50"
      onSubmit={(e) => handleUpdate(e)}
    >
      <div className=" shadow rounded px-4 py-5">
        <div className="close-modal" onClick={(e) => closeModal(e)}>
          &times;
        </div>

        <label htmlFor="Task">Update the Task</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter the Task"
          className="form-control"
          value={state.DataEdits.task}
          onChange={(e) => handleEdit(e)}
        />

        <label htmlFor="Person" className="mt-4">
          Personell
        </label>
        <input
          type="text"
          name="person"
          id="person"
          value={state.DataEdits.person}
          placeholder="Who is the Task assigned To"
          onChange={(e) => handleEdit(e)}
          className="form-control"
        />

        <div className="mt-3">
          <label htmlFor="startDate">Start Time</label>
          <input
            type="datetime-local"
            name="startDate"
            id="startDate"
            className="form-control"
            placeholder="Start Date"
            value={state.DataEdits.startDate}
            onChange={(e) => handleEdit(e)}
          />

          <label htmlFor="dueDate" className="mt-3">
            {" "}
            Due Time
          </label>
          <input
            type="datetime-local"
            name="dueDate"
            id="dueDate"
            value={state.DataEdits.dueDate}
            className="form-control"
            onChange={(e) => handleEdit(e)}
          />
        </div>
        <button className="btn btn-warning d-flex justify-content-center px-4 py-2  mt-4">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
