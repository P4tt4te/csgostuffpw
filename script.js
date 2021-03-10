// permet d'afficher ou cacher la div inventaire en appuyant sur le bouton view inventory /

function masquer() {
  var divInfo = document.getElementById('inventory');
  if (divInfo.style.display == 'none') {
    divInfo.style.display = 'flex';
    somme = somme + 10;
  } else {
    divInfo.style.display = 'none';
  }

}

function changementPage(typeButton) {
  var sectionInfoMain = document.querySelector('#main');
  var sectionInfoListe = document.querySelector('#liste');
  if (typeButton == 1) {
    sectionInfoMain.style.display = 'none';
    sectionInfoListe.style.display = 'grid';
  } else {
    sectionInfoMain.style.display = 'grid';
    sectionInfoListe.style.display = 'none';
  }
}

var sommenbr = 0;
var nbrarme = 0;

function ajoutSomme(prix, nomArme) {
  var somme = document.getElementById('somme');
  sommenbr = sommenbr + prix;
  console.log(sommenbr);
  somme.innerHTML = sommenbr;

  var newDiv = document.createElement('div');
  var newButton = document.createElement('button');
  var delText = document.createTextNode('Del');
  var newText = document.createTextNode(nomArme);
  var inventory = document.querySelector('#inventory_list');
  newDiv.className = 'guns_list';
  newButton.className = 'del_guns';
  newDiv.appendChild(newText);
  newDiv.appendChild(newButton);
  newButton.appendChild(delText);
  inventory.appendChild(newDiv);
  nbrarme = nbrarme + 1;
  console.log(nbrarme);
}

function toutEnlever() {
  var somme = document.getElementById('somme');
  var listeArme = document.querySelector('div.guns_list');
  var inventory = document.querySelector('#inventory_list');
  while (nbrarme > 0) {

    inventory.removeChild(listeArme);
    nbrarme = nbrarme - 1;
    console.log(nbrarme);
    listeArme = document.querySelector('div.guns_list');

  }

  sommenbr = 0;
  somme.innerHTML = sommenbr;
}
