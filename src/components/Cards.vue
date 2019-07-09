<template>
  <section class="cards">
    <div class="cards__inner1">
      <div class="cards__inner2">
        <div class="cards__inner3">
          <h2 class="cards__title">
            Выбери лучшую мудрость <br>и поделись ей в соцсетях
          </h2>
          <div class="cards__hashtag">
            #рыбакрыбакавидитиздалека
          </div>
          <div class="cards__wrap">
            <div
              v-for="card in cards"
              :key="card.text"
              class="cards__item"
            >
              <img
                class="cards__img"
                :src="card.img"
                :alt="card.title"
              >
              <div class="cards__social">
                <h3 class="cards__social__title">
                  Поделиться
                </h3>
                <div
                  class="ya-share"
                  data-services="vkontakte,odnoklassniki"
                  :data-title="card.title"
                  :data-description="card.text"
                  :data-image="`${baseURL}${card.imgShare}`"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Img1 from '../assets/img/cards/1.png';
import Img2 from '../assets/img/cards/2.png';
import Img3 from '../assets/img/cards/3.png';
import Img4 from '../assets/img/cards/4.png';
import Img5 from '../assets/img/cards/5.png';
import Img6 from '../assets/img/cards/6.png';

import Img1Share from '../assets/img/share/1.png';
import Img2Share from '../assets/img/share/2.png';
import Img3Share from '../assets/img/share/3.png';
import Img4Share from '../assets/img/share/4.png';
import Img5Share from '../assets/img/share/5.png';
import Img6Share from '../assets/img/share/6.png';

export default {
  name: 'Cards',
  data: () => ({
    baseURL: '',
    windowWidth: 0,
    cards: [
      {
        img: Img1,
        imgShare: Img1Share,
        text: 'Мелочь не ловлю',
        title: '#рыбакрыбакавидитиздалека',
      },
      {
        img: Img2,
        imgShare: Img2Share,
        text: 'И тяжесть не на душе, а на леске',
        title: '#рыбакрыбакавидитиздалека',
      },
      {
        img: Img3,
        imgShare: Img3Share,
        text: 'На рыбалку не за уловом, а за душевным покоем',
        title: '#рыбакрыбакавидитиздалека',
      },
      {
        img: Img4,
        imgShare: Img4Share,
        text: 'Душа поет, когда клюет',
        title: '#рыбакрыбакавидитиздалека',

      },
      {
        img: Img5,
        imgShare: Img5Share,
        text: 'Плохой день на рыбалке лучше, чем хороший день на работе',
        title: '#рыбакрыбакавидитиздалека',
      },
      {
        img: Img6,
        imgShare: Img6Share,
        text: 'Рыбалка – дело клевое',
        title: '#рыбакрыбакавидитиздалека',
      },
    ],
  }),
  beforeMount() {
    this.baseURL = window.location.href.slice(0, -1);
  },
  mounted() {
    const shareLinks = document.querySelectorAll('.ya-share');
    shareLinks.forEach((item) => {
      Ya.share2(item, {
        description: 'All about Yandex',
      });
      const link = item.querySelector('.ya-share2__link');
      const comment = item.dataset.description;
      const href = `${link.getAttribute('href')}&comment=${comment}`;
      link.setAttribute('href', href);
    });
  },
};
</script>

<style lang="scss" scoped>
  .cards {
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    @include w768 {
      margin-top: 95px;
      &::before {
        top: -220px;
        left: 0;
        width: 330px;
        height: 796px;

        background: url("../assets/img/cards/pen.png") no-repeat center;
        background-size: contain;
      }

      &::after {
        top: -250px;
        right: 0;
        width: 267px;
        height: 348px;

        background: url("../assets/img/cards/hand-right.png") no-repeat center;
        background-size: contain;
      }
    }
    @include w320-767 {
      margin-top: 30px;
    }

    &__inner1 {
      position: relative;
      &::before,
      &::after {
        content: '';
        position: absolute;
      }

      @include w768 {
        &::before {
          top: 410px;
          left: 0;
          width: 329px;
          height: 427px;

          background: url("../assets/img/cards/points.png") no-repeat center;
          background-size: contain;
        }

        &::after {
          top: 838px;
          left: 0;
          width: 329px;
          height: 427px;

          background: url("../assets/img/cards/points.png") no-repeat center;
          background-size: contain;
        }
      }
    }

    &__inner2 {
      position: relative;
      z-index: 1;
      &::before,
      &::after {
        content: '';
        position: absolute;
      }

      @include w768 {
        &::before {
          top: 1950px;
          left: 0;
          width: 329px;
          height: 427px;

          background: url("../assets/img/cards/points.png") no-repeat center;
          background-size: contain;
        }

        &::after {
          top: 2378px;
          left: 0;
          width: 329px;
          height: 427px;

          background: url("../assets/img/cards/points.png") no-repeat center;
          background-size: contain;
        }
      }
    }

    &__inner3 {
      position: relative;
      z-index: 2;
      padding: 0 38px;
      @include w320-767 {
        padding: 0 20px;
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
          top: -140px;
        }
        &::after {
          top: 23px;
        }
      }
    }
    &__title {
      margin-bottom: 113px;
      @include w320-767 {
        margin-bottom: 12px;
        br {
          display: none;
        }
      }
    }
    &__hashtag {
      margin-bottom: 28px;
      font-size: 14px;
      line-height: 16px;

      color: #E72177;
      @include w768 {
        display: none;
      }
    }

    &__wrap {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @include w320-767 {
        flex-wrap: wrap;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: url("../assets/img/z-small.png") no-repeat center;
          background-size: contain;
          bottom: -15px;
          width: 99px;
          height: 17px;
        }
      }

    }

    &__item {
      position: relative;
      margin: 0 16px 30px 16px;
      max-width: 640px;
      width: 50%;
      box-sizing: border-box;
      background: no-repeat center;
      background-size: cover;
      @include w320-767 {
        margin: 0 0 13px 0;
        padding-bottom: 17px;
        &::after,
        &::before {
          content: '';
          position: absolute;
          width: 160px;
          height: 209px;
          background: url("../assets/img/cards/mobile/points-mobile.png") no-repeat center;
          background-size: contain;
          z-index: 1;
        }
        &::before {
          top: 95px;
        }
        &::after {
          top: 306px;
        }
        &:nth-of-type(2n - 1) {
          &::before {
            left: -20px;
          }
          &::after {
            left: -20px;
          }
        }
        &:nth-of-type(2n) {
          &::before {
            right: -20px;
          }
          &::after {
            right: -20px;
          }
        }
        &:last-of-type {
          &::after,
          &::before {
            content: none;
          }
        }

      }
      @include w320-1399 {
        width: 100%;
      }
    }

    &__img {
      position: relative;
      z-index: 2;
    }

    &__social {
      position: absolute;
      bottom: 64px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      @include w320-767 {
        bottom: 30px;
      }
    }

    &__social__title {
      margin-bottom: 20px;
      font-family: 'Gilroy Heavy', sans-serif;
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      color: #FFFFFF;
      @include w320-767 {
        font-size: 24px;
        line-height: 40px;
      }
    }

  }

</style>

<style lang="scss">
  .ya-share2__badge {
    border-radius: 50% !important;
    &:first-of-type {
      margin-right: 15px !important;
    }
  }

  .ya-share2__container_size_m .ya-share2__icon {
    width: 48px !important;
    height: 48px !important;
  }
</style>
