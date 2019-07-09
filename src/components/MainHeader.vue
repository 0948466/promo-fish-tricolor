<template>
  <header class="main-header">
    <a href="https://oirtv.ru/" target="_blank" rel="noopener">
      <img
        class="main-header__logo-oir"
        src="../assets/img/logo-oir.png"
        alt="Охотник и рыболов"
      >
    </a>

    <a href="https://www.tricolor.tv/" target="_blank" rel="noopener">
      <img
        class="main-header__logo-tri"
        src="../assets/img/logo-tricolor.svg"
        alt="Tricolor"
      >
    </a>

  </header>
</template>

<script>
export default {
  name: 'MainHeader',
};
</script>

<style lang="scss">
  .main-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 23px 67px;
    @include w320-767 {
      padding: 11px;
      justify-content: center;
    }

    &__logo-oir {
      margin-right: 60px;
      width: 82px;
      height: 114px;
      @include w320-767 {
        margin-right: 15px;
        width: 42px;
        height: 58px;
      }
    }

    &__logo-tri {
      width: 147px;
      height: 117px;
      @include w320-767 {
        width: calc(147px / 2);
        height: calc(117px / 2);
      }
    }
  }

</style>
