const pdf = require("pdf-creator-node");
const fs = require("fs");
var path = require("path");
const open = require("open");
const html = fs.readFileSync("./documents/index.js", "utf8");

module.exports = (app) => {
  const vat = require("../controllers/controllerroutes");
  // vat={findall:function(){},create:}

  app.get("/vat", vat.findAll);

  app.post("/vat", vat.create);

  // app.get("/vat/:vatId", vat.findAll);

  app.get("/vat/:vatId", vat.findOne);

  app.put("/vat/:vatId", vat.update);

  // app.delete("/vat:vatId", vat.delete);
  app.delete("/vat/:vatId", vat.delete);

  //pdf generation

  // POST route PDF generation and fetching of the data
  app.post("/create-pdf", (req, res) => {
    console.log(req.body);
    var document = {
      html: html,
      data: {
        product: req.body,
      },
      path: "../documents/" + Date.now() + ".pdf",
    };
    console.log("document>>>>>>>>>>>>>", document);

    var options = {
      format: "A4",
      orientation: "potrait",
      border: "10mm",
    };

    console.log("document>>>>>>>>>>>>>", options);

    pdf
      .create(document, options)
      .then((res) => {
        console.log(res);
        open(res.filename);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  //GET route Send the generated pdf to the client
  app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
  });
};
 