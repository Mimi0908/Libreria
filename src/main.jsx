import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header'
import CardList from './componentes/body/CardList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CardList />
  </React.StrictMode>,
)
