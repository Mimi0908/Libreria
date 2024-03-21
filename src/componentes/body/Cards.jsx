import React from 'react'
import './card.css'
import TodayIcon from '@mui/icons-material/Today';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Cards(props) {
    return (
            <div className='card2'>
                <img src={props.items.image} alt='logo' className='image'/>
                <div className='informacion'>
                    <div className='titulo'><h5>{props.items.title}</h5></div>
                    <div className='cuerpo'>
                        <p className='autor'>{props.items.autor}</p>
                        <span className='fecha'>Fecha de Lanzamiento: <br></br><TodayIcon></TodayIcon>{props.items.fechaLanzamiento}</span>
                    </div>
                    <div className='botones'>
                        <button type="button" class="btn btn-outline-danger"><AddCircleOutlineIcon/></button>
                        <button type="button" class="btn btn-danger C">COMPRAR AHORA</button>
                    </div>
                </div>
            </div>
    )
}
