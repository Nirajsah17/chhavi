import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faImage,
  faSlidersH,
  faGear,
  faPencil,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uploadFiles } from "../redux/actions/appAction";

function LeftNav() {
  const dispatch = useDispatch();

  const handleUpload = (e) => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "image/*");
    el.setAttribute("multiple", "true");
    el.click();
    el.addEventListener("change", (e) => {
      const files = e.target.files;
      // fileHandler([...files]);
      dispatch(uploadFiles([...files]));
    });
  };

  return (
    <>
      <div className="flex flex-col w-12 h-full">
        <div className="flex flex-col">
          <FontAwesomeIcon
            className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
            icon={faFileUpload}
            onClick={handleUpload}
            title="Upload files"
          />
          <NavLink
            to="/assets"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-fg-accent rounded-sm"
                : "nav-link text-fg-default hover:text-fg-default"
            }
            title="Assets"
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
              icon={faImage}
            />
          </NavLink>
          <NavLink
            to="/filter"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-fg-accent rounded-sm"
                : "nav-link text-fg-default hover:text-fg-default"
            }
            title="Filter"
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
              icon={faSlidersH}
            />
          </NavLink>
          <NavLink
            to="/free-hand"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-fg-accent rounded-sm"
                : "nav-link text-fg-default hover:text-fg-default"
            }
            title="Free hand"
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
              icon={faPencil}
            />
          </NavLink>
          
          <NavLink
            to="/element"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-fg-accent rounded-sm"
                : "nav-link text-fg-default hover:text-fg-default"
            }
            title="Settings"
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
              icon={faGear}
            />
          </NavLink>
        </div>

        <div className="flex">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? "nav-link text-fg-accent rounded-sm"
                : "nav-link text-fg-default hover:text-fg-default"
            }
            title="Search"
          >
            <FontAwesomeIcon
              className="w-6 h-6 p-2 rounded-md hover:bg-bg-overlay text-fg-default cursor-pointer"
              icon={faSearch}
            />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default LeftNav;
