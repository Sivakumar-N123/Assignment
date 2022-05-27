import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value: any=0;
  ngOnInit(): void {

  }

  display(num: any) {

    if (this.value == '0') {
      this.value = "";
    }
  
    this.value += num;
  }

  calculate() {
    try {
      this.value = eval(this.value);
    }
    catch {
      this.value = "infinity";
    }
  }
  off() {
    this.value = "";
  }
  Clear() {
    this.value = "0";
  }
  del() {
    this.value = this.value.slice(0, -1);
  }


}
