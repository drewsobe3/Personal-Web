import { people } from '../data/people.js'
import { getLastNumber, removeChildren } from '../utils.js'

const gallery = document.querySelector('.gallery')
const { ccg-card-generator, } = require("ccg-card-generator");
  
const target = "./rulebook.md";

const destination = "./rulebook.pdf";

const options = {
  "debug": true,
  "style": "./node_modules/ccg-card-generator/lib/styles/prototype.css",
  "printOptions": {
    displayHeaderFooter: false,
  },
};

ccg-card-generator( target, destination, options);

}) 


function populateDOM(species) { 
    removeChildren(gallery)
    characters.forEach(person => {
        // need to extract the number from the person.url property
        let charNum = getLastNumber(person.url)
    let anchorWrap = document.createElement('a')
    anchorWrap.href = "#"
    

    let imageItem = document.createElement('img')
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
   

    imageItem.addEventListener('error', () => {
        //console.log(`${event.type}: Loading image\n`;)
        //console.log(event)
        imageItem.hidden = true
        
    })
    
    //add some way to click/ handle user clicks on the image
    imageItem.addEventListener("click", (event) => {
        console.log(event)
 
    })
    anchorWrap.appendChild(imageItem)
    gallery.appendChild(anchorWrap)
    

})
