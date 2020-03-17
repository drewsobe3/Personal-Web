import { films } from '../data/films.js'
import { people } from '../data/people.js'
import { planets } from '../data/planets.js'
import { starships } from '../data/starships.js'

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



const greetingDiv = document.querySelector('.greeting')



let counter = 1


greetingDiv.appendChild(castList)

people.forEach(person => {
   

    let anchorWrap = document.createElement("a")
    anchorWrap.href = "#"

    let imageItem = document.createElement("img")
    imageItem.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
   

    imageItem.addEventListener('error', (event) => {
        //console.log(`${event.type}: Loading image\n`;)
        //console.log(event)
        imageItem.hidden = true
        
    })
    
    //add some way to click/ handle user clicks on the image
    imageItem.addEventListener("click", (event) => {
        console.log(event)
 
    })
    anchorWrap.appendChild(imageItem)
    greetingDiv.appendChild(anchorWrap)
    counter++

})

