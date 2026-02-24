const text = document.querySelector("#statusText")
const input = document.querySelector("#user-input")

input.addEventListener("input", () => {
    if (input.value.length < 10) {
        text.textContent = input.value
        }
    else {
        text.textContent = "Zu lang!";
        }
    })

