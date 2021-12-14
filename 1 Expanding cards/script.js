const panels = document.querySelectorAll('.panel');
// console.log(panels);
// console.log(panels[0]);

//step 1: for each iteration console all panels
// panels.forEach((panel) => {
// console.log(panel);
// })

//step 2:
panels.forEach((panel) => {
    panel.addEventListener('click',() =>{
        // console.log("clicked");
        removeActiveClasses();
        panel.classList.add('active');
    })
    })

    function removeActiveClasses(){
        panels.forEach((panel)=>
        {
            panel.classList.remove('active')
        })
    }