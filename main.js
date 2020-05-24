// excercise 1

let i = 1;
let x = "#";

do{
    console.log(x.repeat(i));
    i = i+1
}while (i <= 7);

while (i <= 7) {
    console.log(x.repeat(i));
    i = i+1
}

for (let index = 0; index < 7 ; index++) {
    console.log(x.repeat(i));
    i = i+1    
}

//exercise 2

for(i=0; i<=100; i++){
	if(i % 7 == 0){
		console.log("Corona");
	}
	if(i % 9 == 0){
		console.log("bingo");
	}else{
		console.log(i);
	}
}

for(i=0; i<=7; i++){
	console.log("#");
}

//excercise 3



//opdracht 3 
let width = 10
let height = 2

value = width / 2

function rasterwidth (width) {
    document.write("#",("\n"));
}
for (let j = 0; j < height; j++) {
	for (let number = 0; number < width; number++) {
		if (number == value ) {
		   document.write("<br>") 
		   document.write("&nbsp;");
		   rasterwidth(width);
		}else{
			rasterwidth(width);	     
		} 
	}
	document.write("<br>");
}    
	    
