var http = require('http'),
    httpProxy = require('http-proxy'),
    url = require("url"),
    proxy = new httpProxy.RoutingProxy();

http.createServer(function (req, res) {

  var headers = req.headers,
      host = headers.host,
      port = 80;

  if (host.indexOf(":") > 0) {
    var parts = host.split(":");
    host = parts[0];
    port = parts[1] || port;
  }

  // Build the request info text
  var urlParts = url.parse(req.url),
      infoText = req.method + " " + urlParts.pathname + " HTTP/" + req.httpVersion + "\n";
      
  infoText += "Host: " + host + "\n";
  infoText += "User-Agent: " + headers["user-agent"] + "\n";
  infoText += "Accept: " + headers.accept + "\n";
  infoText += "Accept-Language: " + headers["accept-language"] + "\n";
  infoText += "Accept-Encoding: " + headers["accept-encoding"] + "\n";
  infoText += "Accept-Charset: " + headers["accept-charset"] + "\n";
  infoText += "Proxy-Connection: " + headers["proxy-connection"] + "\n";
  infoText += "Referer: " + (headers.referer || "") + "\n";
  infoText += "Cookie: " + headers.cookie + "\n";

  console.log(infoText);

  proxy.proxyRequest(req, res, {
    host: host,
    port: port
  });
}).listen(8001);