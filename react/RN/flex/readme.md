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

4.注意，设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。

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
*   flex-flow
*   justify-content
*   align-items
*   align-content

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
