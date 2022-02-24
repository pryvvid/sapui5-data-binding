sap.ui.require(
  ["sap/m/Text", "sap/ui/model/json/JSONModel"],
  function (Text, JSONModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      const oModel = new JSONModel({
        greeting: "Hello world!",
      });

      sap.ui.getCore().setModel(oModel);

      new Text({
        text: "{/greeting}",
      }).placeAt("content");
    });
  }
);
