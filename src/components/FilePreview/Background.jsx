const Background = (props) => {
  const { onPanelOpen } = props;

  return <div className="background" onClick={() => onPanelOpen(false)} />;
};

export default Background;
