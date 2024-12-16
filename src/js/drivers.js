document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const players = [
        { rank: 1, name: "Max ", lastName: "Verstappen", points: 437, team: "rbb-logo.png", image: "max.png", country: "NL.png" },
        { rank: 2, name: "Lando ", lastName: "Norris", points: 374, team: "mc-logo.png", image: "norris.png", country: "UK.png" },
        { rank: 3, name: "Charles ", lastName: "Leclerc", points: 356, team: "fer-logo.png", image: "charles.png", country: "MC.png" },
        { rank: 4, name: "Oscar ", lastName: "Piastri", points: 292, team: "mc-logo.png", image: "piastry.png", country: "🇦🇺.png" },
        { rank: 5, name: "Carlos ", lastName: "Sainz", points: 290, team: "fer-logo.png", image: "carlos.png", country: "🇪🇸.png" },
        { rank: 6, name: "George ", lastName: "Russell", points: 245, team: "mer-logo.png", image: "russel.png", country: "🇬🇧.png" },
        { rank: 7, name: "Lewis ", lastName: "Hamilton", points: 223, team: "mer-logo.png", image: "hamilton.png", country: "🇬🇧.png" },
        { rank: 8, name: "Sergio ", lastName: "Perez", points: 152, team: "rbb-logo.png", image: "perez.png", country: "🇲🇽.png" },
        { rank: 9, name: "Fernando ", lastName: "Alonso", points: 70, team: "am-logo.png", image: "alonso.png", country: "🇪🇸.png" },
        { rank: 10, name: "Pierre ", lastName: "Gasly", points: 42, team: "alp-logo.png", image: "gasly.png", country: "🇫🇷.png" },
        { rank: 11, name: "Nico ", lastName: "Hülkenberg", points: 41, team: "haas-logo.png", image: "hulkenberg.png", country: "🇩🇪.png" },
        { rank: 12, name: "Yuki ", lastName: "Tsunoda", points: 30, team: "RB-logo.png", image: "yuki.png", country: "🇯🇵.png" },
        { rank: 13, name: "Lance ", lastName: "Stroll", points: 24, team: "am-logo.png", image: "stroll.png", country: "Cn.png" },
        { rank: 14, name: "Esteban ", lastName: "Ocon", points: 23, team: "alp-logo.png", image: "doohan.png", country: "🇫🇷.png" },
        { rank: 15, name: "Kevin ", lastName: "Magnussen", points: 16, team: "haas-logo.png", image: "magnusen.png", country: "🇩🇰.png" },
        { rank: 16, name: "Alexander ", lastName: "Albon", points: 12, team: "wil-logo.png", image: "albon.png", country: "🇹🇭.png" },
        { rank: 17, name: "Daniel ", lastName: "Ricciardo", points: 12, team: "RB-logo.png", image: "riccardo.png", country: "🇦u.png" },
        { rank: 18, name: "Oliver ", lastName: "Bearman", points: 7, team: "Haas-.png", image: "bearman.png", country: "UK.png" },
        { rank: 19, name: "Franco ", lastName: "Colapinto", points: 5, team: "wil-logo.png", image: "colapinto.png", country: "arg.png" },
        { rank: 20, name: "Zhou ", lastName: "Guanyu", points: 4, team: "kick-logo.png", image: "zhou.png", country: "Ch.png" },
        { rank: 21, name: "Liam ", lastName: "Lawson", points: 4, team: "RB-logo.png", image: "lawson.png", country: "🇳🇿.png" },
        { rank: 22, name: "Valtteri ", lastName: "Bottas", points: 0, team: "kick-logo.png", image: "bottas.png", country: "🇫🇮.png" },
        { rank: 23, name: "Logan ", lastName: "Sargeant", points: 0, team: "wil-logo.png", image: "seargant.png", country: "🇺🇸.png" },
        { rank: 24, name: "Jack ", lastName: "Doohan", points: 0, team: "alp-logo.png", image: "coolapinto.png", country: "AU.png" },
      ];      
  
  
    players.forEach(player => {
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
  