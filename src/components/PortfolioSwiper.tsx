import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./scss/PortfolioSwiper.scss"

import 'swiper/css';
interface Portfolio{
  id: number;
  title: string;
  des: string;
  skill: string;
  webUrl: string;
  gitUrl: string;
}

const PortfolioList:Portfolio[] =[
  {
    id:0, title:"Focus Item", des:"사이트를 리뉴얼함", skill:"React+Typescript", webUrl:"http://naver.com", gitUrl:""
  },
    {
    id:1, title:"TRAIL DEX", des:"사이트를 리뉴얼함", skill:"React+Typescript", webUrl:"http://google.com", gitUrl:""
  },
    {
    id:2, title:"ONLY FOR", des:"사이트를 리뉴얼함", skill:"React+Typescript", webUrl:"http://kakao.com", gitUrl:""
  }
]
const PortfolioSwiper = () => {
  return (
    <div className='main portSwiper'>
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{delay:3000}}
      navigation
      // spaceBetween={30}
      slidesPerView={1}
      loop={true}
    >
      {PortfolioList.map((item)=>(
        <SwiperSlide>
          <p><img src={`/images/portfolio${item.id + 1}.jpg`} 
          alt={item.title} /></p>
          <div className="text-box">
            <h3>{item.title}</h3>
            <p>{item.des}</p>
            <div className="btn-wrap">
              <span>{item.skill}</span>
              <ul>
                <li><a href={item.gitUrl}>git</a></li>
                <li><a href={item.webUrl}>web</a></li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  )
}

export default PortfolioSwiper
