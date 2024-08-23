// import { AbstractControl, ValidationErrors } from "@angular/forms";

// export class CustomValidators {
//     //function shoul look alike buitin validator method
//     static valueMatch(inputForm:AbstractControl):ValidationErrors|null{
//     const secreteCode = inputForm.get("secreteCode")?.value
//     const confirmCode = inputForm.get("confirmCode")?.value
//  if(secreteCode!=confirmCode)
//       return{
//      match:true //error string does noth match
//       }
// return null
//     }
// }  

// an error map required if error else return null

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    //function shoul look alike buitin validator method
    static valueMatch(formControl1:string,formControl2:string):ValidatorFn{
       
        return (inputForm:AbstractControl):ValidationErrors|null=>{
        const val1 = inputForm.get(formControl1)?.value
        const val2 = inputForm.get(formControl2)?.value
         if(val1!=val2)
              return{
             match:true //error string does noth match
              }
        return null
            }
    }
    //only with one parameter
    static valueMatch2(password:string):ValidatorFn{

        return (control :AbstractControl):ValidationErrors | null =>{
            const confirmCode = control.value
            if(confirmCode != password){
                return {match:true}
            }
          return null

        }
     }
 
}  
