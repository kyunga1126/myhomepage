import React from 'react'
import SectionTitle from '../components/SectionTitle'
import PortfolioSwiper from '../components/PortfolioSwiper'

const Portfolio = () => {
  return (
    <div className="main portfolio">
      <div className='content-inner'>
        <SectionTitle title="Portfolio" subTitle="내가 할 수 있는 과목 스킬 입니다" />
        <div>
          <PortfolioSwiper />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
