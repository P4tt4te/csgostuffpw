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
            source: 'content/guns/weapons/pistols/CSGO_Desert_Eagle_Inventory.webp',
            number: 0
          },
          {
            label: 'R8 Revolver',
            price: 600,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_R8_Revolver_Inventory.webp',
            number: 0
          },
          {
            label: 'Dual Berettas',
            price: 400,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Dual_Berettas_Inventory.webp',
            number: 0
          },
          {
            label: 'Five-Seven',
            price: 500,
            team: 'ct',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Five-SeveN_Inventory.webp',
            number: 0
          },
          {
            label: 'Glock-18',
            price: 200,
            team: 't',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Glock-18_Inventory.webp',
            number: 0
          }
        ],
        cost: 0,
        list: 0
      }
    },
    methods: {
      ajoutInventaire(item) {
        item.number = item.number + 1.
        this.cost = this.cost + item.price;
        this.list = this.list + 1;
      },
      del(item) {
        item.number = item.number - 1;
        this.cost = this.cost - item.price;
        this.list = this.list - 1;
      },

      toutSupprimer(){
        console.log('toutSupprimer');
        this.cost = 0;
        this.list = 0;
        for (let i in this.weapons) {
          console.log(i);
          this.weapons[i].number = 0;
        }

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
    newButton.setAttribute('v-on:click','del()');
    newDiv.appendChild(newText);
    newDiv.appendChild(newButton);
    newButton.appendChild(delText);
    inventory.appendChild(newDiv);
  }

  function supprimer( evt ) {
      app.toutSupprimer();
  }


}
