import uploader from "../svg/cloudupload.svg";
import imageIcon from "../svg/image.svg";
import videoIcon from "../svg/videocamera.svg";
import settingsIcon from "../svg/settingscog.svg";
// import uploader from "../svg/cloudupload.svg"

function LeftNav({ fileHandler }) {
  const handleUpload = (e) => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.click();
    el.addEventListener("change", (e) => {
      const file = e.target.files[0];
      fileHandler(file)
      // console.log(file);
    });
  };

  return (
    <>
      <img
        className="p-1 cursor-pointer"
        title="Upload"
        alt="uploader"
        src={uploader}
        onClick={handleUpload}
      />
      {/* <img className="p-1 cursor-pointer" title="Open image" alt="image" src={imageIcon} />
      <img className="p-1 cursor-pointer" title="Upload video" alt="video" src={videoIcon} /> */}
      <img
        className="p-1 cursor-pointer"
        title="Settings"
        alt="settings"
        src={settingsIcon}
      />
    </>
  );
}

// export { leftNav };
export default LeftNav;
