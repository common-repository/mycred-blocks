(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;
    var ToggleControl = wp.components.ToggleControl;
    var TextareaControl = wp.components.TextareaControl;

    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-total-balance', {
        title: __('Total Balance', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            user_id: {
                type: 'string'
            },
            types: {
                type: 'string'
            },
            raw: {
                type: 'bool',
                default: false
            },
            total: {
                type: 'bool',
                default: false
            }
        },
        edit: function (props) {
            var user_id = props.attributes.user_id;
            var types = props.attributes.types;
            var raw = props.attributes.raw;
            var total = props.attributes.total;

            function setUserId(value) {
                props.setAttributes({user_id: value});
            }
            function setPtTypes(value) {
                props.setAttributes({types: value});
            }
            function setRaw(value) {
                props.setAttributes({raw: value});
            }
            function setTotal(value) {
                props.setAttributes({total: value});
            }
            return el('div', {}, [
                el('p', {}, __('Total Balance Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(TextControl, {
                            label: __('User ID', 'mycred-gutenberg'),
                            help: __('Option to return a specific users balance. Use "current" to show the current users total balance.', 'mycred-gutenberg'),
                            value: user_id,
                            onChange: setUserId
                        }),
                        el(TextareaControl, {
                            label: __('Point Type(s)', 'mycred-gutenberg'),
                            help: __('Either a single point type key, or "all" for adding up all existing point types or a comma separated list of point type keys. No empty spaces allowed!', 'mycred-gutenberg'),
                            value: types,
                            onChange: setPtTypes,
                            rows: 2
                        }),
                        el(ToggleControl, {
                            label: __('Unformatted', 'mycred-gutenberg'),
                            help: __('Do you want to just return the amount without any HTML elements?', 'mycred-gutenberg'),
                            checked: raw,
                            onChange: setRaw

                        }),
                        el(ToggleControl, {
                            label: __('User ID', 'mycred-gutenberg'),
                            help: __('Do you want to show the total balance?', 'mycred-gutenberg'),
                            checked: total,
                            onChange: setTotal
                        }),
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);