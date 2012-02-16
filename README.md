Node Interception Proxy
=======================

An interception proxy in node.js, because Interception Proxies are fun and node is the bomb.

Development is but a day old at time of writing, so all it does right now is logs request information to the console for review. Tampering and the like will be along soon.

Installing
----------

1. Install node
2. Install npm
3. Clone this repo
4. In the console, cd in to this repo's folder, type: 
  `npm install`
5. Proxy your browser to send all requests through 127.0.0.1:8001
6. In the console, from this repo's folder, run: 
  `node index.js`
7. Anything you browse to will cause the request details to be output to the console