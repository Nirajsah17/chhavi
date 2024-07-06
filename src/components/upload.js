import { useDispatch } from "react-redux";
import { uploadFiles } from "../redux/actions/appAction";


export function UploadWindow() {
  const dispatch = useDispatch();
  const handleUpload = (e)=>{
    const files = e.target.files;
    dispatch(uploadFiles([...files]));
  }
  
  return (
    <>
      <div class="flex items-center justify-center w-full h-full p-2">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-full border-2 border-border-default border-dashed rounded-lg cursor-pointer bg-bg-default"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF 
            </p>
          </div>
          <input id="dropzone-file" type="file" multiple={true} class="hidden" onChange={handleUpload}/>
        </label>
      </div>
    </>
  );
}

