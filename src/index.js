const fs = require("fs");
const path = require("path");
const utils = require("util");
const puppeteer = require("puppeteer");
const hb = require("handlebars");
const readFile = utils.promisify(fs.readFile);
const http = require("http");
const data = require("./utils/constants");

async function getTemplateHtml() {
  console.log("Loading template file in memory");
  try {
    const invoicePath = __dirname + "/invoice.html";
    return await readFile(invoicePath, "utf8");
  } catch (err) {
    return Promise.reject("Could not load html template");
  }
}

async function generatePdf() {
  getTemplateHtml()
    .then(async (res) => {
      console.log("Compiling the template with handlebars");
      const template = hb.compile(res, { strict: true });

      const result = template(data);

      const html = result;

      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();

      await page.setContent(html, { waitUntil: "networkidle0" });
      await page.addStyleTag({ path: "header.css" });
      await page.addStyleTag({ path: "prancha.css" });
      await page.pdf({
        path: "relatorio.pdf",
        format: "A4",
        printBackground: true,
      });

      await browser.close();
      console.log("PDF Generated");
    })
    .catch((err) => {
      console.error(err);
    });
}

//generatePdf();

const host = "localhost";
const port = 3000;

const requestListener = async function (req, res) {
  switch (req.url) {
    case "/":
      const temp = await getTemplateHtml();

      console.log("Compiling the template with handlebars");
      const template = hb.compile(temp, { strict: true });
      // we have compile our code with handlebars
      const result = template(data);
      // We can use this to add dyamic data to our handlebas template at run time from database or API as per need. you can read the official doc to learn more https://handlebarsjs.com/
      const html = result;
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
