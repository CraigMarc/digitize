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
        menuDescr.classList.add('menuText');

        const descreteContainer = document.createElement('div');
        descreteContainer.classList.add('descreteContainer');
        descreteContainer.id = menuText

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
    createMenuItem('NetGuardian 864 G6', 'This is what the product basically does. This is a common use case.', '64', '16', '8')
    createMenuItem('NetGuardian 832 G6', 'This is what the product basically does. This is a common use case.', '32', '8', '8')
    createMenuItem('NetGuardian 420 G6', 'This is what the product basically does. This is a common use case.', '20', '6', '4')


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

    if (e.target.id == 'NetGuardian 864 G6') {

        remove.remove()
        product('NetGuardian 864 G6', "description of the product")
        productTab('overview')
        selectItem()
    }

    if (e.target.id == 'NetGuardian 832 G6') {

        remove.remove()
        product('NetGuardian 832 G6', "description of the product")
        productTab('overview')
        selectItem()
    }

    if (e.target.id == 'NetGuardian 420 G6') {

        remove.remove()
        product('NetGuardian 420 G6', "description of the product")
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
        overviewClick.style.borderTop = 'solid';
        overviewClick.style.borderRight = 'solid';
        overviewClick.style.borderLeft = 'solid';
        overviewClick.style.borderRadius = '10px 10px 0px 0px';
        overviewClick.style.borderWidth = '0.2px';
        overviewClick.style.borderBottom = 'none';
        overviewClick.style.borderColor = 'black';
        featuresClick.style.borderLeft = 'none';
        featuresClick.style.borderRight = 'none';
        featuresClick.style.borderTop = 'none';
        featuresClick.style.borderBottom = 'solid';
        featuresClick.style.borderWidth = '0.1px';
        specClick.style.borderTop = 'none';
        specClick.style.borderLeft = 'none';
        specClick.style.borderRight = 'none';
        specClick.style.borderBottom = 'solid'
        specClick.style.borderWidth = '0.1px'
        remove2.remove()
        productTab('overview')

    }

    if (e.target.id == 'features') {
        overviewClick.style.color = 'black';
        featuresClick.style.color = '#00008b';
        specClick.style.color = 'black';
        featuresClick.style.borderBottom = 'solid';
        featuresClick.style.borderTop = 'solid';
        featuresClick.style.borderRight = 'solid';
        featuresClick.style.borderLeft = 'solid';
        featuresClick.style.borderRadius = '10px 10px 0px 0px';
        featuresClick.style.borderWidth = '0.2px';
        featuresClick.style.borderColor = 'black';
        featuresClick.style.borderBottom = 'none';
        specClick.style.borderTop = 'none';
        specClick.style.borderLeft = 'none';
        specClick.style.borderRight = 'none';
        specClick.style.borderBottom = 'solid'
        specClick.style.borderWidth = '0.1px'
        overviewClick.style.borderTop = 'none';
        overviewClick.style.borderLeft = 'none';
        overviewClick.style.borderRight = 'none'
        overviewClick.style.borderBottom = 'solid'
        overviewClick.style.borderWidth = '0.1px'
        remove2.remove()
        productTab('features')
    }

    if (e.target.id == 'specifications') {
        overviewClick.style.color = 'black';
        featuresClick.style.color = 'black';
        specClick.style.color = '#00008b'
        overviewClick.style.borderTop = 'none';
        overviewClick.style.borderLeft = 'none';
        overviewClick.style.borderRight = 'none'
        overviewClick.style.borderBottom = 'solid'
        overviewClick.style.borderWidth = '0.1px'
        featuresClick.style.borderLeft = 'none';
        featuresClick.style.borderRight = 'none';
        featuresClick.style.borderTop = 'none';
        featuresClick.style.borderBottom = 'solid';
        featuresClick.style.borderWidth = '0.1px';
        specClick.style.borderTop = 'solid';
        specClick.style.borderRight = 'solid';
        specClick.style.borderLeft = 'solid';
        specClick.style.borderRadius = '10px 10px 0px 0px';
        specClick.style.borderWidth = '0.2px';
        specClick.style.borderColor = 'black';
        specClick.style.borderBottom = 'none';
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


    const image1Div = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = 'img.avif';
    image1.classList.add('image1');
    image1Div.classList.add('image1Div');
    image1Div.appendChild(image1)

    div1.appendChild(h3);
    //div1.appendChild(h4);
    buttonDiv.appendChild(headerDiv1)
    buttonDiv.appendChild(headerDiv2)
    buttonDiv.appendChild(headerDiv3)
    rightDiv.appendChild(buttonDiv)
    //productDiv.appendChild(image1)
    productDiv.appendChild(image1Div)
    productDiv.appendChild(rightDiv)


    div1.appendChild(productDiv);
    removeDiv.appendChild(div1)

    return document.body.appendChild(removeDiv);


}

function productTab(title) {
    const buttons = document.getElementById("right")
    const removeDiv = document.createElement('div');
    const text = document.createElement('p');
    text.textContent = title + " text will be here"
    removeDiv.id = 'remove2';
    removeDiv.classList.add('tabTextDiv');
    text.classList.add('tabText');
    removeDiv.appendChild(text)

    return buttons.appendChild(removeDiv)

}

