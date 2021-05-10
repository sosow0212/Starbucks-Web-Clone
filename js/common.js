const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // 돋보기를 누르면 강제로 포커스가 맞춰짐
});
 
// 돋보기 아이콘에 인풋요소에 포커스가 될 경우
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  // 포커스가 맞춰지면 focused라는 클래스명 생성이됨
  searchInputEl.setAttribute('placeholder', '통합검색');
});


// 돋보기 아이콘에 인풋요소에 포커스가 해제될 경우
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  // 포커스가 맞춰지면 focused라는 클래스명 생성이됨
  searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();