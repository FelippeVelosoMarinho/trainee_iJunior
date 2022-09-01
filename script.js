function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
//console.log(Number(reverse_a_number(32243)));

function reverse_a_word(s)
{
	s = s + "";
	return s.split("").reverse().join("");
}

function palindrome(str_entry){
    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

    if(cstr === ""){
        console.log("Nothing found");
        return false;
    }
    if(reverse_a_word==str_entry)
    {
        console.log("eh sim");
        return true;
    }else{
        console.log("nao eh");
        return false;
    }
}
//console.log(String(palindrome(renner)));
var renner = "renner";
//palindrome(renner);
palindrome("ata");

function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("dog");
