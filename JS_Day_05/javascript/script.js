
   function addtoResult(value){
    document.getElementById("result").value += value;
   }

   function calculateResult() {
    let result= document.getElementById("result").value;
    console.log(result);

    try {
        let finalResult= eval(result);
        document.getElementById("result").value= finalResult;
        
    } catch (error) {
        document.getElementById("result").value="Error";
    }
   }

   function clearResult(){
    document.getElementById("result").value= "";
   }

