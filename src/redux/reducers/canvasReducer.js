const initialState = {
  "zoom_in": 1,
  "zoom_out": 1,
  "scale": 1,
  "pan": false,
  "brush_color": "#738",
  "stroke_color": "#FFFFFF",
  "cursor_type": "default",
  "stroke_width": 2,
}

const canvasReducer = (state=initialState, action)=>{
  const type = action.type;
  switch(type){
    case 'ZOOM_IN':
      return {
        ...state,
        zoom_in: action.payload,
      };
    case 'ZOOM_OUT':
      return {
        ...state,
        zoom_out: action.payload,
      };
    case 'SCALE':
      return {
        ...state,
        scale: action.payload
      };
    case 'PAN':
      return {
        ...state,
        pan: action.payload
      };
    case 'BRUSH_COLOR':
      return {
        ...state,
        brush_color: action.payload
      };
    case 'STROKE_COLOR':
      return {
        ...state,
        stroke_color: action.payload
      };
    case 'CURSOR_TYPE':
      return {
        ...state,
        cursor_type: action.payload
      };
    case 'STROKE_WIDTH':
      return {
        ...state,
        stroke_width: action.payload
      };
    default :
      return initialState;
  }
}