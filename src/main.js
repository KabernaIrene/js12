//Вам необхідно написати функцію summarize(num), 
//яка приймає на вхід число і повертає функцію, яка під час виклику додає це число
// до аргументу і повертає результат. Якщо аргумент не передано, 
//то додається одиниця. Наприклад, якщо функція викликається з аргументом 5, 
//то функція, що повертається, повинна при виклику з аргументом 3 повернути 8 
//(тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.



function summarize(num) {

    return function(b){
        if(!isNaN(b)){
            console.log(num + b);
        } else {
            console.log(num + 1)
        }

    }
}

summarize(5)(7);
summarize(5)();
summarize(10)(7);
summarize(7)();




//Вам необхідно написати функцію counter(startValue, step), 
//яка приймає на вхід два параметри - стартове значення лічильника і його крок. 
//Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на 
//значення і повертає його поточне значення. Лічильник повинен мати методи 
//increment, decrement і reset, які збільшують або зменшують значення на step 
//і скидають значення до стартового, відповідно.


let stVal = 30;
let stepNumb = 2;

function counter(startValue, step) {
    //let counter = 0;
  
    function changeStep(step) {
      startValue += step;
    }
  
    return {
      increment: function () {
        changeStep(step);
      },
      decrement: function () {
        changeStep(-step);
      },
      value: function () {
        return startValue;
      },
    };
  };
  
  let counter1 = counter(stVal, stepNumb);
  
  
  console.log(counter1.value()); 
  
  counter1.increment();
  console.log(counter1.value()); 
  
  counter1.decrement();
  console.log(counter1.value()); 

  counter1.decrement();
  console.log(counter1.value()); 

  counter1.decrement();
  console.log(counter1.value()); 




//Вам необхідно написати функцію sequence(fn, fn), 
//яка приймає на вхід дві або більше функції і повертає нову функцію, 
//яка викликає їх послідовно з результатом попереднього виклику. 
//Результат останньої функції має бути повернутий новою функцією. 
//Кожна функція повинна мати доступ до результату попередньої функції через 
//замикання.


let a = 7;
let b = 7;

function summ (x, y){
    return x + y;
}


function consRes (res) {
    let resFunc = res * 2
    console.log(`result is ${resFunc}`)
}


function sequence(fn1, fn2){

      return function(x){
        x = fn1
        console.log(x)
        
        if(!isNaN(b)){
          return fn2
        }
        }
      }


const resultFn = sequence(summ(a, b), consRes(summ(a, b)));

resultFn()





