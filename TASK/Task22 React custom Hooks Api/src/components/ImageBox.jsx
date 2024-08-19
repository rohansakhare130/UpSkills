import React, {useId} from "react";

function ImageBox({
    title,
    url,
    className = "",

}) {
    const imageId = useId();
  return (
    <div className= {`w-80 h-80  border-solid border-2 border-slate-200 flex justify-center items-center flex-col ${className}`}>
     {url ? (
        <img
        src={url}
        alt={title || "image"}
        className="w-52 h-52"
        id={imageId}

      />
     ) : (<p className="text-white">No Image Available</p>)
     } 

      <p className="p-2 text-center text-white"  id={imageId} >
        {title || "No Title"}
      </p>
    </div>
  );
}

export default ImageBox;
