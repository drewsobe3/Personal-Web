import { people } from '../data/people.js'

// console.log("Starwars page code stuff")
// console.log(document.title)//root of everything that is in console
// //console.log(document.children)
// console.log(document.querySelector(".greeting"))//gives you every item with a class of greeting.
// const greetingDiv = document.querySelector(".greeting")
// console.log(greetingDiv.textContent)//allows input not in page
// greetingDiv.textContent='I just inserted text into a DOM element using my mad programming skills'
// console.log(films)
// greetingsDiv.textContent = films[0].opening_crawl
// console.log(people)
// greetingDiv.textContent = people[0].name



const gallery = document.querySelector('.gallery')
const maleButton = document.querySelector('#maleButton')
const femaleButton = document.querySelector('#femaleButton')
const otherButton = document.querySelector('#otherButton')



const otherCharacters = people.filter(person => {
    if (person.gender === "hermaphrodite" 
    || person.gender === "n/a"
    || person.gender === "none") {
        return person
    }

}) 

maleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === 'male'))
})

femaleButton.addEventListener("click", (event) => {
    populateDOM(people.filter(person => person.gender === "female"))

})

otherButton.addEventListener("click", (event) => {
    populateDOM(otherCharacters)
})


function getCharNumber(url) {
    let end = url.lastIndexOf('/')
    let start = end - 2
    if(url.charAt(start) === '/') { 
        start++
    }
    return url.slice(start, end)
}


function removeChildren(element) {
    while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function populateDOM(characters) { 
    removeChildren(gallery)
    characters.forEach(person => {
        // need to extract the number from the person.url property
        let charNum = getCharNumber(person.url)
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

maleButton.addEventListener("click", (event) => {
    console.log("Clicked on maleButton")
})
}
