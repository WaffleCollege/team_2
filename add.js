// document.getElementById('js-btn').addEventListener('click', function(event) {
//   event.preventDefault(); // フォームの通常の送信を防止
//   alert('送信しますか？');
//   submitForm();
// });
$(document).ready(function() {
  $("#js-btn").click(function(event) {
      event.preventDefault(); // フォームの通常の送信を防止
      alert('送信しますか？');
      submitForm();
  });
});

function submitForm() {
  var form = document.getElementById('myForm');
  var formData = new FormData(form);
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://script.google.com/macros/s/AKfycbxckrQ3m4SJweqvhINsnVQeksRT9KOKdWmiR5qiJE3uMrgJ-R7pJY2UGASC2VQ1AGzU/exec', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(JSON.stringify(Object.fromEntries(formData)));
}


// AKfycbzfhut_KpnpqkJBpt9NzXCjW388gaBB3-l6fvTbmYvPJoM9A9z7cdj8LLhOz5j3-KZ0Qw