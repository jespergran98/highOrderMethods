
const products = [
    { name: "Smartphone", price: 800, category: "electronics" },
    { name: "Headphones", price: 150, category: "electronics" },
    { name: "Coffee Maker", price: 100, category: "home appliances" },
    { name: "Blender", price: 250, category: "home appliances" },
    { name: "Laptop", price: 1200, category: "electronics" },
    { name: "T-shirt", price: 50, category: "clothing" },
    { name: "Sneakers", price: 300, category: "clothing" }
];


// 1. Bruk en array metode for å hente ut kun produkter som koster mindre enn 200. Hint: Det kan være ingen produketer, og det kan være en eller flere produkter som matcher dette kriteria.

// Filter out products with price less than 200
const affordableProducts = products.filter(product => product.price < 200);
console.log(affordableProducts);