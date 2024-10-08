---
sidebarDepth: 10
---

# echarts


## 双折线图

![alt text](./assets/image.png)

```js
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Email', 'Union Ads']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['8-12', '8-14', '8-16', '8-18', '8-20', '8-22', '8-24', '8-26', '8-28', '8-30', '9-01', '9-03', '9-05', '9-07', '9-09', '9-11', '9-13']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '（个）',
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      smooth: true,
      showSymbol: false, // Hide the data point markers
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 255, 255, 0.5)' },
          { offset: 1, color: 'rgba(0, 255, 255, 0)' }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [30, 40, 50, 60, 20, 10, 40, 70, 50, 60, 30, 20, 80, 60, 50, 90, 100]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      smooth: true,
      showSymbol: false, // Hide the data point markers
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: 'rgba(0, 191, 255, 0.5)' },
          { offset: 1, color: 'rgba(0, 191, 255, 0)' }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [20, 60, 80, 40, 20, 50, 40, 20, 50, 60, 30, 20, 80, 70, 90, 80, 60]
    }
  ]
};

```

## 柱状图与折线图结合

![alt text](./assets/image_1.png)

```vue
<template>
  <div class="echarts-wrap">
    <OptionsEcharts :options="options"></OptionsEcharts>
  </div>
</template>

<script>
import OptionsEcharts from "@/components/Echarts/OptionsEcharts";
import { merge } from "lodash";
/**
 * 十六进制color颜色/RGBA/RGB，改变透明度
 * @param {*} thisColor #555 rgba(85,85,85,0.6) rgb(85,85,85)
 * @param {*} thisOpacity 0.7
 * @returns rgba(85,85,85,0.7)
 */
function getOpacityColor(thisColor, thisOpacity) {
  var theColor = thisColor.toLowerCase();
  //十六进制颜色值的正则表达式
  var r = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (theColor && r.test(theColor)) {
    if (theColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += theColor.slice(i, i + 1).concat(theColor.slice(i, i + 1));
      }
      theColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var j = 1; j < 7; j += 2) {
      sColorChange.push(parseInt("0x" + theColor.slice(j, j + 2)));
    }
    return "rgba(" + sColorChange.join(",") + "," + thisOpacity + ")";
  }
  // 如果是rgba或者rgb
  if (theColor.startsWith("rgb")) {
    let numbers = theColor.match(/(\d(\.\d+)?)+/g);
    numbers = numbers.slice(0, 3).concat(thisOpacity);
    return "rgba(" + numbers.join(",") + ")";
  }

  return theColor;
}
export default {
  components: {
    OptionsEcharts,
  },
  props: {
    xData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    series: {
      type: Array,
      default: () => {
        return [];
      },
    },
    yAxis: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      options: {},
    };
  },
  created() {
    this.options = this.getEchartsOption();
    console.log("this.options", this.options);
  },
  methods: {
    getEchartsOption() {
      let option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["用电量", "用水量"],
          textStyle: {
            color: "#DAE7FD", // Set legend text color
          },
        },
        xAxis: {
          type: "category",
          data: ["8-01", "8-05", "8-10", "8-15", "8-20", "8-25", "8-30"],
          axisLabel: {
            color: "#DAE7FD", // Set x-axis label color
          },
        },
        yAxis: [
          {
            type: "value",
            name: "度",
            position: "left",
            nameTextStyle: {
              color: "#DAE7FD", // Set the y-axis unit text color
            },
            axisLabel: {
              color: "#DAE7FD", // Set x-axis label color
            },
          },
          {
            type: "value",
            name: "㎡",
            position: "right",
            nameTextStyle: {
              color: "#DAE7FD", // Set the y-axis unit text color
            },
            axisLabel: {
              color: "#DAE7FD", // Set x-axis label color
            },
          },
        ],
        series: [
          {
            name: "用电量",
            type: "bar",
            data: [3000, 4600, 4600, 4600, 4600, 4600, 4600],
            yAxisIndex: 0, // 绑定到第一个 y 轴
            barWidth: 12, // Set the bar width to 12px
          },
          {
            name: "用水量",
            type: "line",
            data: [50, 60, 40, 70, 60, 80, 40],
            yAxisIndex: 1, // 绑定到第二个 y 轴
            smooth: true,
          },
        ],
      };
      return option;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";

.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>

```

