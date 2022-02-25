sap.ui.require(
  [
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Text, JSONModel, XMLView, BindingMode, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      const oProductModel = new JSONModel();
      oProductModel.loadData("./model/Products.json");
      sap.ui.getCore().setModel(oProductModel, "products");

      const oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
        address: {
          street: "Somestreet 1",
          city: "Anyville",
          zip: "42",
          country: "Neverland",
        },
        salesAmount: 12345.6789,
        currencyCode: "EUR",
      });

      const oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.db.i18n.i18n",
        supportedLocales: ["", "ru"],
        fallbackLocale: "",
      });

      //   oModel.setDefaultBindingMode(BindingMode.OneWay);

      sap.ui.getCore().setModel(oModel);

      sap.ui.getCore().setModel(oResourceModel, "i18n");

      const oView = new XMLView({
        viewName: "sap.ui.demo.db.view.App",
      });

      sap.ui.getCore().getMessageManager().registerObject(oView, true);

      oView.placeAt("content");
    });
  }
);
