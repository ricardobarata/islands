import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MapInfo } from "./app.model";

@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor() {}

  getMapInfo(): Observable<MapInfo> {
    return of({
      map: [
        [1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0],
        [1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0]
      ],
      islands: 3
    });
  }
}
