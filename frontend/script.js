const header =`
    <div class="header">
        <h1>Best Beers</h1>
        <button class="material-icons">menu</button>
    </div>
`
const cards=``

window.addEventListener("load", () => {
    console.log(beers)
    const root = document.getElementById("root")
    root.insertAdjacentHTML("afterbegin", header)
})

