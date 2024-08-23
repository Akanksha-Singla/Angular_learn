import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby' // we can change this name
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], ...args: any[]): any[]{
    console.log(array);
    if( typeof array[0] == 'number' || array[0] == 'Number'){
return this.numberSort(array,args[0])
    }
    else if(typeof array[0] == 'string' || array[0] == 'String'){
      return this.stringSort(array)
    }
    else if(typeof array[0] == 'object' || array[0] == 'Object'){
      return this.objectSort(array,args[0])// assigment to do
    }
    else if( array[0] instanceof Date )
      return this.dateSort(array);
    else
    return array;
  }
numberSort(array:any[],sortOrder?:string){
  if(sortOrder =='desc'){
    return array.sort((n1,n2)=>n2-n1)
  }
  return array.sort((n1,n2)=>n1-n2)
}

stringSort(array:any[]){
  return array.sort()
}

// objectSort(array:object[],prop?:string){
//   console.log("this is a object")
//   const sorted= array.map((emp:object,index)=>{

//    prop && console.log("prop",emp,index,prop)
//  })
// //  console.log("sorted Object",sorted)
//   return array;  // return array.sort() // have to do this
// }

objectSort(array: object[], prop?: string) {

if(prop) {
  // Sorting the array based on the provided property
  array.sort((a: any, b: any) => {
    // console.log("a",a,"b",b)
    const valA = a[prop] 
    const valB = b[prop] 
     if(typeof valA && typeof valB == 'string'){
      return valA.localeCompare(valB)
    }
    return valA - valB
  });
}
 return array;
}


dateSort(array:Date[]){
  return array.sort((d1,d2)=>{
    if (d1>d2)  return 1
    else if (d1<d2) return -1
    else return 0;
  })
}
}
