<template>
  <div class="biTableClass">
    <a-table id="biTable" :columns="columns" :dataSource="dataSource"  :pagination="isPage ? pagination : isPage" :scroll="{y: isPage ? !isPage : tableHeight}" 
      @change="pageRequest" :rowSelection="isSelect ? {selectedRowKeys: selectedRowKeys, onChange, onSelect, onSelectAll} : null">
      <template v-for="col in colArray" :slot="col" slot-scope="text, record, index" >
        <div @contextmenu.prevent="rightClick(index,record)">
          {{text}}
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
  function compareStrings(strA, strB) {
    // 忽略大小写对排序的影响
    var stringA = strA.toUpperCase();
    var stringB = strB.toUpperCase();
    if (stringA < stringB) {
      return -1;
    }
    if (stringA > stringB) {
      return 1;
    }
    return 0;
  }

  function setColArray() {
    for (let i = 0; i < this.columns.length; i++) {
      this.colArray.push(this.columns[i].dataIndex);
    }
  }

  function setTitleArray(){
    for (let i = 0; i < this.columns.length; i++) {
      this.titleArray.push(this.columns[i].title);
    }
  }

  function pageRequest(pagination, filters, sorter) {
    // console.log("@@@@@@@@@@@@@@@@@@@@", pagination.current, sorter);
    /**发送当前页数据请求事件
       @param Number 当前页
       @param String 排序方式（ascend-升序，descend-降序,undefined-原序）
       @param String 要排序的列的key
    * */
    this.$emit('pageRequestEvent', pagination.current, sorter.order, sorter.columnKey);
  }
  
  function onChange(selectedRowKeys, selectedRows) {
    this.selectedRowKeys.length = 0;
    this.selectedRowKeys = selectedRowKeys
  }

  function onSelect(record, selected, selectedRows, nativeEvent) {
    var selectedRowKeys = [];
    for (let i = 0; i < selectedRows.length; i++) {
      selectedRowKeys.push(selectedRows[i].key);
    }
    this.$emit('selectChangeEvent', selectedRowKeys);
  }

  function onSelectAll(selected, selectedRows, changeRows) {
    var selectedRowKeys = [];
    for (let i = 0; i < selectedRows.length; i++) {
      selectedRowKeys.push(selectedRows[i].key);
    }
    this.$emit('selectChangeEvent', selectedRowKeys);
  }

  /**导出表格为.csv文件
       @param fileName      String    导出的文件名称
       @param isPage        Boolean   是否分页，true-分页，false-不分页
       @param allPageData   Array     所有页的数据，分页时需要传入，不分页忽略
    * */
  function exportTableToCSV(fileName, isPage, allPageData = []) {           
    var CSV = '';
    if(false === isPage){
      var arrData = this.dataSource;                 
    }
    else{
      var arrData = allPageData;
    }
            
    var row = "";                
    // 遍历取表头数据
    for(let j = 0; j < this.titleArray.length; j++){
      row += this.titleArray[j] + ',';  
    }             
    row = row.slice(0, -1);               
    // 表头末尾换行             
    CSV += row + '\r\n';            
       
    // 遍历取表格数据        
    for (var i = 0; i < arrData.length; i++) {               
      var row = "";
      for(let j = 0; j < this.colArray.length; j++){
      var index = this.colArray[j];
      row += arrData[i][index] + ',';  
    }             
      row.slice(0, row.length - 1);  
      // 每行数据末尾换行                             
      CSV += row + '\r\n';           
    } 
              
    if (CSV === '') {               
      alert("Invalid data");               
      return;           
    }
    
    // 浏览器为IE            
    if (window.navigator.msSaveOrOpenBlob) {               
      var csvContent = "\ufeff";               
      var uriie = csvContent + CSV;               
      var blob = new Blob([decodeURIComponent(encodeURI(uriie))], {                   
        type: "data:text/csv;charset=utf-8,"               
      });               
      navigator.msSaveBlob(blob, fileName + '.csv');           
    } 
    // 其他浏览器
    else {               
      var csvContent = "data:text/csv;charset=utf-8,\ufeff";               
      var uriother = csvContent + CSV;               
      var encodedUri = encodeURI(uriother);               
      var link = document.createElement("a");               
      link.setAttribute("href", encodedUri);               
      link.setAttribute("download", fileName + ".csv");               
      document.body.appendChild(link);               
      link.click();           
    }       
  }

  /**导出表格为.xlsx文件
       @param fileName  String  导出的文件名称
    * */
  function exportTableToExcel(fileName) {
    let et = XLSX.utils.table_to_book(document.getElementById('biTable'));
    let etout = XLSX.write(et, {
      bookType: 'xlsx',
      bookSST: true,
      type: 'array'
    });
    try {
      FileSaver.saveAs(new Blob([etout], {
        type: 'application/octet-stream'
      }), fileName + ".xlsx"); 
    } catch (e) {
      console.log(e, etout);
    }
    return etout;
  }

  /**右击事件
   * @param index   Number类型 当前右击行索引，从0开始递增
   * @param record  Object类型 当前右击行数据对象
   * */
  function rightClick (index, record) {
    this.$emit('rightClickEvent', index, record)
}

  import FileSaver from 'file-saver'
  import XLSX from 'xlsx'
  export default {
    name: 'BiTable',
    props: {
      // 表格数据
      dataSource: {
        type: Array,
        default: []
      },
      // 表格所有页数据，分页时打印导出用
      allPageData: {
        type: Array,
        default: []
      },
      // 表头字段
      columns: {
        type: Array,
        default: [],
        required: true,
      },
      //是否需要分页，true-分页，false-不分页
      isPage: {
        type: Boolean,
        default: true,
        required: true,
      },
      //是否需要选择行，true-需要选择行，false-不需要选择行
      isSelect: {
        type: Boolean,
        default: false,
      },
      // 表格高度，设置滚动条时画布的高度
      tableHeight: {
        type: Number,
        default: 300,
      },
      // 每页数据条数
      pageSize: {
        type: Number,
        default: 50
      },
      // 数据总条数
      totalRecord: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        // 表头数组
        colArray: [],
        titleArray: [],
        // 分页器参数
        pagination: {
          showQuickJumper: true, // 显示跳转
          hideOnSinglePage: false, // 只有1页时隐藏分页
          pageSize: this.pageSize, // 每页显示的条数
          total: this.totalRecord, // 数据总条数
          // current: 1,                                      // 当前页
        },
        // 选中行keys
        selectedRowKeys: [],
        currentIndex: 1,
        currentRecord: {},
      }
    },
    methods: {
      // 字符串排序函数
      compareStrings,
      // 将表头存到一个数组中
      setColArray,
      setTitleArray,
      // 请求某一页数据
      pageRequest,
      // 选中项发生变化时的回调函数
      onChange,
      // 用户手动选择/取消选择某列的回调函数
      onSelect,
      // 用户手动选择/取消选择所有列的回调函数
      onSelectAll,
      // 导出.csv
      exportTableToCSV,
      // 右击事件
      rightClick,
      // 导出Excel
      exportTableToExcel,
    },
    created() {
      // created时，将表头存到一个数组中
      this.setColArray();
      this.setTitleArray();
      // 刚打开界面时，向后台请求第1页的数据
      this.$emit('pageRequestEvent', 1);
    },
  }

</script>

<style src="../../styles/components/BiTable.css">

</style>
