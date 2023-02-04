const addPreload = (elem) =>{
    elem.classList.add('preload')
};

const removePreload = (elem) =>{
    elem.classList.remove('preload')
};

const startSlider = () => {
    const sliderItems = document.querySelectorAll('.slider__item');
    const sliderList = document.querySelector('.slider__list');
    const btnPrevSlide = document.querySelector('.slider__arrow_left');
    const btnNextSlide = document.querySelector('.slider__arrow_right');

    let activeSlider = 1;
    let position = 0;

    const checkSlider = () => {
        if((activeSlider + 2 === sliderItems.length &&
            document.documentElement.offsetWidth > 560) || activeSlider === sliderItems.length){
            btnNextSlide.style.display = 'none';
        } else{
            btnNextSlide.style.display = '';
        }

        if(activeSlider === 1){
            btnPrevSlide.style.display = 'none';
        } else{
            btnPrevSlide.style.display = '';
        }
    };

    checkSlider();

    const nextSlide = () => {
        sliderItems[activeSlider]?.classList.remove('slider__item_active')

        position = -sliderItems[0].clientWidth * activeSlider;

        sliderList.style.transform = `translateX(${position}px)`;

        activeSlider += 1;
        sliderItems[activeSlider]?.classList.add('slider__item_active');
        checkSlider()
    }

    const prevSlide = () => {
        sliderItems[activeSlider]?.classList.remove('slider__item_active')

        position = -sliderItems[0].clientWidth * (activeSlider - 2);

        sliderList.style.transform = `translateX(${position}px)`;

        activeSlider -= 1;
        sliderItems[activeSlider]?.classList.add('slider__item_active');
        checkSlider()
    }

    btnPrevSlide.addEventListener('click', prevSlide);
    btnNextSlide.addEventListener('click', nextSlide);

    window.addEventListener('resize', () => {
        if(activeSlider + 2 > sliderItems.length && document.documentElement.offsetWidth > 560){
            activeSlider = sliderItems.length - 2;
            sliderItems[activeSlider]?.classList.add('slider__item_active');
        }


        position = -sliderItems[0].clientWidth * (activeSlider - 1);
        sliderList.style.transform = `translateX(${position}px)`;
        checkSlider();
    })
}

const initSlider = () =>{
    const slider = document.querySelector('.slider');
    const sliderContainer = document.querySelector('.slider__container');

    sliderContainer.style.display = 'none';
    addPreload(slider)

    window.addEventListener('load', () => {
        sliderContainer.style.display = '';
        removePreload(slider);
        startSlider(slider);
    });
};

window.addEventListener('DOMContentLoaded', initSlider);


