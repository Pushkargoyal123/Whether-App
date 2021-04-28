let sumbit=document.getElementById("search");
let input=document.getElementById("input");
let cdate=new Date();
let arr=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
let arr1=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.querySelector(".day").innerHTML=arr[cdate.getDay()];
document.querySelector(".date").innerHTML=cdate.getDate()+"-"+arr1[cdate.getMonth()];

let link="http://api.openweathermap.org/data/2.5/weather?q=Gwalior&units=metric&appid=813e59a886b1a0d7595b7d738516ddc3";
sumbit.addEventListener("click",function(e){
    e.preventDefault();
    let input=document.getElementById("input");
    async function dowork(){
        let city=document.querySelector(".city");
        if(input.value==""){
            city.innerHTML="Please Enter a city name";
        }
        else{
            try{
                link="http://api.openweathermap.org/data/2.5/weather?q="+input.value+"&units=metric&appid=813e59a886b1a0d7595b7d738516ddc3";
                let data=await fetch(link);
                data=await data.json();
                city.innerHTML=data.name+","+data.sys.country;
                let kuch=document.querySelector("#bottom").innerText=data.main.temp;
                document.querySelector(".bottom").style.visibility="visible";
            }catch(e){
                console.log(e);
                city.innerHTML="Please Enter a valid city";
                document.querySelector("#bottom").innerText="";
            }
        }
    }
    dowork();
});