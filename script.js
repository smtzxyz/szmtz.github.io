const canvas = d3.select('.canva'); 

let dataArray = [4, 15, 34]; 

const svg = canvas.append("svg");
          svg.attr("width", "600")
              .attr("height", "600"); 

const rect = svg.append("rect"); 

rect.attr("width", 24)
        .data(dataArray)
        .attr("fill", "orange")
        .attr("height", 100)
        .attr("y", function(d, i){
          console.log(i); 
          return d*12; 
        })
        .attr("x", function(d, i){ //d stands for data, i stands for index - customary conventions
          console.log(d); 
          return d*20;
        })
