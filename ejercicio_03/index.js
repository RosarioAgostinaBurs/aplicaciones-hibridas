const http = require('http');
const ProductManager = require('./ProductManager.js');
const p1 = new ProductManager();

const port = 3000;

/*const server = http.createServer((request, response) => {
    //console.log(request);
    const url = request.url;
    const method = request.method;

    console.log(url, method);

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hola desde Node :)');
});

server.listen(port, () => {
    console.log(`Servidor web en el puerto ${port}`);
})*/

p1.updateProductById('b90d7369-62bb-4bfa-a44b-c8632cfbe7dd', 'Tablet').then(producto => {
    console.log(`${producto}`);
});

/*async function guardarProduct() {
    await p1.addProduct('Celular');
    await p1.addProduct('Notebook');
}*/

/*async function main() {
    await guardarProduct();
    console.log('Productos guardados');

    const data = await p1.getProducts();
    console.table(data);
}

p1.deleteProductById('fd').then(producto => {
    console.log(producto);
})

main();*/
