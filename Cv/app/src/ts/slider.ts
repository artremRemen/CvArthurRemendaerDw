export class SliderV2 {
    readonly test = 'test'; //peux uniquement etre lue(equivalent des const pour des class)
    SliderConfig:{ timer:boolean, arrows:boolean, pagination:boolean, loop:boolean };
    private arrowLeft:HTMLElement;
    private arrowRight:HTMLElement;

    button:HTMLElement;
    buttonContainer:HTMLElement;
    buttonArrow:HTMLElement[];

    private sliderElement:HTMLElement;
    private sliderContainers:NodeList;
    private slideElement:any;

    private slideActive:number;
    
    /*
    * @params {HTMLElement} section cotain slider
    * @params {Object} SliderConfig
    * @params {Object} SliderConfig.timer enable slider animation
    * @params {Object} SliderConfig.arrows enable arrow 
    * @params {Object} SliderConfig.pagination enable pagination button 
    * @params {Object} SliderConfig.loop enable return to start 
    *
    */

    constructor(sliderElement:HTMLElement, SliderConfig:any) {
       
        this.sliderElement = sliderElement;
        this.sliderContainers = [].slice.call(document.querySelectorAll(`.${this.sliderElement.className} >div`));
       
        this.SliderConfig = SliderConfig;
        this.slideActive = 0;

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
            if (j ===this.sliderContainers.length-1) {
                this.slideElement.classList.add('Container--after');
            }
            else if (j !== 0) {
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
                this.prev();
                this.arrowLeft.classList.remove('sliderdesable');
            }
            else{
                if (this.slideActive > 0) {
                    this.prev();
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
                this.next();
                this.arrowLeft.classList.remove('sliderdesable');
            }
            else{
                
                if (this.slideActive <= this.sliderContainers.length-2) {
                    this.next();
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
            this.buttonArrow.push(this.button);
            this.button.addEventListener('click', (e:Event)=>{
                this.gotoPagin(i);
            });
        }
        
    }

    next(){
        this.goto(this.slideActive+1);
    }

    prev(){
        this.goto(this.slideActive-1);
    }

    goto(index){
        index = this.verifIndex(index);
        console.log(index, this.slideActive);
        
        
        if (this.slideActive === this.sliderContainers.length-1 && index === 0) {
            console.log('upReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
            for (let k = 1; k < this.sliderContainers.length-1; k++) {
                //@ts-ignore
                this.sliderContainers[k].classList.remove('Container--after');
                //@ts-ignore
                this.sliderContainers[k].classList.add('Container--Before');
                
            }
        }
        else if (this.slideActive === this.sliderContainers.length-2 && index > this.slideActive) {
            console.log('upBeforeReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
            //@ts-ignore
            this.sliderContainers[0].classList.add('Container--Before');
            //@ts-ignore
            this.sliderContainers[0].classList.remove('Container--after');
        }
        else if (index === 1 && index > this.slideActive) {
            console.log('upAfterReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.add('Container--Before');
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.remove('Container--after');
        }
        else if(this.slideActive === 0 && index === this.sliderContainers.length-1){
            console.log('downReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');

            for (let k = 1; k < this.sliderContainers.length-1; k++) {
                //@ts-ignore
                this.sliderContainers[k].classList.remove('Container--Before');
                //@ts-ignore
                this.sliderContainers[k].classList.add('Container--after');
                
            }
        }
        else if (this.slideActive === 1 && index < this.slideActive) {
            console.log('downBeforReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.add('Container--after');
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.remove('Container--Before');
        }
        else if (this.slideActive === this.sliderContainers.length-2 && index < this.slideActive) {
            console.log('downAfterReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');
            //@ts-ignore
            this.sliderContainers[0].classList.add('Container--after');
            //@ts-ignore
            this.sliderContainers[0].classList.remove('Container--Before');
        }
        else if(this.slideActive < index){
            console.log('up');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
        }
        else if (this.slideActive > index) {
            console.log('down');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');
        }

        if (this.SliderConfig.pagination) {
            this.buttonArrow[this.slideActive].classList.remove('button--Active');
            this.buttonArrow[index].classList.add('button--Active');
        }
        this.slideActive = index;
    }
    
    verifIndex(index){
        if (index > this.sliderContainers.length-1) {
            index = 0;
        }
        if (index < 0) {
            index = this.sliderContainers.length-1;
        }
        return index;
    }

    gotoPagin(index){
        if (index === this.sliderContainers.length-1) {
            console.log('upReset');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
            for (let k = 1; k < this.sliderContainers.length-1; k++) {
                //@ts-ignore
                this.sliderContainers[k].classList.remove('Container--after');
                //@ts-ignore
                this.sliderContainers[k].classList.add('Container--Before');
                
            }
            //@ts-ignore
            this.sliderContainers[0].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[0].classList.add('Container--Before');
            
        }
        else if(index === 0){
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');

            for (let k = 1; k < this.sliderContainers.length-1; k++) {
                //@ts-ignore
                this.sliderContainers[k].classList.add('Container--Before');
                //@ts-ignore
                this.sliderContainers[k].classList.remove('Container--after');
                
            }
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.add('Container--Before');
            //@ts-ignore
            this.sliderContainers[this.sliderContainers.length-1].classList.remove('Container--after');
            
        }
        else if (index > this.slideActive) {
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--after');
            for (let l = this.slideActive; l > this.sliderContainers.length; l++) {
                //@ts-ignore
                this.sliderContainers[l].classList.add('Container--Before');
                //@ts-ignore
                this.sliderContainers[l].classList.remove('Container--after');
            }
            
        }
        else if(index < this.slideActive){
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--Before');
            //@ts-ignore
            this.sliderContainers[index].classList.remove('Container--after');
            //@ts-ignore
            this.sliderContainers[this.slideActive].classList.add('Container--Before');
            for (let l = index+1; l < this.slideActive; l++) {
                //@ts-ignore
                this.sliderContainers[l].classList.remove('Container--after');
                //@ts-ignore
                this.sliderContainers[l].classList.add('Container--Before');
            }
            
        }
        if (this.SliderConfig.pagination) {
            this.buttonArrow[this.slideActive].classList.remove('button--Active');
            this.buttonArrow[index].classList.add('button--Active');
        }
        this.slideActive = index;
    }
}