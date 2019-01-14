const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey! I'm red";
paragraph.setAttribute('style', 'color: red');  
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = "Hey! I'm Blue";
h3.setAttribute('style', 'color: blue');  
container.appendChild(h3);

const content2 = document.createElement('div');
content2.textContent = "Hey! I'm Blue";
content2.setAttribute('style', 'border-color: blue; background-color:pink');  


const h1_div = document.createElement('h1');
h1_div.textContent = "I'm in a div";
content2.appendChild(h1_div);

const p = document.createElement('p');
p.textContent = "Me too";
content2.appendChild(p);

container.appendChild(content2);