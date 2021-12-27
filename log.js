// Input : test_dict = {‘c’: [3], ‘b’: [12, 10], ‘a’: [19, 4]}
// Output : {‘a’: [4,19], ‘b’: [10, 12], ‘c’: [3]}

// Input : test_dict = {‘c’: [10, 34, 3]}
// Outpu[t : {‘c’: [3, 10, 34]}
// var dic={}
// var test_dict = {'c': [3], 'b': [12, 10], 'a': [19, 4]}
// for (i in test_dict){
//     // console.log(test_dict[i]);
//     for (j in test_dict) {
//         if(test_dict[i]>test_dict[j]) {
//             k = test_dict[i]
//             test_dict[i] = test_dict[j]
//             test_dict[j] = k
//         }
//     }
// }
// console.log(k);

var test_dict = {'c': [3], 'b': [12, 10], 'a': [19, 4]}
var x = []
for(i in test_dict) {
    x.push(test_dict[i])
}
// console.log(x);
var j = 0;
while(j<x.length) {
    var k = 0;
    while(k<x.length) {
        if(x[j]>x[k]) {
            var l = x[i]
            x[i] = x[j]
            x[j] = l
        }
        k++
    }
    j++
}
console.log(x)



