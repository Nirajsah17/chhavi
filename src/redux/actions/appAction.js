export const uploadFiles = (files)=>({
  type: 'UPLOAD_FILES',
  payload: files
});

export const theme = (theme)=>({
  type: 'UPDATE_THEME',
  payload: theme
});

export const activeFile = (name)=>({
  type: 'ACTIVE_IMAGE',
  payload: name
});


export const activeBitMap = (bitmap)=>({
  type: 'ACTIVE_BITMAP',
  payload: bitmap
});

export const setImageOptions = (options)=>({
  type: 'IMAGE_OPTIONS',
  payload: options
});

export const setStage = (stage)=>({
  type: 'STAGE',
  payload: stage
});