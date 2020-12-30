const http = require('http')

const server = http.createServer(function(req,res){
	console.log(req.method, req.url)
	if (req.method === 'POST' && req.url === '/webhook') {
		res.setHeader('Content-Type', 'application/json')
		res.end(JSON.stringify({ok: true}))
	} else {
		res.end('Not Found')
	}
})

server.listen(5000, () => {
	console.log('webhook已经在5000端口启动')
})