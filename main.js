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
        console.log(target)
        el = document.createElement('button')
        el.setAttribute("id", "YTDbutton")
        el.innerHTML = 'Download'

        el.onclick = () => {
            const url = location.href
            const p = url.indexOf(".com")
            window.open(url.substr(0, p) + "pi" + url.substr(p))
        }

        target.insertBefore(el, target.firstChild)

        if (just_loaded) observe(el)
    }

    function observe() {
        just_loaded = false
        const observer = new MutationObserver(mutations => {
            alert('triggered')
            console.log(mutations)
            mutations.forEach(mutation => {
                if (mutation.removedNodes[0] == el) search()
            })
        })
        observer.observe(target, {childList: true})
    }

    search()
})()