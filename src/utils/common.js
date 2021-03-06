const fs = require("fs");
const data = require("./mocks/constants");
const puppeteer = require("puppeteer");
const hb = require("handlebars");
const utils = require("util");
const readFile = utils.promisify(fs.readFile);
const path = require("path");

async function getTemplateHtml() {
  console.log("Loading template file in memory");

  try {
    const invoicePath = path.join(__dirname, "../", "/invoice.html");
    return await readFile(invoicePath, "utf8");
  } catch (err) {
    return Promise.reject("Could not load html template");
  }
}

async function geraPDF() {
  try {
    const temp = await getTemplateHtml();

    console.log("Compiling the template with handlebars");
    const template = hb.compile(temp, { strict: true });

    data.imagemLogo = `<img src="data:image/png;base64,${fs
      .readFileSync(path.join(__dirname, "../", `/assets/icone.png`))
      .toString("base64")}" class="img-header">`;
    data.imagemBarco = `<img src="data:image/png;base64,${fs
      .readFileSync(path.join(__dirname, "../", `/assets/barco.png`))
      .toString("base64")}" class="img-boat">`;
    data.imagemProa = `<img src="data:image/png;base64,${fs
      .readFileSync(path.join(__dirname, "../", `/assets/proa.png`))
      .toString("base64")}" class="img-bordo">`;
    data.imagemEstiBordo = `<img src="data:image/png;base64,${fs
      .readFileSync(path.join(__dirname, "../", `/assets/estibordo.png`))
      .toString("base64")}" class="img-estibordo">`;

    const result = template(data);

    const html = result;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setContent(html, { waitUntil: "networkidle0" });
    const cssPath = path.join(__dirname, "../", "/css/main.css");
    await page.addStyleTag({ path: cssPath });

    await page.pdf({
      path: "reports/relatorio.pdf",
      format: "A4",
      printBackground: true,
    });

    await browser.close();
    console.log("PDF Generated");
  } catch (error) {
    console.log(error);
  }
}

async function testa() {
  const temp = await getTemplateHtml();

  console.log("Compiling the template with handlebars");
  const template = hb.compile(temp, { strict: true });

  data.imagemLogo = `<img src="data:image/png;base64,${fs
    .readFileSync(path.join(__dirname, "../", `/assets/icone.png`))
    .toString("base64")}" class="img-header">`;
  data.imagemBarco = `<img src="data:image/png;base64,${fs
    .readFileSync(path.join(__dirname, "../", `/assets/barco.png`))
    .toString("base64")}" class="img-boat">`;
  data.imagemProa = `<img src="data:image/png;base64,${fs
    .readFileSync(path.join(__dirname, "../", `/assets/proa.png`))
    .toString("base64")}" class="img-bordo">`;
  data.imagemEstiBordo = `<img src="data:image/png;base64,${fs
    .readFileSync(path.join(__dirname, "../", `/assets/estibordo.png`))
    .toString("base64")}" class="img-estibordo">`;

  const result = template(data);

  return result;
}

module.exports = { testa, geraPDF };
