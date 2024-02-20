let rowID = 0;


for(let i = 0; i < 40; i++){

    let sitNumber = i%4;

    const rowString = "ABCDEFGHIJ";
    const rowArray = rowString.split('');


    const spanOne = document.createElement("span");
    const spanTwo = document.createElement("span");

    spanOne.classList.add("bg-[#F7F8F8]", "rounded-lg", "flex", "items-center", "justify-center", "transition-all", "cursor-pointer", "seats", "text-[#03071280]");
    spanOne.innerText = `${rowArray[rowID]}${sitNumber+1}`;

    spanTwo.classList.add("justify-center", "items-center", "flex", "text-[#03071280]", "cursor-pointer");
    spanTwo.innerText = `${rowArray[rowID]}`;

    if(sitNumber === 0 || sitNumber === 1){

        document.getElementById("sit-1").appendChild(spanOne);

    }else{

        document.getElementById("sit-2").appendChild(spanOne);

    }

    
    if(sitNumber === 3){
        document.getElementById("row-id").appendChild(spanTwo);
        rowID++;
        
    }

}