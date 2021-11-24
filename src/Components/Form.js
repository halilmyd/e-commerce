import React, { useState, useEffect } from 'react'
import '../Components/Form.css';
import AdressCard from './AdressCard';



const Form = () => {

    const [adresler] = useState(JSON.parse(localStorage.getItem("adresler")) || []);
    const [adresAdı,setAdresAdı] = useState({})
    const [sehir,setSehir] = useState({})
    const [ilce,setIlce] = useState({})
    const [mahalle,setMahalle] = useState({})
    const [sokak,setSokak] = useState({})
    const [binaNo,setBinaNo] = useState({})
    const [kat,setKat] = useState({})
    const [kapıNo,setKapıNo] = useState({})


    useEffect(() => {
        localStorage.setItem("adresler",JSON.stringify([{
           
            adresAdı: "Ibonun Adresi",
            sehir: "Istanbul",
            ilce: "Şahinbey",
            mahalle: "Bülbülzade Mahallesi",
            sokak: "145801 Nolu Sokak",
            binaNo: "16",
            kat: "0",
            kapıNo: "2"
        }]))
        console.log(adresler)
        localStorage.setItem("adresler",JSON.stringify(adresler))

    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const geciciAdres = {
            adresAdı: adresAdı,
            sehir:sehir,
            ilce:ilce,
            mahalle:mahalle,
            sokak:sokak,
            binaNo:binaNo,
            kat:kat,
            kapıNo:kapıNo
        }
        console.log("Adresler Geçici",geciciAdres)
        adresler.push(geciciAdres)
        localStorage.setItem("adresler",JSON.stringify(adresler))
          console.log(adresler)

    }


    return (
        <div className="Form">
            <form className="border" onSubmit={handleFormSubmit}>
                <label>
                    <p className="isims">Bu adrese bir isim verin.</p>
                    <div className="ui input focus">
                        <input
                            type="text"
                            name="adresAdı"
                            placeholder="Adres İsmi"
                            onChange={(e)=>setAdresAdı(e.target.value)}
                        />
                    </div>
                </label>

                <br /><br />
                <div className="sehir">
                    <select name="sehir" className="ui fluid search dropdown" onChange={(e)=>setSehir(e.target.value)} multiple="">
                        <option value="şehir seçin">Şehir Seçin</option>
                        <option value="Gaziantep" >Gaziantep</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="Ankara">Ankara</option>
                    </select>
                </div>
                <br />
                <div className="ilce-mahalle">
                    <div className="ilce">
                        <select name="ilce" className="ui fluid search dropdown ilce" onChange={(e)=>setIlce(e.target.value)} multiple="">
                            <option value="İlçe seçin">İlçe Seçin</option>
                            <option value="Şahinbey">Şahinbey</option>
                            <option value="Şehitkamil">Şehitkamil</option>
                            <option value="Araban">Araban</option>
                            <option value="İslahie">İslahiye</option>

                        </select>
                    </div>
                    <div className="mahalle">
                        <select name="mahalle" className="ui fluid search dropdown mahalle" onChange={(e)=>setMahalle(e.target.value)} multiple="">
                            <option value="Mahalle Seçin">Mahalle Seçin</option>
                            <option value="Aydınbaba Mahallesi">Aydınbaba Mahallesi</option>
                            <option value="Bülbülzade Mahallesi">Bülbülzade Mahallesi</option>
                            <option value="Karataş Mahallesi">Karataş Mahallesi</option>

                        </select>
                    </div>
                </div><br />
                <div className="sokak">
                    <div className="ui input focus">
                        <input
                            type="text" 
                            name="sokak"
                            placeholder="Sokak"
                            onChange={(e)=>setSokak(e.target.value)} />

                    </div>
                </div><br />
                <div className="nolar">
                    <div className="bina-no">
                        <div className="ui input focus">
                            <input
                                type="text"
                                name="binaNo"
                                placeholder="Bina No"
                                onChange={(e)=>setBinaNo(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="kat">
                        <div className="ui input focus">
                            <input
                                type="text"
                                name="kat"
                                placeholder="Kat"
                                onChange={(e)=>setKat(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="kapı-no">
                        <div className="ui input focus">
                            <input
                                type="text"
                                name="kapıNo"
                                placeholder="Kapı No"
                                onChange={(e)=>setKapıNo(e.target.value)} />
                        </div>
                    </div>
                </div><br />
                <button className="ui secondary button adres-ekle">Adres Ekle</button>
            </form><br /><br /><br /><br />

            <div>
                {
                    adresler.map((adres) => {
                        return (
                            <div className="adres-card">
                            <AdressCard
                                adresAdı={adres.adresAdı}
                                sehir={adres.sehir}
                                ilce={adres.ilçe}
                                mahalle={adres.mahalle}
                                sokak={adres.sokak}
                                binaNo={adres.binaNo}
                                kat={adres.kat}
                                kapıNo={adres.kapıNo}
                                
                            /><br/>
                            </div>
                            )

                    })
                }
            </div>


        </div>

    )
}
export default Form;


