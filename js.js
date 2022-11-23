let a = new Date();
var td = String(a.getFullYear()) + String(('0' + (a.getMonth() + 1)).slice(-2)) + String(('0' + a.getDate()).slice(-2))
let urll = "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=bc1eb64ed721437b8dcb818d92d03e42&Type=json&ATPT_OFCDC_SC_CODE=K10&SD_SCHUL_CODE=7800112&MMEAL_SC_CODE=2&MLSV_YMD=" + td;
var yoil = ['일', '월', '화', '수', '목', '금','토']
var yo = yoil[a.getDay()]
function getmeal(urll){
    try{
        $.ajax({
            url : urll,
            dataType: 'json',
            async : false,
            success: function(data){
                try{
                    meal = data['mealServiceDietInfo'][1]['row'][0]['DDISH_NM'];
                    debug_data = data;
                } catch{
                    meal = "급식이 없습니다.";
                } 
                return meal;     
            }
        })
    } catch{
        meal = "급식 정보를 가져올 수 없습니다."
        return meal
    }
} 
let aa = new Date(a.setDate(a.getDate() + 1));
var tm = String(aa.getFullYear()) + String(('0' + (aa.getMonth() + 1)).slice(-2)) + String(('0' + aa.getDate()).slice(-2))
var yom = yoil[aa.getDay()]
let urlll = "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=bc1eb64ed721437b8dcb818d92d03e42&Type=json&ATPT_OFCDC_SC_CODE=K10&SD_SCHUL_CODE=7800112&MMEAL_SC_CODE=2&MLSV_YMD=" + tm;
function getmeall(urlll){
    $.ajax({
        url : urlll,
        dataType: 'json',
        async : false,
        success: function(tdata){
            try{
                tmeal = tdata['mealServiceDietInfo'][1]['row'][0]['DDISH_NM'];
                tdebug_data = tdata;
            } catch{
                tmeal = "급식이 없습니다.";
            } 
            return tmeal;     
        }
    })
} 
function nextmeal(){
    if(when == "today"){
        editmeal.innerHTML = tmeal
        document.title= "내일의 동해삼육 점심"
        when = "nottoday"
        editbutton.innerText = "오늘 급식 보기"
        editday.innerHTML = "내일은 "+yom+"요일 입니다.<br>"+tm+"<br>"
        edittitle.innerText = "내일의 동해삼육 점심"
    }
    else{
        editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
        editmeal.innerHTML = meal
        document.title= "오늘의 동해삼육 점심"
        when = "today"
        editbutton.innerText = "내일 급식 보기"
        edittitle.innerText = "오늘의 동해삼육 점심"
    }
}
getmeal(urll);
getmeall(urlll);
editmeal = document.getElementById("meal")
editmeal.innerHTML = meal
var when = "today"
let today = a.getDay();
edittitle = document.getElementById("name")
editday = document.getElementById("date")
editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
editbutton = document.getElementById("buttons")
//document.write("<div id = \"fini\"> 오늘은 "+yo+"요일 입니다.<br>"+td+"<br> <button type=\"button\" onclick=\"location.href='tomorrow' \">내일 급식 보기</button></div>")
