<template>
  <div id="app">
    <!-- 路由切换 -->
    <!-- router-link属性 -->
    <!-- 
    :active-class  -- 点击激活的属性
    :tag="li"   --渲染成某种标签，例如 <li>
    :event="mouseover"  --声明可以用来触发导航的事件，默认click不填
    :replace    --当点击时，会调用 router.replace(),于是导航后不会留下 history 记录。 
    -->

   <router-link active-class="activeClass" :to="'/vuexDemo'">vuex</router-link>
   <router-link active-class="activeClass" :to="'/photoUpload'">图片上传</router-link>
   <router-link active-class="activeClass" :to="'/takephoto'">拍照</router-link>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.activeClass{
  color: red;
}
</style>
