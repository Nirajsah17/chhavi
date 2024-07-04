const initialState = {
  files: [],
  theme: "light",
};

const appReducer = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case "UPLOAD_FILES":
      return {
        ...state,
        files: [...state.files, ...action.payload],
      };
    case "UPDATE_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return initialState;
  }
};

export default appReducer;
