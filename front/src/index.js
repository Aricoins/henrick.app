import React from 'react'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store={store}> <BrowserRouter><App tab="home" /></BrowserRouter></Provider>);
