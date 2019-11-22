// alert
var myalert = {
  template: `
    <div class="alert">
      <h2>{{title}}</h2>
      <div class="alert-con">
        {{con}}
      </div>
      <button class="submit" @click="submit">确定</button>
    </div>
  `,
  props: ['title', 'con'],
  methods: {
    submit() {
      this.$emit('on-submit', 1)
    }
  }
}

// sub
var myMask = {
  template: `
    <div class="mask" v-if="show">
        <div class="mask-bg"></div>
        <myalert v-bind="$attrs" v-on="$listeners"></myalert>
    </div>
  `,
  components: {
    myalert: myalert
  },
  // inheritAttrs: false,
  data() {
    return {}
  },
  props: ['show'],
};

// app
var app = new Vue({
  el: '#root',
  name: 'app',
  template: `
    <div class="demo-block">
      <div>
          <div @click="isShow = true" style="margin-bottom: 20px">显示弹层</div>
          <my-mask :show="isShow" :title="title" :con="con" @on-submit="submit"></my-mask><br>
      </div>
      <span>{{message}}</span>
    </div>
  `,
  components: {
    'my-mask': myMask
  },
  data: {
    isShow: false,
    title: '我是标题',
    con: '我是内容',
    message: '页面加载于 ' + new Date().toLocaleString()
  },
  methods: {
    submit(data) {
      console.log('close', data)
      // window.alert('关闭弹层');
      this.isShow = false;
    }
  }
})
