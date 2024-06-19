export default function Filter({ }) {
  return (
    <>
      <div className="flex flex-col">
        <span>Saturations</span> <span> <input type="range" max={100} min={1} value={20}></input></span>
      </div>
    </>
  );
}
