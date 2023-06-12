function storeTheUserInfo()
{
    var inputTag=document.querySelectorAll("input")
    var selectTag=document.querySelectorAll("select")
    console.log(inputTag);
    var fName=inputTag[0].value
    var lName=inputTag[1].value
    var mIdPhn=inputTag[2].value
    var pass=inputTag[3].value
    var date=selectTag[0].value
    var mo=selectTag[1].value
    var yy=selectTag[2].value
    window.sessionStorage.setItem("mailIdorPhno",mIdPhn);
    window.sessionStorage.setItem("pass",pass);
    window.localStorage.setItem("fname",fName);
    window.localStorage.setItem("lname",lName);
    window.localStorage.setItem("mailIdorPhno",mIdPhn);
    window.localStorage.setItem("pass",pass);
    window.localStorage.setItem("date",date);
    window.localStorage.setItem("mo",mo);
    window.localStorage.setItem("yy",yy);
}
var gender=function gender(a)
{
    window.localStorage.setItem("gender",a);
}