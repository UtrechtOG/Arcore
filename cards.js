// cards.js – Alle Karten im Spiel (reine Daten, keine Logik)

const cards = [
  {
    name: "Elf",
    hp: 100,
    attacks: [
      { name: "Icespike", type: "damage", value: 7 },
      { name: "Frost", type: "freeze", value: 2 }, // 2 Runden einfrieren
      { name: "Lowkick", type: "damageChance", value: 4, chance: 0.2, crit: 10 },
      { name: "Heal", type: "heal", value: 10 }
    ]
  },

  {
    name: "Ork",
    hp: 110,
    attacks: [
      { name: "Keulenschlag", type: "damage", value: 9 },
      { name: "Wut", type: "damageBoost", value: 2, duration: 2 }, // +2 Schaden für 2 Runden
      { name: "Stampfen", type: "damageChance", value: 6, chance: 0.3, crit: 12 },
      { name: "Brüllen", type: "stun", value: 1 } // Gegner verliert 1 Zug
    ]
  },

  {
    name: "Magier",
    hp: 90,
    attacks: [
      { name: "Feuerball", type: "damage", value: 8 },
      { name: "Blitz", type: "damageChance", value: 5, chance: 0.4, crit: 14 },
      { name: "Mana Heal", type: "heal", value: 12 },
      { name: "Chaos", type: "random" } // zufälliger Effekt
    ]
  },

  {
    name: "Ritter",
    hp: 120,
    attacks: [
      { name: "Schwertschlag", type: "damage", value: 7 },
      { name: "Schildblock", type: "shield", value: 2 }, // 2 Angriffe blocken
      { name: "Konter", type: "damageChance", value: 5, chance: 0.25, crit: 11 },
      { name: "Ehre", type: "heal", value: 8 }
    ]
  },

  {
    name: "Assassine",
    hp: 85,
    attacks: [
      { name: "Dolchstoß", type: "damage", value: 6 },
      { name: "Vergiften", type: "dot", value: 4, duration: 3 }, // Schaden über Zeit
      { name: "Todesstoß", type: "damageChance", value: 3, chance: 0.2, crit: 18 },
      { name: "Rauchbombe", type: "dodge", value: 1 } // nächster Angriff verfehlt
    ]
  }
];

// Inventar initial speichern (offline)
localStorage.setItem("inventoryData", JSON.stringify(cards));
