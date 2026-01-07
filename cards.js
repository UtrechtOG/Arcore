// cards.js - alle Karten
const cards = [
  {
    name: "Elf",
    hp: 100,
    attacks: [
      {name: "Icespike", type: "damage", value: 7},
      {name: "Frost", type: "freeze", value: 2}, // Gegner 2 Runden eingefroren
      {name: "Lowkick", type: "damageChance", value: 4, chance: 0.2, crit: 10},
      {name: "Heal", type: "heal", value: 10}
    ]
  },
  {
    name: "Leer",
    hp: 0,
    attacks: []
  },
  {
    name: "Leer",
    hp: 0,
    attacks: []
  },
  {
    name: "Leer",
    hp: 0,
    attacks: []
  },
  {
    name: "Leer",
    hp: 0,
    attacks: []
  }
];

// Optional: kann lokal gespeichert werden, falls Inventar lokal bleiben soll
localStorage.setItem('inventoryData', JSON.stringify(cards));
