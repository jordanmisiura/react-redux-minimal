const express = require('express'); 
const app = express(); 
const path = require('path');
const fetch = require('node-fetch');

process.title = 'nodeapp';

const PORT = 9888;

app.use(express.static(path.resolve(__dirname, '../client', 'build')));

app.get('/api/allchannels', function(req, res) {
	//console.log('total channels api hit. ');
	fetch("https://cspire.tv/guide/v5.1/search/cspire/paytv/1.0/search/details.json?ref_types=channel&sort_by=channel_number&sort_direction=asc&facets=child_protection_rating%2Cgenre_list%2Cnetwork&length=1&regions=national",
	{
  		mode: 'no-cors',
  		method: 'GET',
  		headers: {
    		Accept: 'application/json',
  		}
	})
	.then(response => response.json())
	.then((response) => {
		let fetchUrl1 = "https://cspire.tv/guide/v5.1/search/cspire/paytv/1.0/search/details.json?ref_types=channel&sort_by=channel_number&sort_direction=asc&length=100&regions=national";
		let offSet = "&offset="+100;
		let fetchUrl2 = "https://cspire.tv/guide/v5.1/search/cspire/paytv/1.0/search/details.json?ref_types=channel&sort_by=channel_number&sort_direction=asc&length=100&regions=national"+offSet;
		
		Promise.all([
			fetchUrl1,
			fetchUrl2
		].map(url => fetch(url, {
	   		mode: 'no-cors',
	   		method: 'GET',
	   		headers: {
	     		Accept: 'application/json',
	   		}
		 }).then(r => r.json())))
		.then(([d1, d2]) => {
			let results = d1.hits.concat(d2.hits);
			let channelsMap = results.map((hit) => {
				//console.log("channel "+hit.result.channel.name+" hit id: "+hit.result.channel.id);
				return {
					name: hit.result.channel.name,
					number: hit.result.channel.channel_number,
					thumbnail: hit.result.channel.thumbnail_id,
					id: hit.result.channel.id
				};
			});

			res.setHeader('Content-Type', 'application/json');
			res.send(JSON.stringify({ channels: channelsMap }));  
			res.end('end of channels api response');
		})
		.catch(e => console.error(e));
	});
});

//then catchall path for serving client 
app.get('*', (req, res) => { 
	res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html')); 
});

function handleError(res, errcode, message) { 
	res.writeHead(errcode, { "Content-Type" : "application/json" }); 
	res.end(JSON.stringify({ error: errcode, message: message}) + "\n"); 
}

app.listen(PORT, function() { console.log("server started on port: "+PORT); });