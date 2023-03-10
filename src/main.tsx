import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.scss'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
