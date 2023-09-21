import React, { useState, useReducer, useEffect, useRef } from "react";
import Modals from "../Modals/Modals";
import reducer from "./ReducerComp";
import Form from "../Forms/Form";
import EditForm from "../Forms/EditForm";
import FormWrapper from "../Forms/FormWrapper";

const defaultState = {
  modalState: false,
  Todo: [],
  modalContent: "",
  isEdited: false,
  DataEdits: {
    task: "",
    person: "",
    startDate: "",
    dueDate: "",
  },
};

const ReducerDefault = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  //keep track of the Added Todo Items being Edited
  const EditINPUTS = useRef("");

  //Displays the Edit Modal Box
  const getEditFormInput = (item) => {
    EditINPUTS.current = item;
    dispatch({
      type: "DISPLAY EDIT_BOX",
      payload: item,
    });
  };

  //Handle Changes in The Edit modal Box when Displayed
  const handleEdit = (e) => {
    dispatch({
      type: "EDITING_USER",
      field: e.target.id,
      value: e.target.value,
      payloadID: EditINPUTS.current,
    });
  };

  //Update Values to the Array of Objects
  function handleUpdate(e) {
    e.preventDefault();
    dispatch({
      type: "UPDATE_USER",
      payload: EditINPUTS.current,
      updateText: state.DataEdits,
    });
  }

  function closeModal() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  function DeleteUser(item) {
    dispatch({ type: "REMOVE_USER", payload: item.id });
  }

  return (
    <>
      {state.modalState && <Modals modalContent={state.modalContent} />}
      {/* modal Section */}
      {state.isEdited && (
        <>
          <EditForm
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
            closeModal={closeModal}
            state={state}
          />
        </>
      )}

      {/* modal Section */}
      <Form dispatch={dispatch} />
      {/* modalOverlay Background */}
      <div
        className={state.isEdited ? "overlay d-block" : "overlay d-none"}
        onClick={() => dispatch({ type: "CLOSE_MODAL" })}
      ></div>

      {/* form Section */}
      <FormWrapper
        state={state}
        DeleteUser={DeleteUser}
        getEditFormInput={getEditFormInput}
      />
    </>
  );
};

export default ReducerDefault;
