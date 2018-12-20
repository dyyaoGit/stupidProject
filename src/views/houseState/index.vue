<template>
  <div class="box">
    <div class="main-wrap">
      <div class="house-title" >
        <div class="center-wrap" style="">
        <span class="btn-default btn-left" @click="handleClickPrev(-15)" :class="{active: btnLeftActive}">
          <i class="el-icon-arrow-left icon-btn"></i>
          前15天
        </span>
          <span class="btn-default btn-right active" @click="handleClickNext(15)">
          后15天
          <i class="el-icon-arrow-right icon-btn"></i>
        </span>
          <date-picker
            class="dy-datepicker"
            type="date"
            v-model="currentDate"
            :options="pickerOptions"
            @on-change="pickerChange"
            placeholder="请选择想查看的日期" />
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
  </div>
</template>

<script>
  import axios from 'axios'
  import {DatePicker} from 'iview'

  export default {
    name: '',
    components: {
      // dyDialog
      DatePicker
    },
    data() {
      return {
        pickerOptions: { // 日期选择器选项
          disabledDate (date) { // 禁用的日期 返回真值禁用
            return date && date.valueOf() < Date.now() - 86400000;
          }
        },
        btnLeftActive: false,
        currentDate: new Date(), // 当前选择的日期
        date: new Date(), // 今天的日期
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
      pickerChange (date) {
        let newDate = new Date(date)
        /*用户选择日期的逻辑在这里写*/
        /*用户选择日期的逻辑在这里写*/
        /*用户选择日期的逻辑在这里写*/
        /*用户选择日期的逻辑在这里写*/
      },
      handleClickNext (num) {
        let oldDate = this.currentDate.getDate()
        let newDate = this.currentDate.setDate(oldDate + num)
        this.currentDate = new Date(newDate)
        if (newDate - this.date.getTime() >= 15 * 86400000) { // 大于15天
          this.btnLeftActive = true
        } else {
          this.btnLeftActive = false
        }

        /*用户点击后十五天的逻辑在这里写*/
        /*用户点击后十五天的逻辑在这里写*/
        /*用户点击后十五天的逻辑在这里写*/
        /*用户点击后十五天的逻辑在这里写*/
      },
      handleClickPrev (num) {
        if (this.btnLeftActive) {
          let oldDate = this.currentDate.getDate()
          let newDate = this.currentDate.setDate(oldDate + num)
          this.currentDate = new Date(newDate)
          if (newDate - this.date.getTime() >= 15 * 86400000) { // 大于15天
            this.btnLeftActive = true
          } else {
            this.btnLeftActive = false
          }

          /*用户点击前十五天的逻辑在这里写*/
          /*用户点击前十五天的逻辑在这里写*/
          /*用户点击前十五天的逻辑在这里写*/
          /*用户点击前十五天的逻辑在这里写*/
          /*用户点击前十五天的逻辑在这里写*/
        }
      },
      handleClick(e) {
        let target = e.target.dataset.col && e.target.dataset.row && e.target;
        if(target) {
          console.log(target.dataset.col + '列');
          console.log(target.dataset.row + '行');
          // 单元格点击事件在这里写
          // 单元格点击事件在这里写
          // 单元格点击事件在这里写
          // 单元格点击事件在这里写
          // 单元格点击事件在这里写
          // 单元格点击事件在这里写
        }
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
