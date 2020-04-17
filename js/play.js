var play_categories = ["전체", "귀금속", "오락실/멀티방", "영화관"];

// nav 카테고리에 대해 지정!
document.querySelector("label[for='all']").innerHTML = play_categories[0];
document.querySelector("label[for='jewel']").innerHTML = play_categories[1];
document.querySelector("label[for='acade']").innerHTML = play_categories[2];
document.querySelector("label[for='movie']").innerHTML = play_categories[3];

// 디폴트로 전체 라디오버튼에 체크!
document.getElementById('all').checked = true;

// 푸드 카테고리 가게들마다 종류 지정!
document.getElementById('play1-type').innerHTML = play_categories[1];
document.getElementById('play2-type').innerHTML = play_categories[2];
document.getElementById('play3-type').innerHTML = play_categories[2];
document.getElementById('play4-type').innerHTML = play_categories[2];
document.getElementById('play5-type').innerHTML = play_categories[2];
document.getElementById('play6-type').innerHTML = play_categories[2];
document.getElementById('play7-type').innerHTML = play_categories[2];
document.getElementById('play8-type').innerHTML = play_categories[2];
document.getElementById('play9-type').innerHTML = play_categories[2];
document.getElementById('play10-type').innerHTML = play_categories[2];
document.getElementById('play11-type').innerHTML = play_categories[2];
document.getElementById('play12-type').innerHTML = play_categories[2];
document.getElementById('play13-type').innerHTML = play_categories[2];
document.getElementById('play14-type').innerHTML = play_categories[2];
document.getElementById('play15-type').innerHTML = play_categories[3];

if(localStorage.play1_view == undefined) localStorage.play1_view = 0;
if(localStorage.play2_view == undefined) localStorage.play2_view = 0;
if(localStorage.play3_view == undefined) localStorage.play3_view = 0;
if(localStorage.play4_view == undefined) localStorage.play4_view = 0;
if(localStorage.play5_view == undefined) localStorage.play5_view = 0;
if(localStorage.play6_view == undefined) localStorage.play6_view = 0;
if(localStorage.play7_view == undefined) localStorage.play7_view = 0;
if(localStorage.play8_view == undefined) localStorage.play8_view = 0;
if(localStorage.play9_view == undefined) localStorage.play9_view = 0;
if(localStorage.play10_view == undefined) localStorage.play10_view = 0;
if(localStorage.play11_view == undefined) localStorage.play11_view = 0;
if(localStorage.play12_view == undefined) localStorage.play12_view = 0;

// 평점수 초기값 0으로 셋팅
if(localStorage.play1_gpa == undefined) localStorage.setItem("play1_gpa", Number(0.0));
if(localStorage.play1_gpacnt == undefined) localStorage.setItem("play1_gpacnt", Number(0));
if(localStorage.play1_gpasum == undefined) localStorage.setItem("play1_gpasum", Number(0.0));

//조회수 - localStorage 적용
var play1_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play1_view) {localStorage.play1_view = Number(localStorage.play1_view) + 1;}
    else {localStorage.play1_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play1_view").innerHTML = localStorage.play1_view;
};

var play2_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play2_view) {localStorage.play2_view = Number(localStorage.play2_view) + 1;}
    else {localStorage.play2_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play2_view").innerHTML = localStorage.play2_view;
};

var play3_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play3_view) {localStorage.play3_view = Number(localStorage.play3_view) + 1;}
    else {localStorage.play3_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play3_view").innerHTML = localStorage.play3_view;
};

var play4_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play4_view) {localStorage.play4_view = Number(localStorage.play4_view) + 1;}
    else {localStorage.play4_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play4_view").innerHTML = localStorage.play4_view;
};

var play5_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play5_view) {localStorage.play5_view = Number(localStorage.play5_view) + 1;}
    else {localStorage.play5_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play5_view").innerHTML = localStorage.play5_view;
};

var play6_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play6_view) {localStorage.play6_view = Number(localStorage.play6_view) + 1;}
    else {localStorage.play6_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play6_view").innerHTML = localStorage.play6_view;
};

var play7_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play7_view) {localStorage.play7_view = Number(localStorage.play7_view) + 1;}
    else {localStorage.play7_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play7_view").innerHTML = localStorage.play7_view;
};

var play8_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play8_view) {localStorage.play8_view = Number(localStorage.play8_view) + 1;}
    else {localStorage.play8_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play8_view").innerHTML = localStorage.play8_view;
};

var play9_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play9_view) {localStorage.play9_view = Number(localStorage.play9_view) + 1;}
    else {localStorage.play9_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play9_view").innerHTML = localStorage.play9_view;
};

var play10_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play10_view) {localStorage.play10_view = Number(localStorage.play10_view) + 1;}
    else {localStorage.play10_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play10_view").innerHTML = localStorage.play10_view;
};

var play11_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play11_view) {localStorage.play11_view = Number(localStorage.play11_view) + 1;}
    else {localStorage.play11_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play11_view").innerHTML = localStorage.play11_view;
};

var play12_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play12_view) {localStorage.play12_view = Number(localStorage.play12_view) + 1;}
    else {localStorage.play12_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play12_view").innerHTML = localStorage.play12_view;
};

var play13_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play13_view) {localStorage.play13_view = Number(localStorage.play13_view) + 1;}
    else {localStorage.play13_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play13_view").innerHTML = localStorage.play13_view;
};

var play14_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play14_view) {localStorage.play14_view = Number(localStorage.play14_view) + 1;}
    else {localStorage.play14_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play14_view").innerHTML = localStorage.play14_view;
};

var play15_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.play15_view) {localStorage.play15_view = Number(localStorage.play15_view) + 1;}
    else {localStorage.play15_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("play15_view").innerHTML = localStorage.play15_view;
};


//검색기능 -jQuery 사용
$(document).ready(function(){
  $('.input-search-submit').click(function() {
    var search_string = $('.input_search').val(); //검색한 내용을 가져온다
    if(document.getElementById('all').checked == true)
    {
      for(var i=1;i<=15;i++)
      {
        $('#play'+i).show();
      }//for
      for(var i=1;i<=15;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#play'+i).hide();}
      }
    }//if <!-- #all -->

    if(document.getElementById('jewel').checked == true)
    {
      for(var i=1;i<=15;i++) $('#play'+i).show();
      for(var i=1;i<=15;i++)
      {
        if($('#play'+i+'-type').text() != play_categories[1])
        {
          $('#play'+i).hide();
        }//if
      }//for
      for(var i=1;i<=15;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#play'+i).hide();}
      }
    }//if <!-- #jewel -->

    if(document.getElementById('acade').checked == true)
    {
      for(var i=1;i<=15;i++) $('#play'+i).show();
      for(var i=1;i<=15;i++)
      {
        if($('#play'+i+'-type').text() != play_categories[2])
        {
          $('#play'+i).hide();
        }//if
      }//for
      for(var i=1;i<=15;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#play'+i).hide();}
      }
    }//if <!-- #acade -->

    if(document.getElementById('movie').checked == true)
    {
      for(var i=1;i<=15;i++) $('#play'+i).show();
      for(var i=1;i<=15;i++)
      {
        if($('#play'+i+'-type').text() != play_categories[3])
        {
          $('#play'+i).hide();
        }//if
      }//for
      for(var i=1;i<=15;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#play'+i).hide();}
      }
    }//if <!-- #movie -->


  });//검색 버튼이 눌렸을때
});
