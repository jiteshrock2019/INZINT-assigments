const models = require("../models");

exports.create = (req, res) =>{
    console.log(req.body);
    const Product = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        catogery: req.body.catogery,
        // catogery: req.body.catogery ? req.body.catogery : false, 
    };

    models.Products.create(Product)
        .then((data) =>{
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message:
                    err.message || "Some error occurs while creating the Product.",
            });
        });
};

exports.findAll = (req, res) =>{
    console.log("findAll called")
    models.Products.findAll({ })
        .then((data) =>{
            res.send(data);
            console.log(data)
        })
        .catch((err) =>{
            res.status(500).send({
                message: 
                    err.message || "Some error is occured while reteriving the ProductData",
            });
        });
};

exports.findOne = (req, res)=> {
    console.log(req);

    const ID = req.params.productId;

    models.Products.findOne({ where: {id: ID} })
        .then((data) =>{
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message: `Error occured while retriving Product ${id}`,
            });
        });

};

exports.update = (req, res) => {
    const id = req.params.id;

    models.Products.update(req.body, {
        where: { id: 2},
    })
        .then((num) =>{
            if(num == 1){
                res.send({
                    message: "Product was Updated Successfully.",
                });
            } else{
                res.send({
                    message: `Cannot update the Product with id=${id}. Product was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error while updating the product with id = "+ id,
            });
        });
};

exports.delete = (req, res) =>{
    const id = req.params.id;

    Products.destroy({
        where: { id: 2 },
    })
      .then((num) => {
          if(num == 2){
                res.send({
                    message: "Product was deleted successfully!",
                });
      } else{
          res.send({
              message: `cannot delete the product with id=${id}. Product not found `,
          });
      }
    })
     .catch((err) => {
         res.status(500).send({
             message: "Could not delete the product with id="+ id,
         });
     });
};
