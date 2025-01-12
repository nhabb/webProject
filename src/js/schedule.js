// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the container element where race cards will be appended
  const container = document.getElementById("race-container");
    // Array of race data, each containing round, name, date, and images
  const Races = [
      { round: 1, name: "Bahrain", image: "verstappen.png", country: "bah.png", date: "29-02",month:"FEB-MAR",img:"date.png" },
      { round: 2, name: "Saudi Arabian", image: "verstappen.png", country: "KSA.png", date: "07-09",month:"MAR",img: "date.png" },
      { round: 3, name: "Australian", image: "sainz.png", country: "au.png", date: "22-24",month:"MAR",img: "date.png" },
      { round: 4, name: "Japanese", image: "verstappen.png", country: "jp.png", date: "05-07",month:"APR",img: "date.png" },
      { round: 5, name: "Chinese", image: "verstappen.png", country: "Ch.png", date: "19-21",month: "APR",img: "date.png"},
      { round: 6, name: "Miami", image: "norris.png", country: "us.png", date: "03-05",month: "MAY",img: "date.png"},
      { round: 7, name: "Imola", image: "verstappen.png", country: "it.png", date: "17-19" ,month:"MAY",img: "date.png"},
      { round: 8, name: "Monaco", image: "leclerc.png", country: "Mc.png", date: "24-26",month: "MAY",img: "date.png"},
      { round: 9, name: "Canadian", image: "verstappen.png", country: "cn.png", date: "07-09",month:"JUN",img: "date.png" },
      { round: 10, name: "Spanish", image: "verstappen.png", country: "es.png", date: "21-23",month: "JUN",img: "date.png"},
      { round: 11, name: "Austrian", image: "russell.png", country: "aus.png", date: "28-30",month: "JUN",img: "date.png"},
      { round: 12, name: "British", image: "hamilton.png", country: "Uk.png", date: "05-07",month: "JUL",img: "date.png"},
      { round: 13, name: "Hungarian", image: "piastri.png", country: "hg.png", date: "19-21",month: "JUL",img: "date.png"},
      { round: 14, name: "Belgium", image: "hamilton.png", country: "belg.png", date: "26-28",month: "JUL",img: "date.png"},
      { round: 15, name: "Netherlands", image: "norris.png", country: "NL.png", date: "23-25",month: "AUG",img: "date.png"},
      { round: 16, name: "Italian", image: "leclerc.png", country: "It.png", date: "30-01",month: "AUG-SEP",img: "date.png"},
      { round: 17, name: "Azerbaijan", image: "piastri.png", country: "Az.png", date: "13-15",month: "SEP",img: "date.png"},
      { round: 18, name: "Singapore", image: "norris.png", country: "SP.png", date: "20-22",month: "SEP",img: "date.png"},
      { round: 19, name: "United States", image: "leclerc.png", country: "th.png", date: "18-20",month: "OCT",img: "date.png"},
      { round: 20, name: "Mexican", image: "sainz.png", country: "MX.png", date: "25-27" ,month: "OCT",img: "date.png"},
      { round: 21, name: "Brazilian", image: "verstappen.png", country: "Br.png", date: "01-03",month: "NOV",img: "date.png"},
      { round: 22, name: "Las Vegas", image: "russell.png", country: "US.png", date: "21-23",month: "NOV",img: "date.png"},
      { round: 23, name: "Qatar", image: "verstappen.png", country: "qa.png", date: "29-01",month: "NOV-DEC",img: "date.png"},
      { round: 24, name: "Abu Dhabi", image: "norris.png", country: "UAE.png", date: "06-08" ,month: "DEC",img: "date.png"}
  ];
      // Iterate through each race in the array
  Races.forEach(race => {
        // Create a new div element for each race card
      const card = document.createElement("div");
      card.className = "race-card";
        // Populate the card's HTML content
      card.innerHTML = `
          <div class="race-details">
              <div class="round">${race.round}</div>
            <div class="separator-line"></div>
              <div class="name">${race.name} GP</div>
              <div class="date">${race.date}</div>
              <div class="flag">
                  <img src="../Images/${race.country}" alt="${race.name}">
              </div>
              <div class= "month">${race.month}</div>
              <div class="photo">
                  <img src="../Images/${race.img}" alt="${race.img}">
              </div>
              <div class="driver-image">
                  <img src="../Images/${race.image}" alt="${race.image} winner">
              </div>
          </div>
      `;
        // Append the card to the container element
      container.appendChild(card);
  });
});

