<template>
    <div>
        <el-row>
            <el-form-item label="工号姓名">
                <el-input v-model="search" placeholder="请输入关键字进行顺序查询"></el-input>
            </el-form-item>
        </el-row>
        <div class="admin_tatle">
            <el-table :data="filterTableData">
                <el-table-column type="index" label="#" style="width: 83px"></el-table-column>
                <el-table-column prop="user_card" label="工号(card)"></el-table-column>
                <el-table-column prop="user_name" label="姓名(name)"></el-table-column>
                <el-table-column label="操作(action)">
                    <template #default="scope">
                        <div>
                            {{ scope.row.date }}
                            <!--点击按钮后传值给admin-v-show-->
                            <el-button type="success" round class="buttom_updata" @click="() => choose()">修改
                            </el-button>
                            <el-button type="success" round class="buttom_delete"
                                @click="() => deleteTotal(0, scope)">删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script  setup>
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const emits = defineEmits(["select"]);
const choose = () => {
    emits("select", "useredit");
};
/* 观察数据 */
const search = ref('')
/* 观察数据 */
const UserData = ref([{
    'user_card': '6020203120',
    'user_name': 'xiejihuang'
},
{
    'user_card': '6020203121',
    'user_name': 'wangbingzhe'
},
{
    'user_card': '6020203122',
    'user_name': 'zhaohuiyuan'
},
{
    'user_card': '6020203123',
    'user_name': 'zhangdaqian'
}])
/* 观察数据 */
const filterTableData = computed(() =>
    UserData.value.filter(
        (data) =>
            /* 观察 */
            !UserData.value ||
            /* 观察 */
            !search.value ||
            data.user_name.toLowerCase().includes(search.value.toLowerCase()) ||
            data.user_card.toLowerCase().includes(search.value.toLowerCase())
    )
)

const open = (i, e) => {
    ElMessageBox.confirm(
        '是否确定删除该用户？',
        '删除用户提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            /* 此处请求api,若相应正常,则两边同步删除,无需再重赋值filterTableData */
            UserData.value.splice(i, 1)
            /*  成功 */
            ElMessage({
                type: 'success',
                message: '删除成功',
            })

        })
        .catch(() => {
            /* 失败 */
            ElMessage({
                type: 'info',
                message: '取消操作',
            })
        })
}
const deleteTotal = (i, e) => {
    console.log(`你点击了第${i + 1}位用户UserData[${i}]`)
    const { user_card, user_name } = e.row
    console.log(user_card, user_name)
    open(i, e)
    console.log(UserData.value)
    return
}
</script>
<style>
.admin_tatle {
    margin-top: 20px;
}

.buttom_updata {
    width: 60px !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}

.buttom_delete {
    width: 60px !important;
    background-color: #e27172 !important;
    height: 40px !important;
    font-size: 19px !important;
    margin: auto !important;
}
</style>