import React from 'react'

const Footer = () => {
  return (
    <>
    
    <section className='footer'>
    <div className="footer-container">
            <div className="footer-column">
                <h3>CARE CONNECT</h3>
                <p>
                Justkare Technologies Pvt Ltd<br/>
                #14, 291 M, Suite 52 A, 1st Floor A Square,<br/>
                Edathala P.O Kuzhivelipady, Ernakulam,<br/>
                Kerala - 683561
                </p>
                <p>
                USA<br/>
                251, Little Falls Drive,<br/>
                Wilmington, New Castle County,<br/>
                Delaware, US - 19808
                </p>
                <p>📞 +91 8340835466<br/>📧 info@careconnectt.in</p>
            </div>
            <div className ="footer-column">
                <h4>Top Treatments</h4>
                <ul>
                    <li><a href="#">Laparoscopy</a></li>
                    <li><a href="#">Urology</a></li>
                    <li><a href="#">Cosmetic</a></li>
                    <li><a href="#">Orthopedics</a></li>
                    <li><a href="#">Ophthalmology</a></li>
                    <li><a href="#">Proctology</a></li>
                    <li><a href="#">Vascular</a></li>
                    <li><a href="#">ENT</a></li>
                    <li><a href="#">Gynaecology</a></li>
                    <li><a href="#">Fertility</a></li>
                </ul>
            </div>
        
            <div className ="footer-column">
                <h4>Quick Links</h4>
                    <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Language</a></li>
                    <li><a href="#">Book Your Consultation</a></li>
                    </ul>
            </div>
            <div class="footer-column newsletter">
                <h4>Sign Up to our Newsletter</h4>
                <p>Stay up to date with the latest news and articles.</p>
                <form class="email-form">
                <div class="email-container">
                    <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    class="email-input" 
                    required={true} />
                    <button type="submit" class="subscribe-button">Subscribe</button>
            </div>
            </form>
      </div>
  
    </div>
        <div className="footer-bottom">
        <p>©2024 Care Connect. All Rights Reserved.</p>
        <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Refund & Cancellation Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Disclaimer</a>
        </div>
        <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
        
        </div>
        </section>
    </>
  )
}

export default Footer