import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

// 重置css:直接从npm包引入
// import "normalize.css"
// 从assets引入:同时可以引入自己的相关重置样式
import "./assets/css/base.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
