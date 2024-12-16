const teams = [
    { rank: 1, name: "Red Bull Racing", points: 437, driver1: "Max Verstappen", image: "max.png", logo: "netherlands.png" ,driver2:"Sergio Perez"},
    { rank: 2, name: "McLaren", points: 374, driver1: "Lando Norris", image: "norris.png", logo: "UK.png", driver2:"Oscar Piastri",resreve:"Robert Shwartzman"},
    { rank: 3, name: "Ferrari", points: 356, driver1: "Charles Leclerc", image: "charles.png", logo: "Monaco.png", driver2:"Carlos Sainz"},
    { rank: 4, name: "Mercedes", points: 245, driver1: "Lewis Hamilton", image: "russel.png", logo: "🇬🇧.png", driver2:"George Russell"},
    { rank: 9, name: "Aston Martin", points: 174, driver1: "Fernando Alonso", image: "alonso.png", logo: "🇪🇸.png", driver2:"Lance Stroll"},
    { rank: 10, name: "Alpine", points: 152, driver1: "Pierre Gasly", image: "gasly.png", logo: "🇫🇷.png", driver2:"Esteban Ocon"},
    { rank: 12, name: "Williams", points: 95, driver1: "Alexander Albon", image: "albon.png", logo: "🇹🇭.png", driver2:"Logan Sargeant"},
    { rank: 14, name: "AlphaTauri", points: 68, driver1: "Yuki Tsunoda", image: "yuki.png", logo: "🇯🇵.png", driver2:"Daniel Ricciardo",reserve:"Liam Lawson"},
    { rank: 15, name: "Haas", points: 52, driver1: "Nico Hülkenberg", image: "hulkenberg.png", logo: "🇩🇪.png", driver2:"Kevin Magnussen"},
    { rank: 16, name: "Alfa Romeo", points: 45, driver1: "", image: "bottas.png", logo: "🇫🇮.png", driver2:""},
    { rank: 17, name: "Zhou Guanyu", points: 33, driver1: "Alfa Romeo", image: "zhou.png", logo: "🇨🇳.png", driver2:""},
    { rank: 22, name: "Felipe Drugovich", points: 10, driver1: "Aston Martin", image: "drugovich.png", logo: "🇧🇷.png", driver2:""},
    { rank: 24, name: "Oliver Bearman", points: 3, driver1: "Haas", image: "bearman.png", logo: "🇬🇧.png" ,driver2:""}
  ];      

  teams.forEach(team => {
    const box = document.createElement("div");
    box.className = "team-box";
    box.innerHTML = `

    `
    
  });