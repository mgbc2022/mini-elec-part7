// 장바구니
const basketFromEl = document.querySelector("header .basket-from");
const basketEl = basketFromEl.querySelector(".basket");

basketFromEl.addEventListener("click", function (event) {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
basketEl.addEventListener("click", function (event) {
  event.stopPropagation();
});
window.addEventListener("click", function () {
  basketEl.classList.remove("show");
});

function showBasket() {
  basketEl.classList.add("show");
}
function hideBasket() {
  basketEl.classList.remove("show");
}


// 검색
const headerEl = document.querySelector('header')
const searchWrapEl = headerEl.querySelector('.search-wrap')
const searchFromEl = headerEl.querySelector('.search-from')
const searchCloserEl = searchWrapEl.querySelector('.search-closer')
const searchShadowEl = searchWrapEl.querySelector('.shadow')

searchFromEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)

function showSearch(){
  headerEl.classList.add('searching')
  document.documentElement.classList.add('fixed') // html의 최상위 요소를 찾는다
}
function hideSearch(){
  headerEl.classList.remove('searching')
  document.documentElement.classList.remove('fixed') 
}