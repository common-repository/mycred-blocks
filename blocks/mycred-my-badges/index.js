(function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var InspectorControls = wp.editor.InspectorControls;
    var el = wp.element.createElement;
    var TextControl = wp.components.TextControl;
    var SelectControl = wp.components.SelectControl;

    var __ = wp.i18n.__;
    registerBlockType('mycred-blocks/mycred-my-badges', {
        title: __('My Badges', 'mycred-gutenberg'),
        category: 'mycred',
        attributes: {
            show: {
                type: 'string',
                default: 'earned'
            },
            width: {
                type: 'string',
            default:'MYCRED_BADGE_WIDTH'
            },
            height: {
                type: 'string',
            default:'MYCRED_BADGE_HEIGHT'
            },
            user_id: {
                type: 'string'
            }
        },
        edit: function (props) {
            var show = props.attributes.show;
            var width = props.attributes.width;
            var height = props.attributes.height;
            var user_id = props.attributes.user_id;

            function setShow(value) {
                props.setAttributes({show: value});
            }
            function setWidth(value) {
                props.setAttributes({width: value});
            }

            function setHeight(value) {
                props.setAttributes({height: value});
            }

            function setUserId(value) {
                props.setAttributes({user_id: value});
            }


            return el('div', {}, [
                el('p', {}, __('My Badges Shortcode', 'mycred-gutenberg')
                        ),
                el(InspectorControls, null,
                        el(SelectControl, {
                            label: __('Show', 'mycred-gutenberg'),
                            help: __('Select if you want to show only badges that a user has earned or all badges', 'mycred-gutenberg'),
                            value: show,
                            onChange: setShow,
                            options: [
                                {'label': 'All Badges', 'value': 'all'},
                                {'label': 'Earned Badges', 'value': 'earned'}
                            ]
                        }),
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
                        }),
                        el(TextControl, {
                            label: __('User ID', 'mycred-gutenberg'),
                            help: __('Option to show badges of a particular user.', 'mycred-gutenberg'),
                            value: user_id,
                            onChange: setUserId
                        })
                        )
            ]);
        },
        save: function (props) {
            return null;
        }
    });
})(window.wp);