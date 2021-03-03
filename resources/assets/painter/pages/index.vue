<template>
  <div class="home">
    <el-form ref="form" :model="form" label-width="172px">
      <el-row>
        <el-col :lg="14" :md="18" >
          <el-form-item label="适用产品：" required>
            <el-checkbox-group v-model="product">
              <el-checkbox
                v-for="(item, index) in defaultData.product"
                :label="item.value"
                :key="index"
                name="product"
              >{{ item.name }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :lg="14"  :md="18">
          <el-form-item label="海报类型：" required>
            <el-radio-group v-model="form.type">
              <el-radio
                v-for="(item, index) in defaultData.type"
                :key="index"
                :label="item.value"
                @change="initTemplate($event)"
              >{{ item.name }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :lg="14"  :md="18">
          <el-col :lg="14" :md="12">
            <el-form-item label="海报标签：" required>
              <el-input v-model="form.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :lg="7" :md="12">
            <el-form-item v-if="form.type == 2" label="活动类型：" required>
              <el-select v-model="form.type_son" @change="initTemplate($event)" placeholder="请选择活动类型">
                <el-option
                  v-for="(item, index) in defaultData.type_son"
                  :key="index"
                  :label="item.name"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-col>
        <el-col :lg="14" :md="20">
          <el-col :lg="18" :md="18" id="painterLeft">
            <el-form-item label="背景图片：" required>
              <div class="upload-com">
                <img :src="form.template.background" crossorigin="anonymous" class="upload-img" />
                <uploadImg v-on:successFun="changeBgImg"></uploadImg>
              </div>
              <p class="prop-text">建议尺寸：800*1260 像素</p>
            </el-form-item>
            <el-form-item label="基本图层：" >
              <el-button type="primary" plain @click="addViews" v-show="viewsLastLength == 0">添加图层</el-button>
              <div
                class="view-item"
                v-for="(viewsItem, viewsIndex) in form.template.views"
                v-if="viewsIndex != viewsLastLength"
                :key="viewsIndex"
                :class="{'panle-hide':viewsItem.isHide}"
              >
                <div class="item-hd">
                  <div>图层{{ viewsIndex + 1 }}</div>
                  <div>
                    <el-button type="text" @click="addViews(viewsIndex)">插入图层</el-button>
                    <el-button type="text" @click="changePanle(viewsItem,viewsIndex)">{{viewsItem.isHide | changeText}}</el-button>
                    <el-button type="text" v-show="viewsIndex > 0" @click="upViews(viewsIndex)">上移一层</el-button>
                    <el-button
                      type="text"
                      v-show="viewsIndex < viewsLastLength - 1"
                      @click="downViews(viewsIndex)"
                    >下移一层</el-button>
                    <el-button type="text" @click="deleteViews(viewsIndex)">删除</el-button>
                  </div>
                </div>
                <div class="item-bd">
                  <el-form-item label="图层类型：" label-width="100px">
                    <el-radio-group v-model="viewsItem.viewsMold">
                      <el-radio
                        v-for="(item, index) in defaultData.viewsMold"
                        :key="index"
                        :label="item.value"
                        @change="(event)=>{changeViewsMold(event,viewsItem,viewsIndex)}"
                      >{{ item.name }}</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <!-- 不变图层 -->
                  <div v-if="viewsItem.viewsMold == 1">
                    <el-form-item label="选择图片：" label-width="100px">
                      <div class="upload-com G-Mb-10">
                        <img :src="viewsItem.url" class="upload-img" crossorigin="anonymous" />
                        <uploadImg v-on:successFun="addViewImg" :num="viewsIndex"></uploadImg>
                      </div>
                    </el-form-item>
                  </div>
                  <div v-else>
                    <el-form-item label="图层形式：" label-width="100px">
                      <el-radio-group
                        v-model="viewsItem.type"
                        @change="
                          event => {
                            changeViewsType(event, viewsItem, viewsIndex);
                          }
                        "
                      >
                        <el-radio
                          v-for="(item, index) in defaultData.viewsType"
                          :key="index"
                          :label="item.value"
                        >{{ item.name }}</el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="可变字段：" class="G-Mb-10" label-width='100px'>
                      <el-select
                        v-model="viewsItem.changeKeyWords"
                        placeholder="请选择可变字段"
                        @change="
                          $event => {
                            setKeyWords($event, viewsItem, viewsItem.type);
                          }
                        "
                      >
                        <el-option
                          v-for="(item, index) in defaultData.changeKeyWords[
                            usePageType
                          ][viewsItem.type]"
                          :key="index"
                          :label="item.name"
                          :value="item.name"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                    <!-- 可变字段为文字 -->
                    <div v-if="viewsItem.type == 'text'">
                      <el-form-item label="文字颜色：" label-width="100px">
                        <el-color-picker v-model="viewsItem.css.color"></el-color-picker>
                      </el-form-item>
                      <el-form-item label="字号大小：" class="G-Mb-10" label-width="100px">
                        <el-input placeholder="请输入字号大小" v-model="viewsItem.css.fontSize">
                          <template slot="append">px</template>
                        </el-input>
                      </el-form-item>
                      <el-form-item label="行间距：" class="G-Mb-10" label-width="100px">
                        <el-input placeholder="请输入行间距" v-model="viewsItem.css.lineHeight">
                          <template slot="append">px</template>
                        </el-input>
                      </el-form-item>
                      <el-form-item label="最大行数：" label-width="100px">
                        <el-input placeholder="请输入最大行数" v-model="viewsItem.css.maxLines"></el-input>
                      </el-form-item>
                      <el-form-item label="对齐形式：" label-width="100px">
                        <el-radio-group v-model="viewsItem.css.textAlign">
                          <el-radio
                            v-for="(item, index) in defaultData.textAlign"
                            :key="index"
                            :label="item.value"
                          >{{ item.name }}</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </div>
                  </div>
                  <!-- 图层公共属性 -->
                  <el-form-item label="图层位置：" class="change-width" label-width="100px">
                    <el-input placeholder="请输入上边距" v-model="viewsItem.css.top">
                      {{ viewsItem.css.top }}
                      <template slot="prepend">上边距</template>
                      <template slot="append">px</template>
                    </el-input>
                    <el-input placeholder="请输入左边距" v-model="viewsItem.css.left">
                      {{ viewsItem.css.left }}
                      <template slot="prepend">左边距</template>
                      <template slot="append">px</template>
                    </el-input>
                    <el-input placeholder="请输入下边距" v-model="viewsItem.css.bottom">
                      {{ viewsItem.css.bottom }}
                      <template slot="prepend">下边距</template>
                      <template slot="append">px</template>
                    </el-input>
                    <el-input placeholder="请输入右边距" v-model="viewsItem.css.right">
                      {{ viewsItem.css.right }}
                      <template slot="prepend">右边距</template>
                      <template slot="append">px</template>
                    </el-input>
                  </el-form-item>
                  <el-form-item label="图层大小：" class="change-width" label-width="100px">
                    <el-input placeholder="请输入宽度" v-model="viewsItem.css.width">
                      <template slot="append">px</template>
                    </el-input>
                    <el-input placeholder="请输入高度" v-model="viewsItem.css.height">
                      <template slot="append">px</template>
                    </el-input>
                  </el-form-item>
                </div>
              </div>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :md="7" v-show="form.template.background" class="G-Ml-10 painter-el" :style="{left:elLeft+'px'}">
            <painter
              class="fl-row-center"
              :customStyle="customStyle"
              @imgOK="onImgOk"
              :paletteDate="form.template"
              :dirty="false"
            />
          </el-col>
        </el-col>
        <el-col :lg="14" :md="18">
          <el-col :lg="18" :md="20">
            <el-form-item label="码设置：" required>
              <el-form-item label="形状：" label-width="60px">
                <el-radio-group v-model="form.template.views[viewsLastLength].css.borderRadius">
                  <el-radio
                    v-for="(item, index) in defaultData.borderRadius"
                    :key="index"
                    :label="item.value"
                  >{{ item.name }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="位置：" label-width="60px" class="change-width">
                <el-input
                  placeholder="请输入上边距"
                  v-model="form.template.views[viewsLastLength].css.top"
                >
                  {{ form.template.views[viewsLastLength].css.top }}
                  <template slot="prepend">上边距</template>
                  <template slot="append">px</template>
                </el-input>
                <el-input
                  placeholder="请输入左边距"
                  v-model="form.template.views[viewsLastLength].css.left"
                >
                  {{ form.template.views[viewsLastLength].css.left }}
                  <template
                    slot="prepend"
                  >左边距</template>
                  <template slot="append">px</template>
                </el-input>
                <el-input
                  placeholder="请输入下边距"
                  v-model="form.template.views[viewsLastLength].css.bottom"
                >
                  {{ form.template.views[viewsLastLength].css.bottom }}
                  <template
                    slot="prepend"
                  >下边距</template>
                  <template slot="append">px</template>
                </el-input>
                <el-input
                  placeholder="请输入右边距"
                  v-model="form.template.views[viewsLastLength].css.right"
                >
                  {{ form.template.views[viewsLastLength].css.right }}
                  <template
                    slot="prepend"
                  >右边距</template>
                  <template slot="append">px</template>
                </el-input>
              </el-form-item>
              <el-form-item label="大小：" class="change-width" label-width="60px">
                <el-input
                  placeholder="请输入宽度"
                  v-model="form.template.views[viewsLastLength].css.width"
                >
                  <template slot="append">px</template>
                </el-input>
                <el-input
                  placeholder="请输入高度"
                  v-model="form.template.views[viewsLastLength].css.height"
                >
                  <template slot="append">px</template>
                </el-input>
              </el-form-item>
              <el-col :lg="9" :md="9">
                <el-form-item label="线框：" label-width="60px">
                  <el-radio-group
                    v-model="form.template.views[viewsLastLength].css.hasBorder"
                    @change="changeBorder"
                  >
                    <el-radio
                      v-for="(item, index) in defaultData.hasBorder"
                      :key="index"
                      :label="item.value"
                    >{{ item.name }}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <!-- 有现框 -->
              <div v-if="form.template.views[viewsLastLength].css.borderWidth">
                <el-col :lg="7" :md="7">
                  <el-form-item label="线框颜色：" label-width="90px">
                    <el-color-picker
                      v-model="form.template.views[viewsLastLength].css.borderColor"
                    ></el-color-picker>
                  </el-form-item>
                </el-col>
                <el-col :lg="8" :md="8">
                  <el-form-item label="线框大小：" label-width="90px">
                    <el-input
                      placeholder="请输入线框大小"
                      v-model="form.template.views[viewsLastLength].css.borderWidth"
                    >
                      <template slot="append">px</template>
                    </el-input>
                  </el-form-item>
                </el-col>
              </div>
            </el-form-item>
          </el-col>
        </el-col>
      </el-row>
      <el-form-item label="预览图片：" required>
        <div class="upload-com">
          <img :src="form.small_bg" crossorigin="anonymous" class="upload-img" />
          <uploadImg v-on:successFun="changeSmallBg"></uploadImg>
        </div>
        <p class="prop-text">建议尺寸：96*150 像素</p>
      </el-form-item>
      <el-col :lg="14">
        <el-form-item label="海报状态：" required>
          <el-radio-group v-model="form.status">
            <el-radio
              v-for="(item, index) in defaultData.status"
              :key="index"
              :label="item.value"
            >{{ item.name }}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
      <el-col :lg="14">
        <el-form-item>
          <el-button type="primary" @click="onSaveData">保存</el-button>
          <el-button @click="goBack">返回</el-button>
        </el-form-item>
      </el-col>
    </el-form>
  </div>
</template>
<script>
// @ is an alias to /src
import painter from "@/components/painter/painter.vue";
import uploadImg from "../components/uploadImg.vue";
import { mapState } from "vuex";
import { log } from "util";
import { getDes, saveDes } from "@/http/api";

export default {
  name: "Home",
  mounted() {
    this.form.id = this.configData.id
    this.initData(this.form.id);
    var painterLeft
     if (process.env.NODE_ENV == "development") {
      this.baseUrl = "/baseImg";
    } 
    painterLeft = document.getElementById('painterLeft')
    this.elLeft = painterLeft.offsetWidth
  },
  components: { painter, uploadImg },
  data() {
    return {
      product: [1],
      form: {
        type: 1,
        id:"",
        title: "",
        type_son: '100',
        small_bg: "",
        template: {
          width: "500",
          height: "875",
          background: "",
          views: [
            {
              viewsMold: 1,
              type: "image",
              changeKeyWords: "minicode",
              url:
                "https://api.cw100.com//storage/mini_wxcbe60162f9dc451c/2020/04/21/_a=3361&t=kq&sid=87&cid=110100.jpg",
              css: {
                hasBorder: 0,
                right: "28",
                bottom: "122",
                width: "161",
                height: "161",
                borderRadius: "0"
              }
            }
          ]
        },
        status: 1
      },
      defaultData: {
        product: [{ name: "店员助手小程序", value: 1 }],
        type: [
          { name: "商品", value: 1 },
          { name: "营销活动", value: 2 },
          { name: "门店", value: 3 },
          { name: "行业内幕", value: 4 },
          { name: "蜜蜂特使", value: 5 },
          // { name: "成单黑客", value: 6 }
        ],
        type_son: [
          { name: "签到有礼", value: 100 },
          { name: "以旧换新", value: 300 }
        ],
        viewsMold: [
          { name: "不变图层", value: 1 },
          { name: "可变图层", value: 2 }
        ],
        viewsType: [
          { name: "文字", value: "text" },
          { name: "图片", value: "image" }
        ],
        changeKeyWords: {
          "1": {
            text: [
              {
                name: "商品标题",
                value:
                  "商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
              },
              { name: "商品价格", value: "200000" }
            ],
            image: [
              {
                name: "商品图片",
                value: "/images/painter/package.png"
              },
              {
                name: "品牌logo",
                value: "/images/painter/brand.png"
              },
              {
                name: "商家logo",
                value: "/images/painter/store.png"
              }
            ]
          },
          "3": {
            text: [
              {
                name: "门店名称",
                value: "门店名称门店名称门店名称门店名"
              },
              {
                name: "门店地址",
                value: "门店地址门店地址门店地址门店地址门店地址"
              },
              {
                name: "店员电话",
                value: "13888888888"
              },
              {
                name: "店员姓名",
                value: "店员姓名店员姓名店员姓名"
              }
            ],
            image: [
                {
                name: "商家logo",
                value: "/images/painter/store.png"
              }
            ]
          },
          "4": {
            text: [
              {
                name: "文章标题",
                value: "文章标题文章标题文章标题文章标题文章标题"
              }
            ],
            image: [
                {
                name: "商家logo",
                value: "/images/painter/store.png"
              }
            ]
          },
          "100": {
            text: [
              {
                name: "活动名称",
                value: "活动名称活动名称活动"
              },
              {
                name: "活动时间",
                value: "2020-04-07 至 2020-05-31"
              },
              {
                name: "门店名称",
                value: "门店名称门店名称门店名称门店名"
              }
            ],
            image: [
                {
                name: "商家logo",
                value: "/images/painter/store.png"
              },
              {
                name: "活动banner图",
                value: "/images/painter/banner.png"
              }
            ]
          },
          "300": {
            text: [
              {
                name: "活动名称",
                value: "活动名称活动名称活动"
              },
              {
                name: "活动时间",
                value: "2020-04-07 至 2020-05-31"
              },
              {
                name: "门店名称",
                value: "门店名称门店名称门店名称门店名"
              },
              {
                name: "最高可抵扣金额",
                value: "9999"
              }
            ],
            image: [  {
                name: "商家logo",
                value: "/images/painter/store.png"
              },
              {
                name: "活动banner图",
                value: "/images/painter/banner.png"
              }]
          },
           "5": {
            text: [],
            image: [  {
                name: "商家logo",
                value: "/images/painter/store.png"
              }]
          },
            "6": {
            text: [],
            image: [  {
                name: "商家logo",
                value: "/images/painter/store.png"
              }]
          },
        },
        textAlign: [
          { name: "居左", value: "left" },
          { name: "居中", value: "center" },
          { name: "居右", value: "right" }
        ],
        borderRadius: [
          { name: "正方形", value: "0" },
          { name: "圆形", value: "1" }
        ],
        hasBorder: [
          { name: "无", value: 0 },
          { name: "有", value: 1 }
        ],
        blankViews: {
          "1": {
            viewsMold: 1,
            type: "image",
            url: "",
            changeKeyWords: "",
            isHide: false,
            css: {
              right: "",
              bottom: "",
              width: "",
              height: ""
            }
          },
          "2": {
            viewsMold: 2,
            type: "image",
            url: "",
            changeKeyWords: "",
            isHide: false,
            css: {
              right: "",
              bottom: "",
              width: "",
              height: ""
            }
          }
        },
        template: {
          width: "500",
          height: "875",
          background: "",
          views: [
            {
              viewsMold: 1,
              viewsType: "text",
              type: "image",
              changeKeyWords: "minicode",
              isHide: false,
              url:
                "https://api.cw100.com//storage/mini_wxcbe60162f9dc451c/2020/04/21/_a=3361&t=kq&sid=87&cid=110100.jpg",
              css: {
                hasBorder: 0,
                right: "28",
                bottom: "122",
                width: "161",
                height: "161",
                borderRadius: "0"
              }
            }
          ]
        },
        status: [
          { name: "上架", value: 1 },
          { name: "下架", value: 0 }
        ]
      },
      customStyle: "",
      baseUrl: "",
      move:'',
      elLeft:0,
    };
  },
  computed: {
    ...mapState({
      configData: state => state.configData
    }),
    viewsLastLength() {
      return this.form.template.views.length - 1;
    },
    usePageType() {
      if (this.form.type == 2) {
        return this.form.type_son;
      } else {
        return this.form.type;
      }
    },
    elRight(){
      return 0
    }
  },
  methods: {
    initData(id = 0) {
      if (id == 0) {
        //编辑，使用初始化数据
        return false;
      }
      let that = this;
      getDes({ id: id })
        .then(res => {
          if(!res.status){
            that.$message.error(res.message)
            return false
          }
          res.data.template = JSON.parse(res.data.template)
          that.form = res.data;
        })
        .catch(res => {
          that.$message.error("请求失败4");
        });
    },
    onSaveData() {
      let that = this
      let postData = this.deepClone(this.form);
      postData.template = JSON.stringify(postData.template)
      delete postData.type_son
      if (postData.type == 2) {
        postData.type_son = this.usePageType;
        postData.id = this.configData.id;
      }
      saveDes({data:postData,'_token':this.configData['_token']})
        .then(res => {
          if (res.status) {
            that.$message.success("保存成功");
            setTimeout(()=>{
              that.goBack(res.url)
            },2000)
            
          } else {
            that.$message.error(res.message);
          }
        })
        .catch(res => {
          that.$message.error("请求失败");
        });
    },
    goBack(url=''){
       var index = parent.parent.layer.getFrameIndex(parent.window.name); //获取窗口索引
      
      if(url.length > 0){
          parent.parent.location = url
      }
      parent.parent.layer.close(index)
    },
    onImgOk() {
      console.log(111111111);
    },
    changeSmallBg(data) {
      this.form.small_bg = this.baseUrl + data.file.path;
    },
    changeBgImg(data) {
      this.form.template.background = this.baseUrl + data.file.path;
    },
    handleChange(val) {
      console.log(val);
    },
    addViewImg(data) {
      let { file, num } = data;
      let copyItem = this.form.template.views[num];
      copyItem.url = this.baseUrl + file.path;
      this.form.template.views.splice(num, 1, copyItem);
    },
    changeViewsMold(e, item, index) {
      console.log(index);
      //切换图层类型时清空数据
      this.form.template.views.splice(
        index,
        1,
        this.deepClone(this.defaultData.blankViews[e])
      );
    },
    changeViewsType(e, item, index) {
      // 清空可变字段
      item.changeKeyWords = "";
      //设置默认值
      let cssData;
      if (e == "image") {
        cssData = {
          right: "",
          bottom: "",
          width: "",
          height: ""
        };
      } else {
        cssData = {
          right: "",
          bottom: "",
          width: "",
          height: "",
          lineHeight: "14",
          fontSize: "14",
          textAlign: "left",
          color: "#333",
          maxLines: 1
        };
      }
      item.css = cssData;
    },
    changeBorder(e) {
      let cssData = this.deepClone(
        this.form.template.views[this.viewsLastLength].css
      );
      if (e == 0) {
        delete cssData.borderWidth;
        delete cssData.borderColor;
      } else {
        cssData.borderWidth = "1";
        cssData.borderColor = "#333";
      }
      this.form.template.views[this.viewsLastLength].css = cssData;
    },
    changePanle(item) {
      item.isHide = !item.isHide;
    },
    addViews(index = 0) {
      this.form.template.views.splice(
        index + 1,
        0,
        this.deepClone(this.defaultData.blankViews["1"])
      );
    },
    deleteViews(index) {
      this.form.template.views.splice(index, 1);
    },
    upViews(index) {
      let a = this.form.template.views[index];
      this.form.template.views.splice(index, 1);
      this.form.template.views.splice(index - 1, 0, a);
    },
    downViews(index) {
      let a = this.form.template.views[index];
      this.form.template.views.splice(index, 1);
      this.form.template.views.splice(index + 1, 0, a);
    },
    setKeyWords(event, item, type) {
      let defaultData = {
        text: "text",
        image: "url"
      };
      //将可变字段的值赋给图层
      //将该字段的变量值 加在图层信息上
      let a = {};
      a = this.defaultData.changeKeyWords[this.usePageType][type].find(e => {
        return e.name == event;
      });
      console.log("a.value", a.value);

      item[defaultData[type]] = a.value;
    },
    deepClone(obj) {
      return JSON.parse(JSON.stringify(obj));
    },
    initTemplate(e) {
      let arr =  [100,200,300]
      if(!arr.includes(e)){
          this.form.title = "";
          this.form.type_son = 100;
      }else{
        this.form.type_son = e
      }
      this.form.template = this.deepClone(this.defaultData.template);
      this.form.small_bg = "";
    },
  },
  filters: {
    changeText(value){
      return value ? '展开':'折叠'
    },
  }
};
</script>
<style lang="scss">
.upload-com {
  position: relative;
  display: flex;
  width: 100px;
  height: 100px;
  border: 1px solid #ececec;
  display: flex;
  justify-content: center;
  .upload-img {
    position: absolute;
    width: initial;
    height: initial;
    max-width: 100px;
    max-height: 100px;
  }
  .icon-qiehuan {
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
.upload-com:hover {
  border: 1px solid #4393e5;
  i {
    display: block;
  }
}
.view-item {
  border: 1px solid rgba(232, 232, 232, 1);
  margin-bottom: 5px;
  .item-hd {
    display: flex;
    justify-content: space-between;
    height: 35px;
    background-color: rgba(51, 51, 51, 0.117647058823529);
    padding: 5px;
    align-items: center;
  }
  .item-bd {
    //  animation: name duration timing-function delay iteration-count direction fill-mode;
    will-change: height;
    transition: height 1;
    padding: 10px;
    overflow: hidden;
  }
  &.panle-hide {
    .item-bd {
      height: 0;
      padding: 0;
    }
  }
}
.change-width {
  .el-form-item__content {
    display: flex;
    flex-wrap: wrap;
  }
  .el-input-group {
    width: 45%;
    margin-bottom: 10px;
    margin-right: 10%;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
.el-input-group__append,
.el-input-group__prepend {
  padding: 1px 5px;
}
.G-Mb-10 {
  margin-bottom: 10px !important;
}
.el-message{
  top: 100px !important;
}
.painter-el{
    position: fixed;
    top: 180px;
    right: calc(100vw - 1200px);
}
.prop-text{
    font-size: 14px;
    color: #666;
    line-height: 1;
    padding-top: 5px;
}
</style>
