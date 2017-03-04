require('./check-versions')()

var config = require('../config')
if(!process.env.NODE_ENV) {
	process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var fs = require('fs'); //文件读取
var app = express() //express 构建应用  模拟请求
var apiRouter = express.Router()
var bodyParser = require('body-parser')
var multer = require('multer')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(multer())

app.use('/data', apiRouter)

var readFile = function(fileName) {
	return new Promise(function(resolve, reject) {
		fs.readFile(fileName,function(err, data) {
			if(err) throw(err);
			resolve(data);
		});
	});
	
};



apiRouter.post('/rank',function(req,res){ //获取
	let url='./data.json';
	readFile(url)
	.then(function(data){
		let mark = JSON.parse(data);
			res.json({
				errno: 0,
				data: mark.sign
			});
	})
})
	
apiRouter.post('/sign', function(req, res) { //设置
	let news = req.body,
			url='./data.json';
	readFile(url)
	.then(function(data){
			let mark = JSON.parse(data);
				if(news.name){
					if(mark.sign.find(val => val == news) != undefined) return;
				let inArr = mark.sign.findIndex( val => val.name == news.name);
				if(inArr == -1) { //没找到
					mark.sign.push(news);
				} else {
					mark.sign[inArr].code = news.code;
				}
				
			}
			
			mark.sign.sort((a1, a2) => a1.code - a2.code); //排序
			if(mark.sign.length>10) mark.sign.splice(10);
			let tmp = JSON.stringify(mark);
			fs.writeFileSync(url, tmp);
			res.json({
				errno: 0,
				data: mark.sign
			});
	})

});

var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackConfig.output.publicPath,
	quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
	log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
	compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
		hotMiddleware.publish({ action: 'reload' })
		cb()
	})
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
	var options = proxyTable[context]
	if(typeof options === 'string') {
		options = { target: options }
	}
	app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function() {
	console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function(err) {
	if(err) {
		console.log(err)
		return
	}

	// when env is testing, don't need open it
	if(autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
		opn(uri)
	}
})