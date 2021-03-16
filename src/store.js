import { createStore } from "redux";

const ADD = "add";
const DELETE = "delete";

const addTodo = (text) => {
  return { type: ADD, text };
};

const deleteToDo = (id) => {
  return { type: DELETE, id: parseInt(id) };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteToDo,
};

export default store;
