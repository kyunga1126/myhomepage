import React from 'react'
import SectionTitle from '../components/SectionTitle'
import SkillCard from '../components/SkillCard';
interface Skill {
  id: number;
  title: string;
  logo: string;
  desc: string;
  percent: number;
}

const frontSkills: Skill[] = [
  {id:0, title:"html", logo: "/images/html.png", desc:"hyper text markup language", percent: 90},
  {id:1, title:"html", logo: "/images/css.png", desc:"hyper text markup language", percent: 90},
  {id:2, title:"html", logo: "/images/javascript.png", desc:"hyper text markup language", percent: 90},
  {id:3, title:"html", logo: "/images/react.png", desc:"hyper text markup language", percent: 90},
  {id:4, title:"html", logo: "/images/typescript.png", desc:"hyper text markup language", percent: 90}
]

const Skill = () => {
  return (
    <div className="main skil">
      <div className='content-inner'>
        <SectionTitle title="Skil" subTitle="내가 할 수 있는 과목 스킬 입니다" />
        <div>
          <ul className="skill-list">
            {frontSkills.map((skill) => (
              <li key={skill.id}>
                <SkillCard
                  id={skill.id}
                  title={skill.title} 
                  logo={skill.logo}
                  desc={skill.desc}
                  percent={skill.percent} /></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skill
