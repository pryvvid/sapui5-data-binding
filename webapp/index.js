sap.ui.require(
  ["sap/m/Text", "sap/ui/model/json/JSONModel", "sap/ui/core/mvc/XMLView"],
  function (Text, JSONModel, XMLView) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      const oModel = new JSONModel({
        panelHeaderText: "Data Binding Basics",
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
      });

      sap.ui.getCore().setModel(oModel);

      new XMLView({
        viewName: "sap.ui.demo.db.view.App",
      }).placeAt("content");
    });
  }
);
