import ImgGRids from "./image-list";
import Filter from "./filter";
import Settings from "./settings";

export default function SideBar({ navItem, files, openFile }) {
  console.log(navItem);
  switch (navItem) {
    case "assets":
      return <ImgGRids files={files} openFile={openFile} />;
    case "filter":
      return <Filter />;
    case "settings":
      return <Settings />;
    default:
      return <ImgGRids files={files} openFile={openFile} />;
  }
}
