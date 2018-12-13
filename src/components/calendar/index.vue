<template>
  <div class="box">
    <div class="house-title">
        七日化房间管理
        <span class="house-title-date">
          {{dateData.formatTime}}
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
          <td v-for="(item, index) in dateData.weekDate" class="cell-item">
            <div class="cell-top">
              {{item}}
            </div>
            <div class="cell-bottom">
              {{week[index]}}
            </div>
          </td>
        </tr>
        <tr class="row" v-for="(item,idx) in hoseType">
          <td class="row-title" >
            {{item}}
          </td>
          <td class="item-num" v-for="(item,index) in 7" :data-row="idx" :data-col="index">
            {{idx+index}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import moment from 'moment'
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
        dateData: {
          formatTime: '', // 格式化好的日期
          month: '', // 当前月份
          weekDate: [] // 一星期的数组
        },
        week: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',],
        testData: {
          time: 1544629397, // unix时间戳
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
          console.log(target.dataset.col + '列')
          console.log(target.dataset.row + '行')
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
      },
      getDate () {
        let unix = this.testData.time //unix 时间戳
        let minDate = new Date(unix*1000) // /用unix时间戳得到时间对象
        let today = minDate.getDay() // 获取星期几
        let todayNum = minDate.getDate() // 今天是多少号
        let firstDay = -1; // 这一周开始的第一天
        if(today == 0) { // 如果是星期天
          let preDay = todayNum - 6;
          minDate.setDate(preDay)
          firstDay = minDate.getDate(); // 赋值第一天
          this.dateData.weekDate = []
          for(let i = 0; i<7; i++) {
            this.dateData.weekDate.push(firstDay + i)
          }

        } else { // 如果不是星期天
          let preDay = todayNum - today + 1; // 得到这周开始的号数
          minDate.setDate(preDay) // 设置这周开始的号数
          // console.log(minDate.getDate()); //得到了计算好的这周开始的号数
          firstDay = minDate.getDate(); // 赋值第一天
          console.log(firstDay);
          this.dateData.weekDate = []
          for(let i = 0; i<7; i++) {
            this.dateData.weekDate.push(firstDay + i)
          }
        }


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
      this.getDate()
    },
    beforeDestroy () {
      window.onresize = null
    }
  }
</script>

<style scoped lang='scss'>
  @import './index.scss';
</style>
