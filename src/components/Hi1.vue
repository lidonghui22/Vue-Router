<template>
    <div class="hi1">
        {{msg}} - {{$route.params.username}} -- {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "Hi1",
        data() {
            return {
                msg: 'Hi1页面'
            }
        },
    }
</script>

<style scoped>

</style>
