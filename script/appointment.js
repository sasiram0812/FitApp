let baseUrl=`https://good-tan-jay.cyclic.app/`
let btnBook=document.getElementById("book_appointment");
btnBook.addEventListener("click",()=>{
    let date=document.getElementById("inputdate").value;
    let slot=document.getElementById("slot-select").value;
    let token=sessionStorage.getItem("token");
    let name=sessionStorage.getItem("name");
    let trainerId=sessionStorage.getItem("trainerId");
    if(!token){
        alert("Please Login First to Book an Appointment!!")
        window.location.href="./Login.html"
    }else if(date==""||slot==""){
        alert("Please fill all the fields")
    }
    
})