## 进度球

![alt text](./assets/image_2.png)

```vue
<template>
  <div class="echarts-wrap">
    <OptionsEcharts :options="options"></OptionsEcharts>
  </div>
</template>

<script>
import OptionsEcharts from "@/components/Echarts/OptionsEcharts";
import * as echarts from "echarts";
import "echarts-liquidfill";

export default {
  components: {
    OptionsEcharts,
  },
  props: {
    color: {
      type: Array,
      default: () => ["#10B9FF", "#10B9FF", "#10B9FF"],
    },
    value: {
      type: Number,
    },
    title: {
      type: String,
    },
  },
  data() {
    return {
      options: {},
    };
  },
  created() {
    this.options = this.getEchartsOption();
  },
  methods: {
    getEchartsOption() {
      console.log(this.color, "this.color-this.color");
      var option = {
        title: {
          text: this.title, // Replace with your title
          left: "center",
          bottom: 30, // Position the title at the bottom
          textStyle: {
            fontSize: 20,
            color: "#FFFFFF", // Set the title color to white (or your preferred color)
          },
        },
        series: [
          {
            type: "liquidFill",
            radius: "78%",
            center: ["50%", "40%"],
            color: this.color, //水波
            data: [0.4, 0.4, 0.4], // data个数代表波浪数
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent",
            },
            label: {
              normal: {
                formatter: this.value + "",
                textStyle: {
                  fontSize: 38,
                  color: "#FFFFFF",
                },
              },
              position: "inside", // Position the text inside the liquidFill
              offset: [0, -20], // Adjust vertical offset to move text upwards
            },
            outline: {
              show: true,
              itemStyle: {
                borderColor: this.color[0],
                borderWidth: 2,
              },
              borderDistance: 3,
            },
          },
          {
            name: "外层细环",
            type: "pie",
            radius: ["84%", "84.5%"],
            center: ["50%", "40%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: this.color[0],
                  },
                },
              },
            ],
          },
          {
            name: "外层粗环",
            type: "pie",
            radius: ["82%", "86.5%"], //使得细环位于粗环中间
            center: ["50%", "40%"],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
              },
            },
            data: [
              {
                value: 30,
                itemStyle: {
                  normal: {
                    color: this.color[0],
                  },
                },
              },
              {
                value: 50,
                itemStyle: {
                  normal: {
                    color: "transparent",
                  },
                },
              },
            ],
          },
        ],
      };

      return option;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";

.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss">
.stereoscopic-tool-tip {
  color: rgba(74, 248, 255, 1);
}
</style>

```

## 饼状图 

![alt text](./assets/image_3.png)

