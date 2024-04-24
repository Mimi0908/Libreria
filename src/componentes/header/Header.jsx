import React from 'react';
import './header.css';
import Logo from '/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HelpIcon from '@mui/icons-material/Help';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

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
                            <Link to='/'>
                                <li className="nav-item">
                                    <a className="nav-link"><HomeIcon className='icono' />Home</a>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <LibraryBooksIcon className='icono' />Categoria
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item">Literatura clásica</a></li>
                                    <li><a className="dropdown-item">Romance</a></li>
                                    <li><a className="dropdown-item">Thriller</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false"><PersonIcon className='icono' />Autores</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item">Alice Kellen</a></li>
                                    <li><a className="dropdown-item">Carl Sagan</a></li>
                                    <li><a className="dropdown-item">Gabriel García M.</a></li>
                                    <li><a className="dropdown-item">Mark Oliver Everett</a></li>
                                    <li><a className="dropdown-item">Won-pyung Sohn</a></li>
                                    <li><a className="dropdown-item">Natanael Méndez M.</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><HelpIcon className='icono' />Q&A</a>
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
                                        <a className="btn btn-outline-danger"><AssignmentIndIcon className='icono' />Sign Up</a>
                                    </li>
                                </Link>
                                <Link to='/Login'>
                                    <li className="nav-item">
                                        <a className="btn btn-danger boton"><LoginIcon className='icono' />Login</a>
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
