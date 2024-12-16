document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const players = [
        { rank: 1, name: "Max Verstappen", points: 437, team: "red-bull-racing-logo.png", image: "max.png", country: "netherlands.png" },
        { rank: 2, name: "Lando Norris", points: 374, team: "McLaren", image: "norris.png", country: "UK.png" },
        { rank: 3, name: "Charles Leclerc", points: 356, team: "Ferrari", image: "charles.png", country: "Monaco.png" },
        { rank: 4, name: "Oscar Piastri", points: 292, team: "McLaren", image: "piastry.png", country: "🇦🇺.png" },
        { rank: 5, name: "Carlos Sainz", points: 290, team: "Ferrari", image: "carlos.png", country: "🇪🇸.png" },
        { rank: 6, name: "George Russell", points: 245, team: "Mercedes", image: "russel.png", country: "🇬🇧.png" },
        { rank: 7, name: "Lewis Hamilton", points: 223, team: "Mercedes", image: "hamilton.png", country: "🇬🇧.png" },
        { rank: 8, name: "Sergio Perez", points: 190, team: "Red Bull Racing", image: "perez.png", country: "🇲🇽.png" },
        { rank: 9, name: "Fernando Alonso", points: 174, team: "Aston Martin", image: "alonso.png", country: "🇪🇸.png" },
        { rank: 10, name: "Pierre Gasly", points: 152, team: "Alpine", image: "gasly.png", country: "🇫🇷.png" },
        { rank: 11, name: "Esteban Ocon", points: 121, team: "Alpine", image: "ocon.png", country: "🇫🇷.png" },
        { rank: 12, name: "Alexander Albon", points: 95, team: "Williams", image: "albon.png", country: "🇹🇭.png" },
        { rank: 13, name: "Lance Stroll", points: 90, team: "Aston Martin", image: "stroll.png", country: "🇨🇦.png" },
        { rank: 14, name: "Yuki Tsunoda", points: 68, team: "RB", image: "yuki.png", country: "🇯🇵.png" },
        { rank: 15, name: "Nico Hülkenberg", points: 52, team: "Haas", image: "hulkenberg.png", country: "🇩🇪.png" },
        { rank: 16, name: "Valtteri Bottas", points: 45, team: "Alfa Romeo", image: "bottas.png", country: "🇫🇮.png" },
        { rank: 17, name: "Zhou Guanyu", points: 33, team: "Alfa Romeo", image: "zhou.png", country: "🇨🇳.png" },
        { rank: 18, name: "Kevin Magnussen", points: 31, team: "Haas", image: "magnusen.png", country: "🇩🇰.png" },
        { rank: 19, name: "Daniel Ricciardo", points: 29, team: "RB", image: "riccardo.png", country: "🇦u.png" },
        { rank: 20, name: "Logan Sargeant", points: 21, team: "Williams", image: "seargant.png", country: "🇺🇸.png" },
        { rank: 21, name: "Liam Lawson", points: 15, team: "RB", image: "lawson.png", country: "🇳🇿.png" },
        { rank: 22, name: "Felipe Drugovich", points: 10, team: "Aston Martin", image: "drugovich.png", country: "🇧🇷.png" },
        { rank: 23, name: "Robert Shwartzman", points: 5, team: "Ferrari", image: "shwartzman.png", country: "🇷🇺.png" },
        { rank: 24, name: "Oliver Bearman", points: 3, team: "Haas", image: "bearman.png", country: "🇬🇧.png" }
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
  