<template>
  <section class="social">
    <div class="social__inner">
      <h2 class="social__title">
        Подпишись <br>на наши страницы
      </h2>
      <div class="social__wrap">
        <div class="social__item">
          <img
            src="../assets/img/icon/icon-oir-social.png"
            alt="Охотник и Рыболов"
          >
          <a
            href="https://vk.com/oirtv"
            class="social__btn"
            target="_blank"
            rel="noopener"
          >
            Подписаться
          </a>
        </div>
        <div class="social__item">
          <img
            src="../assets/img/icon/icon-tri-social.png"
            alt="Триколор"
          >
          <a
            href="https://vk.com/tricolor_tv"
            class="social__btn"
            rel="noopener"
            target="_blank"
          >
            Подписаться
          </a>
        </div>
      </div>
      <p
        class="social__text"
      >
        Акция «Онлайн-кубок телеканала Охотник и рыболов» проходит с 9 по 30 июля 2019 года.
        <br>
        С условиями акции, информацией об организаторах, призах, их количестве и порядке получения
        <br>
        можно ознакомиться в <a
          href="/documents/Правила_проведения_конкурса.pdf"
          target="_blank"
          rel="noopener"
        >Правилах акции «Онлайн-кубок телеканала Охотник и рыболов».
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Social',
};
</script>

<style lang="scss" scoped>
  .social {
    position: relative;
    margin-top: 97px;
    padding: 0 0 54px;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    @include w320-767 {
      padding: 40px 0;
      margin-top: 20px;
    }
    @include w1300 {
      &::before {
        top: -30px;
        left: 0;
        width: 277px;
        height: 385px;

        background: url("../assets/img/social/cap.png") no-repeat center;
        background-size: contain;
      }

      &::after {
        top: 300px;
        left: 0;
        width: 303px;
        height: 439px;

        background: url("../assets/img/social/fish.png") no-repeat center;
        background-size: contain;
      }
    }
    @include w320-767 {
      &::after {
        top: 425px;
        left: 0;
        width: 178px;
        height: 360px;

        background: url("../assets/img/social/fish-small.png") no-repeat center;
        background-size: contain;
      }
    }

    &__inner {
      &::before,
      &::after {
        content: '';
        position: absolute;
      }

      @include w1300 {
        &::before {
          top: -100px;
          right: 0;
          width: 349px;
          height: 828px;

          background: url("../assets/img/social/pen.png") no-repeat center;
          background-size: contain;
        }

        &::after {
          top: 400px;
          right: 0;
          width: 194px;
          height: 311px;

          background: url("../assets/img/social/boots.png") no-repeat center;
          background-size: contain;
        }
      }
      @include w320-767 {
        &::before {
          top: 340px;
          right: 0;
          width: 161px;
          height: 388px;

          background: url("../assets/img/social/pen-small.png") no-repeat center;
          background-size: contain;
        }
      }
    }

    &__title {
      margin-bottom: 84px;
      @include w320-767 {
        margin-bottom: 56px;
      }
    }

    &__wrap {
      display: flex;
      justify-content: center;
      margin-bottom: 135px;
      @include w320-767 {
        flex-direction: column;
        margin-bottom: 49px;
      }
    }

    &__item {
      @include w768 {
        &:first-of-type {
          margin-right: 220px;
        }
      }
      @include w320-767 {
        &:first-of-type {
          margin-bottom: 58px;
        }
      }

      img {
        margin-bottom: 60px;
        width: 320px;
        height: 318px;
        @include w320-767 {
          margin-bottom: 22px;
          width: 219px;
          height: 219px;
        }
      }
    }

    &__btn {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Gilroy Semibold', sans-serif;
      padding: 0 20px 0 76px;
      margin: 0 auto;
      width: 233px;
      height: 56.92px;
      box-sizing: border-box;
      background: #3C6D9A;
      border-radius: 40px;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      color: #FFFFFF;
      text-decoration: none;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 20px;
        width: 56px;
        height: 55px;
        transform: translateY(-50%);
        background: url("../assets/img/icon/icon-vk.svg") no-repeat center;
        background-size: contain;
        @include w320-767 {
          left: 16px;
          width: 41px;
          height: 40px;
        }
      }

      @include w320-767 {
        padding: 0 15px 0 56px;
        width: 177px;
        height: 44px;
        font-size: 16px;
        line-height: 40px;
      }
    }

    &__text {
      font-family: Gilroy Medium, sans-serif;
      font-size: 20px;
      line-height: 25px;
      text-align: center;

      color: #666666;

      a {
        color: #3C6D9A;
      }

      @include w320-767 {
        padding: 0 20px;
        font-size: 12px;
        line-height: 17px;
        br {
          display: none;
        }
      }
    }
  }

</style>

<style lang="scss">
  .share {
    display: flex;
    align-items: center;
    @include w320-767 {
      flex-direction: column;
      align-items: flex-start;
    }

    .ya-share2 {
      margin: 0 auto;
    }

    .ya-share2__title {
      font-size: 0;
      display: none;
    }

    .ya-share2__icon {
      display: none;
    }

    .ya-share2__link {
      display: block;
      position: relative;
      width: 233px;
      height: 56.92px;
      background: #3C6D9A;
      border-radius: 40px;
      box-sizing: border-box;
      @include w320-767 {
        width: 186px;
        height: 44px;
      }

      &::before {
        content: 'Подписаться';
        position: absolute;
        top: 50%;
        left: 80px;
        transform: translateY(-50%);
        font-family: 'Gilroy Semibold', sans-serif;
        font-size: 20px;
        line-height: 40px;
        text-align: center;
        color: #FFFFFF;
        @include w320-767 {
          left: 63px;
          font-size: 16px;
          line-height: 40px;
        }
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 20px;
        width: 56px;
        height: 55px;
        transform: translateY(-50%);
        background: url("../assets/img/icon/icon-vk.svg") no-repeat center;
        background-size: contain;
        @include w320-767 {
          left: 16px;
          width: 41px;
          height: 40px;
        }
      }

      @include w320-767 {
        padding: 0 15px 0 56px;
        width: 177px;
        height: 44px;
        font-size: 16px;
        line-height: 40px;
      }
    }
  }

</style>
