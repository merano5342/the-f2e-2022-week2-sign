// import ReactDOM from 'react-dom/client';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.scss';

import CanvasDraw from "react-canvas-draw";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <CanvasDraw /> */}
  </React.StrictMode>,
  document.getElementById('root')
);