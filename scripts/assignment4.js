let draw=false; 
    let color='black'; //default color 
    let rows;
    
    canvas.addEventListener("mousedown",function(){
      
      draw=true;      
      
    });
    
    canvas.addEventListener("mouseup", function(){
      
      draw=false;
      
    });
    
    function chooseColor(e){
      color = e.id;
      
      
    }
    
    function drawLine(ele) {
      
      if (draw===true){
      	ele.style.background = color; 
        
        if(document.getElementById('brushSize').checked){
          
          
          
          let x=ele.parentNode.rowIndex; //x is rows
          let y=ele.cellIndex; //y is columns

         for (let i=-1; i<=1; i++){

          if ((x+i)>0 && (x+i)<ele.parentNode.children.length){          
            elem=rows[(x+i)].children[y]; 
            
            elem.style.background=color;
          }
          if((y+i)>0 && (y+i)<ele.parentNode.children.length){
            elem=rows[x].children[(y+i)];
            
            elem.style.background=color;
            
          }
        }
          
        }
        
      }
      
    }

    //create a table with a 50x50 matrix so it is 500 by 500, each table row has 50 td tags that operate the function.

    function drawmyTable(x, y) {
      var ground = document.getElementById("canvas");
      var p = "<table border=1 cellspacing=0 cellpadding=0>";
      for (var i = 0; i < x; i++) {//for every row
        p += "<tr>"; 
        for (var j = 0; j < y; j++) {//for every column
          p += "<td onMouseOver='drawLine(this);'></td>"; //loop through a row and add 50 cells each row represents a column while utlizing functions // changes colors 
        }
        p += "</tr>";
      }
      p += "</table>";
      ground.innerHTML = p;
      
      rows=ground.children[0].children[0].children
      //console.log(rows.length);//rows of table 
      
      for(let i=0; i<rows.length; i++){
       
        for(let j=0; j<rows[i].children.length; j++){
        //console.log(rows[i].children[j]);
        }
        
      }
      
    }