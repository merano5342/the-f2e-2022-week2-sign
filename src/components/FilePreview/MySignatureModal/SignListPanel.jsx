// import ExSignature from '../../../assets/images/ex-signature.png';
import TrashIconY from '../../../assets/images/trash-icon-y.svg';
import AddIcon from '../../../assets/images/add-icon.svg';
import { useMyContext } from '../../unit/useContext';

const SignListPanel = (props) => {
  const { onMakingSign } = props;
  const { saveSignData, setSaveSignData } = useMyContext();

  return (
    <div className="sign-list-panel">
      {saveSignData &&
        saveSignData.map((sign) => {
          return (
            <button className="signature-item" key={sign}>
              <img src={sign} alt="" className="h-[44px] px-[24px]" />
              <img
                src={TrashIconY}
                alt=""
                className="border-l border-gray2 py-[8px] px-[24px]"
                onClick={() => setSaveSignData((pre) => pre.filter((i) => i !== sign))}
              />
            </button>
          );
        })}
      <button className="signature-make" onClick={() => onMakingSign(true)}>
        製作簽名
        <img src={AddIcon} alt="" className="m-2" />
      </button>
    </div>
  );
};

export default SignListPanel;
