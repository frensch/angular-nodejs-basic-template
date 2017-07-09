var express = require('express');
var server = express(); // better instead
server.use('/static', express.static(__dirname + '/static'));

var items = [{
		name: 'Teste4',
		size: 1,
		value: 12
	},{
		name: 'Teste3',
		size: 1,
		value: 13
	},{
		name: 'Teste2',
		size: 1,
		value: 14
	},{
		name: 'Teste1',
		size: 1,
		value: 15
	}];

server.get('/items', function(req, res) {
	
	items[0].size = items[0].size + 1;
	res.send(items);
});

server.listen(3000, function() {
	console.log('Iniciado na porta 3000');
});