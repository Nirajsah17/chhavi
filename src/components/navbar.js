import AppIcon from "../svg/chhavi.svg";
export default function NavBar({}) {
  return (
    <>
      <div className="flex flex-row">
        <div className="logo p-2">
          <img src={AppIcon} width={200} height={150}></img>
        </div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
