<template>
  <div id="app">
    <div id="nav">
      <a-row class="row">
        <a-col class="col" :span="24">
          说明：参考antd,(icon可在antd中查询使用)
        </a-col>
        <a-col :span="6" class="col" v-for="(b,index) in btnType" :key="index">
          <Cz-Button @click="handlerClick(b.value, b.type, b.name)" type="primary">{{b.name}}</Cz-Button>
        </a-col>
        <a-col class="col" :span="24">
          <a-input v-model="iconName" style="margin-right:25px;width: 250px;" />
          <Cz-Button @click="clickIcon" type="primary">添加图标</Cz-Button>
        </a-col>
        <a-col class="col" :span="24">
          <Cz-Button @click="conClick" 
            :icon="icon" 
            :block="block" 
            :ghost="ghost" 
            :shape="shape" 
            :size="size"
            :disabled="disabled" 
            :loading="loading" 
            :type="type">{{name}}</Cz-Button>
        </a-col>
      </a-row>
      <!-- <a @click="handlerClick">这是一个A标签</a> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

interface BtnType {
  value: string | boolean;
  name: string;
  type: string;
}

interface BtnArray {
  [index: number]: BtnType;
}

const btnType: BtnArray = [
  {
    value: 'large',
    name: '大号',
    type: 'size',
  },
  {
    value: 'default',
    name: '中号',
    type: 'size',
  },
  {
    value: 'small',
    name: '小号',
    type: 'size',
  },
  {
    value: 'primary',
    name: '主要按钮',
    type: 'type',
  },
  {
    value: 'danger',
    name: '危险按钮',
    type: 'type',
  },
  {
    value: 'dashed',
    name: '次要按钮',
    type: 'type',
  },
  {
    value: 'link',
    name: '文字按钮',
    type: 'type',
  },
  {
    value: 'default',
    name: '默认样式',
    type: 'type',
  },
  {
    value: 'circle',
    name: '圆按钮',
    type: 'shape',
  },
  {
    value: 'round',
    name: '半圆按钮',
    type: 'shape',
  },
  {
    value: '',
    name: '默认形状',
    type: 'shape',
  },
  {
    value: false,
    name: 'disabled',
    type: 'disabled',
  },
  {
    value: false,
    name: '幽灵按钮',
    type: 'ghost',
  },
  {
    value: false,
    name: 'block按钮',
    type: 'block',
  },
  {
    value: false,
    name: '加载中',
    type: 'loading',
  },
]

@Component
export default class App extends Vue {
  private btnType: BtnArray = btnType
  private icon: string = ''
  private shape: string = ''
  private type: string = 'primary'
  private size: string = 'default'
  private iconName: string = ''
  private name: string = '默认名称'
  private block: boolean = false
  private ghost: boolean = false
  private disabled: boolean = false
  private loading: boolean = false

  handlerClick (value: boolean|string, type: string, name: string): void {
    this.name = name
    console.log(this.name)
    interface IState {
      [key: string]: any
    }
    if (typeof value === 'boolean') {
      (this as IState)[type] = !(this as IState)[type]
    } else {
      (this as IState)[type] = value
    }
  }

  conClick () {
    window.console.log('zheshigeanniu')
  }

  clickIcon () {
    this.icon = this.iconName
  }
}
</script>

<style lang="less">
#nav {
  margin-left: 200px;
  margin-top: 200px;
}
.row {
  
  width: 400px;
  .col {
    height: 50px;
    text-align: center;
  }
}
</style>
