function setup() {
    var p1 = document.getElementById("first").value;
    var p2 = document.getElementById("second").value;
    var a = add(p1, p2);
    var res = document.createElement("P");
    document.getElementById("demo").appendChild(res);
    var t = document.createTextNode("" + a);
    res.appendChild(t);                                          
    document.body.appendChild(res);//adding comment
}