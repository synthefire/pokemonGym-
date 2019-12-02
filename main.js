function getRandomPoke(max) {
  let x = Math.floor(Math.random() * Math.floor(max));
  return x
}

queryCrystalPokemon = async () => {
  for (let i = 0; i < 3; i++) {
    req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${getRandomPoke(400)}.json`)
    data = await req.json()
    pokemon = new Pokemon(data)
    crystal.addPokemonToParty(pokemon)

    let crystalPokeName = document.createElement('li')
    crystalPokeName.className = 'crystal-poke-name'
    crystalPokeName.innerText = `${crystal.party[crystal.party.length-1].name}`
    team1.appendChild(crystalPokeName)
  }
}
queryJulianPokemon = async () => {
  for (let i = 0; i < 3; i++) {
    req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${getRandomPoke(400)}.json`)
    data = await req.json()
    pokemon = new Pokemon(data)
    julian.addPokemonToParty(pokemon)

    let julianPokeName = document.createElement('li')
    julianPokeName.className = 'julian-poke-name'
    julianPokeName.innerText = `${julian.party[julian.party.length-1].name}`
    team2.appendChild(julianPokeName)
  }
}
queryIsaacPokemon = async () => {
  for (let i = 0; i < 3; i++) {
    req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${getRandomPoke(400)}.json`)
    data = await req.json()
    pokemon = new Pokemon(data)
  isaac.addPokemonToParty(pokemon)

  let isaacPokeName = document.createElement('li')
  isaacPokeName.className = 'poke-name'
  isaacPokeName.innerText = `${isaac.party[isaac.party.length-1].name}`
  team3.appendChild(isaacPokeName)
  }
}
queryFredlynePokemon = async () => {
  for (let i = 0; i < 3; i++) {
    req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${getRandomPoke(400)}.json`)
    data = await req.json()
    pokemon = new Pokemon(data)
    fredlyne.addPokemonToParty(pokemon)

    let fredlynePokeName = document.createElement('li')
    fredlynePokeName.className = 'fredlyne-poke-name'
      fredlynePokeName.innerText =  `${fredlyne.party[fredlyne.party.length-1].name}`
    team4.appendChild(fredlynePokeName)
  }
}

class Pokemon {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.height = data.height
        this.weight = data.weight
        this.stats = {
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat
        }
        this.abilities = []
        this.types = []
        this.sprite = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${data.name}.gif`

        for (let i = 0; i < data.abilities.length; i++) {
            this.abilities.push(data.abilities[i].ability.name)
        }

    }
}

class Trainer {
    constructor() {
        this.party = []
    }

    all = () => {
        return this.party
    }

    get = (name) => {
        for (let i = 0; i < this.party.length; i++) {
            if (name == this.party[i].name) {
                return this.party[i]
            }
        }
    }

    addPokemonToParty(pokemon) {
      if (this.party.length < 3) {
            this.party.push(pokemon)
          }
    }
}

let crystal = new Trainer()
let julian = new Trainer()
let isaac = new Trainer()
let fredlyne = new Trainer()

let team1 = document.getElementById('team1')
let team2 = document.getElementById('team2')
let team3 = document.getElementById('team3')
let team4 = document.getElementById('team4')
