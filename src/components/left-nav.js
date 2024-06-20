import uploader from "../svg/cloudupload.svg";
import imageIcon from "../svg/image.svg";
import videoIcon from "../svg/videocamera.svg";
import settingsIcon from "../svg/settingscog.svg";
import filterIcon from "../svg/filter.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


import pen from "../svg/pen.svg";

import { NavLink } from "react-router-dom";
import { useState } from "react";

function LeftNav({ fileHandler }) {
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
            ? "nav-link bg-bg-accentEmphasis text-fg-default rounded-sm"
            : "nav-link text-fg-default hover:text-fg-default"
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
            ? "nav-link bg-bg-accentEmphasis text-fg-default rounded-sm"
            : "nav-link text-fg-default hover:text-fg-default"
        }
        to="/filter"
      >
        <img
          className="p-1 cursor-pointer"
          title="Filter"
          alt="filter"
          src={filterIcon}
        />
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "nav-link bg-bg-accentEmphasis text-fg-default rounded-sm"
            : "nav-link text-fg-default hover:text-fg-default"
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
            ? "nav-link bg-bg-accentEmphasis text-fg-default rounded-sm"
            : "nav-link text-fg-default hover:text-fg-default"
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
      <FontAwesomeIcon icon={faHome} />
    </>
  );
}

export default LeftNav;
