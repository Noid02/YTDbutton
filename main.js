(() => {
    const target_query = "#top-level-buttons-computed"
    let target = null

    const t = setInterval(() => {
        target = document.querySelector(target_query)
        if (target != null) finish()
    }, 500)

    function finish() {
        clearInterval(t)
        console.log(target)
        const el = document.createElement('button')
        el.setAttribute("id", "YTDbutton")
        el.innerHTML = 'Download'

        el.onclick = () => {
            const url = location.href
            const p = url.indexOf(".com")
            window.open(url.substr(0, p) + "pi" + url.substr(p))
        }

        target.insertBefore(el, target.firstChild)
    }
})()