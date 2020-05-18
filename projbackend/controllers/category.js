const Category = require("../models/category");


exports.getCategoryById = (req, res, next, id) =>{
    
    Category.findById(id).exec((err,cate)=>{
        if(err){
            return res.status(400).json({
                error: "category Not Found In DB"
            });
        }
        req.Category.cate;
        next();
    });

};


exports.createCategory = (req, res) =>{
    const category = new Category (req.body);
    category.save(( err, category) =>{
        if(err){
            return res.status(400).json({
                error: "Not Able to save Category in DB"
            });
        }
        res.json(category);
    });
};