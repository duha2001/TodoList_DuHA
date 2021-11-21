// const todos = JSON.parse(localStorage.getItem("todos")) || [];
const todos = [
  {
    id: 1,
    name: "Học reactjs",
    time: "22/10/2021",
    complete: true,
  },
  {
    id: 2,
    name: "Học fastapi",
    time: "24/11/2021",
    success: false,
  },
  {
    id: 3,
    name: "Code Backend",
    time: "25/11/2021",
    success: false,
  },
  {
    id: 4,
    name: "Code Frontend",
    time: "26/11/2021",
    success: false,
  },
  {
    id: 5,
    name: "Đọc sách",
    time: "28/11/2021",
    success: false,
  },
  {
    id: 6,
    name: "Review code",
    time: "10/12/2021",
    success: false,
  },
  {
    id: 7,
    name: "Clean code",
    time: "28/12/2021",
    success: false,
  },
];
const initialState = {
  todos: todos,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodos = [...state.todos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }
    case "UPDATE_TODO": {
      const filterTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      const newTodos = [...filterTodos, action.payload];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }
    case "DELETE_TODO": {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { todos: newTodos };
    }
    default:
      return state;
  }
};

export default todoReducer;
