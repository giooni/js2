function pit (x ,y, c){
    let a = true;
    if(x**2 + y**2 == c**2 || x**2 + c**2 == y**2 || y**2 + c**2 == x**2 ){
        return a
    }
    else{
        a = false
        return a

    }
}
console.log(pit(3,5,6))






function Findmax(lst){
    let a = lst[0]
    for (let i = 0; i < lst.length; i++) {
        if (a< lst[i], a = lst[i], i++) {
            return a
        }
        
    }
    
}

function Findmin(lst){
    let t = lst[0]
    for (let i = 0; i < lst.length; i++) {
        if (t > lst[i], a = lst[i], i++) {
            return t
        }
        
    }
}
let lst = [2, 11, 23, 15];
console.log(Findmax(lst));
console.log(Findmin(lst))



function getdeg(x) {
    if( x>=0 && x<90){
        return "Acute angle: An angle between 0 and 90 degrees."

    } 
    else if( x == 90) {
        return "Right angle: An 90 degree angle."

    }
    else if(x>90 && x<180){
        return "Obtuse angle: An angle between 90 and 180 degrees."
    }
    else if (x == 180){
        return "Straight angle: A 180 degree angle."

    }
    

}
console.log(getdeg(90))

function checkStudentGrade(lst) {
    for(let j =0; j < lst.length; j++ ){
        if(lst[j].grade <= 50){
            lst[j].finalresult = "F"
        }
        else if(lst[j].grade>50 && lst[j].grade <=60 ){
            lst[j].finalresult = "E"
        }
        else if(lst[j].grade>60 && lst[j].grade <=70 ){
            lst[j].finalresult = "D"
        }
        else if(lst[j].grade>70 && lst[j].grade <=80 ){
            lst[j].finalresult = "C"
        }
        else if(lst[j].grade>80 && lst[j].grade <=90 ){
            lst[j].finalresult = "B"
        }
        else if (lst[j].grade>90 && lst[j].grade <=100 ){
            lst[j].finalresult = "A"
        }

        

        

         

    }
    return lst

}
console.log(checkStudentGrade([{name: "mari", grade : 91}, {name: "tekla", grade : 71}, {name: "nini", grade : 45} ]))

