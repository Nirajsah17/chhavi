import { UseSelector, useSelector } from "react-redux";

export default function Footer({}) {
  const activeImage = useSelector((state) => state.appReducer.activeImage);
  return (
    <>
      <div className="w-full flex flex-row bg-bg-default justify-between items-center">
        <div className="p-1 text-sm w-64 truncate">{activeImage}</div>
        <div className=" text-sm"> © copyright - 2024 | Chhavi editor</div>
        <div>
        </div>
      </div>
    </>
  );
}
