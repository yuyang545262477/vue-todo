<template>
	<div id="vue">{{text}}</div>
</template>
<script>
    export default {
        data() {
            return {
                text: 'hello vue 123 456'
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