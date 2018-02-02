<template>
    <div id="vue">{{text}}</div>
</template>
<script>
    export default {
        data() {
            return {
                text: 'hello vue '
            }
        }
    }
</script>
<style>
    #vue {
        font-size: 36px;
        color: aqua;
    }
</style>