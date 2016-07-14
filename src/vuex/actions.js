import Vue from 'vue'
import marked from 'marked'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  highlight (code) {
    return require('highlight.js').highlightAuto(code).value
  }

})

export const renderHtml = ({dispatch}, e)=>{
  var _renderHtml = marked(e.target.value)
  return dispatch('MARKDOWN_SUCCESS', e.target.value, _renderHtml)
}
