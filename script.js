"use strict"

// CENTER POINT

function centerpoint(x1,y1,x2,y2){
    var func1 = Math.sqrt(Math.pow(x1,2)+Math.pow(y1,2));
    var func2 = Math.sqrt(Math.pow(x2,2)+Math.pow(y2,2));
    var cordinat1 = x1 + "," + y1;
    var cordinat2 = x2 + "," + y2;
    if(func1<func2){
        console.log(cordinat1);
    }else{
        console.log(cordinat2);
    }
}


// LONGER LINE

function logerline(x1,y1,x2,y2,x3,y3,x4,y4){
    var func1 = Math.sqrt((Math.pow(x2-x1),2) +  Math.pow((y2-y1),2));
    var func2 = Math.sqrt((Math.pow(x4-x3),2) +  Math.pow((y4-y3),2));
    var cordinat1 = (x1 + "," + y1) + " " + (x2 + "," + y2);
    var cordinat2 = (x3 + "," + y3) + " " + (x4 + "," + y4);
    if(func1>func2){
        console.log(cordinat1);
    }else{
        console.log(cordinat2);
    }

}



// MASTER NUMBER

function masternumber(){
    var numb = +prompt("input a number please");
    for (var nums = 0; nums <= numb; nums++) {
        var num = nums;
        var _savenum = num;
        var y = 0;
        var sd = 0;
        var isPalendrom = false;
        var SumOfDigits = false;
        var ContainsEvenDigit = false;
        var c = 0;
        var savemasternum = num;
    
        while (num > 0) {
            let t = num % 10;
            num = (num - t) / 10;
            y = y * 10 + t;
    
            if (_savenum == y ) {
                isPalendrom = true;
            }
    
          if(t % 2 == 0){
            ContainsEvenDigit=true;
            }
    
        }
    
        if (isPalendrom == true) {
            while (_savenum > 0) {
                var dn = _savenum % 10;
                _savenum = (_savenum - dn) / 10;
                c = c * 1 + dn
    
            }
            if (c % 7 == 0) {
                SumOfDigits = true;
            }
        }
    
    
        if (isPalendrom == true && SumOfDigits == true && ContainsEvenDigit == true) {
            console.log(savemasternum + " " + "this number is Master number");
        }
    
    }
    
    
}