<template>
  <div class="tinymce-box">
    <Editor v-model="myValue" :init="init" :disabled="disabled"  :id="tinymceId" />
  </div>
</template>

<script setup>
// import api from "@/services/rootapi/api.js";
//这里的api是我定义的接口文件(一般情况下你只需要引入你的接口配置文件就可以了)
//如果不懂看下面代码，我附上了我的api文件

//引入tinymce编辑器
import Editor from "@tinymce/tinymce-vue";

//引入node_modules里的tinymce相关文件文件
import tinymce from "tinymce/tinymce"; //tinymce默认hidden，不引入则不显示编辑器
import "tinymce/themes/silver"; //编辑器主题，不引入则报错
import "tinymce/icons/default"; //引入编辑器图标icon，不引入则不显示对应图标

// 引入编辑器插件（基本免费插件都在这儿了）
import "tinymce/plugins/advlist"; //高级列表
import "tinymce/plugins/anchor"; //锚点
import "tinymce/plugins/autolink"; //自动链接
import "tinymce/plugins/autoresize"; //编辑器高度自适应,注：plugins里引入此插件时，Init里设置的height将失效
import "tinymce/plugins/autosave"; //自动存稿
import "tinymce/plugins/charmap"; //特殊字符
import "tinymce/plugins/code"; //编辑源码
import "tinymce/plugins/codesample"; //代码示例
import "tinymce/plugins/directionality"; //文字方向
import "tinymce/plugins/emoticons"; //表情
import "tinymce/plugins/fullpage"; //文档属性
import "tinymce/plugins/fullscreen"; //全屏
import "tinymce/plugins/help"; //帮助
import "tinymce/plugins/hr"; //水平分割线
// import "tinymce/plugins/image"; //插入编辑图片
import "tinymce/plugins/importcss"; //引入css
import "tinymce/plugins/insertdatetime"; //插入日期时间
import "tinymce/plugins/link"; //超链接
import "tinymce/plugins/lists"; //列表插件
// import "tinymce/plugins/media"; //插入编辑媒体
import "tinymce/plugins/nonbreaking"; //插入不间断空格
import "tinymce/plugins/pagebreak"; //插入分页符
import "tinymce/plugins/paste"; //粘贴插件
import "tinymce/plugins/preview"; //预览
import "tinymce/plugins/print"; //打印
import "tinymce/plugins/quickbars"; //快速工具栏
import "tinymce/plugins/save"; //保存
import "tinymce/plugins/searchreplace"; //查找替换
// import 'tinymce/plugins/spellchecker'  //拼写检查，暂未加入汉化，不建议使用
import "tinymce/plugins/tabfocus"; //切入切出，按tab键切出编辑器，切入页面其他输入框中
import "tinymce/plugins/table"; //表格
import "tinymce/plugins/template"; //内容模板
import "tinymce/plugins/textcolor"; //文字颜色
import "tinymce/plugins/textpattern"; //快速排版
import "tinymce/plugins/toc"; //目录生成器
import "tinymce/plugins/visualblocks"; //显示元素范围
import "tinymce/plugins/visualchars"; //显示不可见字符
import "tinymce/plugins/wordcount"; //字数统计
import axios from 'axios'
import { reactive, ref, onMounted, watch } from 'vue'
const emits = defineEmits(["getContent"])
const props = defineProps({
  value: {
    type: String,
    default: () => {
      return ""
    },
  },
  baseUrl: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  plugins: {
    type: [String, Array],
    default: "lists  table",
  },//必填
  toolbar: {
    type: [String, Array],
    default:
      "codesample bold italic underline alignleft aligncenter alignright alignjustify | undo redo | formatselect | fontselect | fontsizeselect | forecolor backcolor | bullist numlist outdent indent | lists link table code | removeformat ",
  },//必填
})
//用于接收外部传递进来的富文本
const myValue = ref(props.value)
const tinymceId = ref("vue-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""))
//定义一个对象 init初始化
const init = reactive({
  selector: '#' + tinymceId.value, //富文本编辑器的id,
  language_url: "/tinymce/langs/zh_CN.js", // 语言包的路径，具体路径看自己的项目，文档后面附上中文js文件
  language: "zh_CN", //语言
  skin_url: "/tinymce/skins/ui/oxide", // skin路径，具体路径看自己的项目
  height: 400, //编辑器高度
  branding: false, //是否禁用“Powered by TinyMCE”
  menubar: true, //顶部菜单栏显示
  image_dimensions: false, //去除宽高属性
  plugins: props.plugins,  //这里的数据是在props里面就定义好了的
  toolbar: props.toolbar, //这里的数据是在props里面就定义好了的
  font_formats: 'Arial=arial,helvetica,sans-serif; 宋体=SimSun; 微软雅黑=Microsoft Yahei; Impact=impact,chicago;', //字体
  fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px 64px 72px', //文字大小
  // paste_convert_word_fake_lists: false, // 插入word文档需要该属性
  paste_webkit_styles: "all",
  paste_merge_formats: true,
  nonbreaking_force_tab: false,
  paste_auto_cleanup_on_paste: false,
  file_picker_types: 'file',
  content_css: '/tinymce/skins/content/default/content.css', //以css文件方式自定义可编辑区域的css样式，css文件需自己创建并引入
  //图片上传
  images_upload_handler: (blobInfo, progress) => new Promise((resolve, reject) => {

    if (blobInfo.blob().size / 1024 / 1024 > 2) {
      reject({ message: '上传失败，图片大小请控制在 2M 以内', remove: true })
      return
    } else {
      const ph = import.meta.env.VITE_BASE_PATH + ":" + import.meta.env.VITE_SERVER_PORT + "/"
      let params = new FormData()
      params.append('file', blobInfo.blob())

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",

        }
      }
      axios.post('xxxx', params, config).then(res => {
        if (res.data.code == 200) {
          resolve(ph + res.data.msg)  //上传成功，在成功函数里填入图片路径
        } else {
          reject('HTTP Error: 上传失败' + res.data.code);
          return
        }
      }).catch(() => {
        reject('上传出错，服务器开小差了呢')
        return
      })
    }
  }),
  // 文件上传
  file_picker_callback: (callback, value, meta) => {
    // Provide file and text for the link dialog
    if (meta.filetype == 'file') {
      callback('mypage.html', { text: 'My text' });
    }

    // Provide image and alt text for the image dialog
    if (meta.filetype == 'image') {
      callback('myimage.jpg', { alt: 'My alt text' });
    }

    // Provide alternative source and posted for the media dialog
    if (meta.filetype == 'media') {
      callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
    }
  } 
})
//监听外部传递进来的的数据变化
watch(
  () => props.value,
  () => {
    myValue.value = props.value
   
    emits("getContent", myValue.value)
  }
)
//监听富文本中的数据变化
watch(
  () => myValue.value,
 
  () => {
    emits("getContent", myValue.value)
  }
)
//在onMounted中初始化编辑器
onMounted(() => {
  tinymce.init({})
})
</script>