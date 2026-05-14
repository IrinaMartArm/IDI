import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import p1 from '../../../../images/pictures/drill/drill_slide_1.png'
import p2 from '../../../../images/pictures/drill/drill_slide_2.png'
import p3 from '../../../../images/pictures/drill/drill_slide_3.png'

import styled from "styled-components";
import {getAssetSrc} from "../../../../shared/lib/getAssetSrc";



const imgs = [
	{path: getAssetSrc(p1)}, {path: getAssetSrc(p2)}, {path: getAssetSrc(p3)},
]

export const SwiperForDrill = () => {     //className={'swiper-container'}
	return (
		<SliderBox>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{clickable: true}}
			>
				{imgs.map((el, index) => {
					return (
						<SwiperSlide key={index}>
							<SlideImg src={el.path} alt={'implant TURBODrill'}/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</SliderBox>
	);
};

const SlideImg = styled.img`
  width: 100%;
`
const SliderBox = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 30px auto 0;
`
