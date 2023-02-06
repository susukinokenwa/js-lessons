
/* let num = 3

while( num ===  3){
    console.log(`hi`)
     num = num + 1 
}




while loops


let dooropen = false
while(dooropen){
    console.log(`open the door`)
    dooropen = true
}
*/
//create a while loop that run 5 times.

document.write(`<p>challenge 1</p>`)

i = 0

for(i = 0; i < 5; i++){
   
    document.write(`I love web dev class!, `)
    
}

document.write(`<p>challenge 2</p>`)

for(i = 0; i < 5; i++){
   
    document.write(`${i}, `)

}

document.write(`<p>challenge 3</p>`)


for(i = 0; i < 31; i = i + 3){
   
    document.write(`${i}, `)

}


document.write(`<p>challenge 4</p>`)


for(i = 0; i < 4; i = i + 1){
  
   for(j = 0; j < 4; j++){
    document.write(`⬜`)
   }
   document.write(`<br>`)
}


document.write(`<p>challenge 5</p>`)

for(a = 1; a <= 8; a++){

    for(b = 1; b < a; b++){
        document.write(`🦴`)
     }
     document.write(`<br>`)
}


 /*document.write(`<p>challenge 5</p>`)


for(i = 0; i < 1; i = i + 1){
  
    for(j = 0; j < 1; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
    for(j = 0; j < 2; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
    for(j = 0; j < 3; j++){
     document.write(`🦴`)
    }
    document.write(`<br>`)
    for(j = 0; j < 4; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
    for(j = 0; j < 5; j++){
        document.write(`🦴`)
    }
    document.write(`<br>`)
    for(j = 0; j < 6; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
    for(j = 0; j < 7; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
  
 }


 document.write(`<p>challenge 5</p>`)
    for(i = 0; i < 7; i = i + 1){
        for(j = 0; j < 1; j++){
           
            
            for(j = 0; j < 7; j++){
                document.write(`🦴`)
                
               }
           }document.write(`<br>`)
    }


 document.write(`<p>challenge 6</p>`)
 
 for(i = 0; i < 1; i = i + 1){

    for(j = 0; j < 6; j++){
        document.write(` ~`)}
    for(j = 0; j < 1; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)

       for(j = 0; j < 5; j++){
        document.write(` ~`)}
    for(j = 0; j < 2; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)

       for(j = 0; j < 4; j++){
        document.write(` ~`)}
    for(j = 0; j < 3; j++){
     document.write(`🦴`)
    }
    document.write(`<br>`)

    for(j = 0; j < 3; j++){
        document.write(` ~`)}
    for(j = 0; j < 4; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)

       for(j = 0; j < 2; j++){
        document.write(` ~`)}
    for(j = 0; j < 5; j++){
        document.write(`🦴`)
    }
    document.write(`<br>`)

    for(j = 0; j < 1; j++){
        document.write(` ~`)}
    for(j = 0; j < 6; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
    for(j = 0; j < 7; j++){
        document.write(`🦴`)
       }
       document.write(`<br>`)
       
    }
*/

document.write(`<p>challenge 6</p>`)
for(a = 1; a <= 7; a++){
    for(c = 7; c > a; c--){
        document.write(` ~`)
     }
    for(b = 0; b < a; b++){
        document.write(`🦴`)
     }
     
     document.write(`<br>`)
}



document.write(`<p>challenge 7</p>`)
for(a = 1; a <= 5; a++){

    for(b = 1; b <= a; b++){
        
        for(c = 0; c < b; c++){
            document.write(`🦴`)
            
    }
    document.write(`<br>`)}
     document.write(`<br>`)
     document.write(`<br>`)
}



 /*   document.write(`<p>challenge 7</p>`)

    for(i = 0; i < 1; i = i + 1){
      
        for(j = 0; j < 1; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        }

        document.write(`<br>`)

    for(i = 0; i < 1; i = i + 1){
      
        for(j = 0; j < 1; j++){
            document.write(`🦴`)
            }
            document.write(`<br>`)
           
            for(j = 0; j < 2; j++){
                document.write(`🦴`)
                }
                document.write(`<br>`)
       }
       document.write(`<br>`)
       for(i = 0; i < 1; i = i + 1){
  
        for(j = 0; j < 1; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        for(j = 0; j < 2; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        for(j = 0; j < 3; j++){
         document.write(`🦴`)
        }
        document.write(`<br>`)
    }
    document.write(`<br>`)
    for(i = 0; i < 1; i = i + 1){
  
        for(j = 0; j < 1; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        for(j = 0; j < 2; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        for(j = 0; j < 3; j++){
         document.write(`🦴`)
        }
        document.write(`<br>`)
        for(j = 0; j < 4; j++){
            document.write(`🦴`)
           }
           document.write(`<br>`)
        }
        document.write(`<br>`)
        for(i = 0; i < 1; i = i + 1){
  
            for(j = 0; j < 1; j++){
                document.write(`🦴`)
               }
               document.write(`<br>`)
            for(j = 0; j < 2; j++){
                document.write(`🦴`)
               }
               document.write(`<br>`)
            for(j = 0; j < 3; j++){
             document.write(`🦴`)
            }
            document.write(`<br>`)
            for(j = 0; j < 4; j++){
                document.write(`🦴`)
               }
               document.write(`<br>`)
            for(j = 0; j < 5; j++){
                document.write(`🦴`)
            }
        }
        */