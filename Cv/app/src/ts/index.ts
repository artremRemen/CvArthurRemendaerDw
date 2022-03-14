import { SliderV2 } from "./slider";
import {InterractionObserver} from "./Observer";
import { CanvasAnimation } from "./CanvasAnimation";
const SliderSkills:HTMLElement = document.querySelector('.Main__slider');
const SliderProjects:HTMLElement = document.querySelector('.Main__Projects');

const canvasAbout = document.querySelector('.Canvas__About') as HTMLCanvasElement;

const SliderSkillsConfig:{} = {timer: false, arrows: true, pagination: true, loop:false}
const SliderProjectsConfig:{} = {timer: false, arrows: true, pagination: false, loop:true}

const sliderCanvas:NodeList = document.querySelectorAll('.Main__slider .canvas');



new SliderV2(SliderSkills, SliderSkillsConfig);
new SliderV2(SliderProjects, SliderProjectsConfig);

//new CanvasAnimation(canvasAbout);

//new InterractionObserver();
