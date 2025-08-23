const ProductManager = require('./ProductManager.js');
const p1 = new ProductManager();

async function guardarProduct() {
    await p1.addProduct('Celular');
    await p1.addProduct('Notebook');
}

async function main() {
    await guardarProduct();
    console.log('Productos guardados');

    const data = await p1.getProducts();
    console.table(data);
}

main();
