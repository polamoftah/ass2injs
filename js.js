
   var quotes=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"Oscar Wilde"
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    },
    {
        quote:"You only live once, but if you do it right, once is enough.”",
        author:" Mae West"
    },
    {
        quote:"If you tell the truth, you don't have to remember anything.",
        author:" Mark Twain"
    },
   ]
var oldnum=-1;
function test(){
    var num =Math.floor(Math.random()*quotes.length)
    while(num==oldnum){
        var num =Math.floor(Math.random()*quotes.length)
    }
    oldnum=num
    console.log(quotes[num].quote);
    console.log(quotes[num].author);
    
document.getElementById("newquat").innerHTML=quotes[num].quote
document.getElementById("newquat2").innerHTML= quotes[num].author
}