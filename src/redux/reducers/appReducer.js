const initialState = {
  files: [],
  activeBitMap: null,
  theme: "light",
  activeImage: null,
  ImageOptions: {},
  stage: null
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
    case "ACTIVE_BITMAP":
      return {
        ...state,
        activeBitMap: action.payload
      }
    case "ACTIVE_IMAGE":
      return {
        ...state,
        activeImage: action.payload
      };
    case "IMAGE_OPTIONS":
      return {
        ...state,
        ImageOptions: {...action.payload},
      };
    case "STAGE":
      return {
        ...state,
        stage: action.payload,
      };

    default:
      return initialState;
  }
};

export default appReducer;
