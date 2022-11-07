class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])
let GB = new Country("Great Britan", "Real English", "Ello",["blue","white","red"])
let russia = new Country("Russia","Russian","Vodka with a V",["white","blue","red"])



function SwitchCountry() {
    
    let node = document.getElementById("CountryList").value;
    let country;

    if (node === "USA") {
        //set country to usa 
        country = usa;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_the_McDonald%27s_Corporation.svg/200px-Flag_of_the_McDonald%27s_Corporation.svg.png"/> `
    }
    else if (node === "Mexico") {
        country = mexico;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/200px-Flag_of_Mexico.svg.png"/>`
    }
    else if (node === "Algeria") {
        country = algeria;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/200px-Flag_of_Algeria.svg.png"/> `
    }
    else if (node === "GB") {
        country = GB;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/200px-Flag_of_the_United_Kingdom.svg.png"/> `
    }
    else if (node === "Russia") {
        country = russia;
        document.getElementById("Pic").innerHTML = ` <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/180px-Flag_of_Russia.svg.png"/> `
    }

    GetStyle(country);
    GetColors(country);
    

}

function GetColors(country){

    document.getElementById("Color1").style.backgroundColor = country.colors[0];
    document.getElementById("Color2").style.backgroundColor = country.colors[1];
    document.getElementById("Color3").style.backgroundColor = country.colors[2];

}

function GetStyle(country){
    document.getElementById("CountryName").innerHTML = country.name;
    document.getElementById("OfficialLanguage").innerHTML = country.lang;
    document.getElementById("HelloWorld").innerHTML = country.greeting;
}
