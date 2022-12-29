let a = new Date();
var td = String(a.getFullYear()) + String(('0' + (a.getMonth() + 1)).slice(-2)) + String(('0' + a.getDate()).slice(-2))
var yoil = ['일', '월', '화', '수', '목', '금','토']
var yo = yoil[a.getDay()]
let aa = new Date(a.setDate(a.getDate() + 1));
var tm = String(aa.getFullYear()) + String(('0' + (aa.getMonth() + 1)).slice(-2)) + String(('0' + aa.getDate()).slice(-2))
let urll = "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=bc1eb64ed721437b8dcb818d92d03e42&Type=json&ATPT_OFCDC_SC_CODE=K10&SD_SCHUL_CODE=7800112&MMEAL_SC_CODE=2&MLSV_FROM_YMD=" + td+"&MLSV_TO_YMD="+tm;
let mdata;
async function getmeal(urll){
    await fetch(urll)
    .then(response => response.json())
    .then(data => mdata = data)
    console.log(mdata)
    var editmeal = document.getElementById("meal")
    try {
        editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][0]['DDISH_NM']
    } catch (error) {
        editmeal.innerHTML = "급식이 없습니다."
    }
}

getmeal(urll);

var yom = yoil[aa.getDay()]
function nextmeal(){
    try {
        editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][1]['DDISH_NM']
    } catch (error) {
        editmeal.innerHTML = "급식이 없습니다."
    }
    document.title= "내일의 동해삼육 점심"
    when = "nottoday"
    editday.innerHTML = "내일은 "+yom+"요일 입니다.<br>"+tm+"<br>"
    edittitle.innerText = "내일의 동해삼육 점심"
    tdb.innerText = "◁"
    tmb.innerText = ""
}
function tdmeal(){
    editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
    try {
        editmeal.innerHTML = mdata['mealServiceDietInfo'][1]['row'][0]['DDISH_NM']
    } catch (error) {
        editmeal.innerHTML = "급식이 없습니다."
    }
    document.title= "오늘의 동해삼육 점심"
    when = "today"
    edittitle.innerText = "오늘의 동해삼육 점심"
    tdb.innerText = ""
    tmb.innerText = "▷"
}
    
var editmeal = document.getElementById("meal")
var when = "today"
let today = a.getDay();
edittitle = document.getElementById("name")
editday = document.getElementById("date")
tdb = document.getElementById("tdmeal");
tmb = document.getElementById("tmmeal");
editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
//document.write("<div id = \"fini\"> 오늘은 "+yo+"요일 입니다.<br>"+td+"<br> <button type=\"button\" onclick=\"location.href='tomorrow' \">내일 급식 보기</button></div>")
