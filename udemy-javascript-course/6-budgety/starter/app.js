//BUDGET CONTROLLER

var budgetController = (function() {

  //Data structure and models
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(current) {
      sum += current.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  return {
    addItem: function(type, description, value) {
      var newItem, ID = 1;

      //Create new ID
      //ID = last ID + 1
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      }

      //Create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, description, value);
      } else {
        newItem = new Income(ID, description, value);
      }

      //push it into  our data type
      data.allItems[type].push(newItem);

      return newItem;
    },

    deleteItem: function(type, id) {
      var ids, index;

      var ids = data.allItems[type].map(function(current, index, array){
        return current.id;
      });

      index = ids.indexOf(id);

      if (index !== -1) {
        //delete from array
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {

      // calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      // calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      if ( data.totals.inc > 0 ) {
        // calculate the percentage of income that we spent
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function() {
      var allPercentages = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPercentages;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function() {
      console.log(data);
    }
  }

})();


//UI CONTROLLER

var UIController = (function() {

  var DOMStrings = {
    inputType: '.add__type',
    inputDesc: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  var formatNumber =  function(num, type) {
      var numSplit, int, decimal;

      // + / - before the number
      // excatly 2 decimal points
      // a comma separating thousands

      // 2310.4567 - + 2,310.46
      // 2000 - 2,000.00

      num = Math.abs(num);
      num = num.toFixed(2); //number prototype obj

      numSplit = num.split('.');
      int = numSplit[0];
      decimal = numSplit[1];

      if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 2310, output 2,310
      }

      return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + decimal;
  };

  var nodeListForEach = function(list, callback) {
    for (var i = 0, listLength = list.length; i < listLength; i += 1) {
      callback(list[i], i);
    }
  };

  //Some Code
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDesc).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      }
    },

    addListItem: function(obj, type) {
      var html, newHTML, element;

      //1. Create HTML with placeholder textContent
      if (type == 'inc') {
        element = DOMStrings.incomeContainer;

        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn">X<i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else {
        element = DOMStrings.expenseContainer;

        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn">X<i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      //2. Replace the placeholder
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));

      //3. Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

    },

    deleteListItem: function(selectorId) {
      var element = document.getElementById(selectorId);
      element.parentNode.removeChild(element);
    },

    clearfields: function() {
        var fields, fieldsArr;

        fields = document.querySelectorAll(DOMStrings.inputDesc + ',' + DOMStrings.inputValue);

        //returns a list, need to be converted to an array using slice
        fieldsArr = Array.prototype.slice.call(fields);

        //forEach
        fieldsArr.forEach(function(current, index, array) {
            current.value = "";
        });

        fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';

      document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = "---";
      }

    },

    displayPercetages: function(percentages) {
      var fields;

      fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel); //node list not array

      nodeListForEach(fields, function(current, index){
         //Do stuff
         if (percentages[index] > 0) {
           current.textContent = percentages[index] + '%';
         } else {
           current.textContent = '---';
         }
      });
    },

    displayMonth: function() {

      var now, year, months;
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

      now = new Date();
      //var xmas = new Date(2011, 11, 25);
      year = now.getFullYear();
      month = now.getMonth();

      document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ',' + year;

    },

    changeType: function() {
      var fields;

      fields = document.querySelectorAll(
        DOMStrings.inputType + ',' +
        DOMStrings.inputDesc + ',' +
        DOMStrings.inputValue);

      nodeListForEach(fields, function(current) {
        current.classList.toggle('red-focus');
      });

      document.querySelector(DOMStrings.inputButton).classList.toggle('red');
    },

    getDOMStrings: function() {
      return DOMStrings;
    }
  }

})();


//MAIN / GLOBAL CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListener = function() {

    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
       if (event.keycode === 13 || event.which === 13 ) {
          ctrlAddItem();
       }
    });

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)
  };

  var updateBudget = function() {
    var budget;

    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. return the budget
    budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);

  };

  var updatePercentages = function() {
    var percentages;

    // 1. calculate percentages
    budgetCtrl.calculatePercentages();

    // 2. read them from the budget CONTROLLER
    percentages = budgetCtrl.getPercentages();

    // 3. update the UI with the new percentages
    UICtrl.displayPercetages(percentages);
  }

  var ctrlAddItem = function() {
    var input, newItem;

     //1. get input value
     input = UIController.getInput();

     if ( input.description != "" && !isNaN(input.value) && input.value > 0 ) {

       //2. Add item to the budget CONTROLLER
       newItem = budgetCtrl.addItem(input.type, input.description, input.value);

       //3. Add the item to the UI
       UIController.addListItem(newItem, input.type);

       //4. Clear the fields
       UIController.clearfields();

       //5. Calculate and update budget
       updateBudget();

       //6. Calculate and update percentages
       updatePercentages();
     }

  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.id;

    if (itemID) {

      //inc-1
      splitID = itemID.split('-');
      type = splitID[0];
      ID = parseInt(splitID[1]);

      //1. delete the item frim data structure
      budgetCtrl.deleteItem(type, ID);

      //2. delete item from UI
      UICtrl.deleteListItem(itemID);

      //3. update and show new budget
      updateBudget();

      //4. Calculate and update percentages
      updatePercentages();

    }

  };

  return {
    //initialization function
    init: function() {
      //all code that starts the app
      console.log('Application has started');
      setupEventListener();
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0
      });
    }
  }



})(budgetController, UIController);

controller.init();
