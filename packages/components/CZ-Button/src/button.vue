<!-- 
**button组件
-->

<template>
  <button id="btn" :disabled="reDisabled" @click="handleClick" class="btn" :class="[shape, size, type, {'ghost':ghost}, {'disabled':disabled}, {'block':block}, {'loading':loading}]">
    <a-icon v-if="isIcon" class="icon-content" :type="icons"></a-icon>
    <slot>
    </slot>
  </button>
</template>
<script lang="ts">
import { Vue, Component, Watch, Emit, Prop } from 'vue-property-decorator'

@Component({
})
export default class CzButton extends Vue {
  name: string = 'test-button'

  @Prop({ default: false }) private disabled!: boolean
  @Prop({ default: false }) private ghost!: boolean
  @Prop() private icon!: string
  @Prop({ default: false }) private loading!: boolean | object
  @Prop({ default: false }) private block!: boolean
  @Prop({ default: '', validator(value: any):string[] { return ['circle', 'round', ''] }}) private shape!: string
  @Prop({ default: 'default', validator(value: any):string[] { return ['large', 'small', 'default'] }}) private size!: string
  @Prop({ default: 'default', validator(value: any):string[] { return ['primary', 'dashed', 'danger', 'link', 'default'] }}) private type!: string

  reDisabled: boolean = !!this.disabled
  isIcon:boolean = !!this.icon
  icons:string = this.icon
  
  @Watch('loading', { immediate: true, deep: true })
  onLoadingChanged (val: boolean | object) {
    if (val) {
      let delay = typeof val === 'boolean' ? 0 : val.delay
      setTimeout(() => {
        this.icons = 'loading'
        this.reDisabled = true
        this.isIcon = true
      }, delay)
    } else {
      this.isIcon = !!this.icon
      this.icons = this.icon
      this.reDisabled = !!this.disabled
    }
  }

  @Watch('icon', {immediate: true})
  onIconChanged (val: string) {
    if (val && !this.loading) {
      this.isIcon = !!this.icon
      this.icons = this.icon
    }
  }

  handleClick () {
    if (this.disabled) {
      return
    }
    this.$emit('click')
  }

}

</script>
<style lang="less" src="./button.less">
</style>