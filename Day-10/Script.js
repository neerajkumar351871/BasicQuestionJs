// Sort an array in ascending order using sort()
class sortArray {
    constructor() {
        this.ascendingarray = [];
    }

  
    setdata(number) {
       
        this.ascendingarray = number.sort((a, b) => a - b);
    }

  
    PreviewData() {
        console.log("Sorted Array:", this.ascendingarray);
    }
}

const array = [1, 6, 5, 4, 3, 7, 8, 9, 2];
let sortArrayobj = new sortArray();
sortArrayobj.setdata(array);
sortArrayobj.PreviewData();
