const Watch = require('../scheema/Scheema');
const connection = require('../db/connection');
const productController = {
    getAll: async function getAllProducts(req, res) {
        try {
            res.json(await Watch.find());
        }catch (error) {
            console.log(error);
        }
    },
    addProduct: async function addProduct(req,res) {

        const newWatch = new Watch({
            name: req.name,
            image: req.image,
            rating: req.rating,
            price: req.price,
        });

        try {
            const savedWatch = await newWatch.save();
            console.log('Watch saved successfully:', savedWatch);
            res.status(200).json(savedWatch);
        } catch (error) {
            console.log('Error saving watch:', error);
        }
    },
    findOne: async function findOne(req,res) {
        res.json(await Watch.deleteMany({}));
        // Watch.deleteMany({});
        // return {
        //     "name": "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        //     "image":
        //         "https://cdn.buyabans.com/media/catalog/product/cache/b26914b4315099761016f66ddcabadb6/w/e/web_7_42.jpg",
        //     "rating": 5,
        //     "price": 123


    }
}

module.exports = productController;