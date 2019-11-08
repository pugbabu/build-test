<template>
<div>
  <a-button type="primary" @click="openNotification">从右上开始，无按键，数量为3</a-button>
  <a-button type="primary" @click="openNotification2">从左下开始，有按键，数量为4</a-button>
</div>
</template>
<script>
  import BiNotificationAPI from "../../src/components/notification/BiNotificationApi";
  const close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };
  export default {
    methods: {
      openNotification () {
        const key = `open${Date.now()}`;
        BiNotificationAPI.open({
          message: 'Notification Title',
          description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
          hasButton: false,
          key,
          maxCount:3,
          onClose: close,
        });
      },
      openNotification2 () {
        const key = `open${Date.now()}`;
        BiNotificationAPI.open({
          message: 'Notification Title',
          description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manuall2y).A function will be be called after the notification is closed (automatically after the "duration" time of manuall2y).',
          hasButton: true,
          key,
          duration:null,
          maxCount:4,
          onClose: close,
          placement:'bottomLeft'
        });
      },
    }
  }
</script>>
