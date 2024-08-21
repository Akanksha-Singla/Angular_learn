import { Component } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrl: './percentage.component.css'
})
export class PercentageComponent {
subject1 :number=0;
subject2 :number=0;
subject3 : number=0;
companyLocation ="Dadar"
location=["Rabale","Parel","Dadar"]
percentage =0
getPercentage(){
  //convert in number as we get value in string
  const subject1 = Number(this.subject1);
  const subject2 = Number(this.subject2);
  const subject3 = Number(this.subject3);

  const totalScore =subject1 + subject2 + subject3;
  console.log('Total Score:', totalScore);

  const percentage = (totalScore / 300) * 100;
  console.log('Calculated Percentage:', percentage);

  this.percentage = percentage;
  return this.percentage;
}
}
