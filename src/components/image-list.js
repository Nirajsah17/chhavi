import { useSelector, useDispatch } from "react-redux";
import { getFile, getImageOptions } from "../utils/utills";
import { activeBitMap, activeFile, setImageOptions } from "../redux/actions/appAction";

export default function ImgGRids() {
  const { files, activeImage } = useSelector((state) => state.appReducer);
  const { canvasDims } = useSelector((state) => state.canvasReducer);

  console.log(canvasDims);
  const dispatch = useDispatch();
  const openFile = async (e) => {
    const filename = e.target.alt;
    if (!filename) return;
    const file = getFile(files, filename);
    if (file) {
      const bitmap = await createImageBitmap(file);
      dispatch(activeBitMap(bitmap));
      dispatch(activeFile(file.name));
      const res = getImageOptions({ imgBitmap: bitmap, stage: canvasDims });
      console.log(res);
      dispatch(setImageOptions(res));
    }
  };

  return (
    <>
      {files?.map((file) => {
        const url = URL.createObjectURL(file);
        return (
          <img
            className={
              file.name === activeImage
                ? "p-1 w-14 h-14 rounded-sm cursor-pointer border-2 border-border-accentEmphasis hover:border-2 hover:border-border-accentEmphasis"
                : "p-1 w-14 h-14 rounded-sm cursor-pointer border border-border-default hover:border-2 hover:border-border-accentEmphasis"
            }
            src={url}
            key={file.name}
            alt={file.name}
            onClick={openFile}
          ></img>
        );
      })}
    </>
  );
}
