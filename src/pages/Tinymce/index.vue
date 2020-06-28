<template>
  <div class="components-container">
    <el-row type="flex"
            class="row-bg">
      <el-col :span="12">
        <tinymce v-model="content"
                 :height="600" />
      </el-col>
      <el-col :span="12">
        <div class="editor-content"
             v-html="content" />
      </el-col>

    </el-row>

  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data () {
    return {
      content:
        `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
    }
  }
}
</script>

<style scoped>
.components-container {
  padding: 20px;
}
.editor-content {
  border: 1px solid seagreen;
  height: 741px;
  margin: 0px 0px 0px 25px;
}
</style>

