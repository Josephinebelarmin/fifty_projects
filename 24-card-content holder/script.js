const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const bgs_text = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)

function getData(){
    header.innerHTML = '<img src= "https://images.unsplash.com/photo-1639245709307-3e17de649b43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, sapiente.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/45.jpg" />'
    name.innerHTML = 'jason Ryan'
    date.innerHTML = 'Jan 16, 2015'

    animated_bgs.forEach(bg => bg.classList.remove('.animated-bg'))
    bgs_text.forEach(bg => bg.classList.remove('.animated-bg-text'))
}
