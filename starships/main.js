import { starships } from '../data/starships.js'
import { getLastNumber, removeChildren } from '../utils.js'


const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const shipView = document.querySelector('.main')

function populateNav(starships) {
    starships.forEach(starship => {
        
    let anchorWrap = document.createElement('a')
    anchorWrap.href = '#'
    anchorWrap.addEventListener("click", event => {
        let shipName = event.target.textContent
        const foundShip = starships.find(ship => ship.name === shipName);
        populateShipView(foundShip)
    })
    
    let listItem = document.createElement('li')
    listItem.textContent = starship.name


    anchorWrap.appendChild(listItem)
    navList.appendChild(anchorWrap)
    nav.appendChild(navList)
})
}

function populateShipView(shipData) {
    let shipNum = getLastNumber(shipData.url)
    let shipImage = document.createElement('img')
    shipImage.src = `https://starwars-visualguide.com/assets/img/characters/${shipNum}.jpg`
    shipView.appendChild(shipImage)
}

populateNav(starships)

