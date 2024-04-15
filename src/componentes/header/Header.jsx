import React from 'react';
import './header.css';
import Logo from '/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HelpIcon from '@mui/icons-material/Help';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='contenedor'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={Logo} className='logo' alt='logo' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><HomeIcon className='icono' />Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <LibraryBooksIcon className='icono' />Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Literatura clásica</a></li>
                                    <li><a className="dropdown-item" href="#">Romance</a></li>
                                    <li><a className="dropdown-item" href="#">Thriller</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><PersonIcon className='icono' />Autores</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Alice Kellen</a></li>
                                    <li><a className="dropdown-item" href="#">Carl Sagan</a></li>
                                    <li><a className="dropdown-item" href="#">Gabriel García M.</a></li>
                                    <li><a className="dropdown-item" href="#">Mark Oliver Everett</a></li>
                                    <li><a className="dropdown-item" href="#">Won-pyung Sohn</a></li>
                                    <li><a className="dropdown-item" href="#">Natanael Méndez M.</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><HelpIcon className='icono' />Q&A</a>
                            </li>
                            
                        </ul>
                        <span>  </span>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav nav2 me-auto mb-2 mb-lg-0 ">
                                <Link to='/Sign-Up'>
                                    <li className="nav-item">
                                        <a className="btn btn-outline-danger" href="#"><AssignmentIndIcon className='icono' />Sign Up</a>
                                    </li>
                                </Link>
                                <Link to='/Login'>
                                    <li className="nav-item">
                                        <a className="btn btn-danger boton" href="#"><LoginIcon className='icono' />Login</a>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
