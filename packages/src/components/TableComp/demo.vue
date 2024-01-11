<template>
  <div>
    <table-test :columns="tableColumn" :table-data="tableData" @command="handleAction">
      <template #addressHeader="{ column }">
        <span>{{ column.label }}(插槽自定义表头)</span>
      </template>
      <template #address="{ row }">
        <span>演示slot使用{{ row.address }}</span>
      </template>
      <template #action="{ row, index }">
        <div>
          <el-button link type="primary" @click="handleDelete(row, index)">添加</el-button>
          <el-button link type="primary" @click="handleDelete(row, index)">删除</el-button>
        </div>
      </template>
    </table-test>
  </div>
</template>
<script lang="ts" setup>
// 必须引入的
import tableTest from '@/components/TableComp/index.vue'
import * as Table from '@/components/TableComp/table'
// 其他
import { h } from 'vue'
import dayjs from 'dayjs'

const tableColumn: Table.Column[] = [
    { type: 'index', width: '50', label: '序号' },
    { prop: 'name', label: '名字', sortable: true },
    { prop: 'date', label: '日期', type: 'date' },
    { prop: 'address', label: '地址', slot: 'address', headerSlot: 'addressHeader',showOverflowTooltip: true },
    {
	        prop: 'date',
	        label: '日期',
	        render: ({ row }) => h('span', dayjs(row.date).format('YYYY-MM-DD HH:mm'))
	    },
    {
        width: '180',
        label: '操作1',
        buttons: [
            { name: '编辑', type: 'primary', command: 'edit' },
            { name: '删除', type: 'primary', command: 'delete' }
        ]
    },
    { prop: 'action', label: '操作2', slot: 'action'},
]
const tableData: any = [
    {
        date: 1660737564000,
        name: '佘太君',
        address: '上海市普陀区金沙江路 1516 弄'
    },
    {
        date: 1462291200000,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
    },
    {
        date: 1462032000000,
        name: '王小帅',
        address: '上海市普陀区金沙江路 1519 弄'
    },
    {
        date: 1462204800000,
        name: '王小呆',
        address: '上海市普陀区金沙江路 1516 弄'
    }
]

const handleAction = (command: Table.Command, row: any) => {
    console.log(command,row);
}
const handleDelete = (row:any, index:number)=>{
  console.log(row,index);
}
</script>
