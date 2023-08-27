import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
function Home() {
  return (
    <div className='home-container'>
        <div className="card-left">
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active slider-container">
            <img src="https://img.gkbcdn.com/bn/2304/740x670-642e8c0f2b40c9510c51abe1._p1_.jpg" className="d-block w-100 img-banner" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.gkbcdn.com/bn/2308/740x670-64db54292b40c9431c08f881._p1_.jpg" className="d-block w-100 img-banner" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="https://img.gkbcdn.com/bn/2308/740x670-64d20c112b40c94d68ed10ae._p1_.jpg" className="d-block w-100 img-banner" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>

        <div className="card-right">
        <h4>Deals of the day</h4>
            <div className="top">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
            </div>
            <div className="bottom">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

export default Home