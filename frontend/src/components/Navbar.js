import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import Alert from './Alert';
import PropTypes from 'prop-types';
import image from '../assets/images/logoLaranja.png'




const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <a className='navbar__top__auth__link' onClick={logout} href='#!'>Logout</a>
    );
        
    

    const guestLinks = (
        <Fragment>
            
            <Link className='navbar__top__auth__link' to='/login' >Login</Link>
            <Link className='navbar__top__auth__link' to='/signup'>Registrar</Link>
        </Fragment>
        
    );
    
    
    
    return (
        <Fragment>
            
            <nav className='navbar'>
            
                <div className='navbar__top'>
                    <div className='navbar__top__logo'>
                        <Link className='navbar__top__logo__link' to='/'><img src={image}></img></Link>
                    </div>
                    <div className='navbar__top__auth'>
                        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
                    </div>
                </div>
                <div className='navbar__bottom'>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/'>Principal</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/listings'>Galeria</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/about'>Sobre</NavLink>
                    </li>
                    <li className='navbar__bottom__item'>
                        <NavLink className='navbar__bottom__item__link' exact to='/contact'>Contato</NavLink>
                    </li>
                </div>
            </nav>
        
            <Alert />
        </Fragment>
        
    );
    
    
};


navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(navbar);