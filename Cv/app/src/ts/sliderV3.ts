export class Slider {
    readonly test = 'test'; //peux uniquement etre lue(equivalent des const pour des class)
    SliderConfig:{ timer:boolean, arrows:boolean, pagination:boolean, loop:boolean, mouse:boolean, touch: boolean };
    private readonly sliderElement:HTMLElement;
    private readonly sliderContainers:NodeList;
    
    private arrowLeft:HTMLElement;
    private arrowRight:HTMLElement;
    private touchMouse:HTMLElement;
    private buttonContainer:HTMLElement;

    private button:HTMLElement;
    private buttonArrow:HTMLElement[];

    private slideElement:any;

    private slideActive:number;
    private Nextslide:number;
    
    /*
    * @params {HTMLElement} section cotain slider
    *
    * @params {Object} SliderConfig
    * @params {Object} SliderConfig.timer enable slider animation
    * @params {Object} SliderConfig.arrows enable arrow 
    * @params {Object} SliderConfig.pagination enable pagination button 
    * @params {Object} SliderConfig.loop enable return to start 
    * @params {Object} SliderConfig.mous enable mouse move for change slide 
    * @params {Object} SliderConfig.Touch enable Touch on phone 
    *
    */

    constructor(sliderElement:HTMLElement, SliderConfig:any) {
       
        this.sliderElement = sliderElement;
        this.sliderContainers = [].slice.call(document.querySelectorAll(`.${this.sliderElement.className} >div`));
       
        this.SliderConfig = SliderConfig;
        this.slideActive = 0;
        this.Nextslide = this.slideActive +1;

        this.buttonArrow = [];
                
        if (this.SliderConfig.pagination) {
            this.createPagination();
            this.buttonArrow[0].classList.add('button--Active');
        }
        if (this.SliderConfig.arrows) {
            this.createarrows();
        }
        for (let j:number = 0; j < this.sliderContainers.length; j++) {
            
            this.slideElement = this.sliderContainers[j];
            
            
            this.slideElement.style.position='absolute';
            
            if (j !== 0) {
                this.slideElement.style.right = '0';
                this.slideElement.style.width = '0vw';
                this.slideElement.style.transform = 'scale(0,1)';
            }
        }
    }

    private createarrows(){
        this.arrowLeft= document.createElement('div');
        this.arrowLeft.classList.add('SliderLeft');
        this.sliderElement.insertAdjacentElement('afterbegin', this.arrowLeft);
        this.arrowRight= document.createElement('div');
        this.arrowRight.classList.add('SliderRight');
        if (this.SliderConfig.loop === false) {
            this.arrowLeft.classList.add('sliderdesable');
        }
        this.sliderElement.insertAdjacentElement('beforeend', this.arrowRight);
        this.arrowLeft.addEventListener('click',(e:Event)=>{
            this.verif('left');
            
        });
        this.arrowRight.addEventListener('click',(e:Event)=>{
            this.verif('right');
            
        });
        
    }
    private createPagination(){
        this.buttonContainer = document.createElement('div');
        this.buttonContainer.classList.add('slider__Buttons');
        this.sliderElement.insertAdjacentElement('beforeend', this.buttonContainer);
        for (let i:number = 0; i < this.sliderContainers.length; i++) {
            this.button = document.createElement('div');
            this.buttonContainer.insertAdjacentElement('beforeend', this.button);
            this.buttonArrow.push(this.button);
            this.button.addEventListener('click', (e:Event)=>{
                this.gotoPagin(i);
            });
        }
        
    }
    private gotoPagin(i:number){
        if (this.slideActive > i) {
            this.animation('left', this.sliderContainers[this.slideActive], this.sliderContainers[i]);
            this.updatePag(this.slideActive, i);
        }
        else if (this.slideActive < i) {
            this.animation('right', this.sliderContainers[this.slideActive],this.sliderContainers[i]);
            this.updatePag(this.slideActive, i);
        }
        else{
            return;
        }
        this.slideActive = i;
        if (this.SliderConfig.loop === false){
            if (this.slideActive === this.sliderContainers.length -1) {
                this.arrowRight.classList.add('sliderdesable');
                this.arrowLeft.classList.remove('sliderdesable');
            }
            else if (this.slideActive == 0) {
                this.arrowLeft.classList.add('sliderdesable');
                this.arrowRight.classList.remove('sliderdesable');
            }
            else{
                this.arrowLeft.classList.remove('sliderdesable');
                this.arrowRight.classList.remove('sliderdesable');
            }
            
        }
    }
    private animation(direction:string, element, nextElement){
        
        if (direction === 'right') {
            
            element.style.right = null;
            element.style.left = '0';
            element.style.width = '0vw';
            element.style.transform = 'scale(0,1)';
            
            
            nextElement.style.left = null;
            nextElement.style.right = '0';
            nextElement.style.width = '100vw';
            nextElement.style.transform = 'scale(1,1)';
        }
        else{
            element.style.left = null;
            element.style.right = '0';
            element.style.width = '0vw';
            element.style.transform = 'scale(0,1)';
            
            nextElement.style.right = null;
            nextElement.style.left = '0';
            nextElement.style.width = '100vw';
            nextElement.style.transform = 'scale(1,1)';
        }
        return this;
    }
    private verif(direction:string){
        if (this.SliderConfig.loop === true) { 
            if (direction === 'right') {
                if (this.slideActive === this.sliderContainers.length -1) {
                    this.Nextslide = 0;
                    this.animation('right', this.sliderContainers[this.slideActive],this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive = 0;
                }
                else{
                    this.Nextslide = this.slideActive +1;
                    this.animation('right', this.sliderContainers[this.slideActive],this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive++;
                }
            }
            if (direction === 'left') {
                if (this.slideActive == 0) {
                    this.Nextslide = this.sliderContainers.length -1;
                    this.animation('left', this.sliderContainers[this.slideActive], this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive = this.sliderContainers.length -1;
                }
                else{
                    this.Nextslide = this.slideActive -1;
                    this.animation('left', this.sliderContainers[this.slideActive], this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive--;
                }

            }
        }
        if (this.SliderConfig.loop === false){
            if (direction === 'right') {
                if (this.slideActive === this.sliderContainers.length -1) {
                    return
                }
                else{
                    this.arrowLeft.classList.remove('sliderdesable');
                    this.arrowRight.classList.remove('sliderdesable');
                    this.Nextslide = this.slideActive +1;
                    this.animation('right', this.sliderContainers[this.slideActive],this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive++;
                }
                if (this.slideActive === this.sliderContainers.length -1) {
                    this.arrowRight.classList.add('sliderdesable');
                    
                }
            }
            if (direction === 'left') {
                if (this.slideActive == 0) {
                    this.arrowLeft.classList.add('sliderdesable');
                }
                else{
                    this.arrowLeft.classList.remove('sliderdesable');
                    this.arrowRight.classList.remove('sliderdesable');
                    this.Nextslide = this.slideActive -1;
                    this.animation('left', this.sliderContainers[this.slideActive], this.sliderContainers[this.Nextslide]);
                    this.updatePag(this.slideActive, this.Nextslide);
                    this.slideActive--;
                }
                if (this.slideActive == 0) {
                    this.arrowLeft.classList.add('sliderdesable');
                }
                
            }
        }

    }
    private updatePag(i:number, j:number){
        if (this.SliderConfig.pagination === true) {
            this.buttonArrow[i].classList.remove('button--Active');
            this.buttonArrow[j].classList.add('button--Active');
        }
        else{
            return;
        }
    }
}