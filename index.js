'use strict';

/* 헤더 (header) */
const hamburgerMenu = document.querySelector('.hamburger__menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
});


/* 슬라이더 (slider, 혹은 carousel) */
const sliderLeftBtn = document.querySelector('.left-btn');
const sliderRightBtn = document.querySelector('.right-btn');

const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemLen = sliderItem.length;
let currentSliderIndex = 0;

const sliderSpeed = 300;
const firstSliderItemChild = sliderWrapper.firstElementChild;
const lastSliderItemChild = sliderWrapper.lastElementChild;
const clonedFirst = firstSliderItemChild.cloneNode(true);
const clonedLast = lastSliderItemChild.cloneNode(true);

sliderWrapper.appendChild(clonedFirst);
sliderWrapper.insertBefore(clonedLast, sliderWrapper.firstElementChild);

let sliderInterval;
sliderInterval = intervalTime();

/* 슬라이더 페이지네이션 */
const pagination = document.querySelector('.pagination');
let pageChild = '';
for (let i = 0; i < sliderItemLen; i++) {
    pageChild += '<li class="dot';
    pageChild += (i === currentSliderIndex) ? ' dot_active' : '';
    pageChild += '"data-index="' + i + '"><a href="#"></a></li>';
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll('.dot');
let currentDot;

sliderItem[currentSliderIndex].classList.add('active');

sliderLeftBtn.addEventListener('click', () => {
    prevSlide();
});

sliderRightBtn.addEventListener('click', () => {
    nextSlide();
});

// 슬라이더 다음 화면
function nextSlide() {
    sliderItem[currentSliderIndex].classList.remove('active');

    // 다음버튼 클릭시 다음 슬라이드 아이템이 있으면
    if (currentSliderIndex <= sliderItemLen - 1) {
        sliderWrapper.style.transition = `${sliderSpeed}ms`;
        sliderWrapper.style.transform = `translate3d(-${100 * (currentSliderIndex + 2)}%, 0, 0)`;
    }

    // 마지막 슬라이드에서 다음 버튼 클릭시
    if (currentSliderIndex === sliderItemLen - 1) {
        setTimeout(() => {
            sliderWrapper.style.transition = `0ms`;
            sliderWrapper.style.transform = `translate3d(-${100}%, 0, 0)`;
        }, sliderSpeed);
        currentSliderIndex = -1;
    }

    pageDots[(currentSliderIndex === -1 ? sliderItemLen - 1 : currentSliderIndex)].classList.remove('dot_active');
    currentSliderIndex++;
    sliderItem[currentSliderIndex].classList.add('active');
    pageDots[currentSliderIndex].classList.add('dot_active');
    clearInterval(sliderInterval);
    startInterval();
}

// 슬라이더 이전 화면
function prevSlide() {
    sliderItem[currentSliderIndex].classList.remove('active');

    // 이전 슬라이드 아이템이 있으면
    if (currentSliderIndex >= 0) {
        sliderWrapper.style.transition = `${sliderSpeed}ms`;
        sliderWrapper.style.transform = `translate3d(${-100 * currentSliderIndex}%, 0, 0)`;
    }

    // 맨 처음 슬라이드고 이전 버튼 클릭시
    if (currentSliderIndex === 0) {
        setTimeout(() => {
            sliderWrapper.style.transition = `0ms`;
            sliderWrapper.style.transform = `translate3d(-${100 * sliderItemLen}%, 0, 0)`;
        }, sliderSpeed);
        currentSliderIndex = sliderItemLen;
    }

    pageDots[(currentSliderIndex === sliderItemLen) ? 0 : currentSliderIndex].classList.remove('dot_active');
    currentSliderIndex--;
    sliderItem[currentSliderIndex].classList.add('active');
    pageDots[currentSliderIndex].classList.add('dot_active');
    clearInterval(sliderInterval);
    startInterval();
}

function startInterval() {
    if (sliderInterval) 
        clearInterval(sliderInterval);
    
    sliderInterval = intervalTime();
}

function intervalTime() {
    return setInterval(() => {
        nextSlide();
    }, 4000);
}

/* 모달 */
const rankingItem = document.querySelectorAll(".ranking__item");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".md__overlay");
const modalClose = modal.querySelector("button");

function openModal(item) {
    modal.children[1].appendChild(item.children[0].cloneNode(true));
    modal.classList.remove("hidden");
};

function closeModal() {
    modal.children[1].removeChild(modal.children[1].lastElementChild);
    modal.classList.add("hidden");
};

overlay.addEventListener("click", () => {
    closeModal();
});

rankingItem.forEach((item) => {
    item.addEventListener("click", () => {
        openModal(item);
    });
});

modalClose.addEventListener("click", () => {
    closeModal();
});

/* 터치 슬라이드 (touch slider) */
// const touchSlider = document.querySelector('.touch__slider');
// const touchInnerSlider = document.querySelector('.touch__slider__inner');

// let pressed = false;
// let startx;
// let x;

// touchSlider.addEventListener('touchstart', (e) => {
//     pressed = true;
//     startx = e.touches[0].clientX - touchInnerSlider.offsetLeft; // 슬라이더를 벗어난 넓이
// }, false);

// touchSlider.addEventListener('touchend', (e) => {
//     if (!pressed) return;

//     e.preventDefault();
//     x = e.changedTouches[0].clientX;
//     touchInnerSlider.style.left = `${x - startx}px`;
    
//     checkboundary();
// });


// touchSlider.addEventListener('mousedown', (e) => {
//     pressed = true;
//     startx = e.offsetX - touchInnerSlider.offsetLeft; // 슬라이더를 벗어난 넓이
//     touchSlider.style.cursor = 'grabbing'
// });

// touchSlider.addEventListener('mouseleave', () => {
//     pressed = false;
//     touchSlider.style.cursor = 'default'
// });

// touchSlider.addEventListener('mouseup', () => {
//     pressed = false;
//     touchSlider.style.cursor = 'default';
// });

// touchSlider.addEventListener('mousemove', (e) => {
//     if(!pressed) return;
//     e.preventDefault();

//     x = e.offsetX

//     touchInnerSlider.style.left = `${x - startx}px`;

//     checkboundary();
// });

// function checkboundary() {
//     let outer = touchSlider.getBoundingClientRect();
//     let inner = touchInnerSlider.getBoundingClientRect();

//     if(parseInt(touchInnerSlider.style.left) > 0) {
//         touchInnerSlider.style.left = '0px';
//     } else if (inner.right < outer.right) {
//         touchInnerSlider.style.left = `-${inner.width - outer.width}px`;
//     }

// }

/* masonry 레이아웃 */
function resizeMasonryItem(item) {
    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowSpan = Math.ceil(
        (item.children[0].getBoundingClientRect().height +
        // item.children[1].getBoundingClientRect().height +
        rowGap) / (rowHeight + rowGap)
    );
    item.style.gridRowEnd = 'span '+rowSpan;
};

function resizeAllMasonryItems() {
    const allItems = document.querySelectorAll('.masonry__item');
    allItems.forEach((item) => {
        resizeMasonryItem(item);
    })
};

window.addEventListener('load', () => {
    resizeAllMasonryItems();
});

window.addEventListener('resize', () => {
    resizeAllMasonryItems();
});