```vue
<template>
  <div class="echarts-wrap">
    <div style="width: 100%; height: 80%">
      <OptionsEcharts :options="options"></OptionsEcharts>
    </div>
    <div style="width: 100%; height: 20%">
      <div class="person-action flex flex-wrap category">
        <div
          class="person-action-item flex items-center w-50 xs-font pl-40"
          v-for="item in echartData"
          :key="item.name"
        >
          <div class="circle" :style="{ background: item.color }"></div>
          <div class="name">{{ item.name }}</div>
          <div class="flex-shrink-0">
            <span class="value xs-font">{{ item.value }}</span>
            <span class="value">{{ unit }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionsEcharts from "@/components/Echarts/OptionsEcharts";
export default {
  components: {
    OptionsEcharts,
  },
  props: {
    echartData: {
      type: Array,
    },
    name: {
      type: String,
    },
    radius: {
      type: Array,
      default: () => {
        return ["37%", "60%"];
      },
    },
    initOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    titleTop: {
      type: String,
      default: "68%",
    },
    labelLineLength: {
      type: Number,
      default: 5,
    },
    labelLineLength2: {
      type: Number,
      default: 5,
    },
    titleNext: {
      type: String,
      default: "个",
    },
    subTitle: {
      type: String,
      default: "",
    },
    titleColor: {
      type: String,
      default: "#ffffff",
    },
    categoryList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    unit: {
      type: String,
      default: "人",
    },
  },
  data() {
    return {
      options: {},
    };
  },
  created() {
    this.options = this.getEchartsOption();
    console.log("this.options", this.options);
  },
  methods: {
    getEchartsOption() {
      var that = this;
      var scale = 1;
      var echartData = this.echartData;
      const colorList = echartData?.map((item) => item.color);
      var rich = {
        total: {
          color: this.titleColor,
          fontSize: 24 * scale,
          align: "center",
        },
        subTitle: {
          color: "#ffffff",
          fontSize: 14 * scale,
          align: "center",
        },
        title: {
          color: "#ffffff",
          fontSize: 16 * scale,
          fontWeight: "bolder",
        },
      };

      echartData?.forEach((item, index) => {
        rich["name" + index] = {
          color: item.color,
          fontSize: 13,
        };
      });
      var option = {
        tooltip: {
          trigger: "item",
        },
        backgroundColor: "transparent",
        title: {
          show: true,
          text: this.name,
          left: "center",
          top: this.titleTop,
          padding: [24, 0],
          textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            align: "center",
          },
        },
        grid: {
          top: 0,
          left: 0,
          bottom: "10%",
          right: 0,
          containLabel: true,
        },
        legend: {
          selectedMode: false,
          formatter: function (name) {
            var total = 0; //各科正确率总和
            echartData.forEach(function (value, index, array) {
              total += value.value;
            });
            return (
              "{total|" +
              total +
              "}" +
              that.titleNext +
              (that.subTitle ? "\n{subTitle|" + that.subTitle + "}" : "")
            );
          },
          data: [echartData[0]?.name],
          // data: ['高等教育学'],
          // itemGap: 50,
          left: "center",
          top: "center",
          icon: "none",
          align: "center",
          textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich,
          },
        },
        series: [
          {
            name: this.name,
            type: "pie",
            radius: this.radius,
            hoverAnimation: false,
            label: {
              normal: {
                formatter: function (params, ticket, callback) {
                  const index = params.dataIndex;
                  var total = 0; //考生总数量
                  var percent = 0; //考生占比
                  echartData.forEach(function (value, index, array) {
                    total += value.value;
                  });
                  percent = ((params.value / total) * 100).toFixed(1);
                  return `{title|${params.name}}\n\n{name${index}|${percent}%}`;
                },
                rich: rich,
              },
            },
            color: colorList,
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: "bold",
              },
            },
            labelLine: {
              normal: {
                length: this.labelLineLength,
                length2: this.labelLineLength2,
                lineStyle: {
                  color: "#fff",
                },
              },
            },
            data: echartData,
          },
        ],
      };

      return Object.assign(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";

.echarts-wrap {
  width: 100%;
  height: 100%;
}
.person-action {
  display: flex;

  .person-action-item {
    width: 50%;
    align-items: center;
    line-height: 1;
    margin-bottom: 6px;

    .circle {
      width: 30px;
      height: 15px;
      border-radius: 5px;
      margin-right: 10px;
    }

    .name {
      width: 70px;
    }

    .value {
      font-size: 16px;
      color: #28f1dc;
    }
  }
}
</style>

```

## 柱状图 

![alt text](./assets/image_4.png)


