function lunbo() {
  let count = 0;
  let width = 1226;
  let len = document
    .getElementsByClassName("lunbo")[0]
    .getElementsByTagName("li").length;
  let timer = null;
  timer = setInterval(changeAuto, 1000);
  function changeAuto() {
    if (count < len) {
      getNext();
      count++;
    } else {
      getRest();
      count = 0;
    }
  }

  function getNext() {
    let linext = document
      .getElementsByClassName("lunbo")[0]
      .getElementsByTagName("ul")[0];
    linext.style.marginLeft = "-" + width * count + "px";
    linext.style.transition = 0.3 + "s";
  }
  function getRest() {
    let linext = document
      .getElementsByClassName("lunbo")[0]
      .getElementsByTagName("ul")[0];
    linext.style.marginLeft = "0px";
    linext.style.transition = "0s";
  }
}
lunbo();


function dingshiqi(){
  let fen = 60,
      miao = 60;

  let fenv = document.getElementsByClassName('daojishi')[0].getElementsByClassName('fen')[0];
  let miaov = document.getElementsByClassName('daojishi')[0].getElementsByClassName('miao')[0];

  fenv.innerHTML = fen;
  miaov.innerHTML = miao;


  let timer = setInterval(function(){
    if(miao > 0){
      if(miao == 60){
        fen --;
        fenv.innerHTML = fen;
      }
      miao --;
      if(miao >=0 && miao<10){
        miaov.innerHTML = '0' + miao;
      }else{
        miaov.innerHTML = miao;
      }
      
    }
    if(miao == 0){
      if(fen > 0){
        fen --;
        miao = 60;
        if(fen >=0 && fen<10){
          fenv.innerHTML = '0' + fen;
        }else{
          fenv.innerHTML = fen;
        }
      }
    }
    if(miao ==0 && fen ==0){
      clearInterval(timer);
    }

  },1000)
}
dingshiqi();


function dingshiqi2(){
  let fen = 60,
      miao = 60;

  let fenv = document.getElementsByClassName('daojishi')[1].getElementsByClassName('fen')[0];
  let miaov = document.getElementsByClassName('daojishi')[1].getElementsByClassName('miao')[0];

  fenv.innerHTML = fen;
  miaov.innerHTML = miao;


  let timer = setInterval(function(){
    if(miao > 0){
      if(miao == 60){
        fen --;
        fenv.innerHTML = fen;
      }
      miao --;
      if(miao >=0 && miao<10){
        miaov.innerHTML = '0' + miao;
      }else{
        miaov.innerHTML = miao;
      }
      
    }
    if(miao == 0){
      if(fen > 0){
        fen --;
        miao = 60;
        if(fen >=0 && fen<10){
          fenv.innerHTML = '0' + fen;
        }else{
          fenv.innerHTML = fen;
        }
      }
    }


    if(miao ==0 && fen ==0){
      clearInterval(timer);
    }

  },2000)
}
dingshiqi2();



function miaoshaul(){
  let width = 992;

  let ulwidth = document.getElementsByClassName('mishatul')[0];
  ulwidth.style.marginLeft = '0';
  ulwidth.style.transition = '2s';
  let zuojian = document.getElementsByClassName('content')[0].getElementsByClassName('zuojiantou')[0];
  let youjian = document.getElementsByClassName('content')[0].getElementsByClassName('youjiantou')[0];


  zuojian.addEventListener('click',zuoyi,false);

  function zuoyi(){
  
    if(ulwidth.style.marginLeft == '-1984px'){
      ulwidth.style.marginLeft == '-1984px';
    }else{
      ulwidth.style.marginLeft = parseInt(ulwidth.style.marginLeft) -width + 'px';

    }
    
  }


  youjian.addEventListener('click',youyi,false);
  function youyi(){

    if(ulwidth.style.marginLeft == '0px' || ulwidth.style.marginLeft == ''){
      ulwidth.style.marginLeft == '0px' ;
    }else{
      ulwidth.style.marginLeft = parseInt(ulwidth.style.marginLeft) + width + 'px';
    }
  }


}
miaoshaul();

function miaoshaul2(){
  let ulwidth = document.getElementsByClassName('mishatul')[1];
  let cout = 0;
  let timer = setInterval(auto,10);

  function auto(){
    cout -= 1;
    if(cout == -1984){
      cout = 0;
    }
    ulwidth.style.marginLeft = cout + 'px';
  }

  let stop = document.getElementsByClassName('mishalun')[1];
  stop.addEventListener('mouseenter',tingzhi,false);
  stop.addEventListener('mouseleave',jixu,false);

  function tingzhi(){
    clearInterval(timer);
  }
  function jixu(){
   timer= setInterval(auto,1)
  }

}
miaoshaul2();



function hoveryou(){
  let xiaoshi = document.getElementsByClassName('jiadian')[0].getElementsByClassName('ri1');

  xiaoshi[0].addEventListener('mouseenter',xianshi1,false);
  xiaoshi[1].addEventListener('mouseenter',xianshi2,false);

  function xianshi1(){
    xiaoshi[0].style.color = '#ff6700';
    xiaoshi[0].style.borderBottom = 'solid 2px #ff6700';
    xiaoshi[0].style.transition = '1s';
    let jiarightul = document.getElementsByClassName('jiaright')[0].getElementsByClassName('jiarightul');
    jiarightul[0].style.marginLeft = '-992px';
    jiarightul[0].style.transition = '1s';
    jiarightul[1].style.marginLeft = '-992px';
    jiarightul[1].style.transition = '1s';



  }
  function xianshi2(){
    xiaoshi[1].style.color = '#ff6700';
    xiaoshi[1].style.borderBottom = 'solid 2px #ff6700';
    xiaoshi[1].style.transition = '1s';
    let jiarightul = document.getElementsByClassName('jiaright')[0].getElementsByClassName('jiarightul');


    jiarightul[0].style.marginLeft = '0px';
    jiarightul[0].style.transition = '1s';
    jiarightul[1].style.marginLeft = '0px';
    jiarightul[1].style.transition = '1s';
  }

  xiaoshi[0].addEventListener('mouseleave',xianleave1,false);
  function xianleave1(){
    xiaoshi[0].style.color = 'rgb(0,0,0)';
    xiaoshi[0].style.borderBottom = 'solid 2px transparent';
  }

  xiaoshi[1].addEventListener('mouseleave',xianleave2,false);
  function xianleave2(){
    xiaoshi[1].style.color = 'rgb(0,0,0)';
    xiaoshi[1].style.borderBottom = 'solid 2px transparent';
  }
}
hoveryou();

