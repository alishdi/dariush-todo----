// Actions
const addTodo = "ADD_TODO";
const removeTodo = "REMOVE_TODO";
const doTodo = "DO_TODO";
const initState = {
  todo: [],
  filter: 'showall'
}
// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case addTodo: {
      return [...state, action.payload];
    }
    case removeTodo: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case doTodo: {
      const copyState = [...state]
      copyState.some(todo => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone
        }
      })
      return copyState
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const addTodoAction = (title) => ({
  type: addTodo,
  payload: {
    id: crypto.randomUUID(),
    title,
    isDone: false,
  },
});

export const removeTodoAction = (id) => ({
  type: removeTodo,
  payload: { id },
});


export const completeTodo = (id) => ({
  type: doTodo,
  payload: { id },
});
