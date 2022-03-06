const productsModule = require('./product.model');

module.exports = {
  Query : {
    products : () => {
    return  productsModule.getAllProducts();
    }
    ,
    productByPrice :(_ , args) => {
      return productsModule.getAllProductsByPrice(args.min , args.max);
    }
    ,
    productById :(_ , args) => {
    return productsModule.getAllProductById(args.id)
    }
    ,
    getAllRatingAndReviews : (_ , args) =>{
      return productsModule.getAllRatingAndReviews(args.id , args.star)
    }
  }
 ,
  Mutation : {
    addNewProduct :(_ , args) => {
      return productsModule.addNewProduct(args.id , args.description , args.price);
    },
    addNewReviews : (_ , args) => {
      return productsModule.addNewReviews( args.id ,args.rating , args.commnet);
    }
  }
}