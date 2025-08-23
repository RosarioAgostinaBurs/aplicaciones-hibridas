const fs = require('fs/promises');
const crypto = require("crypto");

class ProductManager {
    products = [];
    path = "productos.json";

    constructor(products=[]) {
        this.products = products;
    }

    async leerProducts() {
        try {
            const data = await fs.readFile(this.path);
            this.products = JSON.parse(data);
        } catch {
            this.products = [];
        }
    }

    async guardarProduct() {
        const data = JSON.stringify(this.products, null, 2);
        await fs.writeFile(this.path, data);
    }

    async addProduct(producto) {
        await this.leerProducts();

        const id = crypto.randomUUID();
        this.products.push({
            id: id,
            producto: producto
        });

        await this.guardarProduct();
    }

    async getProducts() {
        await this.leerProducts();
        return this.products;
    }

    async getProductBy(id) {
        await this.leerProducts();
        const producto = this.products.find((p) => p.id === id);
        if(!producto) {
            console.log('Not found');
            return {};
        } 
        return producto;
    }
}

module.exports = ProductManager;
