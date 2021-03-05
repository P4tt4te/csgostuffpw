// permet d'afficher ou cacher la div inventaire en appuyant sur le bouton view inventory //

function masquer() {
  var divInfo = document.getElementById("inventory");
  if (divInfo.style.display == 'none')
    divInfo.style.display = 'flex';
  else
    divInfo.style.display = 'none';
}

function changementPage(typeButton){
  var sectionInfoMain = document.querySelector("#main");
  var sectionInfoListe = document.querySelector("#liste");
  if (typeButton == 1) {
    sectionInfoMain.style.display = 'none';
    sectionInfoListe.style.display = 'grid';
  } else {
    sectionInfoMain.style.display = 'grid';
    sectionInfoListe.style.display = 'none';
  }
}
