<template>
  <div class="box">
    <div class="house-title">
        七日化房间管理
        <span class="house-title-date">
          2018-08-01
        </span>
    </div>
    <table class="main-table" @click="handleClick">

      <tbody>
        <tr class="first-row">
          <td class="cell-spe" ref="speCell">
            <div class="date-text">日期</div>
            <div class="housetype-text">房型</div>
            <i class="line" ref="line"></i>
          </td>
          <td v-for="item in 7" class="cell-item">
            <div class="cell-top">
              16
            </div>
            <div class="cell-bottom">
              星期一
            </div>
          </td>
        </tr>
        <tr class="row" v-for="(item,idx) in hoseType">
          <td class="row-title" >
            {{item}}
          </td>
          <td class="item-num" v-for="(item,index) in 7" :data-row="idx">
            {{idx+index}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import dyDialog from '../dy-dialog'

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
        },
        hoseType: ['豪华大床房', '双标间', '豪华海景大床房', '豪华家庭房', '天字一号房']
      }
    },
    methods: {
      handleClick(e) {
        let target = e.target.classList.contains('item-num')&&e.target;
        if(target) {
          console.log(target)
          console.log(target.dataset.row)
        }
      },
      handleClose() {
        this.centerDialogVisible = false
      },
      setLine () { //斜线设置
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
  @import './index.scss';
</style>
