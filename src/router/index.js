import Vue from 'vue'
import Router from 'vue-router'
import takephoto from '@/components/takephoto'   //拍照上传
import photoUpload from '@/components/photoUpload'   //移动端选择图片或者拍照上传
import vuexDemo from '@/components/vuexDemo'   //vuex使用案例

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/vuexDemo',
      name: 'vuexDemo',
      component: vuexDemo
    },
    {
      path: '/photoUpload',
      name: 'photoUpload',
      component: photoUpload
    },
    {
      path: '/takephoto',
      name: 'takephoto',
      component: takephoto
    }
  ]
})
