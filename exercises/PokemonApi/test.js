var parsePokemon = new XMLHttpRequest();

var body = document.querySelector('body');

parsePokemon.onreadystatechange = function() {
	if (parsePokemon.readyState === 4 && parsePokemon.status === 200) {
		var jsonData = parsePokemon.responseText;
		var data = JSON.parse(jsonData);
		var array = data.objects[0].pokemon;
		parsing(array);
	}
};

function parsing(array) {
	var div = document.createElement('div');
	div.id = 'container';
	array.forEach(function(item) {
		var newPara = document.createElement('p');
		newPara.className = 'pokemonName';
		newPara.innerHTML = item.name;
		body.prepend(div);
		document.getElementById('container');
		div.appendChild(newPara);
	});
}

parsePokemon.open('GET', 'http://api.vschool.io:6543/pokemon.json', true);
parsePokemon.send();
