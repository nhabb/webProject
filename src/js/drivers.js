document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("player-container");
  
    const players = [
        { rank: 1, name: "Max Verstappen", points: 437, team: "Red Bull Racing", image: "verstappen.jpg", country: "🇳🇱" },
        { rank: 2, name: "Lando Norris", points: 374, team: "McLaren", image: "norris.jpg", country: "🇬🇧" },
        { rank: 3, name: "Charles Leclerc", points: 356, team: "Ferrari", image: "leclerc.jpg", country: "🇲🇨" },
        { rank: 4, name: "Oscar Piastri", points: 292, team: "McLaren", image: "piastri.jpg", country: "🇦🇺" },
        { rank: 5, name: "Carlos Sainz", points: 290, team: "Ferrari", image: "sainz.jpg", country: "🇪🇸" },
        { rank: 6, name: "George Russell", points: 245, team: "Mercedes", image: "russell.jpg", country: "🇬🇧" },
        { rank: 7, name: "Lewis Hamilton", points: 223, team: "Mercedes", image: "hamilton.jpg", country: "🇬🇧" },
        { rank: 8, name: "Sergio Perez", points: 190, team: "Red Bull Racing", image: "perez.jpg", country: "🇲🇽" },
        { rank: 9, name: "Fernando Alonso", points: 174, team: "Aston Martin", image: "alonso.jpg", country: "🇪🇸" },
        { rank: 10, name: "Pierre Gasly", points: 152, team: "Alpine", image: "gasly.jpg", country: "🇫🇷" },
        { rank: 11, name: "Esteban Ocon", points: 121, team: "Alpine", image: "ocon.jpg", country: "🇫🇷" },
        { rank: 12, name: "Alexander Albon", points: 95, team: "Williams", image: "albon.jpg", country: "🇹🇭" },
        { rank: 13, name: "Lance Stroll", points: 90, team: "Aston Martin", image: "stroll.jpg", country: "🇨🇦" },
        { rank: 14, name: "Yuki Tsunoda", points: 68, team: "AlphaTauri", image: "tsunoda.jpg", country: "🇯🇵" },
        { rank: 15, name: "Nico Hülkenberg", points: 52, team: "Haas", image: "hulkenberg.jpg", country: "🇩🇪" },
        { rank: 16, name: "Valtteri Bottas", points: 45, team: "Alfa Romeo", image: "bottas.jpg", country: "🇫🇮" },
        { rank: 17, name: "Zhou Guanyu", points: 33, team: "Alfa Romeo", image: "zhou.jpg", country: "🇨🇳" },
        { rank: 18, name: "Kevin Magnussen", points: 31, team: "Haas", image: "magnussen.jpg", country: "🇩🇰" },
        { rank: 19, name: "Daniel Ricciardo", points: 29, team: "AlphaTauri", image: "ricciardo.jpg", country: "🇦🇺" },
        { rank: 20, name: "Logan Sargeant", points: 21, team: "Williams", image: "sargeant.jpg", country: "🇺🇸" },
        { rank: 21, name: "Liam Lawson", points: 15, team: "AlphaTauri", image: "lawson.jpg", country: "🇳🇿" },
        { rank: 22, name: "Felipe Drugovich", points: 10, team: "Aston Martin", image: "drugovich.jpg", country: "🇧🇷" },
        { rank: 23, name: "Robert Shwartzman", points: 5, team: "Ferrari", image: "shwartzman.jpg", country: "🇷🇺" },
        { rank: 24, name: "Oliver Bearman", points: 3, team: "Haas", image: "bearman.jpg", country: "🇬🇧" }
      ];      
  
    players.forEach(player => {
      const box = document.createElement("div");
      box.className = "player-box";
      box.innerHTML = `
        <div class="rank">${player.rank}</div>
        <div class="details">
          <h2>${player.name} ${player.country}</h2>
          <p>${player.team}</p>
          <p>${player.points} PTS</p>
        </div>
        <div class="image">
          <img src="${"../images/" + player.image}" alt="${player.name}">
        </div>
      `;
      container.appendChild(box);
    });
  });
  