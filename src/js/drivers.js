document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const players = [
        { rank: 1, name: "Max Verstappen", points: 437, team: "rbb-logo.png", image: "max.png", country: "NL.png" },
        { rank: 2, name: "Lando Norris", points: 374, team: "mc-logo.png", image: "norris.png", country: "UK.png" },
        { rank: 3, name: "Charles Leclerc", points: 356, team: "fer-logo.png", image: "charles.png", country: "MC.png" },
        { rank: 4, name: "Oscar Piastri", points: 292, team: "mc-logo.png", image: "piastry.png", country: "🇦🇺.png" },
        { rank: 5, name: "Carlos Sainz", points: 290, team: "fer-logo.png", image: "carlos.png", country: "🇪🇸.png" },
        { rank: 6, name: "George Russell", points: 245, team: "mer-logo.png", image: "russel.png", country: "🇬🇧.png" },
        { rank: 7, name: "Lewis Hamilton", points: 223, team: "mer-logo.png", image: "hamilton.png", country: "🇬🇧.png" },
        { rank: 8, name: "Sergio Perez", points: 152, team: "rbb-logo.png", image: "perez.png", country: "🇲🇽.png" },
        { rank: 9, name: "Fernando Alonso", points: 70, team: "am-logo.png", image: "alonso.png", country: "🇪🇸.png" },
        { rank: 10, name: "Pierre Gasly", points: 42, team: "alp-logo.png", image: "gasly.png", country: "🇫🇷.png" },
        { rank: 11, name: "Nico Hülkenberg", points: 41, team: "haas-logo.png", image: "hulkenberg.png", country: "🇩🇪.png" },
        { rank: 12, name: "Yuki Tsunoda", points: 30, team: "RB-logo.png", image: "yuki.png", country: "🇯🇵.png" },
        { rank: 13, name: "Lance Stroll", points: 24, team: "am-logo.png", image: "stroll.png", country: "Cn.png" },
        { rank: 14, name: "Esteban Ocon", points: 23, team: "alp-logo.png", image: "doohan.png", country: "🇫🇷.png" },
        { rank: 15, name: "Kevin Magnussen", points: 16, team: "haas-logo.png", image: "magnusen.png", country: "🇩🇰.png" },
        { rank: 16, name: "Alexander Albon", points: 12, team: "wil-logo.png", image: "albon.png", country: "🇹🇭.png" },
        { rank: 17, name: "Daniel Ricciardo", points: 12, team: "RB-logo.png", image: "riccardo.png", country: "🇦u.png" },
        { rank: 18, name: "Oliver Bearman", points: 7, team: "Haas-.png", image: "bearman.png", country: "UK.png" },
        { rank: 19, name: "Franco Colapinto", points: 5, team: "wil-logo.png", image: "colapinto.png", country: "arg.png" },
        { rank: 20, name: "Zhou Guanyu", points: 4, team: "kick-logo.png", image: "zhou.png", country: "Ch.png" },
        { rank: 21, name: "Liam Lawson", points: 4, team: "RB-logo.png", image: "lawson.png", country: "🇳🇿.png" },
        { rank: 22, name: "Valtteri Bottas", points: 0, team: "kick-logo.png", image: "bottas.png", country: "🇫🇮.png" },
        { rank: 23, name: "Logan Sargeant", points: 0, team: "wil-logo.png", image: "seargant.png", country: "🇺🇸.png" },
        { rank: 24, name: "Jack Doohan", points: 0, team: "alp-logo.png", image: "coolapinto.png", country: "AU.png" },
      ];      
  
  
    players.forEach(player => {
      const card = document.createElement("div");
      card.className = "player-card";
      card.innerHTML = `
        <div class="rank">${player.rank}</div>
        <div class="player-info">
            <div class="points">
                <span class="points-number">${player.points}</span>
                <span class="pts">PTS</span>
            </div>
                <div class="separator-line"></div>
            <div class="player-name">
            <div >
                <span class="name-title">${player.name}</span>
                <span class="name">${player.lastName}</span>
                <div>
                            <div class="flag">
                <img src="../images/${player.country + ".png"}" alt="Netherlands Flag">
            </div>
                <div class="separator-line"></div>
                <div class="team-name">${player.team}</div>
            </div>

                <div class="separator-line"></div>
        </div>
        <div class="player-image">
            <img src="../images/${player.image}" alt="${player.name} + Image">
        </div>
        <div class="position-number">1</div>
    </div>
      `;
      container.appendChild(card);
    });
  });
  