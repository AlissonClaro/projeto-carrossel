let nextButton = document.querySelector('.next')
let backButton = document.querySelector('.back')


let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')


function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item')
    let thumbItems = document.querySelectorAll('.thumb .thumb-item')
    console.log(listItems)
    console.log(thumbItems)

    if (type == 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next') //criar uma classe fora do css para o css
    }

    else {
        list.prepend(listItems[listItems.length - 1])
        thumb.prepend(thumbItems[thumbItems.length - 1])
        container.classList.add('back') //criar uma classe fora do css para o css
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}

nextButton.onclick = () => moveItemsOnClick('next')
backButton.onclick = () => moveItemsOnClick('back')


