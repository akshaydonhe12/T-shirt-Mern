const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs =require("fs");

exports.getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if(err){
            return res.status(400).json({
                error:"Product Not Found"
            });
        }
        req.product = product;
        next();
    });
};


exports.createProduct = (req, res) =>{
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) =>{
        if(err){
            return res.status(400).json({
                error:"Problem with image"
            });
        }


    //TODO restrication on field

    let product = new Product(fields)

    //handle file here
    if(files.photo){
        if(files.photo.size > 300000){
            return res.status(400).json({
                error: "File size to big"
            });
        }
        product.photo.data = fs.readFileSync(file.photo.path);
        product.photo.contentType = file.photo.type;
    }
    //save in  DB
    product.save((err, product)=>{
        if(files.photo.size > 300000){
            return res.status(400).json({
                error: "Savin tshirt in DB failed"
            });
        }
        res.json(product);
    });

  });
};