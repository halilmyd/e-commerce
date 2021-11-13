import React from 'react'
import '../Components/Profile.css';
import Categories from './Categories';
import Footer from './Footer';


const cıkısYap = () => {
    localStorage.setItem("isLogin", "false")
    window.location.href = "/login"
}

const Profile = () => {
    return (
        <div className="Profile">
            <Categories />
            <div className="container">

                <div className="profile-name">
                    <img className="rounded-circle mt-5" src="https://imgyukle.com/f/2021/11/08/kcAJu1.jpg" />
                    <h5 className="font-weight-bold">Halil İbrahim Mayda </h5>
                    <h2>Profil Bilgilerim</h2>
                </div>
                <div className="right-profile">
                    <div className="profile-menu">
                        <ul>
                            <li><svg className="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M16 4C13.5726 4.00002 11.2022 4.73622 9.20189 6.11139C7.20156 7.48656 5.66531 9.43604 4.79597 11.7025C3.92662 13.9689 3.76506 16.4457 4.33261 18.8058C4.90015 21.166 6.17013 23.2985 7.97486 24.9219V24.9217C8.72778 23.4405 9.87609 22.1966 11.2926 21.3279C12.709 20.4592 14.3384 19.9996 16 20C15.0111 20 14.0444 19.7068 13.2222 19.1573C12.3999 18.6079 11.759 17.827 11.3806 16.9134C11.0022 15.9998 10.9031 14.9945 11.0961 14.0245C11.289 13.0546 11.7652 12.1637 12.4645 11.4645C13.1637 10.7652 14.0546 10.289 15.0246 10.0961C15.9945 9.90315 16.9998 10.0022 17.9134 10.3806C18.8271 10.759 19.6079 11.3999 20.1574 12.2221C20.7068 13.0444 21 14.0111 21 15C21 16.3261 20.4732 17.5978 19.5355 18.5355C18.5979 19.4732 17.3261 20 16 20C17.6616 19.9996 19.291 20.4592 20.7074 21.3279C22.1239 22.1966 23.2722 23.4405 24.0251 24.9217C25.8299 23.2984 27.0998 21.1658 27.6674 18.8057C28.2349 16.4456 28.0734 13.9688 27.204 11.7024C26.3347 9.43597 24.7984 7.4865 22.7981 6.11134C20.7978 4.73618 18.4274 4.00001 16 4Z" fill="black"></path><path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10"></path><path d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z" stroke="black" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.9751 24.9218C8.72836 23.4408 9.87675 22.1971 11.2931 21.3284C12.7095 20.4598 14.3387 20 16.0002 20C17.6617 20 19.2909 20.4598 20.7073 21.3284C22.1237 22.1971 23.272 23.4407 24.0253 24.9217" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Unishop Hesabım</a></li>
                            <li><svg className="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M15.9858 28.8512C15.8134 28.8513 15.6439 28.8067 15.4938 28.7218L4.99378 22.787C4.83962 22.6999 4.71135 22.5734 4.62211 22.4204C4.53287 22.2675 4.48584 22.0936 4.48584 21.9165V10.0834C4.48581 9.90531 4.53336 9.73045 4.62359 9.5769L4.62367 9.57695L16.1186 15.9999L15.9858 28.8512L15.9858 28.8512Z" fill="black"></path><path d="M16.1186 16L15.9858 28.8513" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.4858 21.9165V10.0835C27.4858 9.90638 27.4388 9.73246 27.3496 9.57951C27.2603 9.42655 27.1321 9.30004 26.9779 9.2129L16.4779 3.27812C16.3278 3.19327 16.1583 3.14868 15.9858 3.14868C15.8134 3.14868 15.6439 3.19327 15.4938 3.27812L4.99378 9.2129C4.83962 9.30004 4.71135 9.42655 4.62211 9.57951C4.53287 9.73246 4.48584 9.90638 4.48584 10.0835V21.9165C4.48584 22.0936 4.53287 22.2675 4.62211 22.4205C4.71135 22.5734 4.83962 22.7 4.99378 22.7871L15.4938 28.7219C15.6439 28.8067 15.8134 28.8513 15.9858 28.8513C16.1583 28.8513 16.3278 28.8067 16.4779 28.7219L26.9779 22.7871C27.1321 22.7 27.2603 22.5734 27.3496 22.4205C27.4388 22.2675 27.4858 22.0936 27.4858 21.9165V21.9165Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.3488 9.57828L16.1184 15.9999L4.62354 9.5769" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.1276 18.564V12.564L10.5303 6.08374" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Siparişlerim</a></li>
                            <li><svg href="#" class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M16 3C13.3478 3.00001 10.8043 4.05358 8.92894 5.92894C7.05358 7.8043 6.00001 10.3478 6 13C6 22 16 29 16 29C16 29 26 22 26 13C26 10.3478 24.9464 7.8043 23.0711 5.92894C21.1957 4.05358 18.6522 3.00001 16 3ZM16 17C15.2089 17 14.4355 16.7654 13.7777 16.3259C13.1199 15.8864 12.6072 15.2616 12.3045 14.5307C12.0017 13.7998 11.9225 12.9956 12.0769 12.2196C12.2312 11.4437 12.6122 10.731 13.1716 10.1716C13.731 9.61216 14.4437 9.2312 15.2196 9.07686C15.9956 8.92252 16.7998 9.00173 17.5307 9.30448C18.2616 9.60723 18.8864 10.1199 19.3259 10.7777C19.7654 11.4355 20 12.2089 20 13C20 14.0609 19.5786 15.0783 18.8284 15.8284C18.0783 16.5786 17.0609 17 16 17Z" fill="black"></path><path d="M16 17C18.2091 17 20 15.2091 20 13C20 10.7909 18.2091 9 16 9C13.7909 9 12 10.7909 12 13C12 15.2091 13.7909 17 16 17Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 13C26 22 16 29 16 29C16 29 6 22 6 13C6 10.3478 7.05357 7.8043 8.92893 5.92893C10.8043 4.05357 13.3478 3 16 3C18.6522 3 21.1957 4.05357 23.0711 5.92893C24.9464 7.8043 26 10.3478 26 13V13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Adreslerim</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M2.99902 12.1066H28.999L28.9998 24C28.9998 24.2652 28.8944 24.5196 28.7069 24.7071C28.5193 24.8947 28.265 25 27.9998 25H3.99976C3.73454 25 3.48019 24.8947 3.29265 24.7071C3.10511 24.5196 2.99976 24.2652 2.99976 24L2.99902 12.1066Z" fill="black"></path><path d="M28 7H4C3.44772 7 3 7.44772 3 8V24C3 24.5523 3.44772 25 4 25H28C28.5523 25 29 24.5523 29 24V8C29 7.44772 28.5523 7 28 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.999 21H24.999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.999 21H16.999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.99902 12.1066H28.999" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Kayıtlı Kartlarım</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M16.7071 26.4853L26.8361 16.3563C29.3249 13.8675 29.6921 9.77302 27.3369 7.15748C26.7469 6.50044 26.0293 5.97048 25.2278 5.59995C24.4262 5.22942 23.5576 5.02609 22.6749 5.00235C21.7922 4.97861 20.9139 5.13497 20.0936 5.46189C19.2733 5.78881 18.5282 6.27943 17.9038 6.90381L16 8.80761L14.3563 7.16387C11.8675 4.67507 7.77302 4.30788 5.15748 6.66313C4.50044 7.25309 3.97048 7.97072 3.59995 8.77225C3.22942 9.57379 3.02609 10.4424 3.00235 11.3251C2.97861 12.2078 3.13497 13.0861 3.46189 13.9064C3.78881 14.7267 4.27943 15.4718 4.90381 16.0962L15.2929 26.4853C15.4804 26.6728 15.7348 26.7782 16 26.7782C16.2652 26.7782 16.5196 26.6728 16.7071 26.4853Z" fill="black"></path><path d="M16.7071 26.4853L26.8361 16.3563C29.3249 13.8675 29.6921 9.77302 27.3369 7.15748C26.7469 6.50044 26.0293 5.97048 25.2278 5.59995C24.4262 5.22942 23.5576 5.02609 22.6749 5.00235C21.7922 4.97861 20.9139 5.13497 20.0936 5.46189C19.2733 5.78881 18.5282 6.27943 17.9038 6.90381L16 8.80761L14.3563 7.16387C11.8675 4.67507 7.77302 4.30788 5.15748 6.66313C4.50044 7.25309 3.97048 7.97072 3.59995 8.77225C3.22942 9.57379 3.02609 10.4424 3.00235 11.3251C2.97861 12.2078 3.13497 13.0861 3.46189 13.9064C3.78881 14.7267 4.27943 15.4718 4.90381 16.0962L15.2929 26.4853C15.4804 26.6728 15.7348 26.7782 16 26.7782C16.2652 26.7782 16.5196 26.6728 16.7071 26.4853V26.4853Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="/favoriler">Favorilerim</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 10H5C4.44771 10 4 10.4477 4 11V15C4 15.5523 4.44771 16 5 16H27C27.5523 16 28 15.5523 28 15V11C28 10.4477 27.5523 10 27 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 16V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H7C6.73478 26 6.48043 25.8946 6.29289 25.7071C6.10536 25.5196 6 25.2652 6 25V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 10V26" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.6569 8.58581C20.2426 10 16 10 16 10C16 10 16 5.75738 17.4142 4.34317C17.9769 3.78109 18.7398 3.46547 19.5352 3.4657C20.3305 3.46592 21.0932 3.78198 21.6556 4.34438C22.218 4.90678 22.5341 5.66949 22.5343 6.46484C22.5346 7.2602 22.2189 8.02309 21.6569 8.58581V8.58581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3433 8.58581C11.7575 10 16.0001 10 16.0001 10C16.0001 10 16.0001 5.75738 14.5859 4.34317C14.0232 3.78109 13.2603 3.46547 12.465 3.4657C11.6696 3.46592 10.9069 3.78198 10.3445 4.34438C9.7821 4.90678 9.46605 5.66949 9.46582 6.46484C9.46559 7.2602 9.78121 8.02309 10.3433 8.58581V8.58581Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path opacity="0.2" d="M26 16V25C26 25.2652 25.8946 25.5196 25.7071 25.7071C25.5196 25.8946 25.2652 26 25 26H7C6.73478 26 6.48043 25.8946 6.29289 25.7071C6.10536 25.5196 6 25.2652 6 25V16H26Z" fill="black"></path></svg><a href="#">Arkadaşını davet et</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M16.0005 28C22.6279 28 28.0005 22.6274 28.0005 16C28.0005 9.37258 22.6279 4 16.0005 4C9.37307 4 4.00049 9.37258 4.00049 16C4.00049 22.6274 9.37307 28 16.0005 28Z" fill="black"></path><path d="M16.0005 28C22.6279 28 28.0005 22.6274 28.0005 16C28.0005 9.37258 22.6279 4 16.0005 4C9.37307 4 4.00049 9.37258 4.00049 16C4.00049 22.6274 9.37307 28 16.0005 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0005 19V18C16.7916 18 17.565 17.7654 18.2228 17.3259C18.8806 16.8864 19.3933 16.2616 19.696 15.5307C19.9988 14.7998 20.078 13.9956 19.9236 13.2196C19.7693 12.4437 19.3883 11.731 18.8289 11.1716C18.2695 10.6122 17.5568 10.2312 16.7808 10.0769C16.0049 9.92252 15.2007 10.0017 14.4698 10.3045C13.7388 10.6072 13.1141 11.1199 12.6746 11.7777C12.2351 12.4355 12.0005 13.2089 12.0005 14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 24.5C16.8284 24.5 17.5 23.8284 17.5 23C17.5 22.1716 16.8284 21.5 16 21.5C15.1716 21.5 14.5 22.1716 14.5 23C14.5 23.8284 15.1716 24.5 16 24.5Z" fill="black"></path></svg><a href="#">Yardım</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" fill="black"></path><path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 12C16.8284 12 17.5 11.3284 17.5 10.5C17.5 9.67157 16.8284 9 16 9C15.1716 9 14.5 9.67157 14.5 10.5C14.5 11.3284 15.1716 12 16 12Z" fill="black"></path><path d="M15 15H16V22H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Hakkımızda</a></li>
                            <li><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.2" d="M10 18.0001V23.0001C10 23.2653 10.1054 23.5196 10.2929 23.7072C10.4804 23.8947 10.7348 24.0001 11 24.0001H23.0521L28 28.0001V12.0001C28 11.7348 27.8946 11.4805 27.7071 11.293C27.5196 11.1054 27.2652 11.0001 27 11.0001H22V17.0001C22 17.2653 21.8946 17.5196 21.7071 17.7072C21.5196 17.8947 21.2652 18.0001 21 18.0001H10Z" fill="black"></path><path d="M8.94786 18.0001L4 22.0001V6.00006C4 5.73484 4.10536 5.48049 4.29289 5.29295C4.48043 5.10542 4.73478 5.00006 5 5.00006H21C21.2652 5.00006 21.5196 5.10542 21.7071 5.29295C21.8946 5.48049 22 5.73484 22 6.00006V17.0001C22 17.2653 21.8946 17.5196 21.7071 17.7072C21.5196 17.8947 21.2652 18.0001 21 18.0001H8.94786Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 18.0001V23.0001C10 23.2653 10.1054 23.5196 10.2929 23.7072C10.4804 23.8947 10.7348 24.0001 11 24.0001H23.0521L28 28.0001V12.0001C28 11.7348 27.8946 11.4805 27.7071 11.293C27.5196 11.1054 27.2652 11.0001 27 11.0001H22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">İletişim</a></li>
                            <li onClick={() => cıkısYap()}><svg class="Account_Icon__RBzCV" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17L4 11L10 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 25H21C22.8565 25 24.637 24.2625 25.9497 22.9497C27.2625 21.637 28 19.8565 28 18V18C28 17.0807 27.8189 16.1705 27.4672 15.3212C27.1154 14.4719 26.5998 13.7003 25.9498 13.0502C25.2997 12.4002 24.5281 11.8846 23.6788 11.5328C22.8295 11.1811 21.9193 11 21 11H4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><a href="#">Çıkış</a></li>
                        </ul>
                    </div>
                    <div className="profile-login-input">
                        
                        <ul>
                            <li><h5>Ad</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="Halil İbrahim" />
                            </div>
                            <li><h5>Soyad</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="Mayda" />
                            </div>
                            <li><h5>Kurum Adı</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="Unilever" />
                            </div>
                            <li><h5>Email</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="ibomyd@hotmail.com" />
                            </div>
                            <li><h5>Telefon Numarası</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="0546 295 0252" />
                            </div>
                            <li><h5>Doğum Tarihi</h5></li>
                            <div class="ui input focus">
                                <input type="text" value="21.03.2000" />
                            </div>
                            
                            <li><h5>Cinsiyet</h5></li>
                            <div className="gender">
                            <select class="ui dropdown" >
                                <option value="">Erkek</option>
                                <option value="1">Cinsiyet</option>
                                <option value="0">Kadın</option>
                            </select></div> <br/><br/>
                            <div className="ui checkbox">
                                <input className="ınput" type="checkbox" name="example" checked="true"/>
                                <label>Üyeliğimin kapsamında sağladığım kişisel verilerimin Unilever Sanayi ve Ticaret Türk A.Ş (“Unilever”) tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu’na uygun olarak kullanılmasına izin veriyorum.</label>
                            </div><div className="ui checkbox">
                                <input className="ınput" type="checkbox" name="example" checked="true"/>
                                <label>Unilever tarafından Unilever’in sahibi olduğu markalar ile ilgili olarak [bana özel fırsat ve deneyimlerden haberdar olmam amacıyla] ticari elektronik ileti gönderilmesine izin veriyorum.</label>
                            </div><br/><br/>
                            <button class="ui primary button butons">
                                Kaydet
                            </button>

                        </ul>
                    </div>

                </div>


            </div>
            <Footer />
        </div>


    )
}
export default Profile;
