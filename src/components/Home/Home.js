import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './home.css'

export default function Home() {
    return (
        <div className='home-container' id='home'>
            <Profile/>
            <Footer/>
        </div>
    )
}
