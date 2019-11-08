<script>
  import _extends from 'babel-runtime/helpers/extends';
  import BiNotification from "./BiNotification";
  import Icon from 'ant-design-vue/es/icon';
  import BiButton from "../button/BiButton";

  // export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

  // export type IconType = 'success' | 'info' | 'error' | 'warning';

  var notificationInstance = {};
  var defaultDuration = 4.5;
  var defaultTop = '24px';
  var defaultBottom = '24px';
  var defaultPlacement = 'topRight';
  var defaultGetContainer = function defaultGetContainer() {
    return document.body;
  };

  // export interface ConfigProps {
  //   top?: number;
  //   bottom?: number;
  //   duration?: number;
  //   placement?: NotificationPlacement;
  //   getContainer?: () => HTMLElement;
  // }
  function setNotificationConfig(options) {
    var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer;

    if (duration !== undefined) {
      defaultDuration = duration;
    }
    if (placement !== undefined) {
      defaultPlacement = placement;
    }
    if (bottom !== undefined) {
      defaultBottom = typeof bottom === 'number' ? bottom + 'px' : bottom;
    }
    if (top !== undefined) {
      defaultTop = typeof top === 'number' ? top + 'px' : top;
    }
    if (getContainer !== undefined) {
      defaultGetContainer = getContainer;
    }
  }

  function getPlacementStyle(placement) {
    var style = void 0;
    switch (placement) {
      case 'topLeft':
        style = {
          left: 0,
          top: defaultTop,
          bottom: 'auto'
        };
        break;
      case 'topRight':
        style = {
          right: 0,
          top: defaultTop,
          bottom: 'auto'
        };
        break;
      case 'bottomLeft':
        style = {
          left: 0,
          top: 'auto',
          bottom: defaultBottom
        };
        break;
      default:
        style = {
          right: 0,
          top: 'auto',
          bottom: defaultBottom
        };
        break;
    }
    return style;
  }

  function getNotificationInstance(prefixCls, placement, callback) {
    var cacheKey = prefixCls + '-' + placement;
    if (notificationInstance[cacheKey]) {
      callback(notificationInstance[cacheKey]);
      return;
    }
    BiNotification.newInstance({
      prefixCls: prefixCls,
      'class': prefixCls + '-' + placement,
      style: getPlacementStyle(placement),
      getContainer: defaultGetContainer,
      closeIcon: function closeIcon(h) {
        return h(Icon, { 'class': prefixCls + '-close-icon', attrs: { type: 'close' }
        });
      } // eslint-disable-line
    }, function (notification) {
      notificationInstance[cacheKey] = notification;
      callback(notification);
    });
  }

  var typeToIcon = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'close-circle-o',
    warning: 'exclamation-circle-o'
  };

  // export interface ArgsProps {
  //   message: React.ReactNode;
  //   description: React.ReactNode;
  //   btn?: React.ReactNode;
  //   key?: string;
  //   onClose?: () => void;
  //   duration?: number | null;
  //   icon?: React.ReactNode;
  //   placement?: NotificationPlacement;
  //   style?: React.CSSProperties;
  //   prefixCls?: string;
  //   className?: string;
  //   readonly type?: IconType;
  // }
  function notice(args) {
    console.info(args,'args')
    var icon = args.icon,
      type = args.type,
      description = args.description,
      placement = args.placement,
      message = args.message,
      btn = args.hasButton;

    var outerPrefixCls = args.prefixCls || 'ant-notification';
    var prefixCls = outerPrefixCls + '-notice';
    var duration = args.duration === undefined ? defaultDuration : args.duration;

    var iconNode = null;
    console.info(icon,'icon')
    debugger
    if (icon) {
      iconNode = function iconNode(h) {
        return h(
          'span',
          { 'class': prefixCls + '-icon' },
          [typeof icon === 'function' ? icon(h) : icon]
        );
      };
    } else if (type) {
      var iconType = typeToIcon[type];
      console.info(type,'type');
      console.info(iconType,'iconType')
      iconNode = function iconNode(h) {
        return h(Icon, { 'class': prefixCls + '-icon ' + prefixCls + '-icon-' + type, attrs: { type: iconType }
        });
      }; // eslint-disable-line
    }

    getNotificationInstance(outerPrefixCls, placement || defaultPlacement, function (notification) {
      notification.notice({
        content: function content(h) {
        debugger
          return h(
            'div',

            { 'class': iconNode ? prefixCls + '-with-icon' : '' },
            [iconNode && iconNode(h), h(
              'div',
              { 'class': prefixCls + '-message' },
              [!description && iconNode ? h('span', { 'class': prefixCls + '-message-single-line-auto-margin' }) : null, typeof message === 'function' ? message(h) : message]
            ), h(
              'div',
              { 'class': prefixCls + '-description' },
              [typeof description === 'function' ? description(h) : description]
            ),
              // 如果存在按键
              btn ? h('div',{'class':'bi-notification_button'},[
                h(
                  BiButton,
                  {
                    props:{
                      size: 'medium',
                      type: "primary",
                      name: "确定"
                    },
                    on:{
                      click:()=>{BiNotificationAPI.close(args.key)}
                    }
                   },
                )
              ]) : null
            ]
          );
        },
        duration: duration,
        closable: true,
        onClose: args.onClose,
        onClick: args.onClick,
        key: args.key,
        maxCount:args.maxCount,
        style: args.style || {},
        'class': args['class']
      });
    });
  }

  var BiNotificationAPI = {
    open: notice,
    close: function close(key) {
      Object.keys(notificationInstance).forEach(function (cacheKey) {
        return notificationInstance[cacheKey].removeNotice(key);
      });
    },

    config: setNotificationConfig,
    destroy: function destroy() {
      Object.keys(notificationInstance).forEach(function (cacheKey) {
        notificationInstance[cacheKey].destroy();
        delete notificationInstance[cacheKey];
      });
    }
  };

  ['success', 'info', 'warning', 'error'].forEach(function (type) {
    BiNotificationAPI[type] = function (args) {
      return BiNotificationAPI.open(_extends({}, args, {
        type: type
      }));
    };
  });

  BiNotificationAPI.warn = BiNotificationAPI.warning;

  // export interface NotificationApi {
  //   success(args: ArgsProps): void;
  //   error(args: ArgsProps): void;
  //   info(args: ArgsProps): void;
  //   warn(args: ArgsProps): void;
  //   warning(args: ArgsProps): void;
  //   open(args: ArgsProps): void;
  //   close(key: string): void;
  //   config(options: ConfigProps): void;
  //   destroy(): void;
  // }
  export default BiNotificationAPI;
</script>

<style lang="less" src="../../styles/components/BiNotification.css">

</style>
