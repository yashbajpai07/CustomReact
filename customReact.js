

const reactElement={ // This how react sees the each element from function that retured the JSX

    type:'a',
    props:{
        href: "https://google.com",
        target:"_blank",
    },
    children:'This Google Link'
}//Now we need a method to inject this object inside the root
//Hence creating a render method 
function customRender(reactElement,Container)//paramerter->(what to inject,where to inject)
{
    //first we create a DOM Element and then use to inject the object
    
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */

    //making more generalized Code
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props)
    {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    Container.appendChild(domElement);
}

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer);