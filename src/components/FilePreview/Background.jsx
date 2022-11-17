

const Background = (props) => {
  const { onPanelOpen } = props

  return (
    <div className='background' onClick={() => onPanelOpen(false)} >

    </div>
  )

}

export default Background

