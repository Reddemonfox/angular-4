import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './banner-slider.component.html',
  styleUrls: ['./banner-slider.component.less']
})
export class BannerSliderComponent implements OnInit {

  imageList = [{
    'url': 'assets/images/a.png'
  }, {
    'url': 'assets/images/b.png'
  }, {
    'url': 'assets/images/c.png'
  }, {
    'url': 'assets/images/d.png'
  }];
  activeIndex = 0;
  constructor() { }

  ngOnInit() {
  }
  scrollBanner(step: number, position: number) {
    if (this.activeIndex === 0 && step === -1) {
      this.activeIndex = this.imageList.length - 1;
    }else if (this.activeIndex === this.imageList.length - 1 && step === 1){
      this.activeIndex = 0;
    }else if (step) {
      this.activeIndex += step;
    }else {
      this.activeIndex = position;
    }
  }

}
