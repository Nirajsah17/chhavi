import notification from "../svg/info.svg"
export default function Footer({}) {
  return (
    <>
      <div className="w-full flex flex-row bg-bg-default justify-between items-center">
        <div>Untitled</div>
        <div className=" text-sm"> © copyright - 2024 | Chhavi editor</div>
        <div>
          <img src={notification} title="Information" className="w-6 h-6 cursor-pointer"></img>
        </div>
      </div>
    </>
  );
}
