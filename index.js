/*add event listener*/
function selectItem() {
    selectFeature = document.querySelectorAll('.button');

    selectFeature.forEach((button) => {

        button.addEventListener('click', updateProduct)
    })
}

function menu() {

    const removeDiv = document.createElement('div');
    //removeDiv.id = 'remove';

    const div1 = document.createElement('div');
    div1.classList.add('menu');

    const h3 = document.createElement('h3');
    h3.textContent = "Net Guardians (RTU)"
    h3.classList.add('pageTitle');

    const p = document.createElement('p');
    p.textContent = "description of the products on the page"
    p.classList.add('menuTitle');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');



    function createMenuItem(menuText, descriptText, discrete, analog, relay) {
        /*menu div*/


        const menu1 = document.createElement('div');
        menu1.classList.add('menuItem');
        menu1.id = menuText

        const image1 = document.createElement('img');
        image1.src = 'img.avif';
        image1.id = menuText
        image1.classList.add('menuPictures');
        /*menu title*/
        const menuTitle = document.createElement('h4');
        menuTitle.textContent = menuText
        menuTitle.classList.add('blue');
        menuTitle.id = menuText
        /*menu descr*/
        const menuDescr = document.createElement('p');
        menuDescr.textContent = descriptText
        menuDescr.id = menuText

        const descreteContainer = document.createElement('div');
        descreteContainer.classList.add('descreteContainer');

        const menuDiv1 = document.createElement('div');
        const disText = document.createElement('div');
        disText.textContent = 'descretes';
        const disNumber = document.createElement('div');
        disNumber.classList.add('red');
        disNumber.textContent = discrete;
        menuDiv1.appendChild(disNumber)
        menuDiv1.appendChild(disText)


        const menuDiv2 = document.createElement('div');
        const anaText = document.createElement('div');
        anaText.textContent = 'analogs';
        const anaNumber = document.createElement('div');
        anaNumber.classList.add('red');
        anaNumber.textContent = analog;
        menuDiv2.appendChild(anaNumber)
        menuDiv2.appendChild(anaText)

        const menuDiv3 = document.createElement('div');
        const relayText = document.createElement('div');
        relayText.textContent = 'relays';
        const relayNumber = document.createElement('div');
        relayNumber.classList.add('red');
        relayNumber.textContent = analog;
        menuDiv3.appendChild(relayNumber)
        menuDiv3.appendChild(relayText)

        /*append elements*/
        menuContainer.appendChild(menu1);
        menu1.appendChild(image1)
        menu1.appendChild(menuTitle)
        menu1.appendChild(menuDescr)
        descreteContainer.appendChild(menuDiv1)
        descreteContainer.appendChild(menuDiv2)
        descreteContainer.appendChild(menuDiv3)
        menu1.appendChild(descreteContainer)

    }
    createMenuItem('prod1', 'description', '64', '16', '8')
    createMenuItem('prod2', 'description', '32', '8', '8')
    createMenuItem('prod3', 'description', '20', '6', '4')


    removeDiv.appendChild(h3);
    removeDiv.appendChild(p)
    removeDiv.appendChild(menuContainer);
    removeDiv.appendChild(div1)



    return document.body.appendChild(removeDiv);


}

menu()

// add event listener

/*add event listener*/
const select = document.querySelectorAll('.menuItem');

select.forEach((button) => {

    button.addEventListener('click', update)
})

// update to product page

function update(e) {

    const homeClick = document.getElementById("home")
    const menuClick = document.getElementById("menu")
    const locationClick = document.getElementById("location")
    
    const remove = document.getElementById("remove");

    if (e.target.id == 'prod1') {

       remove.remove()
        product('product1', "description of the product")
        productTab('overview')
        selectItem()
    }

    if (e.target.id == 'prod2') {

        remove.remove()
        product('product2', "description of the product")
        productTab('overview')
        selectItem()
    }

    if (e.target.id == 'prod3') {

        remove.remove()
        product('product3', "description of the product")
        productTab('overview')
       
        selectItem()
    }

}

// update product list
function updateProduct(e) {

    const overviewClick = document.getElementById("overview")
    const featuresClick = document.getElementById("features")
    const specClick = document.getElementById("specifications")

    //const remove = document.getElementById("remove");

    if (e.target.id == 'overview') {
        overviewClick.style.color = '#00008b'; 
        featuresClick.style.color = 'black'; 
        specClick.style.color = 'black'; 
        overviewClick.style.borderBottom = 'solid'; 
        featuresClick.style.borderBottom = 'none'; 
        specClick.style.borderBottom = 'none'; 
        remove2.remove()
        productTab('overview')

    }

    if (e.target.id == 'features') {
        overviewClick.style.color = 'black'; 
        featuresClick.style.color = '#00008b'; 
        specClick.style.color = 'black'; 
        overviewClick.style.borderBottom = 'none'; 
        featuresClick.style.borderBottom = 'solid'; 
        specClick.style.borderBottom = 'none'; 
        remove2.remove()
        productTab('features')
    }

    if (e.target.id == 'specifications') {
        overviewClick.style.color = 'black'; 
        featuresClick.style.color = 'black'; 
        specClick.style.color = '#00008b'
        overviewClick.style.borderBottom = 'none'; 
        featuresClick.style.borderBottom = 'none'; 
        specClick.style.borderBottom = 'solid'; 
        remove2.remove()
        productTab('specs')
    }

}


function product(title, description) {

    const removeDiv = document.createElement('div');
    removeDiv.id = 'remove';

    const div1 = document.createElement('div');
    div1.classList.add('contact');

    const productDiv = document.createElement('div');
    productDiv.classList.add('productContainer');
    productDiv.id = 'prod'

    const rightDiv = document.createElement('div');
    rightDiv.id = "right"

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonContainer');
    buttonDiv.id = 'buttons'
    const h3 = document.createElement('h3');
    h3.textContent = title
    h3.classList.add('productName');

    const headerDiv1 = document.createElement('div');
    headerDiv1.textContent = 'Overview';
    headerDiv1.classList.add('button');
    headerDiv1.id = 'overview';

    const headerDiv2 = document.createElement('div');
    headerDiv2.textContent = 'Features';
    headerDiv2.classList.add('button');
    headerDiv2.id = 'features';

    const headerDiv3 = document.createElement('div');
    headerDiv3.textContent = 'Specifications';
    headerDiv3.classList.add('button');
    headerDiv3.id = 'specifications';



    const image1 = document.createElement('img');
    image1.src = 'img.avif';
    image1.classList.add('image1');

    div1.appendChild(h3);
    //div1.appendChild(h4);
    buttonDiv.appendChild(headerDiv1)
    buttonDiv.appendChild(headerDiv2)
    buttonDiv.appendChild(headerDiv3)
    rightDiv.appendChild(buttonDiv)
    productDiv.appendChild(image1)
    productDiv.appendChild(rightDiv)


    div1.appendChild(productDiv);
    removeDiv.appendChild(div1)

    return document.body.appendChild(removeDiv);


}

function productTab(title) {
    const buttons = document.getElementById("right")
    const removeDiv = document.createElement('p');
    removeDiv.textContent = title + " text will be here"
    removeDiv.id = 'remove2';

    return buttons.appendChild(removeDiv)

}

