const initialState = {
  brightness: 0,
  contrast: 0,
  saturation: 0,
  hue: 0,
  sepia: 0,
  blur: 0,
  noise: 0,
  pixelate: 0,
  mask: 0,
  grayScale: false,
  invert: false,
  kaleidoscope: 0,
};

const filterReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "BRIGHTNESS":
      return {
        ...state,
        brightness: action.payload,
      };
    case "CONTRAST":
      return {
        ...state,
        contrast: action.payload,
      };
    case "SATURATION":
      return {
        ...state,
        saturation: action.payload,
      };
    case "HUE":
      return {
        ...state,
        hue: action.payload,
      };
    case "SEPIA":
      return {
        ...state,
        sepia: action.payload,
      };
    case "BLUR":
      return {
        ...state,
        blur: action.payload,
      };
    case "NOISE":
      return {
        ...state,
        noise: action.payload,
      };
    case "PIXELATE":
      return {
        ...state,
        pixelate: action.payload,
      };
    case "MASK":
      return {
        ...state,
        mask: action.payload,
      };
    case "GRAYSCALE":
      return {
        ...state,
        grayScale: action.payload,
      };
    case "INVERT":
      return {
        ...state,
        invert: action.payload,
      };
    case "KALEIDOSCOPE":
      return {
        ...state,
        kaleidoscope: action.payload,
      };
    default:
      return initialState;
  }
};

export default filterReducer;
