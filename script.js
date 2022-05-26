let sliderWrapper = document.getElementsByClassName('container'),
    sliderContainer = document.getElementsByClassName('slider-container'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    currentIndex = 0,
    topHeight = 0,
    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

    calculateTallestSlide = () => {
      for (let i = 0; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
          topHeight = slides[i].offsetHeight;
        } 
      }
         sliderWrapper[0].style.height = topHeight + 'px';
         sliderContainer[0].style.height = topHeight + 'px';
    }
    calculateTallestSlide();

    for(let i = 0; i < slideCount; i++){
      slides[i].style.left = i*100 + '%';
    }

    goToSlide = (next) => {
      sliderContainer[0].style.left = next * -100 + '%';
      sliderContainer[0].classList.add('animated');
      currentIndex = next;

      // updateNav();
    }

    updateNav = () => {
      if(currentIndex === 0){
        navPrev.classList.add('disabled');
      } else {
        navPrev.classList.remove('disabled');
      }

      if(currentIndex === slideCount - 1){
        navNext.classList.add('disabled');
      } else {
        navNext.classList.remove('disabled');
      }
    }
  
    navPrev.addEventListener('click', (e)=>{
      e.preventDefault(); 
      // goToSlide(currentIndex - 1);
      if(currentIndex > 0){
        goToSlide(currentIndex - 1);
      } else {
        goToSlide(slideCount - 1)
      }

    })
    navNext.addEventListener('click', (e)=>{
      e.preventDefault(); 
      // goToSlide(currentIndex + 1);
      if(currentIndex < slideCount -1){
        goToSlide(currentIndex + 1);
      } else {
        goToSlide(0);
      }

    });
    goToSlide(0);
// topHeight = slides[5].offsetHeight;
// console.log(topHeight)