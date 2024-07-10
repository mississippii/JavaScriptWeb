

import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../Assets/Images/facebook.svg';
import twitter from '../../Assets/Images/twitter.png';
import linkedin from '../../Assets/Images/linkedin.svg';
import '../../CSS/fotter.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer_section_padding'>
            <div className='sb_footer_links'>
                <div className='sb_footer_links_div'>
                    <Link to={'/home'} >Employer</Link>
                    <Link to={'/home'} >Health Plan</Link>
                    <Link to={'/home'} >Individual</Link>
                </div>
                <div className='sb_footer_links_div'>
                    <Link to={'/home'} >Resources</Link>
                    <Link to={'/home'} >Testimonials</Link>
                    <Link to={'/home'} >Stv</Link>
                </div>
                <div className='sb_footer_links_div'>
                    <Link to={'/about'} >About</Link>
                    <Link to={'/contact'} > Contact</Link>
                    <Link to={'/career'} >Career</Link>
                </div>
                <div className='sb_footer_links_div'>
                    <h4>Comming soon on</h4>
                    <div className='social_media'>
                        <p><img src ={fb} alt=""/></p>
                        <p> <img src={twitter} alt=""/></p>
                        {/* <p> <img src={linkedin} alt=""/></p> */}
                    </div>
                </div>
            </div>
            <div className='sb_footer_below'>
                <div className='sb_footer_copyright'>
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>

                </div>
                <div className='sb_footer_below_links'>
                    <Link to={'/home'} >Privacy Policy</Link>
                    <Link to={'/home'} >Terms & Conditions</Link>
                    <Link to={'/home'} >Cookie Policy</Link>
                    <Link to={'/home'} >FAQs</Link>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer