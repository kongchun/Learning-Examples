var allline = ["1003","12","2","20",'1002'];
var allline = ["12","1002","28","2","2008","22"]

var name = "1002";


var t = allline.sort((i,j)=>{
    return  getKeySort(i)-getKeySort(j);
})

function getKeySort(i){
    var index = i.indexOf(name);
    index = (index==-1)?9:index;
    var len = i.length;
    console.log(i,(index*10+len))
    return (index*10+len);
}


console.log(t)

