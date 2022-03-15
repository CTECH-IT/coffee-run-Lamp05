(function (window) {
    'use strict';
    let App = window.app || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    // Each row is one outstanding order
    function Row(coffeeOrder) {
        let $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
            });
        let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
            });
    }

    let description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
        description += coffeeOrder.flavor + ' ';
    }
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';

    // Add the Checklist to the App namespace
    App.Checklist = CheckList;
    window.App = App;
})(window);