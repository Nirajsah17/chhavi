function getImageOptions(args) {
  const {  imgBitmap, stage } = args;
  let stageW = stage.width,
    stageH = stage.height,
    wRatio = stageW / imgBitmap.width,
    hRatio = stageH / imgBitmap.height,
    ratio = Math.min(wRatio, hRatio),
    centerShiftX = Math.round((stageW - imgBitmap.width * ratio) / 2),
    centerShiftY = Math.round((stageH - imgBitmap.height * ratio) / 2),
    scaledImageWidth = imgBitmap.width * ratio,
    scaledImageHeight = imgBitmap.height * ratio;
  return {
    x: centerShiftX,
    y: centerShiftY,
    image: imgBitmap,
    width: scaledImageWidth,
    height: scaledImageHeight,
    ratio: ratio,
  };
}

function getFile(files, filename){
  let _file = null;
  if(!files.length) return;
  files.forEach(file => {
    if(file.name === filename){
      _file = file;
    }
  });
  return _file
}

export { getImageOptions, getFile };
