import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  viewChildMessage = "View Child Message";
  @Output() messageEvent = new EventEmitter<string>();
  txtChild: any;
  messageFromService: string;
  constructor(private _service: DataService) {}

  ngOnInit() {
    this._service.currentMessage.subscribe((msg) => {
      this.messageFromService = msg;
    });
  }

  sendMessage() {
    this.messageEvent.emit(this.txtChild);
  }

  ChangeValueOfService() {
    this._service.changeMessage("Hello from child to service..");
  }
}
