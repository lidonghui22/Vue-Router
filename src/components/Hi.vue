<template>
    <div class="hi">
        <div>{{msg}}</div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "Hi",
        data() {
            return {
                msg: 'Hi页面'
            }
        },
    }
</script>

<style scoped>

</style>
