import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import './LogoSlider.css'
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


SwiperCore.use([Autoplay, Pagination, Navigation]);


const SliderLogo = () => {
    return (
        <div className="SliderLogo">
                <Swiper
                    slidesPerView={10}
                    grid={{
                        rows: 2
                    }}
                    spaceBetween={30}
                    autoplay={{
                        "delay": 2200,
                        "disableOnInteraction": false
                    }}
                    pagination={{
                        "clickable": true
                    }}
                    className="mySwiper swiper-logo"
                >
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYmZhODUyZTUtZTU4OC00YmQ0LTg3MGEtNTY2YjkxMTcwYzk0Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiN2I0ZjNjNzEtMzYzMy00MmNjLWE3MmQtZTAxZmJlOGE2OTc0Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiYWJlOTcxMGMtYTYwMS00MjI0LTgxNDItZTk5YzRmN2U0MzE2Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTlkMjhjNmEtOWYyOC00MjM2LThjMzctZTA2NDFlN2M2NGUyIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiY2MwZDAyMDktYzhiZi00ODc4LTljMTItNmFkNWY5MjgwMzJlIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjY0OWUyZTgtOTE2OS00OGM0LWE2YjgtOTA2MDM5YjI1ODE3Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNjJiZmI4NTMtYzA1Yi00ZTQyLTk4MzAtOGQ4Yjk1NGY0ZDZlIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWNmMzdlMGQtNzExYS00NzY4LWI4OGEtYTM3ZTE4NDQ3YzRiIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMmRhZGRjODgtNDY5OC00OGFjLWI0YmEtNWY4YmVlZGFiOTI5Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZmI0YTliODQtY2FjNS00NzRmLTgwZDUtOGY5M2I4NDVkOGU3Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWFlYmUxOTgtMTdmZi00MmRhLWI3NTMtZWZiMWRjZjMwODQ1Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiMWVmZjY1OTgtMzIxMC00MGJjLWI2ZWItNzJkNWU2MDQxNzk3Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZGYwMTU5M2YtNWJmMy00YWM5LTllZWEtNzQyYmFhMDk2OTRiIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZTRkODlhNTEtZmQ3Mi00MGM2LTk4ZGMtNjY3MTJlZmY2NTZhIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZWM4YzBkMzMtOWY4Ni00M2UyLWE4Y2ItY2JmZTI5NWI2OTRmIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiNGI3NDMzZmMtNTUyOC00ZjA2LThiM2UtMzRkYWE4ZGRkYmJmIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiOGIyOGI0YWItNTQ4Zi00NWIzLWIzOGMtMmQ5OGIwMTkxMzkxIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiZjRjOGE4M2ItZjEzNS00YTBlLWI0MTktZWY4M2M0NzgzM2U2Iiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                    <SwiperSlide><img src="https://core.rtbs.io/user/action/6ad47403c22043a795e973c7ec83dcc7/rbs.storage.get.GET_IMAGE?auth=&data=eyJpbWFnZUlkIjoiM2UzOGY3OTEtZTZmNS00OGZkLWJmZWQtMzk2YTYwZjJkYWIyIiwid2lkdGgiOjIyMCwiaGVpZ2h0IjoyMjAsImZpdCI6Im91dHNpZGUiLCJjb250ZW50VHlwZSI6ImltYWdlL3dlYnAiLCJxdWFsaXR5IjozMH0&platform=WEB&" /></SwiperSlide>
                </Swiper>
        </div>
    )
}
export default SliderLogo;