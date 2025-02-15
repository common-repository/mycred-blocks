/**
 * mb Gutemberg block
 *  Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi)
 */
//
(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var BlockControls = wp.editor.BlockControls;
    var el = wp.element.createElement;
    var SelectControl = wp.components.SelectControl;
    var TextControl = wp.components.TextControl;
    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-exchange', {
        title: __('Exchange', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            from: {
                type: 'string'
            },
            to: {
                type: 'string'
            },
            rate: {
                type: 'string',
                default: '1'
            },
            min: {
                type: 'string',
                default: '1'
            },
            button: {
                type: 'string',
                default: 'Exchange'
            }
        },
        edit: function (props) {
            var from = props.attributes.from;
            var to = props.attributes.to;
            var rate = props.attributes.rate;
            var min = props.attributes.min;
            var button = props.attributes.button;
            var options = [];
            Object.keys(mycred_types).forEach(function (key) {
                options.push({
                    label: mycred_types[key],
                    value: key
                });
            });
            function setFrom(value) {
                props.setAttributes({from: value});
            }
            function setTo(value) {
                props.setAttributes({to: value});
            }
            function setRate(value) {
                props.setAttributes({rate: value});
            }
            function setMin(value) {
                props.setAttributes({min: value});
            }
            function setButton(value) {
                props.setAttributes({button: value});
            }
            return el('div', {}, [
                el('p', {}, 'Exchange Shortcode'
                        ),
                el(InspectorControls, null,
                        el(SelectControl, {
                            label: __('From', 'mycred-gutenberg'),
                            helper: __('The point type to exchange from', 'mycred-gutenberg'),
                            value: from,
                            onChange: setFrom,
                            options
                        }),
                        el(SelectControl, {
                            label: __('To', 'mycred-gutenberg'),
                            helper: __('The point type to exchange to', 'mycred-gutenberg'),
                            value: to,
                            onChange: setTo,
                            options
                        }),
                        el(TextControl, {
                            label: __('Rate', 'mycred-gutenberg'),
                            helper: __('The exchange rate', 'mycred-gutenberg'),
                            value: rate,
                            onChange: setRate
                        }),
                        el(TextControl, {
                            label: __('Minimum', 'mycred-gutenberg'),
                            helper: __('Minimum amount that a user must select to exchange. Use zero for no limit.', 'mycred-gutenberg'),
                            value: min,
                            onChange: setMin
                        }),
                        el(TextControl, {
                            label: __('Button Label', 'mycred-gutenberg'),
                            helper: __('The submit button label', 'mycred-gutenberg'),
                            value: button,
                            onChange: setButton
                        }),
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);