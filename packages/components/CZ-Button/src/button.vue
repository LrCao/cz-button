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
import {
  reactive,
  toRefs,
  defineComponent,
  watch,
} from "@vue/composition-api";


export default defineComponent({
  name: "CZ-Button",

  props: {
    disabled: { //按钮失效状态
      type: Boolean,
      default: false
    },
    ghost: { // 按钮背景透明
      type: Boolean,
      default: false,
    },
    icon: { // 按钮图标类型
      type: String
    },
    loading: { // 设置按钮载入状态
      type: [Boolean, Object],
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    shape: { // 设置按钮形状
      type: String,
      default: '',
      validator (value) {
        return ['circle', 'round ', '']
      }
    },
    size: { // 设置按钮大小
      type: String,
      default: 'default',
      validator (value) {
        return ['large', 'small', 'default']
      }
    },
    type: { // 设置按钮类型
      type: String,
      default: 'default',
      validator (value) {
        return ['primary', 'dashed', 'danger', 'link', 'default']
      }
    }
  },

  setup (props, ctx) {

    const state = reactive({
      reDisabled: !!props.disabled,
      isIcon: !!props.icon,
      icons: props.icon,
    })

    watch(
      () => [props.loading, props.icon],

      ([loading, icon]) => {
        if (loading) {
          let delay = typeof loading === 'boolean' ? 0 : loading.delay
          setTimeout(() => {
            state.icons = 'loading'
            state.reDisabled = true
            state.isIcon = true
          }, delay)
        } else {
          state.isIcon = !!props.icon
          state.icons = props.icon
          state.reDisabled = !!props.disabled
        }
        if (icon && !props.loading) {
          state.isIcon = !!props.icon
          state.icons = props.icon
        }
      }
    )

    const handleClick = () => {
      if (props.disabled) return
      ctx.emit('click')
    }

    return {
      ...toRefs(state),
      handleClick
    }
    
  }
})

</script>
<style lang="less" src="./button.less">
</style>