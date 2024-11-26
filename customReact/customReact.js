
function cutomRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)

   domElement.innerHTML = reactElement.children

    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // container.appendChild(domElement);

    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute('type',reactElement.props[prop])
    }

    container.appendChild(domElement);
}

let reactElement = {
    type: 'a',
    props:{
        href: 'https://www.google.com/',
        target: '_blank'
    },
    children:'Click me to visit Google'
}

let mainContainer = document.querySelector('#root');

cutomRender(reactElement,mainContainer);
