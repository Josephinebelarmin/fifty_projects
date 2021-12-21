// window.addEventListener('keydown', (e) =>
// {
//     // To display all the attributes of a key when it is pressed in keyboard
//     // but for spacebar key="" so check for space separetely
//     console.log(e)
// })

const insert = document.getElementById("insert")

window.addEventListener('keydown' , (e) =>
{
    console.log(e)
    insert.innerHTML = `
    <div class="key">
    ${e.key === ' ' ? 'Sapce' : e.key}
    <small>event.key</small>
</div>
<div class="key">
    ${e.keyCode}
    <small>event.keycode</small>
</div>
<div class="key">
    ${e.code}
    <small>event.code</small>
</div>`
})