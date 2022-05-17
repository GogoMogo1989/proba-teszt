const header =`
    <div class="header">
        <h1>Best Beers</h1>
        <button class="material-icons">menu</button>
    </div>
`
function cardComponent(title, sub, text){
    return`
        <div name="card">
            <h1>${title}</h1>
            <h2>${sub}</h2>
            <h3>${text}</h3>
        </div>
    `
}

function Data(title, sub, text){
    this.title = title,
    this.sub = sub,
    this.text = text
}

window.addEventListener("load", () => {

    let cardData = beers.cards.map(value => {
        return new Data(value.title, value.sub, value.text)
    })

    let content = ""

    for(const b of cardData){
        content += cardComponent(b.title, b.sub, b.text)
    }


    const root = document.getElementById("root")
    root.insertAdjacentHTML("afterbegin", header)
    root.insertAdjacentHTML("beforeend", content)
})
