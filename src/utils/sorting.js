/**
 *  This function is responsible for calling the quickSort and
 *  reverse the sorting if the order is "asc".
 *  @param items - Items to be sorted 
 *  @param param - Parameters chosen to be sorted by. Nested parameters must be divided by "."
 *  @param order - "asc" if ascending order. "desc" is descending order. 
 */ 

export default function handleQuickSort(items, param, order){  
    let copyItems = items.slice(); 
    quickSort(copyItems, 0, items.length-1, param); 
    if (order === "asc") 
        return copyItems; 
    return copyItems.reverse(); 
} 

function quickSort(items, firstIndex, lastIndex, param){  
    // We save processing by checking if the array is sorted. 
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

    let i = firstIndex - 1; 
    for (let j = 0 ; j < lastIndex - firstIndex; j++){  
        if (getAttrByParam(items, j + firstIndex,param) < getAttrByParam(items, lastIndex, param)){
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
        if (getAttrByParam(items, i -1, param) > getAttrByParam(items, i, param)) return false; 
    } 

    return true; 

} 


function getAttrByParam(items, pos, param){
    let listParameters = param.split(".");  
    let element = items[pos][listParameters[0]];    

    for (let i = 1; i < listParameters.length; i++)
        element = element[listParameters[i]]; 
      
    return element; 

}