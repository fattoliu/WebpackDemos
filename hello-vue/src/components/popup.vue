<template>
    <div id="popup">
        <div>
            <button @click="toggle">Popup</button>
            <div v-if="visible">
                <span @click="hide">X</span>
                <h4>title</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </div>
</template>
<script>
import { base } from './mixins/base'

export default {
  name: 'popup',
  mixins: [base]
}
</script>
<style lang="scss" scoped>
</style>