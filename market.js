let itemsDiv = document.getElementById("items");
 let itemArrey = [];
console.log(itemsDiv);
if(itemsDiv){
     for(let i=0;i<100;i++){
        itemsDiv.innerHTML += '<div class="item"></div>'
    }
}
else{
    console.log('Блок товарів не знайдено')
}