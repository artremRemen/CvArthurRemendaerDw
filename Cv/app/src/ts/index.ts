import { SliderV2 } from "./slider";

const SliderSkills:HTMLElement = document.querySelector('.Main__slider');
const SliderProjects:HTMLElement = document.querySelector('.Main__Projects');

const SliderSkillsConfig:{} = {timer: false, arrows: true, pagination: true, loop:false}
const SliderProjectsConfig:{} = {timer: false, arrows: true, pagination: false, loop:true}

const sliderCanvas:NodeList = document.querySelectorAll('.Main__slider .canvas');


let slider = new SliderV2(SliderSkills, SliderSkillsConfig);
let slider2 = new SliderV2(SliderProjects, SliderProjectsConfig);