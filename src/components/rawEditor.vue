<template>
  <div id="r1aw-editor">
    <textarea
      :value="rawHtml"
      @input="renderHtml"
      class="form-control">

    </textarea>
  </div>
</template>

<script>
  import {renderHtml} from '../vuex/actions'
  import {getRawHtml} from '../vuex/getters'

  export default {
    vuex: {
      actions: {
        renderHtml
      },
      getters: {
        rawHtml: getRawHtml
      }
    }
  }
</script>

<style>
  #r1aw-editor {
    float: left;
    width: 45%;
    height: 100%;
  }
  textarea {
    font-family: "Microsoft Yahei";
    width: 100%;
    height: 99%;
    border: 0;
    border-radius: 0;
    outline: none;
    padding: 12px;
    font-size: 16px;
    resize: none;
  }
</style>

