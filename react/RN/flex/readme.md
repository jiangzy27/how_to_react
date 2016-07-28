###什么是Flex？
Flex就是flexible box的缩写，意为“弹性布局”，用来为盒装模型提供最大的灵活性。<br />
1.任何一个容器都可以指定为flex布局。<br />

```
.box{
  display: flex;
}
```
2.行内元素也可以使用flex布局。<br />

```
.box{
  display: inline-flex;
}
```
3.Webkit内核的浏览器，必须加上-webkit前缀。<br />

```
.box{
  display: -webkit-flex; /* Safari */
  display: flex;
}
```

4.注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。<br />
5.目前react native支持的属性仅有如下6个,是正式web版本的阉割版：
*   flex
*   flexDirection
*   alignSelf
*   alignItems
*   justifyContent
*   flexWrap

###基本概念
采用flex布局的元素，称为flex容器（flex container），简称容器。它的所有子元素自动成为容器成员，
称为flex项目（flex item）,简称“项目”。<br />
<img src="./img/bg.png" /> <br />
容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。
主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；
交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

###容器的属性
以下6个属性设置在容器上。

*   flex-direction
*   flex-wrap
*   justify-content
*   align-items


####flex-direction属性
flex-direction属性决定主轴的方向（即项目的排列方向）。

```
.box{
    flex-direction:row | row-reverse | column | column-reverse;
}
```

<img src="./img/flex-direction.png" /><br />
它可能有4个值：
*   row(默认值)：主轴为水平方向，起点在最左端。
*   row-reverse：主轴为水平方向，起点在最右端。
*   column：主轴为垂直方向，起点在上面。
*   column：主轴为垂直方向，起点在下面。

####flex-wrap属性
默认情况下，项目都排在一条线（又称“轴线”）上。

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```
它可能有三个值：
*   nowrap（默认）：不换行。<br />
<img src="./img/nowrap.png" /><br />
*   wrap：换行，第一行在上方。<br />
<img src="./img/wrap.jpg" /><br />
*   wrap-reverse：换行，第一行在下方。<br />
<img src="./img/wrap_reverse.jpg" /><br />


####justify-content属性
定义了项目在**主轴**上的对齐方式。

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```
<img src="./img/justify_content.png" /><br />
它可能取5个值，具体对齐方式跟轴方向有关。下面假设主轴是从左到右。<br />
*   flex-start（默认值）：左对齐
*   flex-end：右对齐
*   center：居中
*   space-between：两端对齐，项目之间的间隔都相等。
*   space-around：每个项目**两侧**的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

####align-items属性
定义了项目在**交叉轴**上如何对齐。

```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```
<img src="./img/align_items.png" /> <br />

###项目的属性
暂时只掌握以下2个即可。<br/>
*   flex
*   align-self

####flex属性
值大于0时表示是可伸缩的，具体数值表示放大的倍数。
####align-self属性
align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
该属性可能取6个值，除了auto，其他都与align-items属性完全一致。

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```
<img src="./img/align_self.png" />
