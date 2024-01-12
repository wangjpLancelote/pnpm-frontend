<script setup> 
import demo from './demo.vue'
import demoCode from './demo.vue?raw';

const datalist = [
  {
    attribute: 'text',
    instructions: '内容',
    type: 'sting',
    option: '-',
    default: '水印文字',
  },
    {
    attribute: 'width',
    instructions: '水印范围宽度',
    type: 'number',
    option: '-',
    default: '200',
  },
    {
    attribute: 'height',
    instructions: '水印范围高度',
    type: 'number',
    option: '-',
    default: '200',
  },
]
</script>

# Watermark 展开收起

<br/>

## 基本使用

<demo/>
<preview>{{demoCode}}</preview>

## Attributes

<Attributes :datalist="datalist"/>
