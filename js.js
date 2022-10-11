let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let sample = document.querySelector('.sample');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.left = value *4 + 'px';
    boat.style.top = value + 'px'
    sample.style.fontSize = value + 'px';
    if(scrollY >= 100){
        sample.style.fontSize = 100 + 'px';
        sample.style.position = 'fixed';
        if(scrollY >= 420){
        sample.style.display = 'none';
        }
        else{
            sample.style.display = 'block';
        }
        if(scrollY >= 131){
            document.querySelector('.main').style.background = 'linear-gradient(rgb(145 196 255),rgb(0 14 66))'

        }
        else{document.querySelector('.main').style.background = 'linear-gradient(rgb(17, 0, 22),rgb(42, 0, 66)'
    }
    }




    

    
    
}