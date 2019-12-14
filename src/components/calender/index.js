import React, { Component } from 'react';
import moment from 'moment';

class Calendar extends Component {
  constructor(props) {
     super(props)
     this.state={
       dateObject:moment(),
     }
     this.dayName = this.dayName.bind(this);
     this.firstDayOfMonth = this.firstDayOfMonth.bind(this);
     this.fullMonth = this.fullMonth.bind(this);
      this.month = this.month.bind(this);

   }
// week days name
    dayName(){
      const week= moment.weekdaysShort();
      let weekdayshortname =week.map(day => {
     return (
       <th >
        {day}
       </th>
     );
  });
  return weekdayshortname;
}

// to locate first day of month
  firstDayOfMonth()  {

        let firstDay = moment(this.state.dateObject)
                     .startOf("month")
                     .format("d");
       return firstDay;
    }

  //to make a month
   fullMonth(){
     let blanks = [];  // array for empty space
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
          blanks.push(
            <td >{""}</td>
          );
        }

    //Month
    let Month = []; //array of an month
         for (let d = 1; d <= moment().daysInMonth(); d++) {
           Month.push(
            <td>
              {d}
            </td>
          );
        }

    let total=[...blanks ,...Month];
    let row =[]; // array of weeks
    let column=[]; //array of column

    total.forEach((week , i) => {
      if(i % 7 !==0){
        column.push(week); //filling up colums
      }
      else{
        row.push(column); // when filled colums .making an row
        column=[];       //making another column
        column.push(week); // filling up colums
      }
      if(i ===total.lenght -1){  // afer end of loop add remaing dates.
        row.push(column);
      }
    })
    let daysinmonth = row.map((d, i) => {
          return <tr>{d}</tr>;
        });

        return daysinmonth;

  }
  //to show Month
  month = () => {
   return this.state.dateObject.format("MMMM");
 };

render() {
    return (
      <div>
        <p>Calendar</p>

         <table>
         <tr>{this.month()}</tr>
           <tr>{this.dayName()}</tr>
           <tbody>{this.fullMonth()}</tbody>
          </table>
      </div>
    );
  }
}

export default Calendar;
