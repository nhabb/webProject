document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const Races = [
        { rank: 1, name: "Max ",image: "max.png", country: "NL.png", date: },
        { rank: 2, name: "Lando ",image: "norris.png", country: "UK.png", date: },
        { rank: 3, name: "Charles ",image: "charles.png", country: "MC.png", date: },
        { rank: 4, name: "Oscar ",image: "piastry.png", country: "au.png", date: },
        { rank: 5, name: "Carlos ",image: "carlos.png", country: "es.png", date: },
        { rank: 6, name: "George ",image: "russel.png", country: "uk.png", date: },
        { rank: 7, name: "Lewis ",image: "hamilton.png", country: "uk.png", date: },
        { rank: 8, name: "Sergio ",image: "perez.png", country: "mx.png", date: },
        { rank: 9, name: "Fernando ",image: "alonso.png", country: "es.png", date: },
        { rank: 10, name: "Pierre ",image: "gasly.png", country: "fr.png", date: },
        { rank: 11, name: "Nico ",image: "hulkenberg.png", country: "dk.png", date: },
        { rank: 12, name: "Yuki ",image: "yuki.png", country: "jp.png", date: },
        { rank: 13, name: "Lance ",image: "stroll.png", country: "Cn.png", date: },
        { rank: 14, name: "Esteban ",image: "doohan.png", country: "fr.png", date: },
        { rank: 15, name: "Kevin ",image: "magnusen.png", country: "dk.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png", date: },
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png" , date:},
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png" , date:},
        { rank: 16, name: "Alexander ",image: "albon.png", country: "th.png" , date:},
      ];      
  
  
    Racess.forEach(race => {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
      <div class="first-div">
        <div class="rank">${player.rank}</div>
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
  