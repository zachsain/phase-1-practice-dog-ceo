console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedUrl = 'https://dog.ceo/api/breeds/list/all'



function init () 
{

fetch(imgUrl)
.then(response => response.json())
.then(dogs => renderDogs(dogs))

}


function renderDogs(dogs) {

    
    dogs.message.forEach(eachDog => {
        // console.log(eachDog)
        let newDog = document.createElement('img')
        let container = document.querySelector("#dog-image-container")
        newDog.src = eachDog
        container.appendChild(newDog)
        
    })
}





function initTwo () {
    fetch(breedUrl)
    .then(response => response.json())
    .then(dog2 => renderNames(dog2))
}



function renderNames(dog2) {
    // console.log(Object.keys(dog2.message))
    
    for (let eachDog in dog2.message) {
    
        let breed = document.createElement('li')

        let ul = document.querySelector('#dog-breeds')

        breed.textContent = eachDog

        ul.appendChild(breed)

        // color click:

    //     for (let each in breed) {

    //     breed.addEventListener('click', () => {

    //         breed.style.color = 'red' //is this a weird way of doing this?
    //     })
    //  }
     
    }

}


//change color modified 

function test() {

    let dogUl = document.querySelector("#dog-breeds")
    
    dogUl.addEventListener('click', (event) => {
        console.log(event)
        if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'
        
        }
    })
    }  



function initThree () {
    fetch(breedUrl)
    .then(response => response.json())
    .then(dog3 => filterDogs(dog3))
}



// let breedDropDown = document.querySelector('#dog=breeds')
// console.log(breedDropDown.value)


// if option.value === breed loop filter only those starting with same letter

// extendLetters();

// if drop down menu is selcted only show the dog with that letter

function filterDogs(dog3) {
    document.addEventListener('change', event => {
       let breeds = Object.keys(dog3.message) 
        
        let filteredArray = breeds.filter(breed => {
           return breed.startsWith(event.target.value)
        })

        let uL = document.querySelector("#dog-breeds")

        uL.textContent = ""

        filteredArray.forEach(breed => {
            
            let li = document.createElement('li')

            li.textContent = breed

            uL.appendChild(li)

            

        })
       
    })
}






document.addEventListener('DOMContentLoaded', () => {
    init();
    initTwo();
    // filterDogs();
    initThree();
    test()
    

})


