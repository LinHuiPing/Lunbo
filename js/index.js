// 规定每张图片属于的位置和状态
var states=[{ZIndex:1,width:120,height:150,top:69,left:134,opacity:0.2},
            {ZIndex:2,width:130,height:170,top:59,left:0,opacity:0.5},
            {ZIndex:3,width:170,height:218,top:24,left:110,opacity:0.8},
            {ZIndex:4,width:224,height:288,top:0,left:263,opacity:1},
            {ZIndex:3,width:170,height:218,top:24,left:470,opacity:0.8},
            {ZIndex:2,width:130,height:170,top:59,left:620,opacity:0.5},
            {ZIndex:1,width:120,height:150,top:69,left:500,opacity:0.2},
];


// 将状态和位置付给li标签
var lis=$('#box li');
function lisImg(){
    lis.each(function(index,ele){
        var state = states[index];
        $(ele).css({'z-index':state.ZIndex}).finish().animate(state,1000).find('img').css('opacity',state.opacity);    
    })
    // $('ul').animate({'top':'0','left':'0'},1000)
}

lisImg();


// 前一张
function prevImg(){
    states.push(states.shift());
    lisImg(); 
}

// 后一张
function nextImg(){
    states.unshift(states.pop());
    lisImg(); 
}

// 自动轮播
var time=null;
function autoPlay(){
    time=setInterval(function(){
        nextImg();
    },1000)
}
autoPlay();

// 停止轮播
$('#box section,#box li').hover(function(){
    clearInterval(time)
},function(){
    autoPlay();
})

// 封装成插件，能够使得只要使用这个插件就能被重复的使用效果，会产生什么样的后果
// 1.插件中最好不要使用id，原因：插件是为了能够被重复利用，也就是说在一个页面上可以重复调用，会造成页面的冲突，并且id具有唯一性的特征。
// 2.变量命名和方法命名：states，time，move(),用户在使用这个插件的时候，可能还会引入自己创建的文件，也有这样的命名，那么就会产生冲突
// 3.标签class的值的问题，prev，next，这些class名太大众化了，大多数编写者都会使用这样的命名，势必造成冲突
// 插件的文件名：index.js,index.css，命名大众化,比如jQuery.Slide.js
