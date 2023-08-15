// ========================================================================================================
//검색창쪽 시작

document.addEventListener('DOMContentLoaded', function() {
  const searchBtn = document.getElementById('customSearchBtn');
  const popupBg = document.getElementById('customPopupBg');
  const popupContent = document.getElementById('customPopupContent');
  const closeBtn = document.getElementById('customCloseBtn');
  const searchInput = document.getElementById('customSearchInput');
  const searchSubmit = document.getElementById('customSearchSubmit');

  searchBtn.addEventListener('click', () => {
    popupBg.style.display = 'flex';
    document.body.classList.add('popup-open');
  });

  closeBtn.addEventListener('click', () => {
    popupBg.style.display = 'none';
    document.body.classList.remove('popup-open');
  });

  searchSubmit.addEventListener('click', () => {
    const searchTerm = searchInput.value;
    // 검색 기능을 구현하고 검색 결과를 처리하는 코드를 추가
  });

  // 팝업 내용과 사용자 검색하기 버튼을 추가 및 관련 기능
});
//검색창쪽 끝
// ========================================================================================================



// ========================================================================================================
<!-- msg3.html에 적용되는 <script>부분!! -->

  // 팝업창용 스크립트 시작!
  function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.add("active");
}

  function hidePopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.remove("active");
}
  // 팝업창용 스크립트 끝-
  //---------------------------------------------------------


  // 여기는 채팅창용 스크립트 시작!
  document.addEventListener("DOMContentLoaded", function () {
  const messages = document.getElementById("messages");
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function () {
  const messageText = messageInput.value.trim();
  if (messageText !== "") {
  // const messageDiv = document.createElement("div");
  // messageDiv.classList.add("message", "user-message"); // 추가된 클래스
  // messageDiv.textContent = messageText;
  // messages.appendChild(messageDiv);
  // messageInput.value = "";
  // messages.scrollTop = messages.scrollHeight; // 스크롤을 아래로 이동
}
});

  // 엔터 키로 메시지 전송
//   messageInput.addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//   sendButton.click();
//   event.preventDefault(); // 폼 제출 방지
// }
// });
});
// 여기는 채팅창용 스크립트 끝
// ========================================================================================================



