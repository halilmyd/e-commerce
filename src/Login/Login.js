import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    const loginId = () => {
        if (username === "mayda.hll" && password === "204469") {
            localStorage.setItem("isLogin", "true")
            window.location.href = "/"
        } else {
            alert("Kullanıcı Adı Veya Şifreyi Yanlış Yazdınız")
        }
    }
    const onKeyUp =(event)=> {
        if(event.charCode === 13){
            loginId()
        }
    }

    return (
        <div>
            <div className="Login">
                <div className="containers" id="containers">
                    <div className="form-containers sign-in-containers">
                        <div className="loginss">
                            <h1>Giriş Yap</h1>
                            <input type="email" placeholder="Kullanıcı adı" onChange={(e) => setUsername(e.target.value)} onKeyPress={onKeyUp}/>
                            <input type="password" placeholder="Parola" onChange={(e) => setPassword(e.target.value)} onKeyPress={onKeyUp}/>
                            <button onClick={() => loginId()} >Giriş Yap</button>
                        </div>
                    </div>
                    <div className="overlay-containers">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right">
                                <h2>Unishop Türkiye</h2> <br /><br />
                                <h1>Hoşgeldiniz..</h1>
                                <p>Kişisel bilgilerinizi girin ve bizimle keyifli bir alışveriş yolculuğuna başlayın!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Servis</h3>
                        <ul>
                            <li><a href="#">Web Tasarımı</a></li>
                            <li><a href="#">Gelişim</a></li>
                            <li><a href="#">Barındırma</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Hakkında</h3>
                        <ul>
                            <li><a href="#">Unishop Türkiye</a></li>
                            <li><a href="#">Takım</a></li>
                            <li><a href="#">Kariyer</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Unishop Türkiye</h3>
                        <p>Bir bitirme projesi olarak kabul edilip. Eğitim süresi boyunca öğrenilen bilgilerin bir araya getirilmesiyle ortaya çıkarılan en iyi sonuçtur.</p>
                    </div>
                </div>
                <p className="copyright">MYD E-Store © 2021</p>
            </div>
        </footer>
    </div>       
        </div>
    )
}
export default Login;


