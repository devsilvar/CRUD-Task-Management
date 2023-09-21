import React, { useState } from "react";

const Form = ({ dispatch }) => {
  //initialize the values of the Input Form
  const [data, setData] = useState({
    task: "",
    person: "",
    startDate: "",
    dueDate: "",
  });

  //handle changes in the Input Form
  const getFormInput = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
    console.log(data);
  };

  function resetForm() {
    setData({
      task: "",
      person: "",
      startDate: "",
      dueDate: "",
    });
  }

  //Submits the form
  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = { id: new Date().getTime().toString(), data };
    if (data.task && data.person) {
      dispatch({ type: "ADD_USER", payload: UserData });
      resetForm();
    } //if No Value Shoot Out a modal
    if ((data.task && data.person) == "") {
      dispatch({ type: "NO_INFO" });
    }
    resetForm();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-9">
          <div id="#editModal" className="card shadow rounded p-3 mt-5">
            <form onSubmit={handleSubmit} action="" className="">
              <label htmlFor="Task">Enter the Task</label>
              <input
                type="text"
                name="task"
                id="task"
                placeholder="Enter the Task"
                className="form-control"
                value={data.task}
                onChange={getFormInput}
              />

              <label htmlFor="Person" className="mt-4">
                Personell
              </label>
              <input
                type="text"
                name="person"
                id="person"
                value={data.person}
                placeholder="Who is the Task assigned To"
                onChange={getFormInput}
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
                  value={data.startDate}
                  onChange={getFormInput}
                />

                <label htmlFor="dueDate" className="mt-3">
                  {" "}
                  Due Time
                </label>
                <input
                  type="datetime-local"
                  name="dueDate"
                  id="dueDate"
                  value={data.dueDate}
                  className="form-control"
                  onChange={getFormInput}
                />
              </div>
              <button className="btn btn-success d-flex justify-content-center px-4 py-2  mt-4">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
