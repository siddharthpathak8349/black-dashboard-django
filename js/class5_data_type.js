// JavaScript has 8 Datatypes

        // 1 String
                let greeting = "Hello, World!";
                console.log(typeof greeting); // "string"
        
        // 2 Number
                let age = 30;
                let temperature = 22.5;
                console.log(typeof age); // "number"
                console.log(typeof temperature); // "number" (float bhi le sakta hai )
                
        // 3 Bigint
                let bigNumber = 123456789012345678901234567890n;
                console.log(typeof bigNumber); // "bigint"

        // 4 Boolean
                let isTrue = true;
                let isFalse = false;
                console.log(typeof isTrue); // "boolean"
                
        // 5 Undefined
                let notAssigned;
                console.log(typeof notAssigned); // "undefined"

        // 6 Null
                let emptyValue = null;
                console.log(typeof emptyValue); // "object"

        // 7 Symbol
                  let uniqueSymbol = Symbol('description');
                  console.log(typeof uniqueSymbol); // "symbol"

        // 8 Object
                let person = {
                        name: "Alice",
                        age: 30
                };
                console.log(typeof person); // "object"
              