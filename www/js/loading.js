/获取浏览器页面可见高度和宽度

var _PageHeight = document.documentElement.clientHeight,

_PageWidth = document.documentElement.clientWidth;

//计算loading框距离顶部和左部的距离(loading框的宽度为215px，高度为61px)

var _LoadingTop = _PageHeight > 90 ? (_PageHeight - 90) / 2 : 0,

_LoadingLeft = _PageWidth > 90 ? (_PageWidth - 90) / 2 : 0;

//在页面未加载完毕之前显示的loading Html自定义内容

var _LoadingHtml = ‘

//呈现loading效果

document.write(_LoadingHtml);

//监听加载状态改变

document.onreadystatechange = completeLoading;

//加载状态为complete时移除loading效果

function completeLoading() {

if (document.readyState == "complete") {

$("#loadingDiv").fadeOut(1500);

}

}