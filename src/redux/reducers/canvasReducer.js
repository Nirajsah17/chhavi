const initialState = {
  zoomIn: 1,
  zoomOut: 1,
  scale: 1,
  scaleFactor: 1.08,
  pan: false,
  brushColor: "#738",
  strokeColor: "#FFFFFF",
  cursorType: "default",
  strokeWidth: 2,
  canvasDims: { width: 200, height: 200 },
};

const canvasReducer = (state = initialState, action) => {
  const type = action.type;
  switch (type) {
    case "ZOOM_IN":
      return {
        ...state,
        zoomIn: action.payload,
      };
    case "ZOOM_OUT":
      return {
        ...state,
        zoomOut: action.payload,
      };
    case "SCALE":
      return {
        ...state,
        scale: action.payload,
      };
    case "PAN":
      return {
        ...state,
        pan: action.payload,
      };
    case "BRUSH_COLOR":
      return {
        ...state,
        brushColor: action.payload,
      };
    case "STROKE_COLOR":
      return {
        ...state,
        strokeColor: action.payload,
      };
    case "CURSOR_TYPE":
      return {
        ...state,
        cursorType: action.payload,
      };
    case "STROKE_WIDTH":
      return {
        ...state,
        strokeWidth: action.payload,
      };
    case "CANVAS_DIMS":
      return {
        ...state,
        canvasDims: { ...state.canvasDims,...action.payload },
      };
    case "SCALE_FACTOR":
      return {
        ...state,
        scaleFactor: action.payload,
      };

    default:
      return initialState;
  }
};

export default canvasReducer;
