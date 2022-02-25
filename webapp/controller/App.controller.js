sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
  ],
  function (Controller, mobileLibrary, Locale, LocaleData, Currency) {
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
    });
  }
);
