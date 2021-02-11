let jigglyHP = 100
let userStamina = 0
let userKicks = 0
let jiggliesPuffed = 0
let evolved = false

let attacks = {
    punch: {
        damage: 20,
        staminaGained: 20
    },
    inflate: {
        damage: 30,
        staminaGained: 40
    },
    rest: {
        damage: 0,
        staminaGained: 100
    },
    sing: {
        damage: 10,
        staminaGained: -10
    },
    gleam: {
        damage: 15,
        staminaGained: -20
    },
    evolve: {
        damage: 0,
        staminaGained: -100
    }
}
let images = {
    sing: "https://www.clipartmax.com/png/middle/54-543939_episode-11-jigglypuff-jigglypuff-singing-png.png",
    rest: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2F27dbbda7-320b-488b-b8cb-6d993296f095%2Fdd6tbf2-81c5a5b3-bb1f-4801-9b62-f1443a7a5be3.png%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjdkYmJkYTctMzIwYi00ODhiLWI4Y2ItNmQ5OTMyOTZmMDk1XC9kZDZ0YmYyLTgxYzVhNWIzLWJiMWYtNDgwMS05YjYyLWYxNDQzYTdhNWJlMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.DrUzZq1KNXWpF9_0Uh5UUSiXn_8wleww0U0mhK1diiw",
    gleam: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.ssbwiki.com%2Fimages%2Fthumb%2F6%2F6a%2FJigglypuff_SSBU.png%2F1200px-Jigglypuff_SSBU.png",
    background: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fassets.pokemon.com%2F%2Fassets%2Fcms2%2Fimg%2Fmisc%2Fvirtual-backgrounds%2Fsword-shield%2Fpokemon-gym.png",
    inflate: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsoundeffects%2Fimages%2Fc%2Fc8%2FPokemon_The_Song_of_Jigglypuff_Anime_Inflation_Horn_Sound-3.jpg%2Frevision%2Flatest%2Ftop-crop%2Fwidth%2F220%2Fheight%2F220%3Fcb%3D20190516101411",
    punch: "data:image/jpeg;base64,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",
    default: "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/1200px-Jigglypuff_SSBU.png",
}

function getAttack(attack) {
    let currentAttack = attack.innerText
    for(let attackKey in attacks) {
        if(currentAttack.toUpperCase() == attackKey.toUpperCase()) {
            let damage = attacks[attackKey].damage
            setHP(damage)
            let stamina = attacks[attackKey].staminaGained
            setStamina(stamina)
            setImg(currentAttack)
        }
    }

    
}

function setImg(action) {
    let template = ""
    let pickPhoto = document.getElementById("jiggly-photo")
    for(let imgKey in images) {
        console.log(imgKey.toUpperCase())
        if(action.toUpperCase() == imgKey.toUpperCase()) {
            //console.log("got here", imgKey, "-", action)
            template+=`
            <div>
                <img src="${images[imgKey]}">
            </div>
            `
            break;
        } else {
            //console.log(imgKey, action, " --- did not match")
        }
    }
    pickPhoto.innerHTML = template
}

function setEvolved(isEvolved) {
    if(isEvolved) {
        evolved = true
    } else { 
        evolved = false
    }
}

function setHP(damage) {
    let healthBar = document.getElementById("health-bar")
    jigglyHP -= damage
    if(jigglyHP <= 0) {
        //jiggly is knocked unconscious
        jiggliesPuffed++
        jigglyHP = 0
    }
   // @ts-ignore
    healthBar.value -= damage
    healthBar.innerText = `${jigglyHP}`
}

function setStamina(staminaGiven) {
    let staminaBar = document.getElementById("stamina-bar")
    userStamina += staminaGiven
    if(userStamina <= 0) {
        userStamina = 0
    } else if (userStamina >= 100) {
        userStamina = 100
    }
    // @ts-ignore
    staminaBar.value += staminaGiven
    staminaBar.innerText = `${userStamina}`
}

function reset() {
    let healthText = document.getElementById("health-bar")
    let staminaText = document.getElementById("stamina-bar")
    setEvolved(false)
}

