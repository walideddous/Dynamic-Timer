import React, { Component } from 'react';

class Timer extends Component {
    // state = { 
    //     Hour : 00,
    //     Minute : 00,
    //     Second : 00,
    //  };
     
     

  handler= (number)=>{
         if (1000<number<360000000){
            var X=number/1000;
            var Second =Math.floor(X%60);
            var Minute =Math.floor(X%60);
            var Hour =Math.floor(number /3600000);
            var S="";
            var M="";
            var H="";

            if (Second<10) {S+="0"+Second} else{ S+=Second}
            if(Minute<10) {M+="0"+Minute} else {M+=Minute}
            if(Hour<10) {H+="0"+Hour} else {H+=Hour} 
             
             return H+":"+M+":"+S; 
         }

     };

    render() { 
        return ( 
            <div className="Timer">
            <h1>Timer</h1>
           <h1>{this.handler(512458)}</h1>
            </div>
         );
    }
}
 
export default Timer;