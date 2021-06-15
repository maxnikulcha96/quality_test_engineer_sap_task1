const Service = require("@sap_oss/odata-library").Service;

var northwindApiUrl = "https://services.odata.org/V2/OData/OData.svc/";
var numberOfProducts = 10;

var service = new Service(northwindApiUrl);

service.init.then(()=> {
    return service.Products.get(numberOfProducts);
}).then((products) => {
    for (index in products) {
        console.log(products[index].Name);
    }
});