import React from 'react'
import '../../styles/newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's work</h6>
                    <h2>Explore the <span className="highlight">hidden</span> ideas and subscibe!</h2>
                </div>

                <div className="newsletter__form">
                    <input type="email" placeholder='Email'/>
                    <button className="secondary__btn suscribe__btn">Subscribe Now</button>
                </div>

            </div>
        </div>
    </section>
  )
}

