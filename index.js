(() => {
    const menuContainerEle = document.querySelector('.menu-container');

	const carouselItemWrapperEle = document.querySelector('.carousel-item-wrapper');
    const carouselItemEle = document.querySelectorAll('.carousel-item');
    let currentItemIndex = 0;
    const carouselNextButtonEle = document.querySelector('.next-btn');
    const carouselPrevButtonEle = document.querySelector('.prev-btn');

    const carouselItemLen = carouselItemEle.length;
    const carouselSpeed = 300;

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
		carouselItemEle[currentItemIndex].classList.remove('active');
		currentItemIndex++;

		if (currentItemIndex > carouselItemLen - 1) {
			currentItemIndex = 0;
		}

		carouselItemEle[currentItemIndex].classList.add('active');
		setTimeout(() => {
			carouselItemWrapperEle.style.transform = `translate3d(-${100 * currentItemIndex}%, 0, 0)`;
		}, carouselSpeed);
	});

    carouselPrevButtonEle.addEventListener('click', () => {
		carouselItemEle[currentItemIndex].classList.remove('active');
		currentItemIndex--;

		if (currentItemIndex <= -1) {
			currentItemIndex = 2;
		}

        carouselItemEle[currentItemIndex].classList.add('active');
        setTimeout(() => {
            carouselItemWrapperEle.style.transform = `translate3d(-${100 * currentItemIndex}%, 0, 0)`;
            carouselItemWrapperEle.style.transform = `translate3d(${100 * currentItemIndex}%, 0, 0)`;
		}, carouselSpeed);
	});

    carouselItemWrapperEle.addEventListener('transitionend', () => {
        console.log(carouselItemEle[currentItemIndex]);
    })
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