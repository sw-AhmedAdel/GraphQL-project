const products=[
  {
    id : 'playStation5',
    description:"playstation 5",
    price : 500,
    reviews : [],
  } ,
  
  {
    id : 'xbox',
    description:"x box ",
    price : 555,
    reviews : [],
  }
  ,
  {
    id : 'callOfDuty',
    description:"call of Duty",
    price : 11,
    reviews : [],
  } ,
]

function getAllProducts(){
  return products
}

function getAllProductsByPrice(min , max) {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  })
}

function getAllProductById(id) {
  return products.find((product) => {
    return product.id === id
  })
}

function addNewProduct(id , description , price) {
  const newProduct = {
    id,
    description,
    price,
    reviews:[],
  }
  products.push(newProduct);
  return newProduct;
}

function addNewReviews ( id, rating , commnet) {
  const product = getAllProductById(id);
  if(product){
   const review = {
     rating,
     commnet,
   }
   product.reviews.push(review);
   return review;
  }
}


function getAllRatingAndReviews (id , star) {
  const product = ProductByID(id);
  const reviews = product['reviews'];
  return reviews.filter((review) => {
   if(review['rating'] === star)
   return review
  })
} 

module.exports = {
  getAllProducts,
  getAllProductsByPrice,
  getAllProductById,
  addNewProduct,
  addNewReviews,
  getAllRatingAndReviews
}