/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function num2Str(x)
{
    var y;
    var target;
    
    //determine how many letters needed (i.e. AA, AAA, etc..)
    var len = Math.floor(Math.log(x) / Math.log(26))+1;
    
    
    //generate array
    var a = [];
    for(i=len; i>0; i--)
    {
        target = Math.pow(26,(i-1));
        y = Math.floor(x/target);
        x=x-(y* target);
        a[i-1]=String.fromCharCode(y + 64);
    }
    
    
    //stringify array
    var str =a.reverse().join("")
    
    
    //return string
    return str;
}