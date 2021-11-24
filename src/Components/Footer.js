import React from 'react'
import './Footer.css'

 const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className="icon ion-social-instagram"></i></a>
                    <a href="#"><i className="icon ion-social-snapchat"></i></a>
                    <a href="#"><i className="icon ion-social-twitter"></i></a>
                    <a href="#"><i className="icon ion-social-facebook"></i></a>
                </div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Anasayfa</a></li>
                    <li className="list-inline-item"><a href="#">Servis</a></li>
                    <li className="list-inline-item"><a href="#">Hakkında</a></li>
                    <li className="list-inline-item"><a href="#">Şartlar</a></li>
                    <li className="list-inline-item"><a href="#">Gizlilik Politikası</a></li>
                </ul>
                <p className="copyright">Unishop Türkiye © 2021</p>
            </footer>
        </div>
    )
}
export default Footer;