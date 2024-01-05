// switch statement- this is a statement that can replace multiple if checks
// switch(x){
//     case 'value1':
//         ...
//        [break]

//     case 'value2':
//         ...
//         [break]

//     default: 
//         ...
//         [break]
// }

// let a = 2+2;
// switch (a){
//     case 4:
//         alert('you are right')
//         break;

// case 3:
//     alert('you are short')
//     break;

//     default:
//         alert(unmatched)
//         break;
// }

// break can be used to break out of each loop after execution

// making shapes with loop

// 1. creating a square shape
//  let n = 5;
//  let string = "";

//  for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         string +="*";
//     }
//     string +="\n"
//  }
//  alert(string)

// creating a hollow square with loop

// let n = 5;
// let string = "";

// for(let i=0; i<n; i++){
//     for(let j=0; j<n; j++){
//         if(i === 0 || i == n-1){
//             string +="*";
//         } else {
//             if (j === 0 || j === n-1){
//                 string +="*";
//             } else {
//                 string +=" ";
//             }
//         }
//     }
//     string +="\n"
//  }
// alert(string)

// creating a left triangle in javascript

// let n = 5;
// let string = "";
// for(let i=1; i<=n; i++){
//     for(let j=0; j<i; j++){
//       string += "*";
//     }
//     string+="\n"
// }
// alert(string)

// creating a hollow right angle triangle

let n = 5;
let string = "";
for(let i=1; i<=n; i++){
    for(let j=0; j<i; j++){
    if(i===n){
        string += "*";
    }else{
        if (j==0 || j==i-1){
            string += "*";
        }else {
            string += " ";
        }
    }
    }
    string+="\n"
}
alert(string)