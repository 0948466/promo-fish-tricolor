<template>
  <div id="app">
    <main-header />
    <Top />
    <Rules />
    <Cards/>
    <Social/>
    <MainFooter/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import Top from './components/Top.vue';
import Rules from './components/Rules.vue';
import Social from './components/Social.vue';
import Cards from './components/Cards.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  name: 'App',
  components: {
    Cards,
    Rules,
    Social,
    Top,
    MainHeader,
    MainFooter,
  },
};
</script>

<style lang="scss">
  @import "./scss/init";

#app {
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #FFFFFF;
  text-align: center;
}
</style>
