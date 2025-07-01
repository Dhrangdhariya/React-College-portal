import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing tomorrow's leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, maiores accusamus dolor delectus quidem nostrum facere omnis esse magni nemo quam ex numquam saepe in vero autem reprehenderit iusto a.</p>
        <p>Assumenda similique nam laborum autem, sequi dolorum aut magni consequuntur pariatur. Quisquam totam laborum voluptatum architecto molestias placeat. Molestias veniam sunt ratione voluptas omnis eligendi doloremque nulla id vero ab?</p>
        <p>Necessitatibus iusto labore animi quasi laboriosam dolorem repellendus sint quod mollitia aperiam esse molestias, numquam vero earum deleniti facilis omnis! Totam cum in rerum. Labore rerum maiores placeat exercitationem quidem.</p>
      </div>
    </div>
  )
}

export default About
