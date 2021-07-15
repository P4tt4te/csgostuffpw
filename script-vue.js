window.addEventListener('load',lancer);

function lancer( evt ) {
  const app = Vue.createApp({
    data() {
      return {
        weapons: [
          { label: 'Desert Eagle',price: 700,team: 'all',type: 'pistols',source: 'content/guns/weapons/pistols/CSGO_Desert_Eagle_Inventory.webp'},
          { label: 'R8 Revolver',price: 600,team: 'all',type: 'pistols',source: 'content/guns/weapons/pistols/CSGO_R8_Revolver_Inventory.webp'},
          { label: 'Dual Berettas',price: 400,team: 'all',type: 'pistols',source: 'content/guns/weapons/pistols/CSGO_Dual_Berettas_Inventory.webp'},
          { label: 'Five-Seven',price: 500,team: 'ct',type: 'pistols',source: 'content/guns/weapons/pistols/CSGO_Five-SeveN_Inventory.webp'},
          { label: 'Glock-18',price: 200,team: 't',type: 'pistols',source: 'content/guns/weapons/pistols/CSGO_Glock-18_Inventory.webp'}
        ]
      }
    }
  })

  app.mount('#conteneur_item');
}
