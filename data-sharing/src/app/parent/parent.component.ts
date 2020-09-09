import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { ChildComponent } from "../child/child.component";

import { DataService } from "../services/data.service";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements AfterViewInit, OnInit {
  @ViewChild(ChildComponent, { static: false }) child;

  mesageViaService: string;
  viewChildMesssage: string;
  parentValue: string = "Hello from parent!!";
  messageFromChild: string;
  constructor(private _service: DataService) {}

  ngAfterViewInit() {
    this.viewChildMesssage = this.child.viewChildMessage;
  }

  receiveMessage($event) {
    this.messageFromChild = $event;
  }

  ngOnInit() {
    this._service.currentMessage.subscribe((msg) => {
      this.mesageViaService = msg;
    });
  }
}
