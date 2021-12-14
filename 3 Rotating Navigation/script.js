const opens = document.getElementById('open');
const closeing = document.getElementById('close');
const container =document.querySelectorAll('.container');

opens.addEventListener('click', () => container[0].classList.add('show-nav'))
closeing.addEventListener('click', () => container[0].classList.remove('show-nav'));

// open.add