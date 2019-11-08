<script>
  import _extends from 'babel-runtime/helpers/extends';
  import omit from 'omit.js';
  // 替换了原组件
  import BiTooltip from "./BiTooltip";
  import abstractTooltipProps from 'ant-design-vue/es/tooltip/abstractTooltipProps';
  import PropTypes from 'ant-design-vue/es/_util/vue-types';
  import { getOptionProps, hasProp, getComponentFromProp, mergeProps } from 'ant-design-vue/es/_util/props-util';
  import BaseMixin from 'ant-design-vue/es/_util/BaseMixin';
  import buttonTypes from 'ant-design-vue/es/button/buttonTypes';
  import Icon from 'ant-design-vue/es/icon';
  import BiButton from '@/components/button/BiButton';
  import '@/styles/components/BiButton.css'
  import LocaleReceiver from 'ant-design-vue/es/locale-provider/LocaleReceiver';
  import defaultLocale from 'ant-design-vue/es/locale-provider/default';
  import Base from 'ant-design-vue/es/base';

  var tooltipProps = abstractTooltipProps();
  var btnProps = buttonTypes();
  // 替换名称
  var BiPopconfirm = {
    name: 'BiPopconfirm',
    props: _extends({}, BiTooltip, {
      prefixCls: PropTypes.string.def('ant-popover'),
      transitionName: PropTypes.string.def('zoom-big'),
      content: PropTypes.any,
      title: PropTypes.any,
      trigger: tooltipProps.trigger.def('click'),
      okType: btnProps.type.def('primary'),
      okText: PropTypes.any,
      cancelText: PropTypes.any,
      icon: PropTypes.any,
      okButtonProps: PropTypes.object,
      cancelButtonProps: PropTypes.object,

      // 增加样式
      /** 提示信息框的宽度（单位px） */
      width: {
        Type: Number,
        default: 216
      },

      /** 提示信息框的高度（单位px） */
      height:{
        Type: Number,
        default: 126
      },

      /** 提示信息的内容 */
      message:{
        Type: String
      }
    }),
    mixins: [BaseMixin],
    model: {
      prop: 'visible',
      event: 'visibleChange'
    },
    watch: {
      visible: function visible(val) {
        this.sVisible = val;
      }
    },
    data: function data() {
      var props = getOptionProps(this);
      var state = { sVisible: false };
      if ('visible' in props) {
        state.sVisible = props.visible;
      } else if ('defaultVisible' in props) {
        state.sVisible = props.defaultVisible;
      }
      return state;
    },

    methods: {
      confirm: function() {
        this.setVisible(false);
        // console.info(e)
        this.$emit('confirm');
      },
      cancel: function() {
        this.setVisible(false);
        this.$emit('cancel');
      },
      onConfirm: function onConfirm(e) {
        this.setVisible(false, e);
        this.$emit('confirm', e);
      },
      onCancel: function onCancel(e) {
        this.setVisible(false, e);
        this.$emit('cancel', e);
      },
      onVisibleChange: function onVisibleChange(sVisible) {
        this.setVisible(sVisible);
      },
      setVisible: function setVisible(sVisible, e) {
        if (!hasProp(this, 'visible')) {
          this.setState({ sVisible: sVisible });
        }
        this.$emit('visibleChange', sVisible, e);
      },
      getPopupDomNode: function getPopupDomNode() {
        return this.$refs.tooltip.getPopupDomNode();
      },
      renderOverlay: function renderOverlay(popconfirmLocale) {
        var h = this.$createElement;
        var prefixCls = this.prefixCls,
          okType = this.okType,
          okButtonProps = this.okButtonProps,
          cancelButtonProps = this.cancelButtonProps;

        var icon = getComponentFromProp(this, 'icon') || h(Icon, {
          attrs: { type: 'exclamation-circle', theme: 'filled' }
        });
        var cancelBtnProps = mergeProps({
          props: {
            size: 'small'
          },
          on: {
            click: this.onCancel
          }
        }, cancelButtonProps);
        var okBtnProps = mergeProps({
          props: {
            type: okType,
            size: 'small'
          },
          on: {
            click: this.onConfirm
          }
        }, okButtonProps);
        // 替换render结果
        return h(
          'div',
          {
            // 将原样式替换
            'class': 'bi-popover-inner-content',
            // 设置气泡框的样式
            style:{
              'height': this.height + 'px',
              'width': this.width + 'px'
            }
          },
          [h(
            'div',
            { 'class': prefixCls + '-message' ,
              // 设置气泡框的文本区域高度，采用父元素的高度减去60px,剩下的就是文本区域的高度
              // 60： 父元素的上内边距 24px + 父元素的下内边距12px + 按键的高度32px
              style:
                {
                  'height': this.height - 68 +'px'
                }
            },
            [h('span',
              {'class': 'bi-popconfirm_span'},
              this.message)]
          ), h(
            'div',
            { 'class': 'bi-popconfirm_buttons' },
            //  替换原按键组件
            [h(
              BiButton,
              {
                'class':'bi-modal_button',
                props:{
                  name:'取消',
                  type: "default",
                  size: "medium",
                  width: 48
                },
                on: {
                  click: this.cancel
                },
              }
            ), h(
              BiButton,
              {
                'class':'bi-modal_button',
                props:{
                  name:'确定',
                  type: "primary",
                  size: "medium",
                  width: 48
                },
                on: {
                  click: this.confirm
                }
              }
            )]
          )]
        );
      }
    },
    render: function render() {
      var h = arguments[0];

      var props = getOptionProps(this);
      var otherProps = omit(props, ['title', 'content', 'cancelText', 'okText']);
      var tooltipProps = {
        props: _extends({}, otherProps, {
          visible: this.sVisible
        }),
        ref: 'tooltip',
        on: {
          visibleChange: this.onVisibleChange
        }
      };
      var overlay = h(LocaleReceiver, {
        attrs: {
          componentName: 'Popconfirm',
          defaultLocale: defaultLocale.Popconfirm
        },
        scopedSlots: { 'default': this.renderOverlay }
      });
      return h(
        // 替换组件
        BiTooltip,
        tooltipProps,
        [h(
          'template',
          { slot: 'title' },
          [overlay]
        ), this.$slots['default']]
      );
    }
  };

  export default BiPopconfirm;

</script>

<style src="../../styles/components/BiPopconfirm.css" >

</style>
