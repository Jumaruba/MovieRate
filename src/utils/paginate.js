import _ from 'lodash';  

/**
 * Return items located in a certain page. 
 * @param {Array} items 
 * @param {Int} pageNumber 
 * @param {Int} pageSize 
 */
export default function paginate(items, currentPage, pageSize ){ 
    const startIndex = ( currentPage - 1)  * pageSize;  
    const endIndex = startIndex + pageSize ;   

    return _.slice(items, startIndex, endIndex); 


}