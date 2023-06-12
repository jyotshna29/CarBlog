var emailIdorPhno=localStorage.getItem("mailIdorPhno")
var pass=localStorage.getItem("pass")
var form=document.forms;
function passvalid()
{
    var inputTags=document.querySelectorAll("input")
    var userGivenMailorPhno=inputTags[0].value
    var userGivenPassword=inputTags[1].value
    var borders=document.getElementsByClassName("inputdiv")
    if(emailIdorPhno!=userGivenMailorPhno && pass!=userGivenPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="UserId and Password is wrong"
    }
    else if(emailIdorPhno==userGivenMailorPhno && pass!=userGivenPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,hotpink,red)"
        borders[0].style.borderColor="royalblue"
        borders[1].style.borderColor="red"
        document.getElementById("status").innerHTML="Password is Wrong"
    }
    else if(emailIdorPhno!=userGivenMailorPhno && pass==userGivenPassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        borders[0].style.borderColor="red"
        borders[1].style.borderColor="royalblue"
        document.getElementById("status").innerHTML="EmailId or Phone Number is wrong"
    }
    else    
    {
        form[0].action="19AprHome.html"
        form[0].elements[2].type="Submit"
    }
}
function passvis()
{
    form[0].elements[1].type="text"
    document.getElementById("passVis").src="eye.png"
    document.getElementById("passVis").style.transform="rotateY(180deg)"
    document.getElementById("passVis").style.transition="transform 0.5s"
}
function passHid()
{
    form[0].elements[1].type="password"
    document.getElementById("passVis").src="closedeye.png"
    document.getElementById("passVis").style.transform="rotateY(0deg)"
    document.getElementById("passVis").style.transition="transform 0.5s"
}
function bigButton()
{
    form[0].elements[2].style.transform="scale(1.2)"
    form[0].elements[2].style.backgroundColor="transperant"
}
function smallButton()
{
    form[0].elements[2].style.transform="scale(1)"
    form[0].elements[2].style.backgroundColor="transperant"
}