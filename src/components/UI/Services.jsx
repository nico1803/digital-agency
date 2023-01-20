import React from 'react'
import '../../styles/services.css'

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, ipsum voluptatem. Doloribus, veritatis. Asperiores aperiam unde praesentium quas explicabo, eos mollitia vero aut amet tenetur sit quis minima totam maiores.'
        
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, ipsum voluptatem. Doloribus, veritatis. Asperiores aperiam unde praesentium quas explicabo, eos mollitia vero aut amet tenetur sit quis minima totam maiores.'
        
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, ipsum voluptatem. Doloribus, veritatis. Asperiores aperiam unde praesentium quas explicabo, eos mollitia vero aut amet tenetur sit quis minima totam maiores.'
        
    },
    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, ipsum voluptatem. Doloribus, veritatis. Asperiores aperiam unde praesentium quas explicabo, eos mollitia vero aut amet tenetur sit quis minima totam maiores.'
        
    },
]

export default function Services() {
  return (
    <section className="service">
        <div className="container">
            <div className="service__top-content">
                <h6 className='subtitle'>Our Services</h6>
                <h2>Save time managing youR business whit</h2>
                <h2 className="highlight"> our best service</h2>
            </div>

            <div className="service__item-weapper">
                    {
                        serviceData.map((item,index)=>(
                            <div className="services__item" key={index}>
                                <span className="service__icon"><i class={item.icon}></i></span>
                                <h3 className="service__title">{item.title}</h3>
                                <p className="description">{item.desc}</p>
                            </div>
                        ))
                    }
            </div>
        </div>
    </section>
  )
}

