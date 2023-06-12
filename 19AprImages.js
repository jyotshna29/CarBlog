function gallery()
{
    var photos=document.images;
    for (i=0;i<=10;i++)
    {
        photos[i].src=`${i}.jpg`
        console.log(photos[i]);
    }
}
function gal(loc)
{
    document.getElementById("bigimage").style.backgroundImage=`url(${loc})`
}
var imagesArray=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"]
var num=0;
function left()
{
    num--;
    if(num<0)
    {
        num=imagesArray.length-1;
        document.getElementById("bigimage").style.backgroundImage=`url(./${imagesArray[num]})`
    }
    else {
        document.getElementById("bigimage").style.backgroundImage=`url(./${imagesArray[num]})`
    }
}
function right()
{
    num++;
    if(num>imagesArray.length-1)
    {
        num=0;
        document.getElementById("bigimage").style.backgroundImage=`url(./${imagesArray[num]})`
    }
    else {
        document.getElementById("bigimage").style.backgroundImage=`url(./${imagesArray[num]})`
    }
}
right()