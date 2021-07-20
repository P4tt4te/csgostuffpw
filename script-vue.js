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
          },
          {
            label: 'P2000',
            price: 200,
            team: 'ct',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_P2000_Inventory.webp',
            number: 0
          },
          {
            label: 'USP-S',
            price: 200,
            team: 'ct',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_USP-S_Inventory.webp',
            number: 0
          },
          {
            label: 'P250',
            price: 300,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_P250_Inventory.webp',
            number: 0
          },
          {
            label: 'Cz75 Auto',
            price: 500,
            team: 'all',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_CZ75-Auto_Inventory.webp',
            number: 0
          },
          {
            label: 'Tec-9',
            price: 500,
            team: 't',
            type: 'pistols',
            source: 'content/guns/weapons/pistols/CSGO_Tec-9_Inventory.webp',
            number: 0
          },
          {
            label: 'Mag-7',
            price: 1300,
            team: 'ct',
            type: 'shotguns',
            source: 'content/guns/weapons/shotguns/CSGO_MAG-7_Inventory.webp',
            number: 0
          },
          {
            label: 'Nova',
            price: 1050,
            team: 'all',
            type: 'shotguns',
            source: 'content/guns/weapons/shotguns/CSGO_Nova_Inventory.webp',
            number: 0
          },
          {
            label: 'Sawed-Off',
            price: 1100,
            team: 't',
            type: 'shotguns',
            source: 'content/guns/weapons/shotguns/CSGO_Sawed-Off_Inventory.webp',
            number: 0
          },
          {
            label: 'XM1014',
            price: 2000,
            team: 'all',
            type: 'shotguns',
            source: 'content/guns/weapons/shotguns/CSGO_XM1014_Inventory.webp',
            number: 0
          },
          {
            label: 'PP-Bizon',
            price: 1400,
            team: 'all',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_PP-Bizon_Inventory.webp',
            number: 0
          },
          {
            label: 'MAC-10',
            price: 1050,
            team: 't',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_MAC-10_Inventory.webp',
            number: 0
          },
          {
            label: 'MP7',
            price: 1500,
            team: 'all',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_MP7_Inventory.webp',
            number: 0
          },
          {
            label: 'MP5-SD',
            price: 1500,
            team: 'all',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_MP5-SD_Inventory.webp',
            number: 0
          },
          {
            label: 'MP9',
            price: 1250,
            team: 'ct',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_MP9_Inventory.webp',
            number: 0
          },
          {
            label: 'P90',
            price: 2350,
            team: 'all',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_P90_Inventory.webp',
            number: 0
          },
          {
            label: 'UMP-45',
            price: 1200,
            team: 'all',
            type: 'smg',
            source: 'content/guns/weapons/smg/CSGO_UMP-45_Inventory.webp',
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
