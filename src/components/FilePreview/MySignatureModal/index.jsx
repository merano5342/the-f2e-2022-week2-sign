import { useState } from 'react'
import Background from '../Background'

import SignDrawPanel from './SignDrawPanel'
import SignListPanel from './SignListPanel'

const MySignatureModal = (props) => {
  const { onPanelOpen } = props
  const [makingSign, setMakingSign] = useState(false)

  return (
    <>
      <div className="mx-auto">

        <div className="z-20 m-4" id='my-signature-modal'>
          <h3 className='text-center mb-2'>我的簽名</h3>

          {!makingSign && <SignListPanel onMakingSign={setMakingSign} />}
          {makingSign && <SignDrawPanel onMakingSign={setMakingSign} />}

        </div>
        <Background onPanelOpen={onPanelOpen} />
      </div>

    </>

  )
}

export default MySignatureModal
