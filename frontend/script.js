const header =`
    <div class="header">
        <h1>Best Beers</h1>
        <button class="material-icons">menu</button>
    </div>
`


let count=1
function cardComponent(title, sub, text){
    return`
        <div class="card">
            <h5>${count++}</h5>
            <h1>${title}</h1>
            <h2>${sub}</h2>
            <h4>${text}</h4>
            <button>
                <p>details</p>
                <span class="material-symbols-outlined">
                arrow_forward
                </span>
            </button>
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

    let main=`
        <div class="container">${content}</div>
    `

    const root = document.getElementById("root")
    root.insertAdjacentHTML("afterbegin", header)
    root.insertAdjacentHTML("beforeend", main)
})

