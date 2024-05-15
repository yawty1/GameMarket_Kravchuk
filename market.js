let itemsArrey = [
    'skibidi',
    'ohio',
    'sigma',
]
let itemsDiv= document.getElementById("items")
if (itemsDiv) {

        itemsArray
        .foreach((item, index) => {

            itemsDiv.innerHTML +=
            `
            <div class ="item">
                <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>

            </div>
            `
        })
}