import elements from "../data/elements.json"

export default function Elements() {

  return (
    <>
    {elements.elements.map((element) =>{
      return (
        <div key={element.id}>
          {element}
        </div>
      )
    })}
    </>
  );
}
