<template>
    <div id="app">
        <div class="nav-home">
            <router-link to="/">首页</router-link> |
            <router-link to="/hi">Hi页面</router-link> |
            <router-link to="/hi/hi1">Hi1页面</router-link> |
            <router-link to="/hi/hi2">Hi2页面</router-link> |
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app .nav-home {
        margin-bottom: 100px;
    }
</style>
