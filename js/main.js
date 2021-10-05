const btn = document.querySelector('.form_btn');
const userName = document.getElementById('name');
const tel = document.getElementById('tel');
const email = document.getElementById('email');

btn.addEventListener('click', function(e) {
  if(userName.value === '') {
    alert('이름을 입력해주세요.');
    return;
  }
  if(email.value === '') {
    alert('이메일을 입력해주세요.');
    return;
  }
  if(tel.value === '') {
    alert('전화번호를 입력해주세요.');
    return;
  }
});