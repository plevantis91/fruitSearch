const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
    results = fruits.filter((fruit)=>{
        return fruit.toLowerCase().includes(str.toLowerCase())
    });
	
	return results;
}

function searchHandler(e) {
    const searchInput = e.target.value.toLowerCase();
    if (searchInput !== '') {
        const searchResults = search(searchInput);
        showSuggestions(searchResults, searchInput);
    } else {
        suggestions.innerHTML = '';
    }
}

function showSuggestions(results, inputVal) {
    for(let result of results){
        const fruitLi = document.createElement("li")
        fruitLi.textContent = result;
        suggestions.append(fruitLi)
    };
}
   

function useSuggestion(e) {
   if(e.target.tagName === "LI"){
    const selectedFruit = e.target.textContent;
    input.value = selectedFruit;

    suggestions.innerHTML = '';
   }


}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);