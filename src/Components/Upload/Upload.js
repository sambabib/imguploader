import { useRef, useState, useEffect } from "react";
import Loader from '../Loader/Loader';
import "./index.scss";
import file from "./fileupload.svg";

const Upload = () => {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleFileInput = useRef();

  const handleClick = (e) => {
    console.log(e, "click");
    handleFileInput.current.click();
  };

  const handleChange = (e) => {
    const uploadedFile = e.target.files[0];
    setImg(uploadedFile);
    console.log(img, 'file is uploaded')

    setLoading(!loading);
  };

  useEffect(() => {
    { 
      img 
      ? 
      console.log('working')
      :
      console.log('not working')
    }
  }, [img])


  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      {
        !loading 
        ?  
        <>
          <div className='main lg:container lg:mx-auto rounded-lg shadow-md bg-white'>
            <div className='upload flex flex-col items-center py-10'>
              <div className='upload-text'>
                <p className='text-2xl font-semibold' id='txt'>
                  Upload your image
                </p>
                <p className='py-4' id='file_type'>
                  File should be jpeg or png
                </p>
              </div>
              <div
                className='uploader rounded-xl mt-10'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDragEnter={handleDragEnter}
              >
                <div className='img-uploader flex flex-col items-center py-9'>
                  <img src={file} alt='image uploader' />
                  <p id='drag-drop'>Drag & Drop your image here</p>
                </div>
              </div>
              <div className='manual-select flex flex-col items-center mt-4'>
                <p>Or</p>
                <button onClick={handleClick}>Choose a file</button>
                <input
                  type='file'
                  id='file'
                  ref={handleFileInput}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </>
        :
        <Loader />
      }
    </div>
  );
};

export default Upload;
