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

function ajoutSomme(prix) {
  var somme = document.getElementById('somme');
  sommenbr = sommenbr + prix;
  console.log(sommenbr);
  somme.innerHTML = sommenbr;
}
