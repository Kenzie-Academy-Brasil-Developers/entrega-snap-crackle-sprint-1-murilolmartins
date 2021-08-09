function snapCrackle(maxValue) {
    let frase = ""
    for (i = 1 ; i <= maxValue; i++) {
        if (i % 2 !== 0) {
            if (i % 5 === 0) {
                frase = frase + "SnapCrackle, "
            }
            else {
                frase = frase + "Snap, "
            }
        }
        else if (i % 5 === 0 && i % 2 === 0) {
            frase = frase + "Crackle, "
        }
        else {
            frase = frase + String(i) + ", "
        }
        

    }
    frase = frase.substring(0, frase.length - 2)
    return frase       
}
console.log(snapCrackle(12))

function snapCracklePrime(maxValue) {
    let frase = ""
    for (i = 1 ; i <= maxValue; i++) {
        if (i % 2 !== 0) {
            if (i / 1 !== 1 && i % 3 !== 0 && i % 5 !==0 && i % 7 !== 0) {
                frase = frase + "SnapPrime, "
            }
            else if (i == 3) {
                frase = frase + "SnapPrime, "
            }
            else if (i === 7) {
                frase = frase + "SnapPrime, "
            }
            else if (i % 5 === 0) {
                if (i === 5) {
                    frase = frase + "SnapCracklePrime, "
                }
                else {
                    frase = frase + "SnapCrackle, "
                }    
            }
            else {
                frase = frase + "Snap, "
            }
        }
        else if (i % 5 === 0 && i % 2 === 0) {
            frase = frase + "Crackle, "
            }
        
        else if (i === 2)    {
            frase = frase + "Prime, "
        }
        
        else {
            frase = frase + String(i) + ", "
        }
        }    
        
    frase = frase.substring(0, frase.length - 2)
    return frase       
}
console.log(snapCracklePrime(15))