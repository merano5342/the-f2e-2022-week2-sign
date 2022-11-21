import ImageUploading from 'react-images-uploading';

import uploadDoc from '../assets/images/upload-doc.svg';
import { useMyContext } from './unit/useContext';

const FirstPage = () => {
  const maxNumber = 69;
  const { doc, setDoc } = useMyContext();
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setDoc(imageList);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center pt-[128px]"
      id="first-page"
    >
      <h4 className=" pb-4 text-center text-gray">急著簽名？快用閃簽！</h4>
      <ImageUploading
        multiple
        value={doc}
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
              onClick={onImageUpload}
              {...dragProps}
            >
              <img src={uploadDoc} alt="" className="p-3" />
              <h4>上傳文件</h4>
              <h5>*限 10mb 內的 PDF 檔或 JPG 檔</h5>
            </button>
            &nbsp;
            <button
              className="m-2 rounded border bg-red p-2 text-white"
              onClick={onImageRemoveAll}
            >
              Remove all images
            </button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button
                    className="m-2 rounded border bg-gray p-2 text-white"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="m-2 rounded border bg-red p-2 text-white"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <h4 className=" p-3 text-center text-gray">or</h4>

      <button className="btn-y w-[240px] p-2">登入</button>
      <h5 className="p-2">管理我的文件和簽名</h5>
    </div>
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

{
  /* <ImageUploading
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
</ImageUploading> */
}
