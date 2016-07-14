<template>
  <div id="render-editor">
    {{{renderHtml}}}
  </div>
</template>
<script>
  import {getRenderHtml} from '../vuex/getters'
  export default {
    vuex: {
      getters: {
        renderHtml: getRenderHtml
      }
    }
  }

</script>
<style>
  #render-editor {
    float: right;
    width: 52%;
    height: 100%;
    overflow-y: auto;
  }
</style>

