var canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("myc");
var context:CanvasRenderingContext2D=canvas.getContext('2d');
var ran:HTMLInputElement=<HTMLInputElement>document.getElementById("ran");//slider value
var rectcontainer:Rect[]
var timeout=25
var choice:number=5;
// context.translate(0,canvas.height);//conventional system
// context.scale(1,-1);
function anim(){
    for(let i=0;i<+ran.value;i+=10){
            var R:Rect=new Rect(50+i,0,rand(50,400),context)
            R.draw("#f9b384")
            rectcontainer.push(R)
    }
    //window.requestAnimationFrame(anim);
}
function clic(){//upon chaning slider A clic called
    context.clearRect(0,0,canvas.width,canvas.height)
    rectcontainer=[]
    anim();
}
function rand(min1:number,max1:number):number{//random function for colors
    return(Math.floor(Math.random()*(max1-min1)+min1));
}
function bubblesort(){
var i:number=0
var check=true
var j:number=0
var len=rectcontainer.length;
var bbs = function() {
    if (i < rectcontainer.length-1-j) {
      if (rectcontainer[i].height > rectcontainer[i+1].height) {
        var temp = rectcontainer[i];
        rectcontainer[i] = rectcontainer[i+1];
        rectcontainer[i+1] = temp;
        var x=rectcontainer[i].x
        rectcontainer[i].x=rectcontainer[i+1].x
        rectcontainer[i+1].x=x
        check = true;
      }
      i++;
      //console.log(rectcontainer.length)
      //ref.visualizeArray();
      redraw(i)
      window.setTimeout(bbs,timeout);
    }
    else if (check) {
      check = false;
      len--;
      j++;
      i = 0;
      bbs();
    }
  };
  bbs();
}
function selectsort(){
  function minIndex(a:Rect[], i:number, j:number):number
    { 
        if (i == j) 
            return i; 
       
        // Find minimum of remaining elements 
        var k = minIndex(a, i + 1, j); 
        redraw(k);
        // Return minimum of current and remaining. 
        return (a[i].height < a[k].height)? i : k; 
    } 
       
    // Recursive selection sort. n is size of a[] and index 
    // is index of starting element. 
    function recurSelectionSort(a:Rect[], n:number, index:number) 
    { 
           
        // Return when starting and size are same 
        if (index == n) 
           return; 
       
        // calling minimum index function for minimum index 
        var k = minIndex(a, index, n-1); 
       
        // Swapping when index nd minimum index are not same 
        if (k != index){ 
           // swap 
           var temp = a[k]; 
           a[k] = a[index]; 
           a[index] = temp; 
           var x=a[k].x;
           a[k].x=a[index].x;
           a[index].x=x;
        } 
        redraw(k);
        //window.setTimeout(recurSelectionSort, timeout);
        // Recursively calling selection sort function 
        setTimeout(function(){
          recurSelectionSort(a, n, index + 1); 
        },400)
    } 
    recurSelectionSort(rectcontainer,rectcontainer.length,0);
  redraw(0);
}
function insert_sort(){
    var len=rectcontainer.length;
    var i=0;
    var sort = function() {
        if (i < len) {
          var j = i;
          var is = function() {
            if (j > 0 && rectcontainer[j-1].height > rectcontainer[j].height) {
              var temp = rectcontainer[j];
              rectcontainer[j] = rectcontainer[j-1];
              rectcontainer[j-1] = temp;
              var x=rectcontainer[j].x
              rectcontainer[j].x=rectcontainer[j-1].x
              rectcontainer[j-1].x=x
              j--;
              redraw(j)
              window.setTimeout(is, timeout*2);
            }
            else {
              i++;
              sort();
            }
          };
          is();
        }
    };
    sort();
    redraw(0);
}
function quick_sort(){
  sort(rectcontainer,0,rectcontainer.length-1); 
   // var len=rectcontainer.length;
    function partition(arr:Rect[],low:number,high:number):number 
    { 
        var pivot = arr[high];  
        var i = (low-1); 
        for (var j=low; j<high; j++) 
        { 
        
            if (arr[j].height < pivot.height) 
            { 
                i++; 
  
                
                var temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
                var x=arr[i].x;
                arr[i].x=arr[j].x;
                arr[j].x=x;
            } 
            redraw(j);
            window.setTimeout(partition, timeout*2);
    }
        var temp = arr[i+1]; 
        arr[i+1] = arr[high]; 
        arr[high] = temp; 
        var x=arr[i+1].x;
        arr[i+1].x=arr[high].x;
        arr[high].x=x;
        redraw(i+1);
        return i+1; 
    } 

    function sort(arr:Rect[],low:number,high:number) 
    { 
        if (low < high) 
        { 
            var pi = partition(arr, low, high);
            setTimeout(() => {
              sort(arr, low, pi-1); 
            }, 400);
            setTimeout(() => {
              sort(arr, pi+1, high); 
            },400);
        } 
    }
}  
function redraw(j:number){
    context.clearRect(0,0,canvas.width,canvas.height)
    var len=rectcontainer.length
    for(let i=0;i<rectcontainer.length;i++){
        if(i==j){
            rectcontainer[i].draw("#00a1ab");
        }
        else {
            rectcontainer[i].draw("#f9b384");
        }
    }
}

function disable_button(button_number:number){
  var b1:HTMLButtonElement=<HTMLButtonElement>document.getElementById("i1");
  var b2:HTMLButtonElement=<HTMLButtonElement>document.getElementById("i2");
  var b3:HTMLButtonElement=<HTMLButtonElement>document.getElementById("i3");
  var b4:HTMLButtonElement=<HTMLButtonElement>document.getElementById("i4");
  var b5:HTMLInputElement=<HTMLInputElement>document.getElementById("ran");
  if(button_number==0){
    b1.disabled=false;
    b2.disabled=false;
    b3.disabled=false;
    b4.disabled=false;
    b5.disabled=false;
  }
  else{
    b1.disabled=true;
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
    b5.disabled=true;
  }
}
function sort(sorting_number:number){
  if(sorting_number==1){
    bubblesort();
  }
  else if(sorting_number==2){
    selectsort();
  }
  else if(sorting_number==3){
    insert_sort();
  }
  else if(sorting_number==4){
    quick_sort();
  }
}