/*global QUnit*/

sap.ui.define([
    "sap/ui/demo/walkthrough/model/formatter",
    "sap/ui/model/resource/ResourceModel"
], function(formatter, ResourceModel){
    "use strict";

    QUnit.module("Formatting functions", {
        beforeEach: function() {
            this._oResourceModel = new ResourceModel({
                bundleUrl: sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
            }); //creez resursa pentru bundle *acces*
        },

        afterEach: function () {
            this._oResourceModel.destroy();
        }
    });

    QUnit.test("Should return the translated texts", function (assert){
        //Arrange
        //creez stub-uri pentru obiecte, si leg resource model pentru ca vreau sa-l accesez
        var oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel); //cand cer i18n returneaza asta
        
        //pentru functia getModel returnez oModel-ul declarat mai sus care contine resourceModel
        var oViewStub = {
            getModel: oModel 
        };

        var oControllerStub ={
            getView: this.stub().returns(oViewStub)
        };

        //System under test
        var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub); //cand apelez fnIsolatedFormatter() se apeleaza controller.formatter.statusText(..)

        //Asserts
        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");
        assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
    });
});