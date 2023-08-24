import React from 'react'
import '../../styles/blog.css'
import videoImg from '../../images/video.png'
import articleImg from '../../images/article2.png'
import caseStudy from '../../images/case-study.png'



export default function Blog() {

const blogData = [
    {
        imgUrl: videoImg,
        title: 'Video',
        desc: 'To know about work. Watch some video f....',
        linkUrl: '#'
    },
    {
        imgUrl: articleImg,
        title: 'Articles',
        desc: 'Do you want to improve the way your brand interacts whit customer? Lets talk....',
        linkUrl: '#'
    },
    {
        imgUrl: caseStudy,
        title: 'Case Study',
        desc: 'Boost your conversation rate',
        linkUrl: '#'
    },

]

  return (
    <section id='blog' className='blog'>
        <div className="container">
            <div className="blog_top-content">
                <h6 className="subtitle">Our Blog</h6>
                <h2>
                    let's have alook form our<span className="highlight"> recent blog</span>
                </h2>
            </div>

            <div className="blog__wrapper"> 
                {
                    blogData.map((item,index)=><div className="blog__item">
                    <h3>{item.title}</h3>
                    <div className="blog__img" key={index}>
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <p className="description blog__desc">
                        {item.desc}
                    </p>
                    <div>
                        <a href={item.linkUrl} className="learn__more">
                            <i class="ri-arrow-right-line"></i>
                        </a>
                    </div>
                </div>)
                }
            </div>
        </div>
    </section>
  )
}

