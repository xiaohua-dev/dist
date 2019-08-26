<template>
  <div class="dashboard-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="hostname"
        label="主机名"
        width="160">
      </el-table-column>
      <el-table-column
      prop="agroup"
      label="资产组"
      width="120">
    </el-table-column>
    <el-table-column
      prop="private_ip_address"
      label="内网地址"
      width="120">
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { getEcsList } from '@/api/dashbord'

export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getEcsList().then(res => {
        // console.log(res)
        this.tableData = res.results
      })
      // getList().then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
