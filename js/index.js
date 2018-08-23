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

