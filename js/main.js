const btn = document.querySelector('.form_btn');
const name = document.querySelector('#name');
const tel = document.querySelector('#tel');
const email = document.querySelector('#email');

btn.addEventListener('click', function(e) {
  if(name.value === '') {
    alert('이름을 입력해주세요');
    return;
  }
  if(email.value === '') {
    alert('이메일을 입력해주세요');
    return;
  }
  if(tel.value === '') {
    alert('전화번호를 입력해주세요');
    return;
  }
});