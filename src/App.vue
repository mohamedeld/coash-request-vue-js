<template>
    <TheHeader/>
    <router-view></router-view>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
export default{
    components:{TheHeader}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
    padding:0;
    margin:0;
    box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

</style>