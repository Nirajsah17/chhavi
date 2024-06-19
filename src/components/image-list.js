export default function ImgGRids({ files, openFile }) {
  return (
    <>
      {files?.map((file) => {
        const url = URL.createObjectURL(file);
        return (
          <img
            className="p-1 w-14 h-14 rounded-sm cursor-pointer hover:border hover:border-accent-emphasis"
            src={url}
            key={file.name}
            alt={file.name}
            onClick={(e)=>{openFile(e);}}
          ></img>
        );
      })}
    </>
  );
}
