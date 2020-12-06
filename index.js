(() => {
    const menuContainerEle = document.querySelector('.menu-container');

    /* carousel */
	const carouselItemWrapperEle = document.querySelector('.carousel-item-wrapper');
    const carouselItemEle = document.querySelectorAll('.carousel-item');
    const carouselItemLen = carouselItemEle.length;
    let currentItemIndex = 0;
    const carouselNextButtonEle = document.querySelector('.next-btn');
    const carouselPrevButtonEle = document.querySelector('.prev-btn');

    const carouselSpeed = 300;
    let firstCarouselItemChild = carouselItemWrapperEle.firstElementChild;
    let lastCarouselItemChild = carouselItemWrapperEle.lastElementChild;
    let clonedFirst = firstCarouselItemChild.cloneNode(true);
    let clonedLast = lastCarouselItemChild.cloneNode(true);

    carouselItemWrapperEle.appendChild(clonedFirst);
    carouselItemWrapperEle.insertBefore(clonedLast, carouselItemWrapperEle.firstElementChild);
 
    // carouselItemWrapperEle.style.transform = `translate3d(-${100 * (currentItemIndex + 1)}%, 0, 0)`;
    carouselItemEle[currentItemIndex].classList.add('active');

    /* pagination */
    const pagination = document.querySelector('.pagination');
    let pageChild = '';
    for(let i = 0; i < carouselItemLen; i++) {
        pageChild += '<li class="dot';
        pageChild += (i === currentItemIndex) ? ' dot_active' : '';
        pageChild += '"data-index="' + i + '"><a href="#"></a></li>';
    }
    pagination.innerHTML = pageChild;
    const pageDots = document.querySelectorAll('.dot');
    let currentDot;

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 992) {
            invisibleMenu();    
        } else {
            visibleMenu();
        }
    });

    invisibleMenu = () => {
        if (menuContainerEle.matches('.d-none')) {
            return;    
        }
        menuContainerEle.classList.add('d-none');
    }

    visibleMenu = () => {
        if (!menuContainerEle.matches('.d-none')) {
            return;
        }
        menuContainerEle.classList.remove('d-none');
    }

    carouselNextButtonEle.addEventListener('click', () => {
        nextSlide();
	});

    carouselPrevButtonEle.addEventListener('click', () => {
		prevSlide();
    });

    nextSlide = () => {
        carouselItemEle[currentItemIndex].classList.remove('active');

        // 다음 슬라이드 아이템이 있으면
        if (currentItemIndex <= carouselItemLen - 1) {
            carouselItemWrapperEle.style.transition = `${carouselSpeed}ms`;
            carouselItemWrapperEle.style.transform = `translate3d(-${100 * (currentItemIndex + 2)}%, 0, 0)`;
        }

        // 마지막 슬라이드이고 다음 버튼을 클릭시
        if (currentItemIndex === carouselItemLen - 1) {
            setTimeout(() => {
                carouselItemWrapperEle.style.transition = `0ms`;
                carouselItemWrapperEle.style.transform = `translate3d(-${100}%, 0, 0)`;
            }, carouselSpeed);
            currentItemIndex = -1;
        }

        pageDots[(currentItemIndex === -1 ? carouselItemLen - 1 : currentItemIndex)].classList.remove('dot_active');
        currentItemIndex++;
        carouselItemEle[currentItemIndex].classList.add('active');
        pageDots[currentItemIndex].classList.add('dot_active');
    };

    prevSlide = () => {
        carouselItemEle[currentItemIndex].classList.remove('active');

        // 이전 슬라이드 아이템이 있으면
        if (currentItemIndex >= 0) {
            carouselItemWrapperEle.style.transition = `${carouselSpeed}ms`;
            carouselItemWrapperEle.style.transform = `translate3d(-${100 * currentItemIndex}%, 0, 0)`;
        }

        // 맨 처음 슬라이드고 이전 버튼 클릭시
        if (currentItemIndex === 0) {
            setTimeout(() => {
                carouselItemWrapperEle.style.transition = `0ms`;
                carouselItemWrapperEle.style.transform = `translate3d(-${100 * carouselItemLen}%, 0, 0)`;
            }, carouselSpeed);
            currentItemIndex = carouselItemLen;
        }

        pageDots[(currentItemIndex === carouselItemLen) ? 0: currentItemIndex].classList.remove('dot_active');
        currentItemIndex--;
        carouselItemEle[currentItemIndex].classList.add('active');
        pageDots[currentItemIndex].classList.add('dot_active');
    };

    Array.prototype.forEach.call(pageDots, (dot, i) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            currentDot = document.querySelector('.dot_active');
            currentDot.classList.remove('dot_active');

            const dotList = document.querySelectorAll('.dot');
            dotList[i].classList.add('dot_active');

            carouselItemEle[currentItemIndex].classList.remove('active');
            currentItemIndex = i;
            carouselItemEle[currentItemIndex].classList.add('active');
            carouselItemWrapperEle.style.transition = `${carouselSpeed}ms`;
            carouselItemWrapperEle.style.transform = `translate3d(-${100 * (currentItemIndex + 1)}%, 0, 0)`;
        });
    });

    setInterval(() => {
        nextSlide();
    }, 4000);
})();













