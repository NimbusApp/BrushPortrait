const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
     const suffix = this.dataset.sizing || '';
     document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

var count = 0;
setInterval(function(){
     if(count == 10){
          count = 0;
     }
     var image = 'public/images/brush' +count +'.jpg';
     document.getElementById("image").src = image;
     count ++;
}, 5000);

var aud = document.getElementById('music');

var countMusic = 1;
function changeSong(){
     if(countMusic == 6){
          countMusic = 0;
     }
     countMusic++;
     aud.setAttribute('src', 'public/sounds/' +countMusic +'.mp3');
     aud.play();
}

aud.addEventListener("ended", changeSong);

document.getElementById('year').innerHTML = new Date().getFullYear();
