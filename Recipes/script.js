const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ef6b15a96cmsh921ff8b61f7b985p17cea9jsna24db7a3c119',
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
};

const dis = document.getElementById("dish");
const but = document.getElementById("get");
const dis2 = document.getElementById("dishname");
const ig = document.getElementById("ing");

const rec = (dish) => {
    dis2.innerHTML = dish;
    fetch('https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=' + dish, options)
    .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    }).then((data) => {
        console.log(data);
        // for(var i=0;i<data.length;i++){
        //     ig.innerHTML=ig.innerHTML+data[i].ingredients
        // }
        ig.innerHTML = data[1].ingredients;
    });
};

but.addEventListener('click', (event) => {
    event.preventDefault();
    rec(dis.value);
});