import React from 'react'

const Banner = ({title}) => {
  return (
    <div>
          <section class="page-banner-area rel z-1 text-white text-center"
            style={{backgroundImage: "url(/assets/images/banner.jpg)"}}>
            <div class="container"> 
                <div class="banner-inner rpt-10">
                    <h2 class="page-title wow fadeInUp delay-0-2s">{title}</h2>
                </div>
            </div>
            <img class="circle-one" src="/assets/images/shapes/circle-one.png" alt="Circle"/>
            <img class="circle-two" src="/assets/images/shapes/circle-two.png" alt="Circle"/>
        </section>
    </div>
  )
}

export default Banner