document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("team-container");

    const teams = [
        { rank: 1, name: "McLaren", points: 666, driver1: "Norris", driver1First:"Lando", image: "mc-car.png", logo: "mc-logo.png", driver2: "Piastri", driver2First:"Oscar", },
        { rank: 2, name: "Ferrari", points: 652, driver1: "Leclerc", driver1First:"Charles", image: "fer-car.png", logo: "fer-logo.png", driver2: "Sainz", driver2First:"Carlos" },
        { rank: 3, name: "Red Bull Racing", points: 589, driver1: "Verstappen", driver1First:"Max", image: "rbb-car.png", logo: "red-bull-racing-logo.png", driver2: "Perez", driver2First:"Sergio" },
        { rank: 4, name: "Mercedes", points: 468, driver1: "Hamilton", driver1First:"Lewis", image: "mer-car.png", logo: "mer-logo.png", driver2: "Russell", driver2First:"George" },
        { rank: 5, name: "Aston Martin", points: 94, driver1: "Alonso", driver1First:"Fernando", image: "am-car.png", logo: "am-logo.png", driver2: "Stroll", driver2First:"Lance" },
        { rank: 6, name: "Alpine", points: 65, driver1: "Doohan", driver1First:"Jack", image: "alp-car.png", logo: "alp-logo.png", driver2: "Ocon", driver2First:"Esteban" },
        { rank: 7, name: "Haas", points: 58, driver1: "Hulkenberg", driver1First:"Nico", image: "haas-car.png", logo: "haas-logo.png", driver2: "Magnussen", driver2First:"Kevin" },
        { rank: 8, name: "RB", points: 46, driver1: "Tsunoda", driver1First:"Yuki", image: "RB-car.png", logo: "Rbb-logo.png", driver2: "Lawson", driver2First:"Liam" },
        { rank: 9, name: "Williams", points: 17, driver1: "Albon", driver1First:"Alexander", image: "wil-car.png", logo: "wil-logo.png", driver2: "Colapinto", driver2First:"Franco" },
        { rank: 10, name: "Kick Sauber", points: 4, driver1: "Bottas", driver1First:"Valtteri", image: "kick-car.png", logo: "kick-logo.png", driver2: "Guanyu", driver2First:"Zhou" },
    ];

    teams.forEach(team => {
        const box = document.createElement("div");
        box.className = "team-box";
        box.innerHTML = `
    <div class="first-div">
        <div class="rank">${team.rank}</div>
        <div>
        <span class="pts">${team.points}</span>
        <span>PTS</span>
        </div>
            </div>
    <div class="separator-line"></div>
    <div class="second-div">
        <div class="team-name">${team.name}</div>
        <div class="team-logo">
        <img src="../images/${team.logo}" alt="${team.name} logo">
        </div>
            </div>
    <div class="separator-line"></div>
    <div class="third-div">
        <div class="driver1">
        <div class="driver1-name">
        <span class="first1">${team.driver1First}</span><br>
        <span class="last1">${team.driver1}</span>
        </div>
        <div class="driver1-img">
        <img src="../images/${team.driver1}.png" alt="${team.driver1} image"></div>
            </div>
        <div class="driver2">
        <div class="driver2-name">
        <span class="first2">${team.driver2First}</span><br>
        <span class="last2">${team.driver2}</span></div>
        <div class="driver2-img">
        <img src="../images/${team.driver2}.png" alt="${team.driver2} image"></div>
            </div>
    </div>
    <div class="fourth-div">
    <img src="../images/${team.image}" alt="${team.image}"></div>
        </div>
    </div>    

    

    `;
        container.appendChild(box);
    });
});

// window.location.href = "news.html";
