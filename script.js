
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

// 2. Bruk en array metode for å hente kun produktnavnene for rask oversikt.

// Extract all product names for quick overview
const allProductNames = products.map(product => product.name);

// Log all product names
console.log(allProductNames);

// 3. Bruk en eller flere array metoder for å hente ut alle produkt navnene innendfor kategori "electronics".

// Filter products that belong to electronics category
const electronicsProducts = products.filter(product => product.category === "electronics");

// Extract only the names from electronics products
const electronicsNames = electronicsProducts.map(product => product.name);

// Log the electronics product names
console.log(electronicsNames);

// 4. Bruk en array metode for å finne ut hvis noen av produktene koster 1000 eller mer. Hint: Du skal ikke liste ut produktene, bare returne true dersom et eller flere produkter koster 1000 eller mer, eller false dersom ingen produkter koster 1000 eller mer.

// Check if any product costs 1000 or more
const hasExpensiveProducts = products.some(product => product.price >= 1000);

// Log the result
console.log(hasExpensiveProducts);