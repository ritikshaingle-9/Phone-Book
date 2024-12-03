const contact= {
    Mahesh :"2383828291",
    Riya:"37372194628",
    Punit:"8535419626",
    Sushma:"2648361937",
    Jannat:"8764396216"
}

function Search(){
    const searchInput = document.getElementById("search")
    const query = searchInput.value.toLowerCase();
    const mobile = contact[Object.keys(query)];
    const result = document.getElementById("result");

    if(mobile){
        result.innerText=`${Object.keys(query)} mobile no is ${mobile}`;
    }
    else{
        result.innerText= "Not found"; 
    }
}