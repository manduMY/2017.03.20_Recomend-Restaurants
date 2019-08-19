var shop_categories = ["전체", "종합패션", "멀티플렉스", "문구/팬시용품", "안경원", "컴퓨터"];

// nav 카테고리에 대해 지정!
document.querySelector("label[for='all']").innerHTML = shop_categories[0];
document.querySelector("label[for='compfashion']").innerHTML = shop_categories[1];
document.querySelector("label[for='multiflex']").innerHTML = shop_categories[2];
document.querySelector("label[for='stationery']").innerHTML = shop_categories[3];
document.querySelector("label[for='glasses']").innerHTML = shop_categories[4];
document.querySelector("label[for='computer']").innerHTML = shop_categories[5];
// 디폴트로 전체 라디오버튼에 체크!
document.getElementById('all').checked = true;

// 푸드 카테고리 가게들마다 종류 지정!
document.getElementById('shop1-type').innerHTML = shop_categories[1];
document.getElementById('shop2-type').innerHTML = shop_categories[1];
document.getElementById('shop3-type').innerHTML = shop_categories[1];
document.getElementById('shop4-type').innerHTML = shop_categories[2];
document.getElementById('shop5-type').innerHTML = shop_categories[3];

document.getElementById('shop7-type').innerHTML = shop_categories[1];
document.getElementById('shop8-type').innerHTML = shop_categories[4];
document.getElementById('shop9-type').innerHTML = shop_categories[1];
document.getElementById('shop10-type').innerHTML = shop_categories[5];
document.getElementById('shop11-type').innerHTML = shop_categories[3];
document.getElementById('shop12-type').innerHTML = shop_categories[1];

//조회수 초기값 0으로 셋팅
if(localStorage.shop1_view == undefined) localStorage.shop1_view = 0;
if(localStorage.shop2_view == undefined) localStorage.shop2_view = 0;
if(localStorage.shop3_view == undefined) localStorage.shop3_view = 0;
if(localStorage.shop4_view == undefined) localStorage.shop4_view = 0;
if(localStorage.shop5_view == undefined) localStorage.shop5_view = 0;
if(localStorage.shop6_view == undefined) localStorage.shop6_view = 0;
if(localStorage.shop7_view == undefined) localStorage.shop7_view = 0;
if(localStorage.shop8_view == undefined) localStorage.shop8_view = 0;
if(localStorage.shop9_view == undefined) localStorage.shop9_view = 0;
if(localStorage.shop10_view == undefined) localStorage.shop10_view = 0;
if(localStorage.shop11_view == undefined) localStorage.shop11_view = 0;
if(localStorage.shop12_view == undefined) localStorage.shop12_view = 0;

// 평점수 초기값 0으로 셋팅
if(localStorage.shop1_gpa == undefined) localStorage.setItem("shop1_gpa", Number(0.0));
if(localStorage.shop1_gpacnt == undefined) localStorage.setItem("shop1_gpacnt", Number(0));
if(localStorage.shop1_gpasum == undefined) localStorage.setItem("shop1_gpasum", Number(0.0));

//조회수 - localStorage 적용
var shop1_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop1_view) {localStorage.shop1_view = Number(localStorage.shop1_view) + 1;}
    else {localStorage.shop1_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop1_view").innerHTML = localStorage.shop1_view;
};

var shop2_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop2_view) {localStorage.shop2_view = Number(localStorage.shop2_view) + 1;}
    else {localStorage.shop2_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop2_view").innerHTML = localStorage.shop2_view;
};

var shop3_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop3_view) {localStorage.shop3_view = Number(localStorage.shop3_view) + 1;}
    else {localStorage.shop3_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop3_view").innerHTML = localStorage.shop3_view;
};

var shop4_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop4_view) {localStorage.shop4_view = Number(localStorage.shop4_view) + 1;}
    else {localStorage.shop4_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop4_view").innerHTML = localStorage.shop4_view;
};

var shop5_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop5_view) {localStorage.shop5_view = Number(localStorage.shop5_view) + 1;}
    else {localStorage.shop5_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop5_view").innerHTML = localStorage.shop5_view;
};

//var shop6_clicked = function() {};

var shop7_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop7_view) {localStorage.shop7_view = Number(localStorage.shop7_view) + 1;}
    else {localStorage.shop7_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop7_view").innerHTML = localStorage.shop7_view;
};

var shop8_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop8_view) {localStorage.shop8_view = Number(localStorage.shop8_view) + 1;}
    else {localStorage.shop8_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop8_view").innerHTML = localStorage.shop8_view;
};

var shop9_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop9_view) {localStorage.shop9_view = Number(localStorage.shop9_view) + 1;}
    else {localStorage.shop9_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop9_view").innerHTML = localStorage.shop9_view;
};

var shop10_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop10_view) {localStorage.shop10_view = Number(localStorage.shop10_view) + 1;}
    else {localStorage.shop10_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop10_view").innerHTML = localStorage.shop10_view;
};

var shop11_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop11_view) {localStorage.shop11_view = Number(localStorage.shop11_view) + 1;}
    else {localStorage.shop11_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop11_view").innerHTML = localStorage.shop11_view;
};

var shop12_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.shop12_view) {localStorage.shop12_view = Number(localStorage.shop12_view) + 1;}
    else {localStorage.shop12_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("shop12_view").innerHTML = localStorage.shop12_view;
};


// 검색 기능! -jQuery : hide 이용
$(document).ready(function(){
  $('.input-search-submit').click(function(){
    var search_string = $('.input_search').val(); //검색한 내용을 가져온다
    //all, compfashion, multiflex, stationery, glasses, computer
    if(document.getElementById('all').checked == true)
    {
      for(var i=1;i<=12;i++) {
        if(i == 6) continue;  //삭제된 shop6에 대한 조건 처리
        else $('#shop'+i).show();
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;  //삭제된 shop6에 대한 조건 처리
        else{
          if(search_string == ""){return;}
          if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
        }
      }//for
    }//if <!-- #all -->

    if(document.getElementById('compfashion').checked == true)
    {
      for(var i=1;i<=12;i++) {if(i == 6) continue; else $('#shop'+i).show();}//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if($('#shop'+i+'-type').text() != shop_categories[1])
        {
          $('#shop'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
      }
    }//if <!-- #compfashion -->

    if(document.getElementById('multiflex').checked == true)
    {
      for(var i=1;i<=12;i++) {if(i == 6) continue; else $('#shop'+i).show();}//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if($('#shop'+i+'-type').text() != shop_categories[2])
        {
          $('#shop'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
      }
    }//if <!-- #multiflex -->

    if(document.getElementById('stationery').checked == true)
    {
      for(var i=1;i<=12;i++) {if(i == 6) continue; else $('#shop'+i).show();}//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if($('#shop'+i+'-type').text() != shop_categories[3])
        {
          $('#shop'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
      }
    }//if <!-- #stationery -->

    if(document.getElementById('glasses').checked == true)
    {
      for(var i=1;i<=12;i++) {if(i == 6) continue; else $('#shop'+i).show();}//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if($('#shop'+i+'-type').text() != shop_categories[4])
        {
          $('#shop'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
      }
    }//if <!-- #glasses -->

    if(document.getElementById('computer').checked == true)
    {
      for(var i=1;i<=12;i++) {if(i == 6) continue; else $('#shop'+i).show();}//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if($('#shop'+i+'-type').text() != shop_categories[5])
        {
          $('#shop'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(i == 6) continue;
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#shop'+i).hide();}
      }
    }//if <!-- #computer -->
  });//검색버튼의 클릭 이벤트가 발생했을 경우...
});//jQuery 종료...
