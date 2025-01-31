import { createStore, combineReducers } from "redux";

// Reducer for userData
function userDataReducer(state = { data: {} }, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Reducer for sessionData
function sessionDataReducer(state = { data: {} }, action) {
  switch (action.type) {
    case "SESSION_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

// Root reducer
const rootReducer = combineReducers({
  user: userDataReducer,
  session: sessionDataReducer,
});

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxUserState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Failed to load state:", error);
    return undefined;
  }
};

// Initial state from localStorage
const persistedState = loadState();

// Create store with persisted state
const store = createStore(rootReducer, persistedState);

// Save state to localStorage on updates
store.subscribe(() => {
  const state = store.getState();
  const userState = { user: state.user }; // Only saving the 'user' slice of state
  localStorage.setItem("reduxUserState", JSON.stringify(userState));
});


export { store };
