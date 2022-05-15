const incrementBtn = document.getElementById("increment-btn")
const saveBtn = document.getElementById("save-btn")
const resetBtn = document.getElementById("reset")
const countEl = document.getElementById("count-el")
let count = 0

incrementBtn.addEventListener('click', () => {
    count++
    countEl.textContent = count
})

saveBtn.addEventListener('click', () => {
    document.getElementById("entries"). innerHTML += `${count} - `
})

resetBtn.addEventListener('click', () => {
    count = 0
    countEl.textContent = count
})