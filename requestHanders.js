var exec = require("child_process").exec;

function start(response) {
	console.log("Request hander 'start' was called.")

	exec("sleep 10", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type" : "text/plain"})
		response.write("Hello start")
		response.end()

	})
}

function upload(response) {
	console.log("Request hander 'upload' was called")
	response.writeHead(200, {"Content-Type" : "text/plain"})
	response.write("Hello Upload")
	response.end()
}

exports.start = start
exports.upload = upload