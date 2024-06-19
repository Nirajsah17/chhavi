function getImageOptions(args) {
  const { imgWidth, imgHeight, imgBitmap, stage } = args;
  let stageW = stage.width(),
    stageH = stage.height(),
    wRatio = stageW / imgWidth,
    hRatio = stageH / imgHeight,
    ratio = Math.min(wRatio, hRatio),
    centerShiftX = Math.round((stageW - imgWidth * ratio) / 2),
    centerShiftY = Math.round((stageH - imgHeight * ratio) / 2),
    scaledImageWidth = imgWidth * ratio,
    scaledImageHeight = imgHeight * ratio;
  return {
    x: centerShiftX,
    y: centerShiftY,
    image: imgBitmap,
    width: scaledImageWidth,
    height: scaledImageHeight,
    ratio: ratio,
  };
}

export { getImageOptions };
