//import { keyframes } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html', 
  styleUrls: ['../math-kids.component.css']
})

export class ClockComponent implements OnInit, OnDestroy  {
  @ViewChild("canvas", {static:true} ) myCanvas!: ElementRef;
  ctx:any = null;
  radius:number = 0;
  currentHour:number=1;
  currentMinute:number=0;

  constructor (private renderer: Renderer2){      
    this.renderer.addClass(document.body, 'mainBodyScrollingBlocked');  
    this.renderer.removeClass(document.body, 'mainBodyScrolling');      
  }

  ngOnInit(){
    window.scroll(0,0);    
    
    //this.vhToPixel = ((50 * window.innerHeight)/100) ;    
    this.ctx = this.myCanvas.nativeElement.getContext("2d");            
    this.radius = this.myCanvas.nativeElement.height / 2;        
    this.ctx.translate(this.radius, this.radius);    
    this.radius = this.radius * 0.90
    //setInterval(this.drawClock, 1000);
    this.drawClock();    
  }  

  drawClock() {
    this.drawFace(this.ctx, this.radius);
    this.drawNumbers(this.ctx, this.radius);
    this.drawTime(this.ctx, this.radius, this.currentHour, this.currentMinute , 0);
  }
  drawFace(ctx:any, radius:number) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    grad.addColorStop(0, 'deepskyblue');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, 'deepskyblue');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = 'deepskyblue';
    ctx.fill();
  }
  drawNumbers(ctx:any, radius:number) {
    var ang;
    var num;
    ctx.font = radius*0.25 + "px arial";
    ctx.textBaseline="middle";
    ctx.textAlign="center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius*0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius*0.85);
      ctx.rotate(-ang);
    }
  }
  showTheTime(){//todo, maybe just remove the hands instead of redrawing the whole thing, but no matter for now.
    this.drawFace(this.ctx, this.radius);
    this.drawNumbers(this.ctx, this.radius);
    this.drawTime(this.ctx, this.radius, this.currentHour, this.currentMinute , 0);
  }
  drawTime(ctx:any, radius: number, hour:number, minute:number, second:number){
    //var now = new Date();
    //var hour = now.getHours();
    //var hour = 1;
    //var minute = now.getMinutes();
    //var minute = 0;
    //var second = now.getSeconds();
    //var second = 0;   

    hour=hour%12;
    hour=(hour*Math.PI/6)+ (minute*Math.PI/(6*60))+ (second*Math.PI/(360*60));
    this.drawHand(ctx, hour, radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    this.drawHand(ctx, minute, radius*0.8, radius*0.07);
    // second
    //second=(second*Math.PI/30);
    //this.drawHand(ctx, second, radius*0.9, radius*0.02);
}
drawHand(ctx:any, pos:number, length:number, width:number) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
  
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'mainBodyScrollingBlocked');
    this.renderer.addClass(document.body, 'mainBodyScrolling');  
  }
  
}