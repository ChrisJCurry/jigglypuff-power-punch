let jigglyHP = 100
let userStamina = 0
let userKicks = 0
let jiggliesPuffed = 0
let evolved = false

let normalAttacks = {
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
    }
}

let fairyAttacks = {
    sing: {
        damage: 10,
        staminaGained: -10
    },
    dazzlingGleam: {
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
    dazzlingGleam: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fwww.ssbwiki.com%2Fimages%2Fthumb%2F6%2F6a%2FJigglypuff_SSBU.png%2F1200px-Jigglypuff_SSBU.png",
    background: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fassets.pokemon.com%2F%2Fassets%2Fcms2%2Fimg%2Fmisc%2Fvirtual-backgrounds%2Fsword-shield%2Fpokemon-gym.png",
    inflate: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fsoundeffects%2Fimages%2Fc%2Fc8%2FPokemon_The_Song_of_Jigglypuff_Anime_Inflation_Horn_Sound-3.jpg%2Frevision%2Flatest%2Ftop-crop%2Fwidth%2F220%2Fheight%2F220%3Fcb%3D20190516101411",
    default: "https://www.ssbwiki.com/images/thumb/6/6a/Jigglypuff_SSBU.png/1200px-Jigglypuff_SSBU.png",
}

function getAttack(attack) {
    let currentAttack = attack.innerText
    for(let attackKey in normalAttacks) {
        if(currentAttack.toUpperCase() == attackKey.toUpperCase()) {
            let damage = normalAttacks[attackKey].damage
            setHP(damage)
            let stamina = normalAttacks[attackKey].staminaGained
            setStamina(stamina)
            setImg(currentAttack)
        }
    }
}

function setImg(action) {
    let template = ""
    let pickPhoto = document.getElementById("jiggly-photo")
    for(let imgKey in images) {
        //console.log(imgKey, action)
        if(action.toUpperCase() == imgKey.toUpperCase()) {
            console.log("got here", imgKey, "-", action)
            template+=`
            <div>
                <img src="${images[imgKey]}">
            </div>
            `
        } else {
            console.log(imgKey, action, " --- did not match")
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

