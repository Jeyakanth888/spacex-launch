import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tile-card',
  templateUrl: './tile-card.component.html',
  styleUrls: ['./tile-card.component.css']
})
export class TileCardComponent implements OnInit {
  landSuccess: any;
  missionIds: any = [];
  imgPath = '';
  @Input() launchDetails: any;
  constructor() { }

  ngOnInit(): void {
    this.landSuccess = this.launchDetails.rocket.first_stage.cores[0].land_success;
    this.missionIds = this.launchDetails.mission_id;
    this.imgPath = this.launchDetails.links.mission_patch_small;
  }

}
