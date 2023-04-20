export function capitalize(str) {return str[0].toUpperCase().concat(str.slice(1,str.length));};

export function reverseString(str) {return str.split("").reduce((c,s)=>{return s+c});}

export const calculator =  {
    add:function(a,b){
        return  a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    div:function(a,b){
        return a/b;
    },
    mul:function(a,b){
        return a*b;
    },
};
export function caesarCipher(str,os) {
    let arrOf=str.split('').map(c=>str.charCodeAt(str.indexOf(c))+os);
    let newStr='';
    arrOf.forEach(code => {
        if (code-os>=97&&code-os<=122) {
            if (code>122) code-=26;  
            
            
        }else if(code-os>=65&&code-os<=90){
            if (code>90) code-=26;  
        }
        else{
            code-=os;
        }
        newStr+=String.fromCharCode(code);
    });
    return newStr;
}

export const analyzeArray= function (arr) {return{
average:arr.reduce((t,e)=>t+e,0)/arr.length,
min:arr.sort((a,b)=>a-b)[0],
max:arr.sort((a,b)=>a-b)[arr.length-1],
length:arr.length,

}}