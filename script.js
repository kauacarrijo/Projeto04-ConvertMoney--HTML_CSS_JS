const button = document.querySelector("button")
const valorOne = document.querySelector("#valorOne")
const valorTwo = document.querySelector("#valorTwo")
const optionOne = document.querySelector("#optionOne")
const optionTwo = document.querySelector("#optionTwo")
const logoOne = document.querySelector("#logo1")
const logoTwo = document.querySelector("#logo2")
const pOne = document.querySelector("#pOne")
const pTwo = document.querySelector("#pTwo")
let valor = document.querySelector("#valor")
let taxas = {
    "dolar": 1,
    "euro": 0.92,
    "libra": 0.77,
    "bitcoin": 0.000030,
    "real": 5.10
}

const changeCurrency = () => {

    if (optionOne.value == "dolar") {
        logoOne.src = "./assets/eua.png"
        pOne.textContent = "Dólar Americano"
        valor.placeholder = "$10,000.00"
    }
    else {
        if (optionOne.value == "euro") {
            logoOne.src = "./assets/euro.png"
            pOne.textContent = "Euro"
            valor.placeholder = "10.000,00 €"
        }
        else {
            if (optionOne.value == "libra") {
                logoOne.src = "./assets/libra.png"
                pOne.textContent = "Libra"
                valor.placeholder = "£10,000.00"
            }
            else {
                if(optionOne.value == "bitcoin"){
                    logoOne.src = "./assets/bitcoin.png"
                    pOne.textContent = "Bitcoin"
                    valor.placeholder = "BTC 10,000.00"
                }else{
                    logoOne.src = "./assets/brasil.png"
                    pOne.textContent = "Real"
                    valor.placeholder = "R$ 10.000,00"
                }
            }
        }
    }

    if (optionTwo.value == "dolar") {
        logoTwo.src = "./assets/eua.png"
        pTwo.textContent = "Dólar Americano"
    }
    else {
        if (optionTwo.value == "euro") {
            logoTwo.src = "./assets/euro.png"
            pTwo.textContent = "Euro"
        }
        else {
            if (optionTwo.value == "libra") {
                logoTwo.src = "./assets/libra.png"
                pTwo.textContent = "Libra"
            }
            else {
                if(optionTwo.value == "bitcoin"){
                    logoTwo.src = "./assets/bitcoin.png"
                    pTwo.textContent = "Bitcoin"
                }else{
                    logoTwo.src = "./assets/brasil.png"
                    pTwo.textContent = "Real"
                }
            }
        }
    }
    convertValues();
}

const convertValues = () => {
    let valorOriginal = valor.value
    if (valorOriginal == NaN) {
        valorOriginal = 0;
    }
    
    if (optionOne.value == "dolar") {
        valorOne.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(valorOriginal)
    }
    else {
        if (optionOne.value == "euro") {
            valorOne.textContent = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(valorOriginal)
        }
        else {
            if (optionOne.value == "libra") {
                valorOne.textContent = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(valorOriginal)
            }
            else {
                if(optionOne.value == "bitcoin"){
                    valorOne.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(valorOriginal)
                } else {
                    valorOne.textContent = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(valorOriginal)
                }
            }
        }
    }

    let taxaDe = taxas[optionOne.value]
    let taxaPara = taxas[optionTwo.value]
    let valorConvert = (valorOriginal / taxaDe) * taxaPara

    if (optionTwo.value == "dolar") {
        valorTwo.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(valorConvert)
    }
    else {
        if (optionTwo.value == "euro") {
            valorTwo.textContent = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(valorConvert)
        }
        else {
            if (optionTwo.value == "libra") {
                valorTwo.textContent = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(valorConvert)
            }
            else {
                if(optionTwo.value == "bitcoin"){
                    valorTwo.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(valorConvert)
                } else {
                    valorTwo.textContent = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(valorConvert)
                }
            }
        }
    }
}

optionOne.addEventListener("change", changeCurrency)
optionTwo.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)