document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const players = [
        { rank: 1, name: "Max", lastName:"Verstappen", points: 437, team: "Red Bull Racing", image: "verstappen.jpg", country: "🇳🇱" },
        { rank: 2, name: "Lando", lastName:" Norris", points: 374, team: "McLaren", image: "norris.jpg", country: "🇬🇧" },
        { rank: 3, name: "Charles", lastName:" Leclerc", points: 356, team: "Ferrari", image: "leclerc.jpg", country: "🇲🇨" },
        { rank: 4, name: "Oscar", lastName:" Piastri", points: 292, team: "McLaren", image: "piastri.jpg", country: "🇦🇺" },
        { rank: 5, name: "Carlos", lastName:" Sainz", points: 290, team: "Ferrari", image: "sainz.jpg", country: "🇪🇸" },
        { rank: 6, name: "George", lastName:" Russell", points: 245, team: "Mercedes", image: "russell.jpg", country: "🇬🇧" },
        { rank: 7, name: "Lewis", lastName:" Hamilton", points: 223, team: "Mercedes", image: "hamilton.jpg", country: "🇬🇧" },
        { rank: 8, name: "Sergio", lastName:" Perez", points: 190, team: "Red Bull Racing", image: "perez.jpg", country: "🇲🇽" },
        { rank: 9, name: "Fernando", lastName:" Alonso", points: 174, team: "Aston Martin", image: "alonso.jpg", country: "🇪🇸" },
        { rank: 10, name: "Pierre", lastName:" Gasly", points: 152, team: "Alpine", image: "gasly.jpg", country: "🇫🇷" },
        { rank: 11, name: "Esteban", lastName:" Ocon", points: 121, team: "Alpine", image: "ocon.jpg", country: "🇫🇷" },
        { rank: 12, name: "Alexander", lastName:" Albon", points: 95, team: "Williams", image: "albon.jpg", country: "🇹🇭" },
        { rank: 13, name: "Lance", lastName:" Stroll", points: 90, team: "Aston Martin", image: "stroll.jpg", country: "🇨🇦" },
        { rank: 14, name: "Yuki", lastName:" Tsunoda", points: 68, team: "AlphaTauri", image: "tsunoda.jpg", country: "🇯🇵" },
        { rank: 15, name: "Nico", lastName:" Hülkenberg", points: 52, team: "Haas", image: "hulkenberg.jpg", country: "🇩🇪" },
        { rank: 16, name: "Valtteri", lastName:" Bottas", points: 45, team: "Alfa Romeo", image: "bottas.jpg", country: "🇫🇮" },
        { rank: 17, name: "Zhou", lastName:" Guanyu", points: 33, team: "Alfa Romeo", image: "zhou.jpg", country: "🇨🇳" },
        { rank: 18, name: "Kevin", lastName:" Magnussen", points: 31, team: "Haas", image: "magnussen.jpg", country: "🇩🇰" },
        { rank: 19, name: "Daniel", lastName:" Ricciardo", points: 29, team: "AlphaTauri", image: "ricciardo.jpg", country: "🇦🇺" },
        { rank: 20, name: "Logan", lastName:" Sargeant", points: 21, team: "Williams", image: "sargeant.jpg", country: "🇺🇸" },
        { rank: 21, name: "Liam", lastName:" Lawson", points: 15, team: "AlphaTauri", image: "lawson.jpg", country: "🇳🇿" },
        { rank: 22, name: "Felipe", lastName:" Drugovich", points: 10, team: "Aston Martin", image: "drugovich.jpg", country: "🇧🇷" },
        { rank: 23, name: "Robert", lastName:" Shwartzman", points: 5, team: "Ferrari", image: "shwartzman.jpg", country: "🇷🇺" },
        { rank: 24, name: "Oliver", lastName:" Bearman", points: 3, team: "Haas", image: "bearman.jpg", country: "🇬🇧" }
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
  