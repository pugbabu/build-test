<template>
  <div class="alarm">
    <BiTable id="biTable" class="alarmTable" ref="tableRef" :dataSource="dataSource" :allPageData="allPageData" :columns="columns" :isPage="isPage" :isSelect="true" :pageSize="pageSize"
      :totalRecord="totalRecord" :tableHeight="476" @pageRequestEvent="handlePageRequest" @selectChangeEvent="handleSelectChange" @rightClickEvent="showMenu">
    </BiTable>
    <a-button class="deleteButtonClass" @click="deleteItems">删除</a-button>
    <a-button class="exportButtonClass" @click="exportTable">导出</a-button>
    <a-button class="printButtonClass" v-print="'#biTable'">打印</a-button>
  </div>
</template>
</bi-table>
</div>
</template>

<script type="text/javascript">
  function initData() {
    this.dataSource = [{
      key: '1',
      number: 1,
      alarmName: 'MSS与网管通信故障',
      alarmLevelStr: '一级',
      alarmLevelNum: 1,
    }, {
      key: '2',
      number: 2,
      alarmName: 'MSS与网管通信故障',
      alarmLevelStr: '二级',
      alarmLevelNum: 2,
    }, {
      key: '3',
      number: 4,
      alarmName: 'MSS与道岔通信故障',
      alarmLevelStr: '四级',
      alarmLevelNum: 4,
    }, {
      key: '4',
      number: 3,
      alarmName: '交换机端口故障',
      alarmLevelStr: '三级',
      alarmLevelNum: 3,
    }];
  }

  function initBufferData() {
    for (let i = 0; i < this.totalRecord; i++) {
      var tempStr;
      var tempNum;
      switch (i % 4) {
        case 0:
          tempStr = "一级"
          tempNum = 1;
          break;
        case 1:
          tempStr = "二级"
          tempNum = 2;
          break;
        case 2:
          tempStr = "三级"
          tempNum = 3;
          break;
        case 3:
          tempStr = "四级"
          tempNum = 4;
          break;
        default:
          break;
      }
      var record = {
        key: i + 1,
        number: i + 1,
        alarmName: 'MSS与网管通信故障',
        alarmLevelStr: tempStr,
        alarmLevelNum: tempNum,
      }
      this.dataRaw.push(record);
      this.dataSorted.push(record);
    }
  }

  function insertRecord() {
    var record = {
      key: this.count,
      number: this.count,
      alarmName: 'MSS与网管通信故障',
      alarmLevel: {
        alarmLevelStr: '二级',
        alarmLevelNum: 2
      },
    };
    // this.dataSource.push(record);
    this.count = this.count + 1;
  }

  /**处理分页数据请求
   * @param currentPage 当前页
   * @param sorterOrder 排序方式（ascend-升序，descend-降序，）
   * @param sortField 要排序的列的key
   * */
  function handlePageRequest(currentPage, sorterOrder, sortField) {
    // console.log("收到请求参数", currentPage, sorterOrder, sortField);
    // 清空表格
    this.dataSource.length = 0;
    // 当前页起始索引
    var startIndex = Math.max((currentPage - 1) * this.pageSize, 0);
    // 当前页结束索引
    var endIndex = Math.min(currentPage * this.pageSize, this.dataSorted.length);
    // 升序或降序排序
    if (("ascend" === sorterOrder) || ("descend" === sorterOrder)) {
      var sortFlag = ("ascend" === sorterOrder) ? true : false;
      this.dataSorted.sort(this.compare(sortField, sortFlag));
      for (let i = startIndex; i < endIndex; i++) {
        this.dataSource.push(this.dataSorted[i]);
      }
    }
    // 原序
    else {
      for (let i = startIndex; i < endIndex; i++) {
        this.dataSource.push(this.dataRaw[i]);
      }
    }
  }

  function handleAllPageRequest(){
    this.allPageData = [...this.dataRaw];
  }

  /**根据数组中某个属性值进行排序的方法
   * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
   * @param attribute 排序的属性 如number属性
   * @param sortFlag true表示升序排列，false降序排序
   * */
  function compare(attribute, sortFlag) {
    //第二个参数没有传递 默认升序排列
    if (sortFlag == undefined) {
      sortFlag = 1;
    } else {
      sortFlag = (sortFlag) ? 1 : -1;
    }

    return function (a, b) {
      a = a[attribute];
      b = b[attribute];
      if (a < b) {
        return sortFlag * -1;
      }
      if (a > b) {
        return sortFlag * 1;
      }
      return 0;
    }
  }

  function handleSelectChange(keys) {
    this.selectedRowKeys = keys;
  }

  function deleteItems() {
    /*删除选中行*/
    for (let j = 0; j < this.selectedRowKeys.length; j++) {
      const dataSource = [...this.dataSource]
      const dataSorted = [...this.dataSorted]
      const dataRaw = [...this.dataRaw]
      // 删除key值为selectedRowKeys[j]的记录
      this.dataSource = dataSource.filter(item => item.key !== this.selectedRowKeys[j])
      this.dataSorted = dataSorted.filter(item => item.key !== this.selectedRowKeys[j])
      this.dataRaw = dataRaw.filter(item => item.key !== this.selectedRowKeys[j])
    }
  }

  function exportTable() {
    // 导出为当前页为.xlsx
    // this.$refs.tableRef.exportTableToExcel("alarm-xlsx");
    // 分页时导出全部数据为.csv
    this.$refs.tableRef.exportTableToCSV("alarm-csv", true, this.dataRaw);
    // 不分页或分页导出当前页数据为.csv
    // this.$refs.tableRef.exportTableToCSV("alarm-csv", false);
  }

  function showMenu(index, record) {
    alert(record.alarmName);
  }

  import BiTable from "../../src/components/table/BiTable";
  import BiAlarmLevel from "../../src/components/table/BiAlarmLevel.vue";
  export default {
    components: {
      BiTable,
      BiAlarmLevel,
    },
    data() {
      return {
        // 表格数据
        dataSource: [],
        // 表格原始数据，分页时用到
        dataRaw: [],
        // 表格排序后的数据，分页时用到
        dataSorted: [],
        allPageData: [],
        // 表头字段
        columns: [{
            title: '序号',
            dataIndex: 'number',
            width: 80,
            align: 'right',
            // sorter: (a, b) => a.number - b.number, // 前台排序中的数值排序
            sorter: true, // 后台排序，sorter属性设置为true
            scopedSlots: {
              customRender: 'number'
            },
          }, {
            title: '报警名称',
            dataIndex: 'alarmName',
            width: 320,
            align: 'left',
            // sorter: (a, b) => this.$refs.tableRef.compareStrings(a.alarmName, b.alarmName), // 前台排序中的字符串排序
            sorter: true, // 后台排序，sorter属性设置为true
            scopedSlots: {
              customRender: 'alarmName'
            },
          },
          {
            title: '报警级别',
            dataIndex: 'alarmLevelStr',
            width: 120,
            align: 'left',
            sorter: (a, b) => a.alarmLevelNum - b.alarmLevelNum,
            // sorter: true, // 后台排序，sorter属性设置为true
            scopedSlots: {
              customRender: 'alarmLevelStr'
            },
            customRender: (text, row, index) => {
              return <BiAlarmLevel zhAlarmLevel = {
                text
              } > </BiAlarmLevel>;
            },
          },
        ],
        // 选中行keys
        isPage: true,
        selectedRowKeys: [],
        count: 1,
        num: 1,
        totalRecord: 500,
        pageSize: 10,
      };
    },
    methods: {
      // 不分页时，初始化表格数据
      initData,
      // 分页时，初始化表格数据
      initBufferData,
      // 插入一行数据，做测试
      insertRecord,
      // 处理分页数据请求
      handlePageRequest,
      // 排序函数
      compare,
      // 处理选中行发生变化事件
      handleSelectChange,
      // 删除选中行
      deleteItems,
      // 导出表格
      exportTable,
      showMenu,
      // 定时插入一行数据
      timer() {
        return setInterval(() => {
          this.insertRecord()
        }, 1000)
      }
    },
    created() {
      this.timer();
      // this.initData();
      this.initBufferData();
    },
  };

</script>

<style>
  .alarm {
    width: 1680px;
    height: 1000px;
    position: absolute;
    top: 80px;
    left: 240px;
    overflow-y: scroll;
  }

  .alarmTable {
    width: 520px;
    height: 476px;
    position: absolute;
    top: 105px;
    left: 30px;
  }

  .deleteButtonClass {
    position: absolute;
    top: 60px;
    left: 30px;
  }

  .exportButtonClass {
    position: absolute;
    top: 60px;
    left: 120px;
  }

  .printButtonClass {
    position: absolute;
    top: 60px;
    left: 210px;
  }

</style>
