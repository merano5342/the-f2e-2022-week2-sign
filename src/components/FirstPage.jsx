import React from 'react';
import ImageUploading from 'react-images-uploading';

import uploadDoc from '../assets/images/upload-doc.svg'



const FirstPage = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-[128px] relative" id='first-page'>
      <h4 className=' text-gray text-center pb-4'>急著簽名？快用閃簽！</h4>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <button
              className="upload-box flex flex-col items-center justify-center"
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              <img src={uploadDoc} alt="" className='p-3' />
              <h4>上傳文件</h4>
              <h5>*限 10mb 內的 PDF 檔或 JPG 檔</h5>
            </button>
            &nbsp;
            <button className='border bg-red text-white p-2 m-2 rounded' onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button className='border bg-gray text-white p-2 m-2 rounded' onClick={() => onImageUpdate(index)}>Update</button>
                  <button className='border bg-red text-white p-2 m-2 rounded' onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <h4 className=' text-gray text-center p-3'>or</h4>


      <button className="btn-y p-2 w-[240px]">
        登入
      </button>
      <h5 className="p-2">管理我的文件和簽名</h5>
    </div >
  );
};

export default FirstPage;



//  <button
//             className="upload-box flex flex-col items-center justify-center"
//             style={isDragging ? { color: 'red' } : undefined}
//             onClick={onImageUpload}
//             {...dragProps}>
//             <img src={uploadDoc} alt="" className='p-3' />
//             <h4>上傳文件</h4>
//             <h5>*限 10mb 內的 PDF 檔或 JPG 檔</h5>
//           </button>


{/* <ImageUploading
  multiple
  value={images}
  onChange={onChange}
  maxNumber={maxNumber}
  dataURLKey="data_url"
>
  {({
    imageList,
    onImageUpload,
    onImageRemoveAll,
    onImageUpdate,
    onImageRemove,
    isDragging,
    dragProps,
  }) => (
    <div className="upload__image-wrapper">
       <button
            className="upload-box flex flex-col items-center justify-center"
            style={isDragging ? { color: 'red' } : undefined}
            onClick={onImageUpload}
            {...dragProps}>
            <img src={uploadDoc} alt="" className='p-3' />
            <h4>上傳文件</h4>
            <h5>*限 10mb 內的 PDF 檔或 JPG 檔</h5>
          </button>
      &nbsp;
      <button onClick={onImageRemoveAll}>Remove all images</button>
      {imageList.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image['data_url']} alt="" width="100" />
          <div className="image-item__btn-wrapper">
            <button onClick={() => onImageUpdate(index)}>Update</button>
            <button onClick={() => onImageRemove(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  )}
</ImageUploading> */}