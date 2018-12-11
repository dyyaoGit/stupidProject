<template>
  <div class="box">
    <div class="house-title">
        七日化房间管理
        <span class="house-title-date">
          2018-08-01
        </span>
    </div>
    <table class="main-table">

      <tbody>
        <tr class="first-row">
          <td class="cell-spe" ref="speCell">
            <div class="date-text">日期</div>
            <div class="housetype-text">房型</div>
            <i class="line" ref="line"></i>
          </td>
          <td v-for="item in 7">
            <div class="cell-top">
              16
            </div>
            <div class="cell-bottom cell-item">
              星期一
            </div>
          </td>
        </tr>
        <tr class="row" v-for="item in 5">
          <td class="row-title" >
            豪华大床房
          </td>
          <td class="cell-item" v-for="item in 7">
            2
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
  import dyDialog from './dy-dialog'

  export default {
    name: '',
    components: {
      dyDialog
    },
    data() {
      return {
        showDialog: false,
        isAdvance: true,
        haveValue: true,
        userData: {
          time: '2018-10-20',
          houseType: '豪华大床房'
        },
        testData: {
          time: 1544350369753,
          bigBed: [
            {
              num: 2,
              isPre: true,
              type: 1
            },
            {
              num: 3,
              isPre: true,
              type: 1
            },
            {
              num: 6,
              isPre: true,
              type: 1
            }, {
              num: 9,
              isPre: true,
              type: 1
            },
            {
              num: 1,
              isPre: true,
              type: 1
            },
            {
              num: 0,
              isPre: true,
              type: 1
            },
            {
              num: 10,
              isPre: true,
              type: 1
            }
          ],
          double: [
            {
              num: 1,
              isPre: true,
              type: 2
            },
            {
              num: 2,
              isPre: true,
              type: 2
            },
            {
              num: 3,
              isPre: true,
              type: 2
            }, {
              num: 4,
              isPre: true,
              type: 2
            },
            {
              num: 6,
              isPre: true,
              type: 2
            },
            {
              num: 0,
              isPre: true,
              type: 2
            },
            {
              num: 12,
              isPre: true,
              type: 2
            }
          ]
        }
      }
    },
    methods: {
      handlebox() {
        this.showDialog = true
      },
      handleClose() {
        this.centerDialogVisible = false
      },
      handleBack() {
        this.centerDialogVisible = false
      },
      setLine () {
          let box = this.$refs.speCell
          let line = this.$refs.line

          let boxHeight = box.offsetHeight;
          let boxWidth = box.offsetWidth;
          let hypotenuse = Math.sqrt(boxHeight*boxHeight + boxWidth*boxWidth) // 斜边
          let rotate = Math.asin(boxHeight / hypotenuse)
          let rotateDeg = rotate * (180/Math.PI)

          line.style.width = hypotenuse + '100px'
          line.style.transform = `translate(-50%, -50%) rotateZ(${rotateDeg}deg)`;
      }
    },
    mounted() {
      this.$nextTick(() => {
        let vm = this;
        this.setLine()
        window.onresize = function () {
          vm.setLine()
        }
      })
    },
    beforeDestroy () {
      window.onresize = null
    }
  }
</script>

<style scoped lang='scss'>
  @import '../style/color';

  .house-title {
    padding: 4px 10px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px 6px 0 0;
    line-height: 35px;
    text-align: left;
    background-image: url("../assets/image/home/title.png");
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .house-title-date {
      float: right;
      font-size: 14px;
      font-weight: 700;
    }
  }

  .main-table {
    width: 100%;
    font-size: 12px;
    text-align: center;
    border-collapse: collapse;
    border: 1px solid $tb-border-cl;
    border-top: none;

    .cell-spe {
      width: 20%;
      position: relative;
      background-color: #caddfe;

      .date-text {
        text-align: right;
      }

      .housetype-text {
        text-align: left;
      }
    }

    td {
      padding: 4px;
    }

    .row-title {
      font-size: 12px;
    }

    /*线*/
    .line {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      background: #000;
      width: 500px;
      height: 1px;
    }
  }
</style>
