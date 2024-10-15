export const clickOutside = (n, cb) => {
    document.addEventListener("click", (e) => {
        if (
            (e.target !== n)
            && (!n.contains(e.target))
        ) {
            cb(e)
        }
    })
}
