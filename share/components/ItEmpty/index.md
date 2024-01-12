<script setup> 
import demo1 from './demo1.vue'
import demo1Code from './demo1.vue?raw';
import demo2 from './demo2.vue'
import demo2Code from './demo2.vue?raw';
import demo3 from './demo3.vue'
import demo3Code from './demo3.vue?raw';

const datalist = [
  {
    attribute: 'name',
    instructions: '提示内容',
    type: 'string',
    option: '-',
    default: '暂无数据',
  },
  {
    attribute: 'size',
    instructions: '大小',
    type: 'String',
    option: 'big small default',
    default: 'default',
  },
]
</script>

# ItEmpty 空状态

<br/>

## 基本使用

<demo1/>
<preview >{{demo1Code}}</preview>

## 小样式

<demo2/>
<preview >{{demo2Code}}</preview>

## 自定义

<demo3/>
<preview >{{demo3Code}}</preview>

## Attributes 参数

<Attributes :datalist="datalist"/>
