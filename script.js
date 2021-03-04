/* permet d'afficher ou cacher la div inventaire en appuyant sur le bouton view inventory */

function masquer() 
{
    var divInfo = document.getElementById("inventory");
    if (divInfo.style.display == 'none')
        divInfo.style.display = 'flex';
    else
        divInfo.style.display = 'none';
}

