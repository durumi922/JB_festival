document.addEventListener("DOMContentLoaded", function () {
  const foodTruckBox = document.getElementById("foodtruck");
  const toggleButton = foodTruckBox.querySelector(".box-toggle");
  const boxContent = foodTruckBox.querySelector(".box-content");

  toggleButton.addEventListener("click", function () {
    boxContent.classList.toggle('show'); // 'show' 클래스를 토글하여 애니메이션 효과를 줌
    if (boxContent.style.display === "block") {
      boxContent.style.display = "none";
    } else {
      boxContent.style.display = "block";
    }
  });
});
