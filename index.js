const Service = require("@sap_oss/odata-library").Service;

const API_URL = "https://services.odata.org/V2/OData/OData.svc/";
const NUM_OF_PRODUCTS = 10;

var service = new Service(API_URL);

service.init.then(() => {
    return service.Products.get(NUM_OF_PRODUCTS);
}).then((products) => {
    for (index in products) {
        console.log(products[index].Name);
    }
});