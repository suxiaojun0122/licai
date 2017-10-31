import '../css/normailze.css';
import "../css/index.css";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import  "Swiper/dist/css/swiper.min.css";
import  Swiper from "Swiper/dist/js/swiper.min.js";


 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
//  loop: true,
    
    // 如果需要分页器
    pagination: {
    	el:'.swiper-pagination',
	},
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
//  scrollbar: '.swiper-scrollbar',
  })       
