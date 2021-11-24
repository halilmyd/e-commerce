import React from 'react'
import '../Components/Profile.css';


const AdressCard = ({adresAdı,sehir,ilce,mahalle,sokak,binaNo,kat,kapıNo}) => {

   


    return (
        <div className="AdressCard">
            <div className="container">
                <div className="y-card">
                    <div className="sil">
                        <h4 className="adres-ismi">{adresAdı}<i className="close icon çarpı"  ></i></h4>
                    </div>
                    <div className="metinler">
                        <div><p>{sehir}</p></div>
                        <div><p>/</p></div>
                        <div><p>{ilce} </p></div>
                        <div><p>{mahalle} </p></div>
                        <div><p>{sokak}</p></div>
                        <div><p>Bina No:{binaNo}</p></div>
                        <div><p>Kat:{kat}</p></div>
                        <div><p>Daire:{kapıNo}</p></div>
                    </div>


                </div>
            </div>

        </div>
    )
}
export default AdressCard;