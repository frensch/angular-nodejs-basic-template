var express = require('express');
var server = express(); // better instead
server.use('/static', express.static(__dirname + '/static'));

var items = [];

var position0 = {
		name: 'Henrique Dourado',
		value: 12,
		thumbnail: 'https://s.glbimg.com/es/sde/f/2017/04/24/2df720f6ce87010f359f6d0c3df824db_300x300.png'
	};
var position1 = {
		name: 'Teste',
		value: 9,
		thumbnail: 'https://s.glbimg.com/es/sde/f/2017/04/24/2df720f6ce87010f359f6d0c3df824db_300x300.png'
	};

var itemPositions1 = [position0, position1, position0, position1];
var itemPositions2 = [position0, position0, position0, position0];

for (var i = 5 - 1; i >= 0; i--) {
	items.push({'positions': itemPositions1, 'action': 'Mais Gols'});
	items.push({'positions': itemPositions2, 'action': 'Mais Gols'});
}
server.get('/items', function(req, res) {
	
	items[0].size = items[0].size + 1;
	res.send(items);
});

server.listen(3000, function() {
	console.log('Iniciado na porta 3000');
});