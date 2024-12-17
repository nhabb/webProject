const teams = [
    { rank: 1, name: "McLaren", points: 666, driver1: "Lando Norris",            image: "mc-car.png", logo: "mc-logo.png", driver2:"Oscar Piastri"},
    { rank: 2, name: "Ferrari", points: 652, driver1: "Charles Leclerc",         image: "fer-car.png", logo: "fer-logo.png", driver2:"Carlos Sainz"},
    { rank: 3, name: "Red Bull Racing", points: 589, driver1: "Max Verstappen",  image: "rbb-car.png", logo: "rbb-logo.png" ,driver2:"Sergio Perez"},
    { rank: 4, name: "Mercedes", points: 468, driver1: "Lewis Hamilton",         image: "mer-car.png", logo: "mer-logo.png", driver2:"George Russell"},
    { rank: 5, name: "Aston Martin", points: 94, driver1: "Fernando Alonso",     image: "am-car.png", logo: "am-logo.png", driver2:"Lance Stroll"},
    { rank: 6, name: "Alpine", points: 65, driver1: "Jack Doohan",              image: "alp-car.png", logo: "alp-logo.png", driver2:"Esteban Ocon"},
    { rank: 7, name: "Haas", points: 58, driver1: "Nico Hülkenberg",             image: "haas-car.png", logo: "hass-logo.png", driver2:"Kevin Magnussen"},
    { rank: 8, name: "RB", points: 46, driver1: "Yuki Tsunoda",                  image: "RB-car.png", logo: "RB-logo.png", driver2:"Liam Lawson"},
    { rank: 9, name: "Williams", points: 17, driver1: "Alexander Albon",         image: "wil-car.png", logo: "wil-logo.png", driver2:"Franco Colapinto"},
    { rank: 10, name: "Kick Sauber", points: 4, driver1: "Valtteri Bottas",       image: "kick-car.png", logo: "kick-logo.png", driver2:"Zhou Guanyu"},
  ];      

  teams.forEach(team => {
    const box = document.createElement("div");
    box.className = "team-box";
    box.innerHTML = `
    <div class="first-div">
        <div class="rank">${team.rank}</div>
        <div class="pts">${team.points}PTS</div>
    </div>
    <div class="separator-line"></div>
    <div class="">
        <div class="team-name">${team.name}</div>
        <div class="team-logo">
        <img src="${team.logo}" alt="${team.name} logo">
        </div>
    </div>
    <div class="separator-line"></div>
    <div class="players-names">
        <div class="driver1">
        <div class="driver1-name">${team.driver1}</div>
        <div class="driver1-img">
        <img src="../images/${team.driver1}.png">
        </div>
        </div>
        <div class="driver2">
        <div class="driver2-name">${team.driver2}</div>
        <div class="driver2-img">
        <img src="../images/${team.driver2}.png">
        </div>
        </div>
    </div>

    


    `
    
  });