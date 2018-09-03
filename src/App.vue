<template>
    <div id="app">
        <div>
            <button @click="goBack">后退</button>
            <button @click="goGo">前进</button>
            <button @click="goHome">返回首页</button>
        </div>
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

        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            goGo(){
                this.$router.go(1);
            },
            goHome(){
                this.$router.push('/');
            }
        }
    }
</script>

<style>
    #app .nav-home {
        margin-bottom: 100px;
    }

    /*路由过渡动画*/
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .5s;
    }
    .fade-leave{
        opacity: 1;
    }
    .fade-leave-active{
        opacity: 0;
        transition: opacity .5s;
    }








</style>
