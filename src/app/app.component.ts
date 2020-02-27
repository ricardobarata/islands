import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "./app.service";
import { Subscription } from "rxjs";
import { MapInfo } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  mapInfo: MapInfo;

  private mapInfoSubcription: Subscription;

  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.mapInfoSubcription = this.appservice
      .getMapInfo()
      .subscribe((mapInfo: MapInfo) => {
        this.mapInfo = mapInfo;
      });
  }

  ngOnDestroy(): void {
    this.mapInfoSubcription.unsubscribe();
  }
}
