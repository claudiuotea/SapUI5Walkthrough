sap.ui.define([
    "sap/ui/core/mvc/XMLView"
], function (XMLView) {
    "use strict";

    XMLView.create({ //creaza view-ul
        viewName:"sap.ui.demo.walkthrough.view.App"
    }).then(function (oView) {
        oView.placeAt("content"); //dupa ce e creat (PROMISE) randeaza pe body [id content]
    });
});