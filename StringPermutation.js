function sumProducer(arr) {
    return arr.reduce((partialSum, a) => partialSum + a, 0);
  }


function permutationMatch(s, b){
    let count = 0;
    let s1 = s.replaceAll('a', '1') //.replaceAll('b', '10').replaceAll('c', '100').split('1');
    let b1 = b.toString().replaceAll('a', '1').replaceAll('b', '10').replaceAll('c', '100').split('1');
        
    sumMatch = sumProducer(s1)

    for(let i = 0; i < b1.length; i++){
        if(sumMatch == sumProducer(b1.slice(i, i+4))){
            count++
        }
    }
    console.log("Permutation Match: ", count)


}







let s = 'abbc';
let b = 'cbabadcbbabbcbabaabccbabc';
permutationMatch(s, b)

