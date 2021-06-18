const Service = require("@sap_oss/odata-library").Service;

let northwindODataUrl = "https://services.odata.org/V2/OData/OData.svc/";
let numberOfProducts = 10;

let service = new Service({
    url: northwindODataUrl
});

service.init.then(() => {
    return service.Products.get(numberOfProducts);
}).then((products) => {
    products.forEach(function (product) {
        console.log(product.Name);
    });
});