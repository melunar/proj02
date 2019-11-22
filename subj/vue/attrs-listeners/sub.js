// sub
var myMask = {
  template: `
    <div class="mask" v-if="show">
        <div class="mask-bg"></div>
        <alert v-bind="$attrs" v-on="$listeners"></alert>
    </div>
  `,
  components: {
    alert
  },
  inheritAttrs: false,
  data() {
    return {
    }
  },
  props: ['show'],
  methods: {
  },
  watch: {
  }
};
export default {
  name: 'my-page',
  components: {
    myMask,
  },
  data() {
    return {
      isShow: false,
      title: '我是标题',
      con: '我是内容'
    }
  },
  methods: {
    submit() {
      window.alert('关闭弹层');
      this.isShow = false;
    }
  }
}

// alert
var alert = {
  template: `
    <div class="alert">
      <h2>{{title}}</h2>
      <div class="alert-con">
        {{con}}
      </div>
      <button class="submit" @click="submit">确定</button>
    </div>
  `,
  data() {
    return {
    }
  },
  props: ['title', 'con'],
  methods: {
    submit() {
      this.$emit('on-submit')
    }
  }
}