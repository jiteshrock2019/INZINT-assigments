const models = require('../models');

exports.create = (req, res) =>{
    console.log(req.body);
    const Product = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,

        category: req.body.category ? req.body.category : false
    };

    models.Products.create(Product)
        .then((data) => {
            
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message:
                    err.message || "Some error is occured while creating the product",
            });
        });

};

exports.findAll = (req, res) =>{
    models.Products.findAll({})
        .then((data) =>{
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message:
                    errr.message || "Some error occured while reteriving the data of users",
            });
        });
};

exports.findOne = (req, res) =>{
    console.log(req);
    const ID = req.params.vatId;

    models.Products.findOne({where: {id: ID}})
        .then((data) =>{
            res.send(data);
        })
        .catch((err) =>{
            res.status(500).send({
                message: "Error while reteriving the Product",
            });
        });
};

exports.update = (req, res) =>{
    const id = req.params.id;
   

    models.Products.update(req.body, {
        where: {id: id},
    })
        .then((num) =>{
            if(num == 1){
                res.send({
                    message: "Product was updated successfully.",
                });
            } else{
                res.send({
                    message: `Cannot update the Tutorials with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) =>{
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id,
            });
        });
};

exports.delete = (req, res) => {
    // console.log("req params"+req.params.vatId);
    const id = req.params.vatId;
    console.log(id)
  
    models.Products.destroy({
      where: { id: id },
    })
      .then((num) => {
        if (num == id) {
          res.send({
            message: "Product was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id,
        });
      });
  };







