(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;
    var SelectControl = wp.components.SelectControl;
    var ToggleControl = wp.components.ToggleControl;
    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-buy-form', {
        title: __('Buy Form', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            button: {
                type: 'string',
                default: 'Buy Now'
            },
            gateway: {
                type: 'string'
            },
            ctype: {
                type: 'string'
            },
            amount: {
                type: 'string'
            },
            gift_to: {
                type: 'string'
            },
            gift_by: {
                type: 'string'
            },
            inline: {
                type: 'bool',
                default: false
            }

        },
        edit: function (props) {
            var button = props.attributes.button;
            var gateway = props.attributes.title;
            var ctype = props.attributes.ctype;
            var amount = props.attributes.amount;
            var gift_to = props.attributes.gift_to;
            var gift_by = props.attributes.gift_by;

            var inline = props.attributes.inline;

            var options = [];
            function setGateway(value) {
                props.setAttributes({gateway: value});
            }

            function setButton(value) {
                props.setAttributes({button: value});
            }

            function setType(value) {
                props.setAttributes({ctype: value});
            }
            function setAmount(value) {
                props.setAttributes({amount: value});
            }
            function setGiftTo(value) {
                props.setAttributes({gift_to: value});
            }
            function setGiftBy(value) {
                props.setAttributes({gift_by: value});
            }
            function setInline(value) {
                props.setAttributes({inline: value});
            }

            Object.keys(mycred_types).forEach(function (key) {
                options.push({
                    label: mycred_types[key],
                    value: key
                });
            });
            return el('div', {}, [
                el('p', {}, __('Buy Form Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(TextControl, {
                            label: __('Button Label', 'mycred-gutenberg'),
                            help: __('The label for the form submit button.', 'mycred-gutenberg'),
                            value: button,
                            onChange: setButton
                        }),
                        el(TextControl, {
                            label: __('Gateway', 'mycred-gutenberg'),
                            help: __('Enter the gateway ID to enforce the use of a specific gateway or leave empty to let users choose.', 'mycred-gutenberg'),
                            value: gateway,
                            onChange: setGateway,
                        }),
                        el(SelectControl, {
                            label: __('Point Type', 'mycred-gutenberg'),
                            help: __('The point type you want to show.', 'mycred-gutenberg'),
                            value: ctype,
                            onChange: setType,
                            options
                        }),
                        el(TextControl, {
                            label: __('Amount', 'mycred-gutenberg'),
                            help: __('This can either be a set amount for users to buy, a comma separated list of amounts that users can choose from or left empty in which case the user decides how much they want to buy..', 'mycred-gutenberg'),
                            value: amount,
                            onChange: setAmount
                        }),
                        el(TextControl, {
                            label: __('Gift to', 'mycred-gutenberg'),
                            help: __('By default, the current user will receive the purchased amount. Use "author" to gift purchases to the post author or a specific users ID. Leave empty if not used!', 'mycred-gutenberg'),
                            value: gift_to,
                            onChange: setGiftTo
                        }),
                        el(TextControl, {
                            label: __('Gift By', 'mycred-gutenberg'),
                            value: gift_by,
                            onChange: setGiftBy
                        }),
                        el(ToggleControl, {
                            label: __('Inline', 'mycred-gutenberg'),
                            help: __('Controls if the form should be inline (1) or not (0). Requires themes using the Bootstrap framework.', 'mycred-gutenberg'),
                            checked: inline,
                            onChange: setInline
                        }),
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);