(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;

    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-load-coupon', {
        title: __('Load Coupon', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            label: {
                type: 'string',
                default: 'Coupon'
            },
            button: {
                type: 'string',
                default: 'Apply Coupon'
            },
            placeholder: {
                type: 'string'
            }
        },
        edit: function (props) {
            var label = props.attributes.label;
            var button = props.attributes.button;
            var placeholder = props.attributes.placeholder;

            function setLabel(value) {
                props.setAttributes({label: value});
            }

            function setButton(value) {
                props.setAttributes({button: value});
            }

            function setPlaceholder(value) {
                props.setAttributes({placeholder: value});
            }

            return el('div', {}, [
                el('p', {}, __('Load Coupon Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(TextControl, {
                            label: __('Label', 'mycred-gutenberg'),
                            help: __('The coupon label. Can not be empty.', 'mycred-gutenberg'),
                            value: label,
                            onChange: setLabel

                        }),
                        el(TextControl, {
                            label: __('Button Label', 'mycred-gutenberg'),
                            help: __('The form submit buttons label.', 'mycred-gutenberg'),
                            value: button,
                            onChange: setButton

                        }),
                        el(TextControl, {
                            label: __('Placeholder', 'mycred-gutenberg'),
                            help: __('The placeholder label for the coupon field.', 'mycred-gutenberg'),
                            value: placeholder,
                            onChange: setPlaceholder
                        })
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);