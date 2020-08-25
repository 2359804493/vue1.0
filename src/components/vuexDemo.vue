
<template>
  <div>
    <p @click="upDate()">111111111</p>
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="update()">更新state</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"; //引入vuex里state状态值和mutations函数
export default {
  computed: {
    ...mapState(["name", "age"]), //直接调用name而不要在data里声明
    ...mapMutations(["updateBg"]), //直接调用函数
  },
  data() {
    return {};
  },
  methods: {
    // 改变state值
    update() {
      // action异步改变
      this.$store.dispatch("increment", "我试试提交");
      // mutations直接变更状态
      this.$store.commit("editor", "我试试提交");
      this.getAll()
    },
    getAll() {
      //抛出getters下面的函数
      return this.$store.getters.allUsers;
    },
    addUser() {
      this.$store.dispatch("addUser", {
        name: this.obj.name,
        addr: this.obj.addr,
      });
    },
    del(i) {
      this.$store.dispatch("delUser", i);
    },
  },
};
</script>