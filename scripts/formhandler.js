(function (window) {
    'use strict'

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler() {
        if (!selector) {
            throw new Error('No selector provided!');
        }
    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window);