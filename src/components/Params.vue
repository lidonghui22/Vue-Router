<template>
    <div class="params">
        <div>{{ msg }}</div>
        <div>newsId: {{ $route.params.newsId }}</div>
        <div>newsTitle: {{ $route.params.newsTitle }}</div>
    </div>
</template>

<script>
    export default {
        name: "Params",
        data() {
            return {
                msg: 'Params页面'
            }
        },
    }
</script>

<style scoped>

</style>
