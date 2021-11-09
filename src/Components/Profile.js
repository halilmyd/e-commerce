import React from 'react'


const cıkısYap = () => {
    localStorage.setItem("isLogin", "false")
    window.location.href = "/login"
}

const Profile = () => {
    return (
        <div className="Profile container">
            <div class="container rounded bg-white mt-5 mb-5">
                <div>
                    <div class="row">
                        <div class="col-md-3 border-right">
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://imgyukle.com/f/2021/11/08/kcAJu1.jpg" /><span class="font-weight-bold">Halil İbrahim Mayda</span><span class="text-black-50">ibomyd@hotmail.com</span><span> </span></div>
                        </div>
                        <div class="col-md-5 border-right">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h2>Profil</h2>
                                </div>
                                <br /><br />
                                <h6><big>Ad:</big><div className="ui icon input"><input value="Halil İbrahim" /></div></h6>
                                <h6><big>Soyad:</big><div className="ui icon input"><input value="MAYDA" /></div></h6>
                                <h6><big>Cinsiyet:</big><div className="ui icon input"><input value="Erkek" /></div></h6>
                                <h6><big>Telefon:</big><div className="ui icon input"><input value="0546 295 0252" /></div></h6>
                                <h6><big>Adres:</big><div className="ui icon input"><input value="Bülbülzade Mah. 137037 Nolu Sok. Şençoban Apt. Giriş Kat Daire 2" /></div> </h6>
                                <h6><big>Doğum Tarihi:</big><div className="ui icon input"><input value="21.03.2000" /></div></h6> <br/>
                                <button class="ui secondary button save">Kaydet</button>


                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="p-3 py-5">
                                <div class="d-flex justify-content-between align-items-center experience"><div className="ui animated button" tabindex="0" onClick={() => cıkısYap()}>
                                    <div className="visible content" >Çıkıs Yap</div>
                                    <div className="hidden content">
                                        <i className="right arrow icon" ></i>
                                    </div>
                                </div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
