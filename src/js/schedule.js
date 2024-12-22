document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("race-container");

  const Races = [
      { round: "TESTING", name: "Sakhir", image: "sakhir.png", country: "bah.png", date: "21-23" },
      { round: 1, name: "Bahrain", image: "max.png", country: "bah.png", date: "29-02" },
      { round: 2, name: "Saudi Arabia", image: "max.png", country: "KSA.png", date: "07-09" },
      { round: 3, name: "Australia", image: "carlos.png", country: "au.png", date: "22-24" },
      { round: 4, name: "Japan", image: "max.png", country: "jp.png", date: "05-07" },
      { round: 5, name: "China", image: "max.png", country: "Ch.png", date: "19-21" },
      { round: 6, name: "Miami", image: "lado.png", country: "us.png", date: "03-05" },
      { round: 7, name: "Imola", image: "max.png", country: "italy.png", date: "17-19" },
      { round: 7, name: "Monaco", image: "leclerc.png", country: "Mc.png", date: "24-26" },
      { round: 8, name: "Canada", image: "max.png", country: "ca.png", date: "07-09" },
      { round: 9, name: "Spain", image: "max.png", country: "es.png", date: "21-23" },
      { round: 10, name: "Austria", image: "georges.png", country: "aus.png", date: "28-30" },
      { round: 11, name: "Great Britain", image: "hamilton.png", country: "Uk.png", date: "05-07" },
      { round: 12, name: "Hungary", image: "piastry.png", country: "hg.png", date: "19-21" },
      { round: 13, name: "Belgium", image: "hamilton.png", country: "dk.png", date: "26-28" },
      { round: 14, name: "Netherlands", image: "lando.png", country: "NL.png", date: "23-25" },
      { round: 15, name: "Italy", image: "leclerc.png", country: "It.png", date: "30-01" },
      { round: 16, name: "Azerbaijan", image: "piastry.png", country: "Az.png", date: "13-15" },
      { round: 17, name: "Singapore", image: "lnado.png", country: "SP.png", date: "20-22" },
      { round: 18, name: "United States", image: "leclerc.png", country: "th.png", date: "18-20" },
      { round: 19, name: "Mexico", image: "carlos.png", country: "MX.png", date: "25-27" },
      { round: 20, name: "Brazil", image: "max.png", country: "BZ.png", date: "01-03" },
      { round: 21, name: "Las Vegas", image: "george.png", country: "US.png", date: "21-23" },
      { round: 22, name: "Qatar", image: "max.png", country: "QUATAR.png", date: "29-01" },
      { round: 23, name: "Abu Dhabi", image: "lando.png", country: "UAE.png", date: "06-08" }
  ];

  Races.forEach(race => {
      const card = document.createElement("div");
      card.className = "race-card";
      card.innerHTML = `
          <div class="race-details">
              <div class="round">Round: ${race.round}</div>
              <div class="name">Name: ${race.name}</div>
              <div class="date">Date: ${race.date}</div>
              <div class="flag">
                  <img src="../Images/${race.country}" alt="${race.name} Flag">
              </div>
              <div class="driver-image">
                  <img src="../Images/${race.image}" alt="${race.name} winner">
              </div>
          </div>
      `;
      container.appendChild(card);
  });
});
