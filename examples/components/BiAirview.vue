<template>
  <div>
    <div>
      <p>传文本</p>
      <BiAirview :title="title"
                 :content="content"
      ></BiAirview>
    </div>
    <br><br><br><br><br><br><br><br><br><br>
    <div>
      <p>传slot</p>
      <BiAirview >
        <div slot="title">
          <p>你也可以使用slot</p>
        </div>
        <div slot="content">
          <p style="color: #37AB60">你好，我是content。</p>
          <p style="color: #333333">听到了没有，</p>
          <p style="color: #F39800">我是content。</p>
          <p style="color: #0071F2">跟你说话呢！</p>
          <div style="height: 100px;width: 200px;background: #FFFFFF;margin-top: 5px;border-radius: 5px">
          </div>
        </div>
      </BiAirview>
    </div>


  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:"<div>你可以使用html字符串</div>",
        content: "<p>你好，我是content。</p>\n" +
          "<p>听到了没有，</p>\n" +
          "<p>我是content。</p>\n" +
          "<p>跟你说话呢！</p>"
      }
    }
  }
</script>

<style scoped>

</style>

