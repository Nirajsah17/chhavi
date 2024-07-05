export const setZoomIn = (zoom) => ({
  type: "ZOOM_IN",
  payload: zoom,
});

export const setZoomOut = (zoom) => ({
  type: "ZOOM_OUT",
  payload: zoom,
});

export const setScale = (scale) => ({
  type: "SCALE",
  payload: scale,
});

export const setIsPanning = (pan) => ({
  type: "PAN",
  payload: pan,
});

export const setBrushColor = (color) => ({
  type: "BRUSH_COLOR",
  payload: color,
});

export const setStrokeColor = (color) => ({
  type: "STROKE_COLOR",
  payload: color,
});

export const setCursorType = (type) => ({
  type: "CURSOR_TYPE",
  payload: type,
});

export const setStrokeWidth = (width) => ({
  type: "STROKE_WIDTH",
  payload: width,
});

export const setCanvasDims = (dims) => ({
  type: "CANVAS_DIMS",
  payload: {...dims},
});

export const setScaleFactor = (scale) => ({
  type: "SCALE_FACTOR",
  payload: scale,
});
