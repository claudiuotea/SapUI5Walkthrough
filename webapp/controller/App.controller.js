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
      onInit: function () {
        //set data model on VIEW
        var oData = {
          recipient: {
            name: "World",
          },
        };

        var oModel = new JSONModel(oData);
        this.getView().setModel(oModel);

        //set i18n model on view [e un resource file]
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        });

        this.getView().setModel(i18nModel, "i18n");
      },

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
