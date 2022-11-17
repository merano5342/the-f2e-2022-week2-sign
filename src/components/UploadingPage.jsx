import LogoGif from '../assets/images/logo-3sign-anime.gif'

const UploadingPage = (props) => {
  // const [loadingItemText, process] = props

  return (
    <div className="container flex justify-center items-center">
      <div className="col-2">
        <img src={LogoGif} alt="LogoGif" className='w-[140px]' />
        <h4 className='p-2'>文件上傳中...13%</h4>
      </div>

    </div>
  );
};

export default UploadingPage;
