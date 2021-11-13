import React from "react";
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
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiODQ4ZmYyZmEtNjI1ZS00NjQ4LThmNDUtY2MwMjNmYjYzNDAxIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMzE3Y2Q1ZDItMGFjMC00NzIwLWJmYmYtMmE5ODFkODkxZjUzIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMTk0NzJkZWItNDA2Yi00NzE1LTk5NjktODNmYjdkMjRkZWRmIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWNkOTM4OGQtMjIyNy00ODBhLTg3YjMtYTdiZGRjODA2NGYyIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNDQyZWI0ODAtYWRjNi00NTU2LTgwYzgtZmM3MDliNGRmODQ2Iiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMjI2MzMyMmYtOWUyYS00YzE5LWJiOGEtNDM0NzNjM2JjMjk1Iiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjI3NzcyMmQtYTY0ZS00MGJjLTk3MjgtZGJjYjg3YWY0NDdkIiwid2lkdGgiOjIzMjAsImhlaWdodCI6NTAwLCJmaXQiOiJvdXRzaWRlIiwiY29udGVudFR5cGUiOiJpbWFnZS93ZWJwIiwicXVhbGl0eSI6MzB9&platform=WEB&" /></SwiperSlide>
                </Swiper>
            </>

        </div>
    )
}
export default SliderBanner;