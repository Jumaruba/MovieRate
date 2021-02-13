export default function quickSort(items, firstIndex, lastIndex, param){  

    if (items.length === 0 || isSorted(items, param)) return items.slice(firstIndex, lastIndex); 
    let arrayRight, arrayLeft;  
    let pivotIndex;  

    if (firstIndex < lastIndex){ 
        pivotIndex = partition(items, firstIndex, lastIndex, param);  
        arrayLeft = quickSort(items, firstIndex, pivotIndex-1, param);  
        arrayRight = quickSort(items, pivotIndex+1, lastIndex, param);   

    }   
    else return [items[firstIndex]];   
    
    return [...arrayLeft, items[pivotIndex], ...arrayRight];
} 

function partition(items, firstIndex, lastIndex, param){  
    // pivot = items[lastIndex];  
    let i = firstIndex - 1; 
    for (let j = 0 ; j < lastIndex - firstIndex; j++){  
        if (items[j + firstIndex][param] < items[lastIndex][param]){
            i++; 
            swap(items, j + firstIndex, i); 
        }  
    } 
    
    swap(items, i+1, lastIndex); 
    return i+1; 
} 

function swap(items, i1, i2){
    const firstItem = items[i1]; 
    items[i1] = items[i2]; 
    items[i2] = firstItem; 
    return items; 
} 

function isSorted(items, param){ 
    for (let i = 1; i < items.length; i++){ 
        if (items[i -1][param] > items[i][param]) return false; 
    } 

    return true; 

}