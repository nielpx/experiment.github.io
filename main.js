
function mode(params) {
    const button = document.getElementById("button")
    const button2 = document.getElementById("button2")
    const main = document.getElementById("col")
    const title = document.getElementById("title")
    const ikon = document.getElementById("icon")
    const ikon1 = document.getElementById("icon1")
    const ikon2 = document.getElementById("icon2")
    const ikon3 = document.getElementById("icon3")
    const img = document.getElementById("img")


    img.classList.toggle("dark-mode-img")
    button.classList.toggle("dark-mode-button")
    main.classList.toggle("dark-mode-main")
    title.classList.toggle("dark-mode-main")
    ikon.classList.toggle("dark-mode-main")
    ikon1.classList.toggle("dark-mode-main")
    ikon2.classList.toggle("dark-mode-main")
    ikon3.classList.toggle("dark-mode-main")
    button2.classList.toggle("dark-mode-btm-border")

    var text = document.getElementById('swap')
    if (text.innerHTML === "☾ Night mode") {
        text.innerHTML = "☼ Day mode"
        
    } else if (text.innerHTML === "☼ Day mode") {
        text.innerHTML = "☾ Night mode"
        
    }

}