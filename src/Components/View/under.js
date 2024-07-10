import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../Assets/Images/fb.png';
import twitter from '../../Assets/Images/twitter.png'
function under() {
  return (
    <div className='footer'>
        <div className='sb_footer_padding'>
            <div className='sb_footer_link'>
                <div className='sb_footer_links_div'>
                    <Link to={'/home'} >Employer</Link>
                    <Link to={'/home'} >Health Plan</Link>
                    <Link to={'/home'} >Individual</Link>
                </div>
                <div className='sb_fotter_links_div'>
                    <Link to={'/home'} >Resources</Link>
                    <Link to={'/home'} >Testimonials</Link>
                    <Link to={'/home'} >Stv</Link>
                </div>
                <div className='sb_footer_links_div'>
                    <Link to={'/home'} >About</Link>
                    <Link to={'/home'} > Contact</Link>
                    <Link to={'/home'} >Career</Link>
                </div>
                <div className='sb_footer_links_div'>
                    <h4>Comming soon on</h4>
                    <div className='social_media'>
                        <p><image src ={fb}/></p>
                        <p> <img src={twitter}/></p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default under