<template>
  <div class = 'attrimenu-style'> 
    <a-menu slot="overlay" @click = "click">
      <a-menu-item v-for="item in menuData" :key = "item.key" >
        <img :src = "item.iconSrc"/>
        <span>{{item.title}}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "bi-attrimenu",
  props: {
     menuData: {
        type: Array,
        default: function() { 
            return []
      }
     }
  },
  methods: {
      click(e) {
        this.$emit('click',e)
      }
  }
}
</script>

<style src="../../styles/components/BiAttrimenu.css">
  
</style>