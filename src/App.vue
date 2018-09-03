<template>
    <div id="app">
        <div class="nav-home">
            <router-link to="/">首页</router-link> |
            <router-link to="/hi">Hi页面</router-link> |
            <router-link :to="{name: 'hi1', params:{username: 'lidonghui', id: '888'}}">Hi1页面</router-link> |
            <router-link to="/hi/hi2">Hi2页面</router-link> |
            <router-link to="/params/1991/lidonghui is  a very good man">Params页面</router-link> |
            <router-link to="/goHome">goHome</router-link> |
            <router-link to="/goPatams/7080/I like vue.js">goParams</router-link> |
            <router-link to="/lidonghui">lidonghui</router-link> |
        </div>
        <p>{{ $route.name }}</p>
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
