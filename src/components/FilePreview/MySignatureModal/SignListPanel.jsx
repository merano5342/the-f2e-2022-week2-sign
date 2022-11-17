import ExSignature from '../../../assets/images/ex-signature.png'
import TrashIconY from '../../../assets/images/trash-icon-y.svg'
import AddIcon from '../../../assets/images/add-icon.svg'


const SignListPanel = (props) => {
  const { onMakingSign } = props

  return (
    <div className="sign-list-panel">
      <button className="signature-item">
        <img src={ExSignature} alt="" className='px-[24px]' />
        <img src={TrashIconY} alt="" className='border-l border-gray2 py-[8px] px-[24px]' />
      </button>
      <button className="signature-make" onClick={() => onMakingSign(true)}>
        製作簽名
        <img src={AddIcon} alt="" className='m-2' />
      </button>
    </div>
  )
}

export default SignListPanel