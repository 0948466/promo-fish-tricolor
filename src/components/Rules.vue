<template>
  <section class="rules">
    <div class="rules__inner1">
      <div class="rules__inner2">
        <div class="rules__inner">
          <h2 class="rules__title">
            Правила конкурса
          </h2>
          <div class="rules__wrap">
            <div class="rules__item">
              <p class="rules__text">
                Подпишись на страницы <a href="https://vk.com/oirtv" class="link" rel="noopener" target="_blank">«Охотник и рыболов»</a>
                <br>
                и <a href="https://vk.com/tricolor_tv" class="link" rel="noopener" target="_blank">Триколор</a>
              </p>
            </div>
            <div class="rules__item">
              <p class="rules__text">
                Поделись любой рыбацкой мудростью <br>в социальных сетях
              </p>
            </div>
            <div class="rules__item">
              <p class="rules__text">
                Жди улова
              </p>
            </div>
          </div>
          <div class="rules__hashtag">
            #рыбакрыбакавидитиздалека
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Rules',
};
</script>

<style lang="scss" scoped>
  .rules {
    position: relative;
    padding-bottom: 100px;
    &::before,
    &::after {
      content: '';
      position: absolute;
    }
    @include w768 {
      &::before {
        top: -100px;
        left: 0;
        width: 280px;
        height: 303px;

        background: url("../assets/img/hand-left.png") no-repeat center;
        background-size: contain;
      }
      &::after {
        top: -70px;
        right: 0;
        width: 181px;
        height: 307px;

        background: url("../assets/img/rules/chair.png") no-repeat center;
        background-size: contain;
      }
    }
    @include w320-767 {
      &::before {
        top: -220px;
        left: 0;
        width: 107px;
        height: 201px;

        background: url("../assets/img/rules/hand-left-small.png") no-repeat center;
        background-size: contain;
      }
      &::after {
        top: -160px;
        right: 0;
        width: 101px;
        height: 175px;

        background: url("../assets/img/rules/chair-small.png") no-repeat center;
        background-size: contain;
      }
    }
    &__inner1 {
      &::before,
      &::after {
        content: '';
        position: absolute;
      }
      @include w320-767 {
        &::before {
          top: 560px;
          right: 0;
          width: 119px;
          height: 158px;

          background: url("../assets/img/rules/cap-small.png") no-repeat center;
          background-size: contain;
        }
      }
    }
    &__inner2 {
      @include w320-767 {
        &::before,
        &::after {
          content: '';
          position: absolute;
          right: 0;
          width: 118px;
          height: 163px;

          background: url("../assets/img/points-small-mobile.png") no-repeat center;
          background-size: contain;
        }
        &::before {
          top: -22px;
        }
        &::after {
          top: 141px;
        }
      }
    }
    &__inner {
      &::before,
      &::after {
        content: '';
        position: absolute;
      }
      &::after {
        top: 239px;
        right: 0;
        width: 252px;
        height: 260px;

        background: url("../assets/img/points-bg.png") no-repeat center;
        background-size: contain;
      }
      @include w768 {
        &::before {
          top: -20px;
          right: 0;
          width: 252px;
          height: 260px;

          background: url("../assets/img/points-bg.png") no-repeat center;
          background-size: contain;
        }
        &::after {
          top: 239px;
          right: 0;
          width: 252px;
          height: 260px;

          background: url("../assets/img/points-bg.png") no-repeat center;
          background-size: contain;
        }
      }
      @include w320-767 {
        &::before {
          top: 280px;
          left: 0;
          width: 157px;
          height: 372px;

          background: url("../assets/img/rules/pen-left-small.png") no-repeat center;
          background-size: contain;
        }
        &::after {
          top: 705px;
          left: 0;
          width: 135px;
          height: 207px;

          background: url("../assets/img/rules/hand-left-small-2.png") no-repeat center;
          background-size: contain;
        }
      }

    }
    &__title {
      margin-bottom: 84px;
      font-family: 'Gilroy Bold', sans-serif;
      font-size: 50px;
      line-height: 60px;
      text-align: center;

      color: #606060;
      @include w320-767 {
        margin-bottom: 27px;
        font-size: 32px;
        line-height: 39px;
      }
    }
    &__wrap {
      display: inline-flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;
      max-width: 1000px;
      @include w320-767 {
        justify-content: center;
      }
    }
    &__item {
      position: relative;
      padding-top: 164px;
      width: 240px;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 156px;
        height: 145px;
        background:  no-repeat top;
      }
      &:nth-of-type(1)::before {
        background-image: url("../assets/img/rules/rules-1.png");
      }
      &:nth-of-type(2)::before {
        background-image: url("../assets/img/rules/rules-2.png");
      }
      &:nth-of-type(3)::before {
        background-image: url("../assets/img/rules/rules-3.png");
      }
      @include w320-767 {
        padding: 164px 30px 0 30px;
        &:not(:last-of-type) {
          margin-bottom: 60px;
        }
      }
    }
    &__text {
      font-family: 'Gilroy Medium', sans-serif;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #000000;
      @include w320-767 {
        font-size: 16px;
        line-height: 19px;
        br {
          display: none;
        }
      }
    }
    &__hashtag {
      position: absolute;
      bottom: 0;
      left: 0;
      font-family: 'Gilroy Regular', sans-serif;
      font-size: 20px;
      line-height: 23px;

      color: #E72177;

      transform: rotate(-90deg) translateY(-500%);
      @include w320-767 {
        display: none;
      }
    }
  }

</style>
