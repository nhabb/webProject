const teams = [
    { rank: 1, name: "McLaren", points: 666, driver1: "Lando Norris",            image: "norris.png", logo: "UK.png", driver2:"Oscar Piastri",resreve:"Robert Shwartzman"},
    { rank: 2, name: "Ferrari", points: 652, driver1: "Charles Leclerc",         image: "charles.png", logo: "Monaco.png", driver2:"Carlos Sainz"},
    { rank: 3, name: "Red Bull Racing", points: 589, driver1: "Max Verstappen",  image: "max.png", logo: "netherlands.png" ,driver2:"Sergio Perez"},
    { rank: 4, name: "Mercedes", points: 468, driver1: "Lewis Hamilton",         image: "russel.png", logo: "🇬🇧.png", driver2:"George Russell"},
    { rank: 5, name: "Aston Martin", points: 94, driver1: "Fernando Alonso",     image: "alonso.png", logo: "🇪🇸.png", driver2:"Lance Stroll"},
    { rank: 6, name: "Alpine", points: 65, driver1: "Pierre Gasly",              image: "gasly.png", logo: "🇫🇷.png", driver2:"Esteban Ocon"},
    { rank: 7, name: "Haas", points: 58, driver1: "Nico Hülkenberg",             image: "hulkenberg.png", logo: "🇩🇪.png", driver2:"Kevin Magnussen"},
    { rank: 8, name: "RB", points: 46, driver1: "Yuki Tsunoda",                  image: "yuki.png", logo: "🇯🇵.png", driver2:"Daniel Ricciardo",reserve:"Liam Lawson"},
    { rank: 9, name: "Williams", points: 17, driver1: "Alexander Albon",         image: "albon.png", logo: "🇹🇭.png", driver2:"Logan Sargeant"},
    { rank: 10, name: "Alfa Romeo", points: 4, driver1: "Valtteri Bottas",       image: "bottas.png", logo: "🇫🇮.png", driver2:"Zhou Guanyu"},
  ];      

  teams.forEach(team => {
    const box = document.createElement("div");
    box.className = "team-box";
    box.innerHTML = `

    `
    
  });