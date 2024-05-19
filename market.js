let itemsArrey = [
  {
        firstName: "Віталій",
        lastName: "Шатківський",
        age: 43,
        subject: "CS",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815.jpg",
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/"

    },
    {
        firstName: "Наталія",
        lastName: "Венцель",
        age: 50,
        subject: "Адміністратор",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/ventsel-nataliya-vasylivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/ventsel-n-v/"

    },
    {
        firstName: "Наталія",
        lastName: "Кучер",
        age: 40,
        subject: "Фізика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna.jpg",
        url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/"

    },
]
//Отримання елементу з ідентифікатором items
let itemsDiv= document.getElementById("items")
//Перевірка існування знайденого блоку
if (itemsDiv) {
        //Створення блоків по кількості елемантів масиву
        itemsArray
        //Сортування за прізвищем
        .foreach((item, index) => {
            //Виведення на веб сторінку елемент масиву в блок з класом item
            itemsDiv.innerHTML +=
            `
            <div class ="item">
                <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
                <p>${item.firstName} ${item.lastName}</p>
                <p>Предмет: ${item.subject}</p>
                <p><img src = "${item.photo}" class="item-image"></p>
                <p><a href = "${item.url}" target ="_blank" class="bonus price">Профіль</a></p>
                <p><a href = "mailto:${item.email}?subject=Питання&body=Доброго Дня" target ="_blank"
                class = "price">Написати </a></p>
            </div>
            `
        })
}else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}