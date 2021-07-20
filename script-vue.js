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
          },
          {
            label: 'AK-47',
            price: 2700,
            team: 't',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_AK-47_Inventory.webp',
            number: 0
          },
          {
            label: 'AUG',
            price: 3300,
            team: 'ct',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_AUG_Inventory.webp',
            number: 0
          },
          {
            label: 'FAMAS',
            price: 2050,
            team: 'ct',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_FAMAS_Inventory.webp',
            number: 0
          },
          {
            label: 'Galil AR',
            price: 1800,
            team: 't',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_Galil_AR_Inventory.webp',
            number: 0
          },
          {
            label: 'M4A4',
            price: 3100,
            team: 'ct',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_M4A4_Inventory.webp',
            number: 0
          },
          {
            label: 'M4A1-S',
            price: 2900,
            team: 'ct',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_M4A1-S_Inventory.webp',
            number: 0
          },
          {
            label: 'SG 553',
            price: 3000,
            team: 't',
            type: 'rifle',
            source: 'content/guns/weapons/rifles/CSGO_SG_553_Inventory.webp',
            number: 0
          },
          {
            label: 'M249',
            price: 5200,
            team: 'all',
            type: 'lmg',
            source: 'content/guns/weapons/lmg/CSGO_M249_Inventory.webp',
            number: 0
          },
          {
            label: 'Negev',
            price: 1700,
            team: 'all',
            type: 'lmg',
            source: 'content/guns/weapons/lmg/CSGO_Negev_Inventory.web',
            number: 0
          },
          {
            label: 'AWP',
            price: 4750,
            team: 'all',
            type: 'sniper',
            source: 'content/guns/weapons/sniper/CSGO_AWP_Inventory.webp',
            number: 0
          },
          {
            label: 'G3SG1',
            price: 5000,
            team: 't',
            type: 'sniper',
            source: 'content/guns/weapons/sniper/CSGO_G3SG1_Inventory.webp',
            number: 0
          },
          {
            label: 'SCAR-20',
            price: 5000,
            team: 'ct',
            type: 'sniper',
            source: 'content/guns/weapons/sniper/CSGO_SCAR-20_Inventory.webp',
            number: 0
          },
          {
            label: 'SSG 08',
            price: 1700,
            team: 'all',
            type: 'sniper',
            source: 'content/guns/weapons/sniper/CSGO_SSG_08_Inventory.webp',
            number: 0
          },
          {
            label: 'HE Grenade',
            price: 300,
            team: 'all',
            type: 'grenade',
            source: 'content/guns/grenades/Hegrenadehud_csgo.webp',
            number: 0
          },
          {
            label: 'Molotov',
            price: 400,
            team: 't',
            type: 'grenade',
            source: 'content/guns/grenades/Molotovhud.webp',
            number: 0
          },
          {
            label: 'Incendiary',
            price: 600,
            team: 'ct',
            type: 'grenade',
            source: 'content/guns/grenades/Incgrenadehud_csgo.webp',
            number: 0
          },
          {
            label: 'Flashbang',
            price: 200,
            team: 'all',
            type: 'grenade',
            source: 'content/guns/grenades/Flashbanghud_csgo.webp',
            number: 0
          },
          {
            label: 'Smoke',
            price: 300,
            team: 'all',
            type: 'grenade',
            source: 'content/guns/grenades/Smokegrenadehud_csgo.webp',
            number: 0
          },
          {
            label: 'Decoy',
            price: 300,
            team: 'all',
            type: 'grenade',
            source: 'content/guns/grenades/Decoyhud_csgo.webp',
            number: 0
          },
          {
            label: 'Zeus x27',
            price: 200,
            team: 'all',
            type: 'equipment',
            source: 'content/guns/equipement/Taserhud.webp',
            number: 0
          },
          {
            label: 'Kevlar Vest',
            price: 650,
            team: 'all',
            type: 'equipment',
            source: 'content/guns/equipement/Kevlarhud_csgo.webp',
            number: 0
          },
          {
            label: 'Kevlar/Helmet',
            price: 1000,
            team: 'all',
            type: 'equipment',
            source: 'content/guns/equipement/Assaultsuithud_csgo.webp',
            number: 0
          },
          {
            label: 'Defuse Kit',
            price: 400,
            team: 'ct',
            type: 'equipment',
            source: 'content/guns/equipement/Defuserhud_csgo.webp',
            number: 0
          },
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
        this.cost = 0;
        this.list = 0;
        for (let i in this.weapons) {
          this.weapons[i].number = 0;
        }

      }
    }
  })


  app.mount('#liste');




}
