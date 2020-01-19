const fs = require('fs');

const buy = {
  "time": "24.02.2019",
  "price": 10,
  "spent on food": 9
};

const buyJSON = JSON.stringify(buy, null, 4);

fs.writeFileSync("1-json.json", buyJSON);

const dataBuffer = fs.readFileSync("1-json.json").toString();

console.log('File data >', dataBuffer);


[
  , {
    "time": "20.03.2019",
    "price": 19,
    "spent on food": 19
  }, {
    "time": "21.04.2019",
    "price": 37,
    "spent on food": 29
  }, {
    "time": "28.02.2019",
    "price": 14,
    "spent on food": 11
  }, {
    "time": "28.02.2019",
    "price": 34,
    "spent on food": 25
  }, {
    "time": null,
    "price": 50,
    "spent on food": 41
  }, {
    "time": "05.03.2019",
    "price": 26,
    "spent on food": 14
  }, {
    "time": "11.03.2019",
    "price": 35,
    "spent on food": 26
  }, {
    "time": null,
    "price": 50,
    "spent on food": 41
  }, {
    "time": "20.03.2019",
    "price": 27,
    "spent on food": 20
  }, {
    "time": "06.04.2019",
    "price": 39,
    "spent on food": 30
  }, {
    "time": "21.04.2019",
    "price": 50,
    "spent on food": 41
  }
]