<template>
  <div class="box">
    <div class="house-title" >
      <!--<span class="house-title-date">-->
          <!--{{dateData.formatTime}}-->
        <!--</span>-->
      <div class="center-wrap" style="height: 60px;width: 300px;background: #f00;margin: 0 auto;">

      </div>
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
            {{item.num}}
          </div>
          <div class="cell-bottom">
            {{item.day}}
          </div>
        </td>
      </tr>
      <tr class="row" v-for="(item,idx) in houseData.arr" v-if="houseData">
        <td class="row-title" >
          {{item.typeName}}
        </td>
        <td class="item-num" v-for="(it,index) in item.arr" :class="getClass(it)" :data-row="idx" :data-col="index">
          <span class="item-num-inner" v-if="it.isPre" :data-row="idx" :data-col="index">
              {{it.surplus==0?'满': it.surplus}}
          </span>
          <div v-else :data-row="idx" :data-col="index">
            <div :data-row="idx" :data-col="index">
              暂不
            </div>
            <div :data-row="idx" :data-col="index">
              可订
            </div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  import {DatePicker} from 'iview'
  import 'iview/dist/styles/iview.css'


  export default {
    name: '',
    components: {
      // dyDialog
      DatePicker
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
          startMonth: '', // 当前月份
          endMonth: '',  // 结束月份
          weekDate: [] // 十五天的数组
        },
        houseData: {},
        week: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        testData: {
          time: 1544683731, // unix时间戳
        },
        hoseType: ['豪华大床房', '双标间', '豪华海景大床房', '豪华家庭房', '天字一号房']
      }
    },
    methods: {
      getClass(item) {
        if(item.isPre) { // 是否可以预定
          if(item.surplus>0) {  // 没有满
          } else { // 房间已满
            return {
              full: true
            }
          }
        } else {  // 暂不可订
          return {
            disabled: true
          }
        }
      },
      handleClick(e) {
        let target = e.target.dataset.col && e.target.dataset.row && e.target;
        if(target) {
          console.log(target.dataset.col + '列');
          console.log(target.dataset.row + '行')
        }
      },
      handleClose() {
        this.centerDialogVisible = false
      },
      setLine () { //斜线设置
        let box = this.$refs.speCell;
        let line = this.$refs.line;

        let boxHeight = box.offsetHeight;
        let boxWidth = box.offsetWidth;
        let hypotenuse = Math.sqrt(boxHeight*boxHeight + boxWidth*boxWidth); // 斜边
        let rotate = Math.asin(boxHeight / hypotenuse);
        let rotateDeg = rotate * (180/Math.PI);

        line.style.width = hypotenuse + '100px';
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotateZ(${rotateDeg}deg)`;
      },
      getData() {
        let url = 'https://www.easy-mock.com/mock/5c1227fa8df72453e91aac7a/shuzhen/week';
        axios.get(url).then(res => {
          console.log(res);
          this.houseData = res.data.data;
          this.getDate()
        })
      },
      getDate () {
        let unix = this.houseData.unix; //unix 时间戳
        let minDate = new Date(unix*1000); // /用unix时间戳得到时间对象
        let startMonth = minDate.getMonth() + 1; // 今天是几月
        let endMonth = '';

        this.dateData.weekDate = [];
        for(let i = 0; i < 15; i++){ // 获得15天的号数和星期几
          this.dateData.weekDate.push({
            day: this.week[minDate.getDay()], // 得到星期几
            num: minDate.getDate() // 得到第几号
          });
          if(i == 14){ // 得到最后一天的月份
            endMonth = minDate.getMonth() + 1;
            break;
          }
          minDate.setDate(minDate.getDate() + 1) // 递增操作
        }

        this.dateData.formatTime = `${startMonth}-${this.dateData.weekDate[0].num}至${endMonth}-${this.dateData.weekDate[6].num}`;
        this.$nextTick(() => {
          this.setLine()
        })


        // if(today == 0) { // 如果是星期天
        //   let preDay = todayNum - 6;
        //   minDate.setDate(preDay)
        //   firstDay = minDate.getDate(); // 赋值第一天
        //   this.dateData.weekDate = []
        //   for(let i = 0; i<7; i++) {
        //     this.dateData.weekDate.push(firstDay + i)
        //   }
        //
        // } else { // 如果不是星期天
        //   let preDay = todayNum - today + 1; // 得到这周开始的号数
        //   minDate.setDate(preDay) // 设置这周开始的号数
        //   // console.log(minDate.getDate()); //得到了计算好的这周开始的号数
        //   firstDay = minDate.getDate(); // 赋值第一天
        //   console.log(firstDay);
        //   this.dateData.weekDate = []
        //   for(let i = 0; i<7; i++) {
        //     this.dateData.weekDate.push(firstDay + i)
        //   }
        // }

      }
    },
    mounted() {
      this.$nextTick(() => {
        let vm = this;
        this.setLine();
        window.onresize = function () {
          vm.setLine()
        }
      });
      // this.getDate()
      this.getData()
    },
    beforeDestroy () {
      window.onresize = null
    }
  }
</script>

<style scoped lang='scss'>
  @import './index.scss';
</style>
