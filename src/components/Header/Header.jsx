import React , {useRef, useEffect} from 'react'
import './header.css'



export default function Header({theme,toggleTheme}) {

const nav_links =[
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about',
        display:'About'
    },

    {
        path:'#service',
        display:'Service'
    },

    {
        path:'#projects',
        display:'Projects'
    },

    {
        path:'#blog',
        display:'Blog'
    },
]


const headerRef = useRef(null)

const menuRef = useRef(null)

const headerFunc = () =>{
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__shrink')
    }else{
        headerRef.current.classList.remove('header__shrink')
    }
}

useEffect(()=>{
    window.addEventListener('scroll', headerFunc)

    return ()=> window.removeEventListener('scroll', headerFunc)
},[])

const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')

  return (
    <header className="header" ref={headerRef}>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>Digency</h2>
                </div>

                {/* ========= navigation =========*/}
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu">
                        {
                            nav_links.map((item, index)=>(
                                <li className="menu__item" key={index}><a href={item.path} onClick={(e) =>{
                                    e.preventDefault();
                                
                                    const targetAttr = e.target.getAttribute('href');
                                    console.log(e.target.getAttribute('href'),'test',targetAttr)
                                
                                    const location = document.querySelector(targetAttr).offsetTop
                                    window.scrollTo({
                                       //    [[* I FOUND A BETTER WAY *]
                                        left: 0,                     
                                        top: location - 80,
                                    });

                                    // const location = document.querySelector(targetAttr).scrollIntoView({block:'center',behavior:'smooth'})

                                }} className="menu__link">{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            
                {/* ========= ligth mode =========*/}
                <div className="light__mode">
                        <span onClick={toggleTheme}>
                        {
                            theme==='light-theme' ? (<span className='black'><i class="ri-moon-line"></i> Dark</span>) : (<span><i class="ri-sun-line"></i> Ligth</span>)
                        }
                        </span>
                </div>

                <span className="mobile__menu" onClick={toggleMenu}>
                    <i class="ri-menu-line"></i>
                </span>

            </div>
        </div>
    </header>
  )
}

