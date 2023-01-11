import React from 'react'
import './header.css'

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

export default function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo">
                    <h2>Digency</h2>
                </div>

                {/* ========= navigation =========*/}
                <div className="navigation">
                    <ul className="menu">
                        {
                            nav_links.map((item, index)=>(
                                <li className="menu__item"><a href={item.path} className="menu__link">{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
            
                {/* ========= ligth mode =========*/}
                <div className="light__mode">
                        <span><i class="ri-sun-line"></i> Ligth Mode 
                        </span>
                </div>
            </div>
        </div>
    </header>
  )
}

