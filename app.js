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

function getAttack(attack) {
    console.log(attack.innerText)
}

function setHP(damage) {
    let healthText = document.getElementById("health-bar")
    jigglyHP -= damage
    if(jigglyHP <= 0) {
        //jiggly is knocked unconscious
        jiggliesPuffed++
        jigglyHP = 0
    }

    healthText.innerText = `${jigglyHP}`
}

function setImg() {

}

function setEvolved(isEvolved) {
    if(isEvolved) {
        evolved = true
    } else { 
        evolved = false
    }
}

function setStamina(staminaGiven) {
    let staminaBar = document.getElementById("stamina-bar")
    userStamina += staminaGiven
    if(userStamina <= 0) {
        userStamina = 0
    } else if (userStamina >= 100) {
        userStamina = 100
    }
    staminaBar.value -= 10
    staminaBar.innerText = `${userStamina}`
}

function reset() {
    let healthText = document.getElementById("health-bar")
    let staminaText = document.getElementById("stamina-bar")
    setEvolved(false)
}

