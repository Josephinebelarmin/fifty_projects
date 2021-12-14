function updateProgressBar(){
    //console.log(document.documentElement)//retrieves the entire document
    console.dir(document.documentElement)//retrives objects from html along with every method lives on this object
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%';
    document.querySelector('#progress-bar').style.setProperty('--progress', scrollPercent);
  }
  
  document.addEventListener('scroll', updateProgressBar);