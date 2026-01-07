// cards.js – alle Karten im Spiel (20 Karten, funktional)
const cards = [
  // --- Alte 5 Karten ---
  {
    name: "Elf",
    hp: 100,
    attacks: [
      { name: "Icespike", type: "damage", value: 7 },
      { name: "Frost", type: "freeze", value: 2 },
      { name: "Lowkick", type: "damageChance", value: 4, chance: 0.2, crit: 10 },
      { name: "Heal", type: "heal", value: 10 }
    ]
  },
  {
    name: "Ork",
    hp: 110,
    attacks: [
      { name: "Keulenschlag", type: "damage", value: 9 },
      { name: "Wut", type: "damageBoost", value: 2, duration: 2 },
      { name: "Stampfen", type: "damageChance", value: 6, chance: 0.3, crit: 12 },
      { name: "Brüllen", type: "stun", value: 1 }
    ]
  },
  {
    name: "Magier",
    hp: 90,
    attacks: [
      { name: "Feuerball", type: "damage", value: 8 },
      { name: "Blitz", type: "damageChance", value: 5, chance: 0.4, crit: 14 },
      { name: "Mana Heal", type: "heal", value: 12 },
      { name: "Chaos", type: "random" }
    ]
  },
  {
    name: "Ritter",
    hp: 120,
    attacks: [
      { name: "Schwertschlag", type: "damage", value: 7 },
      { name: "Schildblock", type: "shield", value: 2 },
      { name: "Konter", type: "damageChance", value: 5, chance: 0.25, crit: 11 },
      { name: "Ehre", type: "heal", value: 8 }
    ]
  },
  {
    name: "Assassine",
    hp: 85,
    attacks: [
      { name: "Dolchstoß", type: "damage", value: 6 },
      { name: "Vergiften", type: "dot", value: 4, duration: 3 },
      { name: "Todesstoß", type: "damageChance", value: 3, chance: 0.2, crit: 18 },
      { name: "Rauchbombe", type: "dodge", value: 1 }
    ]
  },

  // --- Neue 15 Karten ---
  {
    name: "Goblin",
    hp: 70,
    attacks: [
      { name: "Keilerei", type: "damage", value: 5 },
      { name: "Flinktritt", type: "damageChance", value: 3, chance: 0.3, crit: 8 },
      { name: "Stehlen", type: "random" },
      { name: "Heiltrank", type: "heal", value: 6 }
    ]
  },
  {
    name: "Troll",
    hp: 130,
    attacks: [
      { name: "Hammerschlag", type: "damage", value: 10 },
      { name: "Erdbeben", type: "damage", value: 6 },
      { name: "Regeneration", type: "heal", value: 8 },
      { name: "Stampfen", type: "stun", value: 1 }
    ]
  },
  {
    name: "Drache",
    hp: 150,
    attacks: [
      { name: "Feueratem", type: "damage", value: 12 },
      { name: "Flammenwurf", type: "damage", value: 9 },
      { name: "Schweifhieb", type: "damage", value: 7 },
      { name: "Brüllen", type: "stun", value: 1 }
    ]
  },
  {
    name: "Skelettritter",
    hp: 95,
    attacks: [
      { name: "Knochenschwert", type: "damage", value: 7 },
      { name: "Rüstungsbrecher", type: "damage", value: 5 },
      { name: "Finte", type: "damageChance", value: 4, chance: 0.2, crit: 10 },
      { name: "Ewige Wachsamkeit", type: "heal", value: 5 }
    ]
  },
  {
    name: "Hexe",
    hp: 80,
    attacks: [
      { name: "Fluch", type: "dot", value: 4, duration: 3 },
      { name: "Magischer Pfeil", type: "damage", value: 6 },
      { name: "Heilzauber", type: "heal", value: 8 },
      { name: "Chaosblitz", type: "random" }
    ]
  },
  {
    name: "Paladin",
    hp: 110,
    attacks: [
      { name: "Heiliger Schlag", type: "damage", value: 8 },
      { name: "Schildwall", type: "shield", value: 3 },
      { name: "Göttliche Heilung", type: "heal", value: 10 },
      { name: "Strafe", type: "damage", value: 6 }
    ]
  },
  {
    name: "Dämon",
    hp: 125,
    attacks: [
      { name: "Höllenfeuer", type: "damage", value: 11 },
      { name: "Krallenhieb", type: "damage", value: 8 },
      { name: "Seelenraub", type: "heal", value: 6 },
      { name: "Furcht", type: "stun", value: 1 }
    ]
  },
  {
    name: "Elementar",
    hp: 100,
    attacks: [
      { name: "Eisstrahl", type: "damage", value: 7 },
      { name: "Feuerball", type: "damage", value: 9 },
      { name: "Steinhaut", type: "shield", value: 3 },
      { name: "Blitzschlag", type: "damage", value: 8 }
    ]
  },
  {
    name: "Nekromant",
    hp: 85,
    attacks: [
      { name: "Untotenbeschwörung", type: "damage", value: 6 },
      { name: "Seelenfessel", type: "stun", value: 1 },
      { name: "Dunkle Heilung", type: "heal", value: 7 },
      { name: "Schwarzer Pfeil", type: "damage", value: 8 }
    ]
  },
  {
    name: "Ranger",
    hp: 90,
    attacks: [
      { name: "Pfeilsalve", type: "damage", value: 7 },
      { name: "Kopfstoß", type: "damage", value: 5 },
      { name: "Heiltrank", type: "heal", value: 6 },
      { name: "Blitzschuss", type: "damageChance", value: 4, chance: 0.3, crit: 10 }
    ]
  },
  {
    name: "Schamane",
    hp: 95,
    attacks: [
      { name: "Feuerheilung", type: "heal", value: 9 },
      { name: "Blitzschlag", type: "damage", value: 8 },
      { name: "Vergiftung", type: "dot", value: 3, duration: 3 },
      { name: "Geisterschlag", type: "damage", value: 6 }
    ]
  },
  {
    name: "Berserker",
    hp: 105,
    attacks: [
      { name: "Wutschlag", type: "damage", value: 9 },
      { name: "Tobsuchtsanfall", type: "damageBoost", value: 2, duration: 2 },
      { name: "Kampfschrei", type: "stun", value: 1 },
      { name: "Klingenwirbel", type: "damage", value: 7 }
    ]
  },
  {
    name: "Vampir",
    hp: 100,
    attacks: [
      { name: "Biss", type: "damage", value: 7 },
      { name: "Blutsaugen", type: "heal", value: 6 },
      { name: "Schattenschlag", type: "damage", value: 8 },
      { name: "Verkrüppeln", type: "stun", value: 1 }
    ]
  },
  {
    name: "Kobold",
    hp: 75,
    attacks: [
      { name: "Flinkschlag", type: "damage", value: 5 },
      { name: "Hinterhalt", type: "damageChance", value: 4, chance: 0.25, crit: 9 },
      { name: "Finten", type: "dodge", value: 1 },
      { name: "Heiltrank", type: "heal", value: 5 }
    ]
  },
  {
    name: "Golem",
    hp: 140,
    attacks: [
      { name: "Felswurf", type: "damage", value: 10 },
      { name: "Erdrutsch", type: "damage", value: 9 },
      { name: "Steinhaut", type: "shield", value: 4 },
      { name: "Stampfen", type: "stun", value: 1 }
    ]
  },
  {
    name: "Phönix",
    hp: 95,
    attacks: [
      { name: "Feuerflug", type: "damage", value: 9 },
      { name: "Wiedergeburt", type: "heal", value: 10 },
      { name: "Flammenfeuer", type: "damage", value: 7 },
      { name: "Hitzewelle", type: "damage", value: 6 }
    ]
  }
];

// Offline speichern
localStorage.setItem("inventoryData", JSON.stringify(cards));
