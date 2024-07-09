/**
 * 
 * 
frame({name:'frame',length:10,speed:100,src:'ossweb-img/frame/',type:'png',auto:true,loop:false,callback(){
    alert(1)
}})
    名称 图片数量 播放速度 路径 图片格式 是否自动播放 是否循环 播放结束后执行
framePlay(['frame'])
    播放素组里面的名称，暂停其它的
framePause('frame)
    暂停传入的
 */
    !function(t){"use strict";var a=function(t){return new a.prototype.init(t)};a.prototype={init:function(t){this.config=t,this.count=0,this.images=[],this.index=0,this.time=null,this.canvas=null,this.ctx=null,this.create(),frameData.push(this)},create:function(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=document.querySelector("."+this.config.name).clientWidth,this.canvas.height=document.querySelector("."+this.config.name).clientHeight,document.querySelector("."+this.config.name).appendChild(this.canvas),this.laoding()},laoding:function(){var t=this;if(this.count<this.config.length){var a=new Image;a.src=this.config.src+this.count+"."+this.config.type,0==this.count&&(a.onload=function(){t.render()}),this.images.push(a),this.count++,this.laoding()}else this.updata()},render:function(){this.images[this.index].complete?this.images[this.index].width&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.images[this.index],0,0,this.canvas.width,this.canvas.height,0,0,this.canvas.width,this.canvas.height)):this.index>2&&(this.index-=2)},updata:function(){var t=this;t.config.auto?(clearInterval(t.time),t.time=setInterval(function(){t.index<t.config.length-1?t.index++:t.config.loop?t.index=0:(t.config.auto=!1,t.updata(),t.config.callback&&t.config.callback()),t.render()},t.config.speed)):clearInterval(t.time)}},a.prototype.init.prototype=a.prototype,t.frame=a,t.frameData=[],t.framePlay=function(a){for(var i=0;i<t.frameData.length;i++)for(var e=0;e<a.length;e++)t.frameData[i].config.name==a[e]?(t.frameData[i].config.auto=!0,t.frameData[i].updata()):(t.frameData[i].config.auto=!1,t.frameData[i].updata())},t.framePause=function(a){for(var i=0;i<t.frameData.length;i++)t.frameData[i].config.name==a&&(t.frameData[i].config.auto=!1,t.frameData[i].updata())}}(this||window);