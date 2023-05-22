import * as Swiper from 'swiper/dist/js/swiper.js'

const citiesSwiperContainerOne = document.querySelector('.cities__swiper-container-one')
const citiesSwiperContainerTwo = document.querySelector('.cities__swiper-container-two')
const answerGeorgia = document.querySelector('#georgia')
const answerArmeniya = document.querySelector('#armenia')
const container = document.querySelector('.mainpage-form');
export default function () {
	
	const one = new Swiper(citiesSwiperContainerOne, {
		spaceBetween: 22,
		slidesPerView: 'auto',
		mousewheel: {
			forceToAxis: true,
			invert: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1023: {
				spaceBetween: 12,
			},
		},
	})

	const two = new Swiper(citiesSwiperContainerTwo, {
		spaceBetween: 22,
		slidesPerView: 'auto',
		mousewheel: {
			forceToAxis: true,
			invert: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1023: {
				spaceBetween: 12,
			},
		},
	})

	if (container) {

		answerGeorgia.addEventListener('click', function () {
			
			setTimeout(() => {

				const one = new Swiper(citiesSwiperContainerOne, {
					spaceBetween: 22,
					slidesPerView: 'auto',
					mousewheel: {
						forceToAxis: true,
						invert: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					breakpoints: {
						1023: {
							spaceBetween: 12,
						},
					},
				})
			
				const two = new Swiper(citiesSwiperContainerTwo, {
					spaceBetween: 22,
					slidesPerView: 'auto',
					mousewheel: {
						forceToAxis: true,
						invert: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					breakpoints: {
						1023: {
							spaceBetween: 12,
						},
					},
				})

			}, 300)
		})
	
		answerArmeniya.addEventListener('click', function () {
			setTimeout(() => {
				
				const one = new Swiper(citiesSwiperContainerOne, {
					spaceBetween: 22,
					slidesPerView: 'auto',
					mousewheel: {
						forceToAxis: true,
						invert: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					breakpoints: {
						1023: {
							spaceBetween: 12,
						},
					},
				})
			
				const two = new Swiper(citiesSwiperContainerTwo, {
					spaceBetween: 22,
					slidesPerView: 'auto',
					mousewheel: {
						forceToAxis: true,
						invert: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					breakpoints: {
						1023: {
							spaceBetween: 12,
						},
					},
				})

			}, 300)
		})

	}

	

	
			
		


	
		
	
	
}
