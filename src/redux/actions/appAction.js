export const uploadFiles = (files)=>({
  type: 'UPLOAD_FILES',
  payload: files
});

export const theme = (theme)=>({
  type: 'UPDATE_THEME',
  payload: theme
});

export const activeImage = (name)=>({
  type: 'ACTIVE_IMAGE',
  payload: name
});


