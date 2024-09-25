import React, { useState } from "react";
import Load from './Load';
import PhotoDetail from "./PhotoDetail";







const Images = ({ photos, Loader }) => {
  const [selectPhoto, setSelectPhoto] = useState(null);

  const HandlePhoto = (photo)=>{
    setSelectPhoto(photo)
  }
  
  const closePhotoDetail = () => {
    setSelectPhoto(null);
  };






  return (
    <div className="container w-full mx-auto my-8">
      {Loader ? (
        <Load />
      ) : (
        <>
          <div className="container justify-center items-center w-full grid gap-1 grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))]">
            {photos.map((photo) => (
              <div key={photo.id} className="items flex justify-center transition-transform ease-in-out"onClick={()=>HandlePhoto(photo)}>
                <img
                  className="max-w-full hover:transform scale-90 duration-200 ease-in border hover:border-blue-500 cursor-pointer rounded-lg"
                  src={photo.src.medium}
                  alt={photo.photographer}
                />
              </div>
            ))}
          </div>
          {selectPhoto && (
            <PhotoDetail photo={selectPhoto} onClose={closePhotoDetail} />)}
        </>
      )}
    </div>
  );
};

export default Images;

