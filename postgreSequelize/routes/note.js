

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
 app.post("create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});
  };
