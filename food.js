document.addEventListener("DOMContentLoaded", function () {
  const foodTruckBox = document.getElementById("foodtruck");
  const toggleButton = foodTruckBox.querySelector(".box-toggle");
  const boxContent = foodTruckBox.querySelector(".box-content");

  toggleButton.addEventListener("click", function () {
    if (boxContent.style.display === "block") {
      boxContent.style.display = "none";
    } else {
      boxContent.style.display = "block";
    }
  });
});
