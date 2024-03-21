import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/header/Header'
import CardList from './componentes/body/CardList'
import Footer from './componentes/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CardList />
    <Footer />
  </React.StrictMode>,
)
