import { UseSelector, useSelector } from "react-redux";

export default function Footer({}) {
  const activeImage = useSelector((state) => state.appReducer.activeImage);
  return (
    <>
      <div className="w-full flex flex-row bg-bg-default justify-between items-center">
        <span className="w-64 text-fg-default text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-bg-default truncate">
          {activeImage}
        </span>
        {/* <div className="p-1 text-sm w-64 truncate">{activeImage}</div> */}
        <div className="text-fg-default text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-bg-default"> © copyright - 2024</div>
        <div></div>
      </div>
    </>
  );
}
