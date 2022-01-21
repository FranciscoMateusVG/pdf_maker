const fs = require("fs");
const http = require("http");
const { testa, geraPDF } = require("./utils/common");

const host = "localhost";
const port = 3000;

const requestListener = async function (req, res) {
  switch (req.url) {
    case "/":
      const html = await testa();
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(html);
      break;

    case "/main.css":
      fs.readFile(__dirname + "/css/main.css", function read(err, data) {
        if (err) {
          throw err;
        }
        const css = data;

        res.writeHead(200);
        res.end(css);
      });
      break;

    case "/gera":
      await geraPDF();
      res.writeHead(200);
      res.end(JSON.stringify({ msg: "Beleza" }));
      break;

    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
      break;
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
