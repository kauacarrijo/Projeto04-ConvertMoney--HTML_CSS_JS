const button = document.querySelector("button")
const valorOne = document.querySelector("#valorOne")
const valorTwo = document.querySelector("#valorTwo")
const optionTwo = document.querySelector("#optionTwo")
const logoTwo = document.querySelector("#logo2")
const pTwo = document.querySelector("#pTwo")
let valor = 0

const changeCurrency = () => {
    if (optionTwo.value == "dolar") {
        logoTwo.src = "./assets/eua.png"
        pTwo.textContent = "Dólar Americano"
        valorOne.textContent = "R$ 0,00"
        valorTwo.textContent = "$0.00"
    }
    else {
        if (optionTwo.value == "euro") {
            logoTwo.src = "./assets/euro.png"
            pTwo.textContent = "Euro"
            valorOne.textContent = "R$ 0,00"
            valorTwo.textContent = "0,00 €"
        }
        else {
            if (optionTwo.value == "libra") {
                logoTwo.src = "./assets/libra.png"
                pTwo.textContent = "Libra"
                valorOne.textContent = "R$ 0,00"
                valorTwo.textContent = "£0,00"
            }
            else {
                logoTwo.src = "./assets/bitcoin.png"
                pTwo.textContent = "Bitcoin"
                valorOne.textContent = "R$ 0,00"
                valorTwo.textContent = "BTC 0,00"
            }
        }
    }
}

const convertValues = () => {
    valor = document.querySelector("#valor").value
    valorOne.textContent = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(valor)
    if (optionTwo.value == "dolar") {
        valorTwo.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(valor / 4.97)
    }
    else {
        if (optionTwo.value == "euro") {
            valorTwo.textContent = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"}).format(valor / 5.36)
        }
        else {
            if (optionTwo.value == "libra") {
                valorTwo.textContent = new Intl.NumberFormat("en-GB", {style: "currency", currency: "GBP"}).format(valor / 6.26)
            }
            else {
                valorTwo.textContent = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(valor * 0.0000039)
            }
        }
        
    }
}

optionTwo.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)

console.log(pTwo.textContent)