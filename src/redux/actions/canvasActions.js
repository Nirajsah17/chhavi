export const zoomIn = (zoom)=>({
  type: 'ZOOM_IN',
  payload: zoom
});

export const zoomOut = (zoom)=>({
  type: 'ZOOM_OUT',
  payload: zoom
});

export const scale = (scale)=>({
  type: 'SCALE',
  payload: scale
})

export const isPanning = (pan)=>({
  type: 'PAN',
  payload: pan
});

export const brushColor = (color)=>({
  type: 'BRUSH_COLOR',
  payload: color
});

export const strokeColor = (color)=>({
  type: 'STROKE_COLOR',
  payload: color
});

export const cursorType = (type)=>({
  type: 'CURSOR_TYPE',
  payload: type
});

export const strokeWidth = (width)=>({
  type: 'STROKE_WIDTH',
  payload: width
});

export const canvasDims = ({width,height})=>({
  type: 'CANVAS_DIMS',
  payload: {width: width,height: height}
});


export const scaleFactor = (scale)=>({
  type: 'SCALE_FACTOR',
  payload: scale
});