// (() => {
    
//     const headerElement = document.querySelector('header');
//     const itemTitleElement = document.querySelector('.item-title');
//     const itemWrapperElement = document.querySelector('.item-wrapper');

//     window.addEventListener('scroll', () => {
//       stickyHeader();
      
//       if (parseInt(window.scrollY + window.innerHeight) >= itemTitleElement.offsetTop) {
//         itemTitleslowUpAnimationOn();
//       } else {
//         itemTitleslowUpAnimationOff();
//       }

//       if (parseInt(window.scrollY + window.innerHeight) >= itemWrapperElement.offsetTop) {
//         ItemWrapperslowUpAnimationOn();
//         ItemWrapperTextslowUpAnimationOn();
//       } else {
//         ItemWrapperslowUpAnimationOff();
//         ItemWrapperTextslowUpAnimationOff();
//       }
//     });

//     stickyHeader = () => {
//       if (window.scrollY === 0) {
//         if (!headerElement.classList.contains('sticky')) {
//           return;
//         }

//         headerElement.classList.remove('sticky');
//       } else {
//         if (headerElement.classList.contains('sticky')) {
//           return;
//         } 

//         headerElement.classList.add('sticky');
//       }
//     };

//     itemTitleslowUpAnimationOn = () => {
//       console.log('itemTitleslowUpAnimationOn');
//       if (itemTitleElement.classList.contains('slow-up-animation')) {
//         return;
//       }
//       itemTitleElement.classList.add('slow-up-animation')
//     }

//     itemTitleslowUpAnimationOff = () => {
//       console.log('itemTitleslowUpAnimationOff');
//       if (!itemTitleElement.classList.contains('slow-up-animation')) {
//         return;
//       }

//       itemTitleElement.classList.remove('slow-up-animation');
//     }

//     ItemWrapperslowUpAnimationOn = () => {
//       if (itemWrapperElement.children[0].classList.contains('slow-up-animation')) {
//         return;
//       }

//       itemWrapperElement.children[0].classList.add('slow-up-animation');
//     }

//     ItemWrapperslowUpAnimationOff = () => {
//       if (!itemWrapperElement.children[0].classList.contains('slow-up-animation')) {
//         return;
//       }

//       itemWrapperElement.children[0].classList.remove('slow-up-animation');
//     }

//     ItemWrapperTextslowUpAnimationOn = () => {
//       if (itemWrapperElement.children[1].classList.contains('slow-up-animation')) {
//         return;
//       }

//       itemWrapperElement.children[1].classList.add('slow-up-animation');
//     }

//     ItemWrapperTextslowUpAnimationOff = () => {
//       if (!itemWrapperElement.children[1].classList.contains('slow-up-animation')) {
//         return;
//       }

//       itemWrapperElement.children[1].classList.remove('slow-up-animation');
//     }

//     const showing_class = "showing";
//     const firstslide = document.querySelector(".slide:nth-child(1)");
//     const lastslide = document.querySelector(".slide:nth-child(4)");
//     const left_btn = document.querySelector(".left");

//     right_move = () => {
//       const currentslide = document.querySelector(".showing");
//       if (currentslide) {
//         const nextslide = currentslide.nextElementSibling;
//         console.log(nextslide);
//         currentslide.classList.remove(showing_class);
//         if (nextslide != left_btn) {
//           nextslide.classList.add(showing_class);
//         } else {
//           firstslide.classList.add(showing_class);
//         }
//       }
//     }

//     left_move = () => {
//       const currentslide = document.querySelector(".showing");
//       if (currentslide) {
//         const prevslide = currentslide.previousElementSibling;
//         console.log(prevslide);
//         currentslide.classList.remove(showing_class);
//         if (prevslide) {
//           prevslide.classList.add(showing_class);
//         } else {
//           lastslide.classList.add(showing_class);
//         }
//       }
//     }
// })();