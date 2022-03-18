(function (window) {
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.CheckList;
    let Validation = App.Validation;

    let myTruck = new Truck('12345', new DataStore());
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    window.myTruck = myTruck;

    let formHandler = new FormHandler(FORM_SELECTOR);

    // when a checkbox is clicked, call "deliverOrder" on myTruck
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    
    // when the submit button is called, create the order and add a checkbox
    formHandler.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    });

    // add the email validator the the main input field
    formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);