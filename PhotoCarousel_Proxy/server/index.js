// SERVER

const express = require('express');

const proxy = express();

const port = 3004;

const { createProxyMiddleware } = require('http-proxy-middleware');

proxy.use('/api/addresses/:id', createProxyMiddleware({ target: 'http://54.176.5.242/', changeOrigin: true }));
proxy.use('/api/affordability', createProxyMiddleware({ target: 'http://3.88.85.5:3003/', changeOrigin: true }));
proxy.use('/api/affordability/:id', createProxyMiddleware({ target: 'http://3.88.85.5:3003/', changeOrigin: true }));
proxy.use('/api/similarHomes', createProxyMiddleware({ target: 'http://18.216.126.142/', changeOrigin: true }));

proxy.use(express.static('public'));
proxy.use(express.static('client'))

proxy.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})