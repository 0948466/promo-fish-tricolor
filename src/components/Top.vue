<template>
  <section class="top">
    <div class="top__inner">
      <div class="top__age">
        18+
      </div>
      <h1 class="top__title">
        Онлайн-кубок <br>
        телеканала <br>
        «Охотник и рыболов»
      </h1>
      <p class="top__text">
        Смотри телеканал «Охотник и рыболов» <br class="br-mobile">вместе с Триколором!
        <br class="br-desktop">
        Участвуй в конкурсе: <br class="br-mobile">делись мудростью и выигрывай призы!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Top',
};
</script>

<style lang="scss">
  .top {
    padding: 0 53px;
    @include w320-767 {
      padding: 0 20px;
    }

    &__inner {
      position: relative;
      padding: 71px 0 112px;
      margin-bottom: 169px;
      background: url("../assets/img/bg-top.jpg") no-repeat center;
      background-size: cover;
      @include w320-767 {
        padding: 68px 0 90px;
        margin-bottom: 193px;
      }
      &::before {
        content: '';
        position: absolute;
        bottom: -11px;
        left: 50%;
        transform: rotate(1.75deg) translate(-50%, 50%);
        width: 315.53px;
        height: 135.94px;
        background: url("../assets/img/top-fish.png") no-repeat center;
        background-size: contain;
        @include w320-767 {
          width: 253px;
          height: 109px;
        }
      }
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background:  no-repeat center;
        background-size: contain;
        @include w768 {
          bottom: -109px;
          width: 139px;
          height: 18px;
          background-image: url("../assets/img/top-z.svg");
        }
        @include w320-767 {
          bottom: -93px;
          width: 99px;
          height: 17px;
          background-image: url("../assets/img/z-small.png");
        }
      }
    }
    &__title {
      margin-bottom: 60px;
      font-family: 'Gilroy Heavy', sans-serif;
      font-size: 80px;
      line-height: 80px;
      text-align: center;
      color: #FFFFFF;
      @include w320-767 {
        margin-bottom: 30px;
        font-size: 40px;
        line-height: 40px;
      }
    }
    &__age {
      font-family: 'Gilroy Heavy', sans-serif;
      position: absolute;
      top: 10px;
      right: 30px;
      font-size: 60px;
      line-height: 90px;
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      @include w320-767 {
        top: -12px;
        right: 18px;
        font-size: 40px;
        line-height: 90px;
      }
    }
    &__date {
      margin-bottom: 14px;
      font-family: 'Gilroy Semibold', sans-serif;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: #FFFFFF;
      text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      @include w320-767 {
        margin-bottom: 13px;
        font-size: 24px;
        line-height: 29px;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      }
    }
    &__text {
      font-family: 'Gilroy Semibold', sans-serif;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #FFFFFF;
      text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
      .br-mobile {
        display: none;
      }
      @include w320-767 {
        font-size: 15px;
        line-height: 18px;
        text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        .br-mobile {
          display: block;
        }
        .br-desktop {
          display: none;
        }
      }
    }
  }


</style>
