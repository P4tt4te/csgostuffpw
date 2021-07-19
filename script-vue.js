window.addEventListener('load', lancer);

function lancer(evt) {
  const app = Vue.createApp({
    data() {
      return {
        weapons: [{
            label: 'Desert Eagle',
            price: 700,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Desert_Eagle_Inventory.webp'
          },
          {
            label: 'R8 Revolver',
            price: 600,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_R8_Revolver_Inventory.webp'
          },
          {
            label: 'Dual Berettas',
            price: 400,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Dual_Berettas_Inventory.webp'
          },
          {
            label: 'Five-Seven',
            price: 500,
            team: 'ct',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Five-SeveN_Inventory.webp'
          },
          {
            label: 'Glock-18',
            price: 200,
            team: 't',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Glock-18_Inventory.webp'
          }
        ],
        cost: 0
      }
    },
    methods: {
      ajoutInventaire(item) {
        creationitem(item.label,item);
        this.cost = this.cost + item.price;
        console.log(this.cost);
      },
      delEnleve() {
        console.log('delEnleve');

      },
      toutSupprimer(){
        console.log('toutSupprimer');
        cost = 0;

      }
    }
  })


  app.mount('#liste');



  function creationitem(nom,objet) {
    var newDiv = document.createElement('div');
    var newButton = document.createElement('button');
    var delText = document.createTextNode('Del');
    var newText = document.createTextNode(nom);
    var inventory = document.querySelector('#inventory_list');
    newDiv.className = 'guns_list';
    newButton.className = 'del_guns';
    newDiv.appendChild(newText);
    newDiv.appendChild(newButton);
    newButton.appendChild(delText);
    inventory.appendChild(newDiv);
  }


}
