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