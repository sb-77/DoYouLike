
let navbartog = document.getElementById("navbartog");
let dropdownmenu = document.getElementById("dropdown-menu");



navbartog.addEventListener("click", function () {
  dropdownmenu.classList.toggle("show"); // Toggle dropdown menu open or close
  navbartog.classList.toggle("active"); // Toggle active class for styling
});


navbartog.addEventListener("click", function (event) {
  event.stopPropagation(); // 이벤트 전파를 막음
  dropdownmenu.classList.toggle("show");
  navbartog.classList.toggle("active");
});

// "navbartog" 버튼 클릭 시 드롭다운 메뉴를 열거나 닫음
navbartog.addEventListener("click", function () {
  dropdownmenu.classList.toggle("show");
  navbartog.classList.toggle("active");
});








//상단바 3개 버튼 동작(다른 동작으로 바꿈)
// let btns = appbar.getElementsByClassName("nav-item");
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     let current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

