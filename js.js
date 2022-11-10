let a = new Date();
var td = String(a.getFullYear()) + String(('0' + (a.getMonth() + 1)).slice(-2)) + String(('0' + a.getDate()).slice(-2))
let urll = "https://open.neis.go.kr/hub/mealServiceDietInfo?Key=bc1eb64ed721437b8dcb818d92d03e42&Type=json&ATPT_OFCDC_SC_CODE=K10&SD_SCHUL_CODE=7800112&MMEAL_SC_CODE=2&MLSV_YMD=" + td;
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

let pppp = getmeal(urll);
editmeal = document.getElementById("meal")
editmeal.innerHTML = meal
let today = a.getDay();
var yoil = ['일', '월', '화', '수', '목', '금','토']
var yo = yoil[a.getDay()]
editday = document.getElementById("date")
editday.innerHTML = "오늘은 "+yo+"요일 입니다.<br>"+td+"<br>"
//document.write("<div id = \"fini\"> 오늘은 "+yo+"요일 입니다.<br>"+td+"<br> <button type=\"button\" onclick=\"location.href='tomorrow' \">내일 급식 보기</button></div>")
