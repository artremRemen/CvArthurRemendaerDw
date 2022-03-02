export class SliderV2 {
    readonly test = 'test'; //peux uniquement etre lue(equivalent des const pour des class)
    SliderConfig:{ timer:boolean, arrows:boolean, pagination:boolean, loop:boolean };
    private arrowLeft:HTMLElement;
    private arrowRight:HTMLElement;

    button:HTMLElement;
    buttonContainer:HTMLElement;

    private sliderElement:HTMLElement;
    private sliderContainers:NodeList;
    private slideElement:any;

    private slideActive:number;
    private slideAfter:number;
    
    /*
    * @params {HTMLElement} section cotain slider
    * @params {Object} SliderConfig
    * @params {Object} SliderConfig.timer enable slider animation
    * @params {Object} SliderConfig.arrows enable arrow 
    * @params {Object} SliderConfig.pagination enable pagination button 
    * @params {Object} SliderConfig.loop enable return to start 
    *
    */

    constructor(sliderElement:HTMLElement, SliderConfig = {timer: false, arrows: true, pagination: true, loop: false}) {
        this.SliderConfig = SliderConfig;
        this.sliderElement = sliderElement;
        this.slideActive = 0;
        this.slideAfter = this.sliderContainers.length-1;
        
        
        this.sliderContainers = [].slice.call(document.querySelectorAll(`.${this.sliderElement.className} >div`));
        
        if (this.SliderConfig.pagination) {
            this.createPagination();
        }
        if (this.SliderConfig.arrows) {
            this.createarrows();
        }
        for (let j:number = 0; j < this.sliderContainers.length; j++) {
            
            this.slideElement = this.sliderContainers[j];
            
            this.slideElement.style.position='absolute';
            if (j !== 0) {
                this.slideElement.classList.add('Container--Before');
            }
        }
        
    }

    private createarrows(){
        this.arrowLeft= document.createElement('div');
        this.arrowLeft.classList.add('SliderLeft');
        this.arrowLeft.classList.add('sliderdesable');
        this.sliderElement.insertAdjacentElement('afterbegin', this.arrowLeft);
        this.arrowRight= document.createElement('div');
        this.arrowRight.classList.add('SliderRight');
        this.sliderElement.insertAdjacentElement('beforeend', this.arrowRight);
        this.arrowLeft.addEventListener('click',(e:Event)=>{
            if (this.SliderConfig.loop) {

            }
            else{
                if (this.slideActive > 0) {
                    //this.prev();
                    if (this.slideActive === 0) {
                        this.arrowLeft.classList.add('sliderdesable');
                    }
                    else{
                        this.arrowLeft.classList.remove('sliderdesable');
                    }
                    
                }
                else{
                    this.arrowLeft.classList.add('sliderdesable');
                }
            }
            console.log('goleft');
            
        });
        this.arrowRight.addEventListener('click',(e:Event)=>{
            if (this.SliderConfig.loop) {
                
            }
            else{
                
                if (this.slideActive <= this.sliderContainers.length-2) {
                    //this.next();
                    if (this.slideActive === this.sliderContainers.length-1) {
                        this.arrowRight.classList.add('sliderdesable');
                    }
                    else{
                        this.arrowLeft.classList.remove('sliderdesable');
                    }
                }
            }
            console.log('go right');
        });
        
    }
    private createPagination(){
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('slider__Buttons');
        this.sliderElement.insertAdjacentElement('beforeend', this.buttonContainer);
        for (let i:number = 0; i < this.sliderContainers.length; i++) {
            this.button = document.createElement('div');
            this.buttonContainer.insertAdjacentElement('beforeend', this.button);
        }
        
    }
}