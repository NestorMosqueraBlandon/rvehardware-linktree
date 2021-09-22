import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="night">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="item">
        <div className="logo">
          <img src="./img/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <i className="bx bxs-store"></i>{' '}
            <a href="https://tienda.rvehardware.com"> Tienda Online </a>{' '}
            <span></span>
          </li>
          <li>
            <i className="bx bxl-whatsapp"></i>{' '}
            <a href="https://wa.link/s7quaj"> WhatsApp </a> <span></span>
          </li>
          <li>
            <i className="bx bxl-youtube"></i>{' '}
            <a href="https://www.youtube.com/channel/UCZcpWjunShfftPxGX7gudBQ">
              {' '}
              Youtube{' '}
            </a>{' '}
            <span></span>
          </li>
        </ul>
      </div>
      <footer>
        <ul>
          <li>
            <a href="/">
              <i className="bx bxl-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bx bxl-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bx bxl-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="bx bxl-youtube"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.link/s7quaj">
              <i className="bx bxl-whatsapp"></i>
            </a>
          </li>
          <li>
            <a href="mailto:rvehardware@gmail.com">
              <i className="bx bx-mail-send"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
