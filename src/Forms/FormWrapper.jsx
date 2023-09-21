import React from "react";
import AddedTasks from "./AddedTasks";

const FormWrapper = ({ state, DeleteUser, getEditFormInput }) => {
  //reset the form to empty input boxes after submitting

  return (
    <div className="text-center mt-4">
      <h3>List Section</h3>
      <div className="container">
        <table className="table">
          {state.Todo.length == 0 ? (
            <h5 className="mt-3">No Task Added yet</h5>
          ) : (
            state.Todo.map((item) => {
              return (
                <AddedTasks
                  item={item}
                  DeleteUser={DeleteUser}
                  getEditFormInput={getEditFormInput}
                />
              );
            })
          )}
        </table>
      </div>
    </div>
  );
};

export default FormWrapper;
