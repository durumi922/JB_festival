document.querySelector('.box-toggle').addEventListener('click', function() {
  const content = document.querySelector('.box-content');
  
  if (content.classList.contains('show')) {
    content.classList.remove('show');
    content.style.maxHeight = null; /* 토글이 닫힐 때 max-height 초기화 */
  } else {
    content.classList.add('show');
    content.style.maxHeight = content.scrollHeight + "px"; /* 토글이 열릴 때 실제 높이만큼 설정 */
  }
});