```vue
<template>
  <div id="nativeAnalysisId" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "nativeAnalysis",
  mounted() {
    // 初始化图表
    const chartContainer = document.getElementById("nativeAnalysisId");
    const myChart = echarts.init(chartContainer);

    var xData = [
      "江西省",
      "江苏省",
      "内蒙古",
      "山东省",
      "浙江省",
      "湖北省",
      "陕西省",
      "山东省",
      "浙江省",
      "湖北省",
      "河南省",
      "浙江省",
      "浙江省",
      "浙江省",
    ];
    var data1 = xData.map((province) => ({
      province: province,
      value: Math.floor(Math.random() * 51 + 50), // 生成50到100的随机数
    }));
    // 配置图表选项
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (parms) {
          var str =
            "月份：" +
            parms[0].axisValue +
            "</br>" +
            parms[0].marker +
            "预警项目:" +
            parms[0].value;
          return str;
        },
      },
      legend: {
        show: false,
        data: ["预警项目"],
        textStyle: { fontSize: 12, color: "#fff" },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 15,
        top: "-1%",
        right: "2%",
      },
      textStyle: {
        color: "#ffffff",
      },
      color: ["#24F3FF", "#24F3FF", "#FDBF47", "#FDBF47"],
      grid: {
        containLabel: true,
        left: "6%",
        top: "20%",
        bottom: "6%",
        right: "6%",
      },
      xAxis: {
        type: "category",
        data: xData,
        axisLine: {
          lineStyle: {
            color: "#B5B5B5",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          margin: 10, //刻度标签与轴线之间的距离。
          fontFamily: "Microsoft YaHei",
          color: "#ffffff",
        },
      },
      yAxis: {
        name: "个",
        nameTextStyle: {
          verticalAlign: "middle",
          align: "right",
        },
        type: "value",
        min: 0,
        boundaryGap: ["20%", "60%"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#B5B5B5",
          },
        },
        splitLine: {
          lineStyle: {
            // 使用深浅的间隔色
            color: ["#B5B5B5"],
            type: "dashed",
            opacity: 0.5,
          },
        },
        axisLabel: {},
      },
      series: [
        {
          name: "预警项目",
          data: data1,
          stack: "zs",
          type: "bar",
          barMaxWidth: "auto",
          barWidth: 22,
          itemStyle: {
            color: {
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              type: "linear",
              global: false,
              colorStops: [
                {
                  offset: 0,
                  color: "#0FA0FF",
                },
                {
                  offset: 1,
                  color: "#24F3FF",
                },
              ],
            },
          },
        },
        {
          data: data1,
          type: "pictorialBar",
          barMaxWidth: "10",
          symbolPosition: "end",
          // symbol: 'diamond',
          symbolOffset: [0, "-50%"],
          symbolSize: [22, 10],
          zlevel: 2,
          color: "#fff",
        },
      ],
    };

    // 使用配置项显示图表
    myChart.setOption(option);
  },
  methods: {
    updateChart() {
      const newOption = {
        // 新的配置选项
      };
      this.myChart.setOption(newOption);
    },
  },
};
</script>

```

## 仪表盘 

![alt text](./assets/image_5.png)

