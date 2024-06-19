export default function FreeHand({}){

  const handlePenColor = (e)=>{
    
  }

  return (
    <>
    <div className="flex flex-col p-2">
      <div className="flex flex-col">
        <div>Pen color</div>
        <input type="color" onChange={handlePenColor}></input>
      </div>
      <div></div>
    </div>
    
    </>
  )
}