console.log("je suis connecté au fichier HTML");

/**
 * QuerySelector
 */

let elt = document.querySelector(".paragraphe");
console.log(elt);

let elts = document.querySelectorAll(".paragraphe");
console.log(elts);

/**
 * Innerhtml
 */

//let contenuDiv = document.getElementById("first").innerHTML;
//console.log(contenuDiv);

/**
 * Lien
 */

let link = document.querySelector('a');
link.href='https://www.google.com';
console.log(link);

let p = document.querySelectorAll('p')[1].className;
//console.log(p.split(' '));
console.log(p);

