import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {Slider,SliderTrack,SliderFilledTrack,SliderThumb,SliderMark,} from '@chakra-ui/react'
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
                    <div className="box">
                        <img src="https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991584812._w280_p1_.jpg" alt="error" />
                        <p className='discount'>34% OFF</p>
                        <p className='price'>€40.06</p>
                        <div className="slider">
                        
                        </div>
                    </div>
                    <div className="box">
                        <img src="https://img.gkbcdn.com/p/2023-06-09/KG3-Plus-Mini-PC-Intel-Alder-16GB-RAM-512GB-ROM-EU-520830-0._w280_p1_.jpg" alt="" />
                        <p className='discount'>15% OFF</p>
                        <p className='price'>€169</p>
                    </div>
                    <div className="box">
                        <img src="https://img.gkbcdn.com/p/2023-08-11/anbernic-rg35xx-handheld-game-console-64gb-card-grey-3b42ad-1691755373693._w280_p1_.jpg" alt="" />
                        <p className='discount'>28% OFF</p>
                        <p className='price'>€45</p>
                    </div>
            </div>
            <div className="bottom">
                    <div className="box">
       
                    </div>
                    <div className="box"></div>
                    <div className="box"></div>
            </div>
        </div>
    </div>
  )
}

export default Home