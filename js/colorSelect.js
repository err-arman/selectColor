let colors = [
    'red',
    'green',
    'yellow',
    'blue',
    'gray',
    'purple',
    'black',

];

let container = document.querySelector('section');
let h1 = document.querySelector('h1');
let selectedColor = document.querySelector('.selectedColor');

for (let color of colors){
    let box = document.createElement('div');
   box.classList.add('box');
   container.appendChild(box);
   box.style.backgroundColor = color;

  box.addEventListener('click' , function(){
    h1.innerHTML = 'You click this color :';
    selectedColor.innerHTML = box.style.backgroundColor;
    selectedColor.style.backgroundColor = box.style.backgroundColor;

  });
  box.addEventListener('mouseover' , function(){
    box.style.cursor = 'pointer';
  })
    
}
