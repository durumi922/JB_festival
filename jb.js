document.getElementById("hamburger").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    
    // 메뉴의 'right' 속성을 계산해서 메뉴가 열려 있는지 확인
    if (menu.style.right === "0px" || menu.style.right === "") {
        menu.style.right = "-250px";  // 메뉴가 열려 있으면 닫기
    } else {
        menu.style.right = "0px";     // 메뉴가 닫혀 있으면 열기
    }
});

// 메인 콘텐츠 클릭 시 메뉴 닫기
document.querySelector('.main-content').addEventListener('click', function() {
    var menu = document.getElementById("menu");
    
    // 메뉴가 열려 있으면 닫기
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    }
});