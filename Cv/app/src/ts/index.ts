import { Slider } from "./slider";
import {InterractionObserver} from "./Observer";
import { CanvasAnimation } from "./CanvasAnimation";
const SliderSkills:HTMLElement = document.querySelector('.Main__slider');
const SliderProjects:HTMLElement = document.querySelector('.Main__Projects');

const canvasAbout = document.querySelector('.Canvas__About') as HTMLCanvasElement;

const SliderSkillsConfig:{} = {timer: false, arrows: true, pagination: true, loop:false, mouse:true, touch: true}
const SliderProjectsConfig:{} = {timer: false, arrows: true, pagination: false, loop:true, mouse:true, touch: true}

const sliderCanvas:NodeList = document.querySelectorAll('.Main__slider .canvas');



new Slider(SliderSkills, SliderSkillsConfig);
new Slider(SliderProjects, SliderProjectsConfig);

//new CanvasAnimation(canvasAbout);

//new InterractionObserver();
