let a, b, c, d, e, z;

document.getElementById("d1").onclick = function () {
    a = parseFloat(document.getElementById("amount").value);
    b = parseFloat(document.getElementById("person").value);
    c=parseFloat(document.getElementById("tip").value);
   

    z =a*c/b;

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("demo").textContent = "Enter all the required fields";
    } else {
            document.getElementById("demo").textContent = `Tip per Person : ${z}`;
        
    }
};
