// 3)	Based on included JSON file.
// a.	Create a function that will return Json from the file.a
// b.	Create a structures to hold data from the file.
// c.	Map data from function a to structure from b.
// d.	Create object that will give us data about:
// i.	How much money was spend in 2014
// ii.	What company was earning how much
// iii.	What type on transaction was having what spending’s.
// iv.	Values of the spending in each month
// v.	Values of the spending in each day of the week

let someObject = require("./Data.json");
// console.log(someObject[0].cost);

////////////////////////////////////

const jsonString = () => JSON.stringify(someObject);

const jsonParsed = JSON.parse(jsonString());

// console.log(jsonParsed[1].detailsOfPayent.Type);

/////////////////////////////////////

function detailsOfPayent(Type, company, date) {
  this.Type = Type;
  this.company = company;
  this.date = date;
}

function structure(index, _id, cost, Type, company, date) {
  this.index = index;
  this._id = _id;
  this.cost = cost;
  this.detailsOfPayent = new detailsOfPayent(Type, company, date);
}

// console.log(structure(), detailsOfPayent());

/////////////////////////////////////

let wholeData = jsonParsed.map(
  x =>
    new structure(
      x.index,
      x._id,
      x.cost,
      x.detailsOfPayent.Type,
      x.detailsOfPayent.company,
      x.detailsOfPayent.date
    )
);

// console.log(wholeData[1].detailsOfPayent);

/////////////////////////////////////

let whatCost = function(year) {
  let sum = 0;
  wholeData
    .filter(element => element.detailsOfPayent.date.slice(6) == year.toString())
    .forEach(element => {
      sum += parseInt(element.cost);
    });
  console.log(`All costs in year ${year} : ` + sum, `\n`);
};

whatCost(2014);

/////////////////////////////////////

function noDuplicate(tab, result) {
  for (let i = 0; i < tab.length; i++) {
    if (result.indexOf(tab[i]) == -1) {
      result.push(tab[i]);
    }
  }
  return result.sort();
}

function noDuplicateUnSort(tab, result) {
  for (let i = 0; i < tab.length; i++) {
    if (result.indexOf(tab[i]) == -1) {
      result.push(tab[i]);
    }
  }
  return result;
}

/////////////////////////////////////

let earnings = function(year) {
  let tab = [];
  let result = [];
  let compName;
  wholeData.forEach(element => tab.push(element.detailsOfPayent.company));
  noDuplicate(tab, result);
  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    compName = result[i];
    if (year) {
      wholeData
        .filter(
          element =>
            element.detailsOfPayent.company == compName &&
            element.detailsOfPayent.date.slice(6) == year.toString()
        )
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`Earnings of company ${compName} in year ${year}: `, sum);
    } else {
      wholeData
        .filter(element => element.detailsOfPayent.company == compName)
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`Earnings of company ${compName}: `, sum);
    }
  }
  console.log(`\n`);
};
earnings(2014);

// let earnings1 = function(company) {
//   this.property = company;
//   let sum = 0;
//   wholeData
//     .filter(element => element.detailsOfPayent.company == company)
//     .forEach(element => {
//       sum += parseInt(element.cost);
//     });
//   console.log(sum);
// };

// earnings1("CODAX");

/////////////////////////////////////

// let earningsType1 = function(Type) {
//   let sum = 0;
//   wholeData
//     .filter(element => element.detailsOfPayent.Type == Type)
//     .forEach(element => {
//       sum += parseInt(element.cost);
//     });
//   console.log(`Earnings of type no. ${Type}: `, sum);
// };

// earningsType1(5);

let earningType = function(year) {
  let tab = [];
  let result = [];
  let typeNum;
  wholeData.forEach(element => tab.push(element.detailsOfPayent.Type));
  noDuplicate(tab, result);
  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    typeNum = result[i];
    if (year) {
      wholeData
        .filter(
          element =>
            element.detailsOfPayent.Type == typeNum &&
            element.detailsOfPayent.date.slice(6) == year.toString()
        )
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`Earnings of type ${typeNum} in year ${year}: `, sum);
    } else {
      wholeData
        .filter(element => element.detailsOfPayent.Type == typeNum)
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`Earnings of type ${typeNum}: `, sum);
    }
  }
  console.log(`\n`);
};
earningType(2014);

/////////////////////////////////////

// let monthlyCosts1 = function(month) {
//   let sum = 0;
//   wholeData
//     .filter(
//       element => element.detailsOfPayent.date.slice(3, 5) == month.toString()
//     )
//     .forEach(element => {
//       sum += parseInt(element.cost);
//     });
//   console.log(wholeData[1].detailsOfPayent.date.slice(3, 5));
//   console.log(`All costs in month ${month} : ` + sum, `\n`);
// };

// monthlyCosts1(12);

let monthlyCosts = function(year) {
  let tab = [];
  let result = [];
  let monthNum;
  wholeData.forEach(element =>
    tab.push(element.detailsOfPayent.date.slice(3, 5))
  );
  noDuplicate(tab, result);
  for (let i = 0; i < result.length; i++) {
    let sum = 0;
    monthNum = result[i];
    if (year) {
      wholeData
        .filter(
          element =>
            element.detailsOfPayent.date.slice(3, 5) == monthNum &&
            element.detailsOfPayent.date.slice(6) == year.toString()
        )
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`Costs in month ${monthNum} in year ${year}: `, sum);
    } else {
      wholeData
        .filter(element => element.detailsOfPayent.date.slice(3, 5) == monthNum)
        .forEach(element => (sum += parseInt(element.cost)));
      console.log(`All costs in month ${monthNum}: `, sum);
    }
  }
  console.log(`\n`);
};
monthlyCosts(2014);

/////////////////////////////////////

let dailyCosts = function(year) {
  let tab = [];
  let dayTab = [];
  let resultTab = [];
  let dayNum;

  for (let i = 0; i < wholeData.length; i++) {
    let day = wholeData[i].detailsOfPayent.date;
    let month = wholeData[i].detailsOfPayent.date.slice(3, 5);
    let year = wholeData[i].detailsOfPayent.date.slice(6);
    let d = new Date();
    d.setFullYear(parseInt(year), parseInt(month), parseInt(day));
    d.getDay() + 1;
    let n = {
      dayOfweek: d.getDay() + 1,
      costs: wholeData[i].cost,
      year: wholeData[i].detailsOfPayent.date.slice(6)
    };
    tab.push(n);
  }

  tab.forEach(element => dayTab.push(element.dayOfweek));
  noDuplicate(dayTab, resultTab);
  for (let i = 0; i < resultTab.length; i++) {
    let sum = 0;
    dayNum = resultTab[i];
    if (year) {
      tab
        .filter(
          element =>
            element.dayOfweek == dayNum && element.year == year.toString()
        )
        .forEach(element => (sum += parseInt(element.costs)));
      console.log(
        `Spendings of day ${dayNum} of the week in year ${year}: `,
        sum
      );
    } else {
      tab
        .filter(element => element.dayOfweek == dayNum)
        .forEach(element => (sum += parseInt(element.costs)));
      console.log(`Spendings of day ${dayNum} of the week: `, sum);
    }
  }
  console.log(`\n`);
};

dailyCosts(2014);
