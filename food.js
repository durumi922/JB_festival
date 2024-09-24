document.addEventListener("DOMContentLoaded", function() {
  // 푸드트럭 박스의 토글 기능 구현
  const foodtruckBox = document.getElementById("foodtruck");
  const toggleButton = foodtruckBox.querySelector(".box-toggle span");
  const content = foodtruckBox.querySelector(".box-content");

  toggleButton.addEventListener("click", function() {
    // 토글: 콘텐츠를 열고 닫음
    if (content.style.display === "block") {
      content.style.display = "none";
      toggleButton.textContent = "▼";
    } else {
      content.style.display = "block";
      toggleButton.textContent = "▲";
    }
  });
});
