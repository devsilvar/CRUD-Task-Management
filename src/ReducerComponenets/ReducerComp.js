const reducer = (state, action) => {
  if (action.type === "ADD_USER") {
    const updatedTask = [...state.Todo, action.payload];
    return {
      ...state,
      modalState: false,
      Todo: updatedTask,
      modalContent: "New User Added",
    };
  }

  if (action.type == "NO_INFO") {
    console.log(action, state);
    return {
      ...state,
      modalState: true,
      Todo: [...state.Todo],
      modalContent: "Input Boxes Are EMPTY",
    };
  }

  if (action.type == "DISPLAY EDIT_BOX") {
    const ClickedTask = state.Todo.filter((item) => item.id == action.payload);
    const PresentTask = [...state.Todo];
    return {
      ...state,
      modalState: false,
      Todo: PresentTask,
      modalContent: "",
      isEdited: true,
      DataEdits: {
        ...ClickedTask[0].data,
      },
    };
  }

  if (action.type == "CLOSE_MODAL") {
    const PresentTask = [...state.Todo];
    return {
      ...state,
      modalState: false,
      Todo: PresentTask,
      modalContent: "",
      isEdited: false,
    };
  }

  if (action.type === "EDITING_USER") {
    console.log(action.payloadID);
    const PresentTask = [...state.Todo];
    console.log(state.DataEdits);
    return {
      ...state,
      modalState: false,
      Todo: PresentTask,
      modalContent: "Input Boxes Are EMPTY",
      isEdited: true,
      DataEdits: {
        ...state.DataEdits,
        [action.field]: action.value,
      },
    };
  }

  if (action.type == "UPDATE_USER") {
    let newArr = state.Todo.map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          data: { ...state.DataEdits },
        };
      }
      return item;
    });
    const PresentTask = [...newArr];
    return {
      ...state,
      modalState: true,
      Todo: PresentTask,
      modalContent: "Data Updated",
      isEdited: true,
      DataEdits: {
        ...state.DataEdits,
      },
    };
  }

  if (action.type === "REMOVE_USER") {
    const newArr = state.Todo.filter((item) => item.id !== action.payload);
    return {
      ...state,
      modalState: true,
      modalContent: "Sucessfully Deleted",
      Todo: newArr,
    };
  }
};

export default reducer;
