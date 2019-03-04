const arr = [9,2,6,7,4,5,1,3,8];

const shellSort = (a) => {
    let gap = 1;
  
    while (gap <= Math.floor(a.length / 3)) {
        gap = gap * 3 + 1;
    }
  
    while (gap > 0) {
        
       for (let i = gap; i < a.length; i++) {
           let tmp = a[i];
           let j = i;
         
           while (j > gap - 1 && a[j - gap] >= tmp) {
               a[j] = a[j - gap];
               j -= gap;
           }
         
           a[j] = tmp;         
       }
       gap = Math.floor((gap - 1) / 3); 
    }
};

shellSort(arr);
console.log(arr);