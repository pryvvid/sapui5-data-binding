sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/library"],
  function (Controller, mobileLibrary) {
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
    });
  }
);
