/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function randomWholeNum() {
    return Math.min(5, Math.floor(Math.random()*10));
}

const xah_randomize_children_f = ((nodeX) => {
    // nodeX can be any html element
    // randomize its children
    // http://xahlee.info/js/js_dom_randomize_list.html
    // version 2017-05-11

    const newNode = nodeX.cloneNode(true);
    const xChildren = newNode.children;
    const newNodeFrag = document.createDocumentFragment();

    while (xChildren.length > 0) {
        const nextEle = xChildren [Math.floor(Math.random() * xChildren.length)];
        nextEle.firstChild.setAttribute('data-weight', randomWholeNum());
        newNodeFrag.appendChild( nextEle );
    };

    nodeX.innerHTML = "";
    nodeX.appendChild(newNodeFrag);
});
xah_randomize_children_f(document.getElementById("big_list_80831"));
