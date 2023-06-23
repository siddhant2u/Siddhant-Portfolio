import React from 'react'
import './about.css'
import bg from './image-bg.png'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className="content-left">
                <div className="image">
                    <img className="imageBg" src={bg} alt="Italian Trulli"/>
                </div>
            </div>
            <div className="content-right">
                <h1 className="aboutMe">About Me</h1>
                <p className="para">Hello I am Siddhant Priyadarshi.<br></br>
                A final year student at SRM Institute of Science and Technology, pursuing B.Tech in Computer Science Engineering. 
                Passionate about technology and constantly seeking new opportunities to learn and grow. Specializing in Blockchain 
                and Web Development, with a keen interest in exploring the latest advancements in these fields. Open to collaborations 
                and excited to contribute to innovative projects. A dedicated individual with a love for photography and a penchant for 
                trying new things. Let's connect and embark on a journey of knowledge and creativity together.</p>
            </div>
        </div>
    )
}
