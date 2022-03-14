

export class ChiffreAnimation {
    chiffres:any;
    contentMax1:number;
    contentMax2:number;
    contentMax3:number;
    content1:number;
    content2:number;
    content3:number;
    constructor(config) {
        this.chiffres = document.querySelectorAll('.Chiffres');

        this.contentMax1 = config[0];
        this.contentMax2 = config[1];
        this.contentMax3 = config[2];
        this.content1 = 0;
        this.content2 = 0;
        this.content3 = 0;

        this.interval();
    }

    interval(){
        let intervalid = setInterval(()=>{
            if (this.content1 == this.contentMax1 && this.content2 == this.contentMax2 && this.content3 == this.contentMax3) {
                clearInterval(intervalid);
            }
            if (this.content1 == this.contentMax1) {
                this.content1 = this.contentMax1-1;
            }
            if (this.content2 == this.contentMax2) {
                this.content2 = this.contentMax2-1;
            }
            if (this.content3 == this.contentMax3) {
                this.content3 = this.contentMax3-1;
            }
            this.chiffres[0].textContent = this.content1++;
            this.chiffres[1].textContent = this.content2++;
            this.chiffres[2].textContent = this.content3++;


        }, 10);
    }
}