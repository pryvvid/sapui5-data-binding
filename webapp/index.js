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
      const oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
      });

      const oResourceModel = new ResourceModel({
        bundleName: "sap.ui.demo.db.i18n.i18n",
        supportedLocales: ["", "ru"],
        fallbackLocale: "",
      });

      //   oModel.setDefaultBindingMode(BindingMode.OneWay);

      sap.ui.getCore().setModel(oModel);

      sap.ui.getCore().setModel(oResourceModel, "i18n");

      new XMLView({
        viewName: "sap.ui.demo.db.view.App",
      }).placeAt("content");
    });
  }
);
