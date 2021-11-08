import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "./BannerSlider.css";
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


SwiperCore.use([Autoplay, Pagination, Navigation]);

 const SliderBanner = () => {
    return (
        <div className="">
            <>
                <Swiper spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        "delay": 4500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={true} className="mySwiper swiper-space disable-bullet">
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiN2NiMjQ3YmYtODgyZS00OWM2LTg1YjgtM2IxNmRmZDU2YTI2Iiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMWNmNjc0YmMtMDY5Yy00YWI0LTljZDMtY2E1MDMzYTY5YWZkIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMzE3Y2Q1ZDItMGFjMC00NzIwLWJmYmYtMmE5ODFkODkxZjUzIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMTk0NzJkZWItNDA2Yi00NzE1LTk5NjktODNmYjdkMjRkZWRmIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    
                </Swiper>
            </>

        </div>
    )
}
export default SliderBanner;