import React from 'react'
import '../../styles/hero.css'
import HeroDarkImg from '../../images/hero-img.png'
import lightImg from '../../images/light-hero-bg.jpg'

export default function Hero({theme}) {
  return (
    <section className='hero__section' id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                       <h2>We're Creating Perfect</h2>
                        <h2>Digital Products To</h2>
                        <h2 className="highlight">Promote Your Brand</h2> 
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex explicabo dolor, quas possimus eligendi placeat, iste eveniet recusandae alias culpa sed quia nobis. Saepe dicta corrupti amet impedit deleniti?</p>
                    <div className="hero__btns">
                        <button className='primary__btn'>Get Started Now</button>
                        <button className='secondary__btn'>Discover More</button>
                    </div>
                </div>
                <div className="hero__img">
                    <img src={theme==='light-theme' ? lightImg : HeroDarkImg} alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
}
