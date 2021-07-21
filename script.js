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
  var header = document.querySelector('header');
  if (typeButton == 1) {
    sectionInfoMain.style.display = 'none';
    sectionInfoListe.style.display = 'grid';
    if (window.matchMedia("(min-width: 1025px)").matches) {
      header.style.height = '180px';
    } else {
      header.style.height = '134px';
    }
  } else {
    sectionInfoMain.style.display = 'grid';
    sectionInfoListe.style.display = 'none';
    if (window.matchMedia("(min-width: 1025px)").matches) {
      header.style.height = '90px';
    } else {
      header.style.height = '67px';
    }
  }
}