```vue
<!-- 刻度盘 -->
<template>
  <div class="echarts-wrap">
    <OptionsEcharts :options="options"></OptionsEcharts>
  </div>
</template>

<script>
import OptionsEcharts from "@/components/Echarts/OptionsEcharts";
export default {
  components: {
    OptionsEcharts,
  },
  props: {
    data: {
      type: Array,
    },
    isPercentage: {
      type: Boolean,
      default: false,
    },
    colorList: {
      type: Array,
      default: ["rgba(2, 204, 169, .5)", "rgba(2, 204, 169, 1)"],
    },
    value: {
      type: String,
      default: "0",
    },
  },
  data() {
    return {
      options: {},
    };
  },
  created() {
    this.options = this.getEchartsOption();
    console.log("this.options", this.options);
  },
  watch: {
    value(newValue, oldValue) {
      console.log(newValue, oldValue, "newValue, oldValue-");
      // 当value属性变化时，重新执行图表配置生成方法
      this.options = this.getEchartsOption();
    },
  },
  methods: {
    getEchartsOption() {
      let shujv = [];
      let obj = {};
      let data = this.data;
      console.log(this.value, "this.vakue");
      data[0].forEach((itme, index) => {
        obj = {
          name: data[0][0],
          title: {
            fontSize: 20, // 字体大小
            fontWeight: "bold", // 字体加粗
            color: "#FFFFFF", // 确保使用纯白色
            formatter: data[0][0], // 设置标题内容
          },
          value: this.value,
          itemStyle: {
            color: {
              //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
              type: "linear",
              x: 0,
              y: 0,
              x2: 1, //从左到右 0-1
              y2: 0,
              colorStops: [
                {
                  offset: 0.3,
                  color: this.colorList[1],
                },
                {
                  offset: 1,
                  color: this.colorList[0],
                },
              ],
            },
          },
        };
        shujv.push(obj);
      });
      const colorSet = [
        [0.3, "rgba(0,0,0,0)"],
        [1, "rgba(0,0,0,0)"],
      ];
      this.getColor2 = function (x, y, r) {
        //圆心颜色变色
        return {
          type: "radial",
          x,
          y,
          r,
          colorStops: [
            { offset: 1, color: this.colorList[0] },
            { offset: 0, color: "rgba(26, 224, 186, 0)" },
          ],
        };
      };
      //绘制仪表盘
      let option = {
        backgroundColor: "#011d39",
        grid: {
          top: "10%", // 上边距
          bottom: "10%", // 下边距
          left: "10%", // 左边距
          right: "10%", // 右边距
        },
        series: [
          {
            type: "gauge",
            radius: "100%",
            center: ["50%", "70%"],
            max: 100,
            min: 0,
            z: 9999,
            startAngle: 180,
            endAngle: 0,
            pointer: {
              //仪表盘指针
              show: true,
              length: "20%",
              width: 10,
              icon: "diamond",
              offsetCenter: ["0%", "-81%"],
              itemStyle: {
                color: this.colorList[1],
              },
            },
            progress: {
              //仪表盘进度
              show: true,
              roundCap: false,
              width: 20,
            },
            splitNumber: 1,
            detail: {
              formatter: (value) => {
                var num = Math.round(value);
                return this.isPercentage
                  ? "{bule|" + num + "}{bule|%}"
                  : "{bule|" + num + "}";
              },
              rich: {
                bule: {
                  fontSize: 40,
                  fontFamily: "Source Han Sans SC",
                  color: "#F8F8FA",
                  fontWeight: "700",
                },
              },
              offsetCenter: ["0%", "-20%"],
            },

            data: shujv,
            title: {
              show: true,
            },
            axisLine: {
              show: true,
              roundCap: false,
              lineStyle: {
                color: colorSet,
                width: 15,
              },
            },
            axisTick: {
              //仪表盘刻度
              show: true,
              splitNumber: 50,
              length: 2,
              lineStyle: {
                color: this.colorList[1],
                width: 1,
                type: "solid",
              },
              distance: -40,
            },
            splitLine: {
              //仪表盘分割线
              show: true,
              length: 2,
              distance: -40,
              lineStyle: {
                color: this.colorList[1],
                width: 4,
                type: "solid",
              },
            },

            axisLabel: {
              show: false,
            },
          },

          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [0, "35%"],
            center: ["50%", "60%"],
            roseType: "radius",
            silent: true,
            startAngle: 180,
            legendHoverLink: false,
            itemStyle: {
              borderRadius: 0,
            },
            label: {
              show: false,
            },
            emphasis: {
              label: {
                show: false,
              },
            },
            color: [this.getColor2(0.4, 0, 2), "#FFFFFF00"],
            data: [
              { value: 10, name: "r" },
              { value: 10, name: "r0" },
            ],
          },
        ],
      };

      return Object.assign(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixin.scss";

.echarts-wrap {
  width: 100%;
  height: 100%;
}
</style>

```
