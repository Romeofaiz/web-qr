<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>GiftedMDv2Session Generator</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background-color: black;
    }

    .btn {
      --color: #e5f5f1;
      --color2: rgb(0, 0, 0);
      width: 200px;
      padding: 0.8em 1.75em;
      background-color: green;
      border-radius: 6px;
      border: .3px solid var(--color);
      transition: .5s;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      z-index: 1;
      font-weight: 300;
      font-size: 17px;
      font-family: 'Roboto', 'Segoe UI', sans-serif;
      text-transform: uppercase;
      color: var(--color);
      margin-bottom: 24px;
    }

    .btn::after, .btn::before {
      content: '';
      display: block;
      height: 100%;
      width: 100%;
      transform: skew(90deg) translate(-50%, -50%);
      position: absolute;
      inset: 50%;
      left: 25%;
      z-index: -1;
      transition: .5s ease-out;
      background-color: var(--color);
    }

    .btn::before {
      top: -50%;
      left: -25%;
      transform: skew(90deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::before {
      transform: skew(45deg) rotate(180deg) translate(-50%, -50%);
    }

    .btn:hover::after {
      transform: skew(45deg) translate(-50%, -50%);
    }

    .btn:hover {
      color: var(--color2);
    }

    .btn:active {
      filter: brightness(.7);
      transform: scale(.98);
    }
  </style>
</head>
<body>

  <button onclick="window.open(`https://session.giftedtechnexus.co.ke/qr`)" class="btn">QR Code</button>
  <button onclick="window.open(`https://session.giftedtechnexus.co.ke/pair`)" class="btn">Pair Code</button>
  <button onclick="window.open(`https://github.com/Giftedmaurice/gifted-mdV2`)" class="btn">Bot Repo</button>
  <button onclick="window.open(`https://github.com/Giftedmaurice/gifted-bot-md-plugins`)" class="btn">Plugins</button>
  <button onclick="window.open(`https://wa.me/message/NHCZC5DSOEUXB1`)" class="btn">Contact Me</button>
  <button onclick="window.open(`https://chat.whatsapp.com/L0ctUUVLlsrFYwBHApKfew`)" class="btn">Wa Group</button>
  <button onclick="window.open(`https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o`)" class="btn">Wa Channel</button>
  <button onclick="window.open(`https://instagram.com/giftedtechnexus`)" class="btn">Instagram</button>
  <button onclick="window.open(`https://youtube.com/@giftedtechnexus`)" class="btn">Youtube</button>
  

</body>
</html>








  const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./qr'),
    code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/qr', server);
app.use('/code', code);
app.use('/pair',async (req, res, next) => {
res.sendFile(__path + '/pair.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/main.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forgot To Give Star

 Server running on http://localhost:` + PORT)
})

module.exports = app
