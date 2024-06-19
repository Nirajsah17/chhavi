import uploader from "../svg/cloudupload.svg";
import imageIcon from "../svg/image.svg";
import videoIcon from "../svg/videocamera.svg";
import settingsIcon from "../svg/settingscog.svg";
import pen from "../svg/pen.svg"

import { NavLink } from "react-router-dom";
import { useState } from "react";

function LeftNav({ fileHandler }) {
  const [activeTab, setActiveTab] = useState("");

  const handleUpload = (e) => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "image/*");
    el.setAttribute("multiple", "true");
    el.click();
    el.addEventListener("change", (e) => {
      const files = e.target.files;
      fileHandler([...files]);
    });
  };

  return (
    <>
      <>
        <img
          className="p-1 cursor-pointer"
          title="Upload"
          alt="uploader"
          src={uploader}
          onClick={handleUpload}
        />
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link bg-blue-500 text-white rounded-sm"
              : "nav-link text-gray-500 hover:text-gray-700"
          }
          to="/assets"
        >
          <img
            className="p-1 cursor-pointer"
            title="Open image"
            alt="image"
            src={imageIcon}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link bg-blue-500 text-white rounded-sm"
              : "nav-link text-gray-500 hover:text-gray-700"
          }
          to="/filter"
        >
          <img
            className="p-1 cursor-pointer"
            title="Upload video"
            alt="video"
            src={videoIcon}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link bg-blue-500 text-white rounded-sm"
              : "nav-link text-gray-500 hover:text-gray-700"
          }
          to="/settings"
        >
          <img
            className="p-1 cursor-pointer"
            title="Settings"
            alt="settings"
            src={settingsIcon}
          />
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link bg-blue-500 text-white rounded-sm"
              : "nav-link text-gray-500 hover:text-gray-700"
          }
          to="/free-hand"
        >
          <img
            className="p-1 cursor-pointer"
            title="Settings"
            alt="settings"
            src={pen}
          />
        </NavLink>
      </>
    </>
  );
}

export default LeftNav;
