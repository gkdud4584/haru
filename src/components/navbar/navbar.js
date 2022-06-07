import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Button} from '../button/Button.js';
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click) ;
    const closeMobileMenu = () => setClick(false);

    // 화면 크기에 따라서 버튼이 보이고 안보이도록 설정한다. 
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // SIGNUP버튼이 사이즈가 줄어들면 없어지도록 한다. 
    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navbar'>
            <div className = 'navbar-container'>
                {/* 모바일버전에서 클릭하면 메뉴 보이도록 설정하는 것도 한다. (close Mobile Menu)는 다시 버튼 누르면 없어지고 생기고 하도록 한다.  */}
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    DVDA
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick = {closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/mypage' className='nav-links' onClick = {closeMobileMenu}>
                            MyPages
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/market' className='nav-links' onClick = {closeMobileMenu}>
                            Market
                        </Link>
                    </li>
                    <li className='nav-item nav-space'>
                        <Link to='/signup' className='nav-links' onClick = {closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item nav-space'>
                        <Link to='/login' className='nav-links' onClick = {closeMobileMenu}>
                            Login
                        </Link>
                    </li>
                    
                    
                </ul>
            </div>
        </nav>
        </>
    );
}

export default Navbar