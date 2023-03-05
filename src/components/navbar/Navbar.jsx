import React , {useState} from 'react';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'
// const Lost = () => {
//     <>
//     <p><a href="#home">Home</a></p>
//     <p><a href="#wgpt3">What is GPT3?</a></p>
//     <p><a href="#possibility">Open AI</a></p>
//     <p><a href="#features">Case Studies</a></p>
//     <p><a href="#blog">Library</a></p>
//     </>
// }
const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false);


  return (
    
    <div className='gpt3__navbar'>
      <div className='navbar-links'>
        <div className='links_logo'>
          <img className='logo' src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
         <p><a href="#home">Home</a></p>
         <p><a href="#wgpt3">What is GPT3?</a></p>
         <p><a href="#possibility">Open AI</a></p>
         <p><a href="#features">Case Studies</a></p>
         <p><a href="#blog">Library</a></p>
         {/* <Lost/> */}
        </div>
      </div>
      <div className='navbar-sign'><p>Sign in</p>
      <button className='button' type='button'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false) } />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true) } />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
             <p><a href="#home">Home</a></p>
             <p><a href="#wgpt3">What is GPT3?</a></p>
             <p><a href="#possibility">Open AI</a></p>
             <p><a href="#features">Case Studies</a></p>
             <p><a href="#blog">Library</a></p>
              <div className='navbar-sign-links'><p>Sign in</p>
                  <button className='button' type='button'>Sign up</button>
              </div>
             {/* <Lost/> */}
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar