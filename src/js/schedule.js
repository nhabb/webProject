document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const Races = [
        { round: "TESTING", name: "Sakhir",image: "max.png", country: "bah.png", date:"21-23" },
        { round: 1, name: "Bahrain",image: "norris.png", country: "bah.png", date:"29-02" },
        { round: 2, name: "Saudi Arabia",image: "charles.png", country: "KSA.png", date: "07-09" },
        { round: 3, name: "Australia",image: "piastry.png", country: "au.png", date: "24/3"},
        { round: 4, name: "Japan",image: "carlos.png", country: "jp.png", date: "7/4"},
        { round: 6, name: "China",image: "russel.png", country: "Ch.png", date: "21/4"},
        { round: 7, name: "Miami",image: "hamilton.png", country: "us.png", date:"5/5" },
        { round: 8, name: "Imola",image: "perez.png", country: "italy.png", date: "19/5"},
        { round: 9, name: "Monaco",image: "alonso.png", country: "Mc.png", date: "26/5"},
        { round: 10, name: "Canada",image: "gasly.png", country: "ca.png", date:"9/6" },
        { round: 11, name: "Spain",image: "hulkenberg.png", country: "es.png", date: "23/6"},
        { round: 12, name: "Austria",image: "yuki.png", country: "aus.png", date:"30/6" },
        { round: 13, name: "Great Britain",image: "stroll.png", country: "Uk.png", date: "7/7"},
        { round: 14, name: "Hungary",image: "doohan.png", country: "hg.png", date: "21/7"},
        { round: 15, name: "Belguim",image: "magnusen.png", country: "dk.png", date: },
        { round: 16, name: "Netherlands",image: "al.png", country: "NL.png", date: "28/8"},
        { round: 16, name: "Italy",image: "albon.png", country: "It.png", date: "01/9"},
        { round: 16, name: "Azerbaijan",image: "albon.png", country: "Az.png", date: "15/9"},
        { round: 16, name: "Singapore",image: "albon.png", country: "SP.png", date: "22/9"},
        { round: 16, name: "United States",image: "albon.png", country: "th.png", date: "20/10" },
        { round: 16, name: "Mexico",image: "albon.png", country: "MX.png" , date:"27/10"},
        { round: 16, name: "Brazil",image: "albon.png", country: "BZ.png" , date:"3/11"},
        { round: 16, name: "Las Vegas",image: "albon.png", country: "US.png" , date: "23/11"},
        { round: 16, name: "Qatar",image: "albon.png", country: "QUATAR.png" , date: "01/12"},
        { round: 16, name: "Abu Dhabi",image: "albon.png", country: "UAE.png" , date: "06-08"},

      ];      
  
  
    Racess.forEach(race => {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
      <div class="first-div">
        <div class="round">${player.round}</div>
            <div class="points">
                <span class="points-number">${player.points}</span>
                <span class="pts">PTS</span>
            </div>
            </div>
            <div class="separator-line"></div>
            <div class="player-name">
            <div class="player-dets">
                <div class="name-title">${player.name}</div>
                <div class="name">${player.lastName}</div>
                </div>
             <div class="flag">
                <img src="../Images/${player.country}" alt="${player.country}">
            </div>
            </div>
            <div class="separator-line"></div>
            <div class="images">
            <div class="team-image">
            <img src="../Images/${player.team}">
            </div>
            <div class="player-image">
            <img src="../Images/${player.image}" alt="${player.name} Image">
            </div>
            </div>
        </div>
      `;
      container.appendChild(card);
    });
  });
  