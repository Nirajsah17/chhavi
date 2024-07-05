import { useState } from "react";
import { searchUnsplash } from "../utils/unsplash.utils";
import { useSelector, useDispatch } from "react-redux";
import { getImageOptions, createBitmapFromURI } from "../utils/utills";
import { setImageOptions, uploadFiles } from "../redux/actions/appAction";

export default function Settings() {
  const size = "14"; // use store so that it can be used to as setting config
  const [searchVal, setSearch] = useState("");
  const [isProgress, setIsProgress] = useState(false);
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();
  const { canvasDims } = useSelector((state) => state.canvasReducer);

  const searchImages = async (e) => {
    setIsProgress(true);
    const res = await searchUnsplash(searchVal);
    if (res.results.length) {
      setIsProgress(false);
      setFiles(res.results);
    }
  };

  const openFile = async (e) => {
    const id = e.target.id;
    if (!id) return;
    const file = files.find((f) => f.id === id);
    if (!file) return;
    const { bitmap, blob } = await createBitmapFromURI(file.urls.full);
    const res = getImageOptions({ imgBitmap: bitmap, stage: canvasDims });
    dispatch(setImageOptions(res));
    const fileObj = new File([blob], file.id, { type: 'image/png' });
    dispatch(uploadFiles([fileObj]))
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <div className="flex rounded-sm p-1 border border-border-default shadow-sm">
          <input
            type="text"
            className="p-1.5 w-full rounded-sm outline-none bg-bg-default text-sm"
            value={searchVal}
            onChange={updateSearch}
            placeholder="search unsplash .."
          />
          <button
            className="p-1.5 rounded-sm hover:hover:bg-bg-overlay"
            onClick={searchImages}
          >
            Search
          </button>
        </div>
        <div className={isProgress ? "h-0.5 bg-blue-500 spin-x" : ""}></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {files.map((file) => (
            <img
              className={`h-auto max-w-full rounded-sm cursor-pointer`}
              src={file.urls.small}
              alt={file.alt_description}
              key={file.id}
              title={file.alt_description}
              id={file.id}
              onClick={openFile}
            />
          ))}
        </div>
        <div></div>
      </div>
    </>
  );
}
