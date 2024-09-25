import React from "react";
import axios from "axios";

const PhotoDetail = ({ photo, onClose }) => {

  const downloadImg = async (url, filename) => {
    try {

        const response = await axios.get(url, {
        responseType: 'blob', 
      });

      const blob = new Blob([response.data], { type: response.data.type });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob); 
      link.setAttribute('download', filename); 
      document.body.appendChild(link); 
      link.click(); 
      link.remove(); 
    } catch (error) {
      console.error('Error downloading the image:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-red-600 rounded-full p-2 w-10 text-white hover:text-gray-800"
        >
          X
        </button>

        <img
          src={photo.src.large}
          alt={photo.photographer}
          className="w-full h-80 object-cover rounded-lg mb-4"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">{photo.photographer}</h2>
          <p className="text-gray-600 mb-6">Photographer: {photo.photographer}</p>


          <a
            href={photo.src.original}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline"
          >
            View Original Photo
          </a>


          <button
            onClick={() => downloadImg(photo.src.large, `photo-${photo.id}.jpg`)}
            className="text-blue-500 no-underline ml-4"
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetail;
