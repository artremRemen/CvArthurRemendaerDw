import { ChiffreAnimation } from "./chiffreAnimation";
const ConfigJson = require('../js/config.json')

export class InterractionObserver {
    options:object;
    configJson:object;
    Chiffre:HTMLElement;
    observerChiffre: IntersectionObserver;
    constructor() {
        this.options = {
            root: null,
            rootMargin: '50px',
            threshold: 1,
        }
        this.configJson = ConfigJson.chiffre;
        this.Chiffre = document.querySelector('.Main__Chiffres');
        
        this.observerChiffre = new IntersectionObserver(()=>{
            new ChiffreAnimation(this.configJson);
            this.observerChiffre.unobserve(this.Chiffre);
          }, this.options);
        
          this.observerChiffre.observe(this.Chiffre);
    }
}