const models = require("../models");
const pdf = require("html-pdf");
const app = require("../app");
// for pdf generation
const pdfTemplate = require("../documents/index.js");

exports.create = (req, res) => {
  const Product = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    category: req.body.category ? req.body.category : false,
  };

  models.Products.create(Product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error is occured while creating the product",
      });
    });
};

exports.findAll = (req, res) => {
  models.Products.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          errr.message ||
          "Some error occured while reteriving the data of users",
      });
    });
};

exports.findOne = (req, res) => {
  console.log(req);
  const ID = req.params.vatId;

  models.Products.findOne({ where: { id: ID } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error while reteriving the Product",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.vatId;
  console.log("id>>>>>>>>>>>>", id);

  models.Products.update(req.body, {
    where: { id: id },
  })
    .then(() => {
      res.send({
        message: "Product was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  console.log("req params", req.params.vatId);
  const id = req.params.vatId;
  console.log(id);

  models.Products.destroy({
    where: { id: id },
  })
    .then(() => {
      res.send({
        message: "Product was deleted successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

//pdf generation

// POST route PDF generation and fetching of the data
// app.post("create-pdf", (req, res) => {
//   pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
//     if (err) {
//       res.send(Promise.reject());
//     }

//     res.send(Promise.resolve());
//   });
// });

// //GET route Send the generated pdf to the client
// app.get("/fetch-pdf", (req, res) => {
//   res.sendFile(`${__dirname}/result.pdf`);
// });
