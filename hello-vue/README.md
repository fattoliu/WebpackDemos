# hello-vue

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 学习笔记：

    1.vscode 新建 vue 文件模板：
     Code---首选项---用户代码片段,然后选择 vue，在打开的 vue.json 自定义模板并保持，下次新建 vue 文件后，输入 vue 即可弹出提示.
     模板示例：

```
{
	// Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	},
	"Create vue template": {
		"prefix": "vue",
		"body": [
			"<template>",
			"<div>",
			"</div>",
			"</template>",
			"<script>",
			"export default {",
			"  name: \"${1:component_name}\",",
			"  data () {",
			"    return {",
			"    };",
			"  }",
			"}",
			"</script>",
			"<style lang=\"${2:scss}\" scoped>",
			"</style>"
		],
		"description": "Create vue template"
	}
}
```
