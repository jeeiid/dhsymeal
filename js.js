let a = new Date();
var td = String(a.getFullYear()) + String(('0' + (a.getMonth() + 1)).slice(-2)) + String(('0' + a.getDate()).slice(-2))
let aa = new Date(a.setDate(a.getDate() + 1));
var tm = String(aa.getFullYear()) + String(('0' + (aa.getMonth() + 1)).slice(-2)) + String(('0' + aa.getDate()).slice(-2))
let urll = "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=bc1eb64ed721437b8dcb818d92d03e42&Type=json&ATPT_OFCDC_SC_CODE=K10&SD_SCHUL_CODE=7800112&MMEAL_SC_CODE=2&MLSV_FROM_YMD=" + td+"&MLSV_TO_YMD="+tm;
var yoil = ['일', '월', '화', '수', '목', '금','토']
var yo = yoil[a.getDay()]
let mdata;
async function getmeal(urll){
    await fetch(urll)
    .then(response => response.json())
    .then(data => mdata = data)
    console.log(mdata)
    var editmeal = document.getElementById("meal")
    editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][0]['DDISH_NM']
}

getmeal(urll);

var yom = yoil[aa.getDay()]
function nextmeal(){
    if(when == "today"){
        editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][1]['DDISH_NM']
        document.title= "내일의 동해삼육 점심"
        when = "nottoday"
        editbutton.innerText = "오늘 급식 보기"
        editday.innerHTML = "내일은 "+yom+"요일 입니다.<br>"+tm+"<br>"
        edittitle.innerText = "내일의 동해삼육 점심"
    }
    else{
        editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
        editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][0]['DDISH_NM']
        document.title= "오늘의 동해삼육 점심"
        when = "today"
        editbutton.innerText = "내일 급식 보기"
        edittitle.innerText = "오늘의 동해삼육 점심"
    }
}

var editmeal = document.getElementById("meal")
var when = "today"
let today = a.getDay();
edittitle = document.getElementById("name")
editday = document.getElementById("date")
editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
editbutton = document.getElementById("buttons")
//document.write("<div id = \"fini\"> 오늘은 "+yo+"요일 입니다.<br>"+td+"<br> <button type=\"button\" onclick=\"location.href='tomorrow' \">내일 급식 보기</button></div>")
