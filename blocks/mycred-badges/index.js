(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;

    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-badges', {
        title: __('Badges', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            width: {
                type: 'string',
                default: 'MYCRED_BADGE_WIDTH'
            },
            height: {
                type: 'string',
                default: 'MYCRED_BADGE_HEIGHT'
            }
        },
        edit: function (props) {
            var width = props.attributes.width;
            var height = props.attributes.height;

            function setWidth(value) {
                props.setAttributes({width: value});
            }

            function setHeight(value) {
                props.setAttributes({height: value});
            }


            return el('div', {}, [
                el('p', {}, __('Badges Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(TextControl, {
                            label: __('Width', 'mycred-gutenberg'),
                            help: __('The badge image width to use.', 'mycred-gutenberg'),
                            value: width,
                            onChange: setWidth

                        }),
                        el(TextControl, {
                            label: __('Height', 'mycred-gutenberg'),
                            help: __('The badge image height to use.', 'mycred-gutenberg'),
                            value: height,
                            onChange: setHeight
                        })
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);