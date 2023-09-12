// rest countries
/*let url = new XMLHttpRequest();
console.log(url);
url.open("GET","https://restcountries.com/v3.1/all");
url.send();
url.onload = function(){
    const data = JSON.parse(url.response);
    console.log(data);
    console.log(url.status);
    for (let i=0;i< data.length;i++){
        console.log(`
            CountryName : ${data[i].name.common}
            Flag : ${data[i].flags.png}
            region : ${data[i].region}
            subregion : ${data[i].subregion}
            population : ${data[i].population}
            `
        );
    }
}
console.log("********************");
//compare two json  
let obj1={
    name:"Person1",
    age:5
};

let obj2={
    age:5,
    name:"Person1"
};

JSON.stringify(obj1)===JSON.stringify(obj2);
console.log(_.isEqual(obj1, obj2));
console.log("********************");


const urls = new XMLHttpRequest();
console.log(urls);
urls.open("GET","https://api.publicapis.org/entries");
urls.send();
urls.onload = function(){
    const dat = JSON.parse(urls.response);
    console.log(dat);
    console.log(urls.status);
    for(let i=0;i<dat.length;i++){
        console.log(`name: ${dat[i].Description}`)
    }

};*/

//window global objects

const globalObject ={
    key : "value",
    age : "35",
    nestedObject : {
        data: "vijay",
    },
    arr:[2,3,4,5,6,8]
};

console.log(globalObject.nestedObject.data);
console.log(window.document);



//task
//a asia country
var url = new XMLHttpRequest();
console.log(url);
url.open("GET","https://restcountries.com/v3.1/all");
url.send();
url.onload = function() {
    var data = JSON.parse(url.response);
    //console.log(data);
    //console.log(url.status);
       var result = data.filter((countries) => { 
           return countries.region === "Asia";
    })
    console.log(result);

}



//b population
var urL1 = new XMLHttpRequest();
urL1.open("GET","https://restcountries.com/v3.1/all");
urL1.send();
urL1.onload = function(){
    var result1 = JSON.parse(urL1.response);
   const population = result1.filter((element)=>{
          return element.population<200000;
    })
    console.log(population);
}


//c name, capital ,flag foreach

var urL2 = new XMLHttpRequest();
urL2.open("GET","https://restcountries.com/v3.1/all");
urL2.send();
urL2.onload = function(){
    var result2 = JSON.parse(urL2.response);
    result2.forEach(element => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    });
} 

//d population reduce

var urL3 = new XMLHttpRequest();
urL3.open("GET","https://restcountries.com/v3.1/all");
urL3.send();
urL3.onload = function(){
    var result3 = JSON.parse(urL3.response);
    var total = result3.reduce((acc,val)=>{
       return acc+=val.population;
    },0);
    console.log(total);
}

//e us Dollars

var urL4 = new XMLHttpRequest();
urL4.open("GET","https://restcountries.com/v3.1/all");
urL4.send();
urL4.onload = function(){
    var data4 = JSON.parse(urL4.response);
    for(i=0; i<data4.length; i++){
        if(data4[i].currencies[0].code === "USD"){
            console.log("name: ",data4[i].name,data4[i].currencies[0].code);
        }else{
            console.log("Invalid");
        }
    }
}