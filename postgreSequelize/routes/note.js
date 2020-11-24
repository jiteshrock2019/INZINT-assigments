module.exports = (app) => {
    const vat = require("../controllers/controllerroutes");
  
    app.get("/vat", vat.findAll);
  
    app.post("/vat", vat.create);
  
    // app.get("/vat/:vatId", vat.findAll);
  
    app.get("/vat/:vatId", vat.findOne);
  
    app.put("/vat/:vatId", vat.update);

    // app.delete("/vat:vatId", vat.delete);
    app.delete("/vat/:vatId", vat.delete);
  };
  