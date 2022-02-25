sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
    "sap/m/ObjectAttribute",
  ],
  function (
    Controller,
    mobileLibrary,
    Locale,
    LocaleData,
    Currency,
    ObjectAttribute
  ) {
    "use strict";

    return Controller.extend("sap.ui.demo.wt.controller.App", {
      formatMail: function (sFirstName, sLastName) {
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        return mobileLibrary.URLHelper.normalizeEmail(
          sFirstName + "." + sLastName + "@example.com",
          oBundle.getText("mailSubject", [sFirstName]),
          oBundle.getText("mailBody")
        );
      },
      formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
        const sBrowserLocale = sap.ui
          .getCore()
          .getConfiguration()
          .getLanguage();
        const oLocale = new Locale(sBrowserLocale);
        const oLocaleData = new LocaleData(oLocale);
        const oCurrency = new Currency(oLocaleData.mData.currenctFormat);
        return oCurrency.formatValue(
          [fUnitPrice * iStockLevel, sCurrCode],
          "string"
        );
      },
      onItemSelected: function (oEvent) {
        const oSelectedItem = oEvent.getSource();
        const oContext = oSelectedItem.getBindingContext("products");
        const sPath = oContext.getPath();
        const oProductDetailPanel = this.byId("productDetailsPanel");
        oProductDetailPanel.bindElement({ path: sPath, model: "products" });
      },
      productListFactory: function (sId, oContext) {
        let oUIControl;

        // Decide based on the data which dependent to clone
        if (
          oContext.getProperty("UnitsInStock") === 0 &&
          oContext.getProperty("Discontinued")
        ) {
          oUIControl = this.byId("productSimple").clone(sId);
        } else {
          oUIControl = this.byId("productExtended").clone(sId);

          if (oContext.getProperty("UnitsInStock") < 1) {
            oUIControl.addAttribute(
              new ObjectAttribute({
                text: {
                  path: "i18n>outOfStock",
                },
              })
            );
          }
        }

        return oUIControl;
      },
    });
  }
);
