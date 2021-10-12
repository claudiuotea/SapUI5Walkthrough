sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("", {
      onShowHello: function () {
        //read the message from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name"); // asta e din modelul de mai sus oData
        var sMsg = oBundle.getText("helloMsg", [sRecipient]); //ia din i18n helloMsg si inlocuieste param cu sRecipient

        MessageToast.show(sMsg);
      },
    });
  }
);
