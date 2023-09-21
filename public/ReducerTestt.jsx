import Modals from "./Modals/";
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type == "ADD_USER") {
    console.log(state, action);
    const updatedPeople = [...state.people, action.payload];
    return {
      ...state,
      people: updatedPeople,
      isModal: false,
      modalContent: "New User Added",
    };
  } else if (action.type == "NO_VALUE") {
    return {
      ...state,
      people: [],
      isModal: true,
      modalContent: "Enter a Value",
    };
  } else if (action.type == "CLOSE_MODAL") {
    return {
      ...state,
      isModal: false,
      modalContent: "",
    };
  } else if (action.type == "REMOVE_PERSON") {
    const newPeople = state.people.filter((item) => item.id !== action.payload);
    return {
      ...state,
      people: newPeople,
      isModal: true,
      modalContent: "Item Removed",
    };
  } else {
    console.log(state, action);
    throw new Error("No Mathcing Action Selected");
  }
};

const defaultState = {
  people: [],
  isModal: false,
  modalContent: "Here is what we Have in the Modal",
};

const Reducer = () => {
  const [name, setname] = useState("");
  // const [people, setpeople] = useState("");
  // const [isModal, setisModal] = useState(false);
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      let newPerson = { id: new Date().getTime().toString(), name };
      // setpeople([...people, newPerson]);
      setname("");
      dispatch({ type: "ADD_USER", payload: newPerson });
      // setisModal(true);
    } else {
      dispatch({ type: "NO_VALUE" });
      // setisModal(false);
    }
  };

  return (
    <div className="my-5">
      {state.isModal && (
        <Modals modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <div className="card shadow w-25 mx-auto p-4">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />

          <button className="btn btn-success mt-3">submit</button>
        </form>
      </div>
      <div className="text-center p-3">
        <h2>People</h2>
        {state.people.length > 0 &&
          state.people.map((person) => {
            return (
              <p key={person.id}>
                {person.name}
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_PERSON", payload: person.id })
                  }
                >
                  Remove
                </button>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Reducer;
