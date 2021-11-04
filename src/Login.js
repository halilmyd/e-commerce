import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div>
            <div class="containers" id="containers">
                <div class="form-containers sign-in-containers">
                    <div className="loginss">
                        <h1>Giriş Yap</h1>
                        <input type="email" placeholder="Kullanıcı adı" />
                        <input type="password" placeholder="Parola" />
                        <button>Giriş Yap</button>
                    </div>
                </div>
                <div class="overlay-containers">
                    <div class="overlay">
                        <div class="overlay-panel overlay-right">
                            <h2>MYD E-Store</h2> <br /><br />
                            <h1>Hoşgeldiniz..</h1>
                            <p>Kişisel bilgilerinizi girin ve bizimle keyifli bir alışveriş yolculuğuna başlayın!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;


