(() => {
    const target_query = "#top-level-buttons-computed"
    let target = null
    let t
    let just_loaded = true
    let el

    function search() {
        t = setInterval(() => {
            target = document.querySelector(target_query)
            if (target != null) finish()
        }, 500)
    }

    function finish() {
        clearInterval(t)
        create_btn()
        if (just_loaded) observe(el)
    }

    function create_btn() {
        el = document.createElement('button')
        el.setAttribute("id", "YTDbutton")
        el.innerHTML = 'Download'

        el.onclick = () => {
            const url = location.href
            const p = url.indexOf(".com")
            window.open(url.substr(0, p) + "pi" + url.substr(p))
        }

        target.insertBefore(el, target.firstChild)
    }

    function observe() {
        just_loaded = false
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.removedNodes[0] == el) create_btn()
            })
        })
        observer.observe(target, {childList: true})
    }

    search()
})()