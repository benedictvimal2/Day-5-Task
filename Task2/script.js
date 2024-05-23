var json = [{
    "id" : "vimal",
    "batch" : "fsd60wdt", 
    "task" : "day five task",
    "msg"   : "For the given JSON iterate over all for loops",    
    "mail": "benedictvimal2@gmail.com"
},
{
    "id" : "raj", 
    "task" : "day five task",
    "batch" : "fsd60wdt", 
    "msg"   : "For the given JSON iterate over all for loops",
    "mail": "benedictvimal2@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.task);
    console.log(obj.batch);
    console.log(obj.msg);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.task); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].batch);
 
}
}
//for Of
let text = "";
for (let x of json[key].id) {
 text += x; 
}
 console.log(text);
