import { starships } from '../data/starships.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

function populateNav(starships) {
    starships.forEach(starship => {
        
    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'
    
    let listItem = document.createElement('li')
    listItem.textContent = starship.name


    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)
})
}

populateNav(starships)

//figure out a way to display list of starships
