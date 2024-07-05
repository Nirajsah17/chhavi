import ImgGRids from "./image-list";
import Filter from "./filter";
import Settings from "./settings";
import FreeHand from "./free-hand";

export default function SideBar({ navItem }) {
  switch (navItem) {
    case "assets":
      return <ImgGRids />;
    case "filter":
      return <Filter />;
    case "settings":
      return <Settings />;
    case "free-hand":
      return <FreeHand />
    default:
      return <ImgGRids />;
  }
}
