var inn_categories = ["전체", "모텔", "호텔", "게스트하우스"];

// nav 카테고리에 대해 지정!
document.querySelector("label[for='all']").innerHTML = inn_categories[0];
document.querySelector("label[for='motel']").innerHTML = inn_categories[1];
document.querySelector("label[for='hotel']").innerHTML = inn_categories[2];
document.querySelector("label[for='guesthouse']").innerHTML = inn_categories[3];

// 디폴트로 전체 라디오버튼에 체크!
document.getElementById('all').checked = true;

// 푸드 카테고리 가게들마다 종류 지정!
document.getElementById('inn1-type').innerHTML = inn_categories[1];
document.getElementById('inn2-type').innerHTML = inn_categories[1];
document.getElementById('inn3-type').innerHTML = inn_categories[1];
document.getElementById('inn4-type').innerHTML = inn_categories[2];
document.getElementById('inn5-type').innerHTML = inn_categories[1];
document.getElementById('inn6-type').innerHTML = inn_categories[1];
document.getElementById('inn7-type').innerHTML = inn_categories[1];
document.getElementById('inn8-type').innerHTML = inn_categories[1];
document.getElementById('inn9-type').innerHTML = inn_categories[1];
document.getElementById('inn10-type').innerHTML = inn_categories[1];
document.getElementById('inn11-type').innerHTML = inn_categories[1];
document.getElementById('inn12-type').innerHTML = inn_categories[1];

if(localStorage.inn1_view == undefined) localStorage.inn1_view = 0;
if(localStorage.inn2_view == undefined) localStorage.inn2_view = 0;
if(localStorage.inn3_view == undefined) localStorage.inn3_view = 0;
if(localStorage.inn4_view == undefined) localStorage.inn4_view = 0;
if(localStorage.inn5_view == undefined) localStorage.inn5_view = 0;
if(localStorage.inn6_view == undefined) localStorage.inn6_view = 0;
if(localStorage.inn7_view == undefined) localStorage.inn7_view = 0;
if(localStorage.inn8_view == undefined) localStorage.inn8_view = 0;
if(localStorage.inn9_view == undefined) localStorage.inn9_view = 0;
if(localStorage.inn10_view == undefined) localStorage.inn10_view = 0;
if(localStorage.inn11_view == undefined) localStorage.inn11_view = 0;
if(localStorage.inn12_view == undefined) localStorage.inn12_view = 0;

// 평점수 초기값 0으로 셋팅
if(localStorage.inn1_gpa == undefined) localStorage.setItem("inn1_gpa", Number(0.0));
if(localStorage.inn1_gpacnt == undefined) localStorage.setItem("inn1_gpacnt", Number(0));
if(localStorage.inn1_gpasum == undefined) localStorage.setItem("inn1_gpasum", Number(0.0));


//조회수 localstorage 적용
var inn1_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn1_view) {localStorage.inn1_view = Number(localStorage.inn1_view) + 1;}
    else {localStorage.inn1_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn1_view").innerHTML = localStorage.inn1_view;
};

var inn2_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn2_view) {localStorage.inn2_view = Number(localStorage.inn2_view) + 1;}
    else {localStorage.inn2_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn2_view").innerHTML = localStorage.inn2_view;
};

var inn3_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn3_view) {localStorage.inn3_view = Number(localStorage.inn3_view) + 1;}
    else {localStorage.inn3_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn3_view").innerHTML = localStorage.inn3_view;
};

var inn4_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn4_view) {localStorage.inn4_view = Number(localStorage.inn4_view) + 1;}
    else {localStorage.inn4_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn4_view").innerHTML = localStorage.inn4_view;
};

var inn5_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn5_view) {localStorage.inn5_view = Number(localStorage.inn5_view) + 1;}
    else {localStorage.inn5_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn5_view").innerHTML = localStorage.inn5_view;
};

var inn6_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn6_view) {localStorage.inn6_view = Number(localStorage.inn6_view) + 1;}
    else {localStorage.inn6_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn6_view").innerHTML = localStorage.inn6_view;
};

var inn7_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn7_view) {localStorage.inn7_view = Number(localStorage.inn7_view) + 1;}
    else {localStorage.inn7_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn7_view").innerHTML = localStorage.inn7_view;
};

var inn8_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn8_view) {localStorage.inn8_view = Number(localStorage.inn8_view) + 1;}
    else {localStorage.inn8_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn8_view").innerHTML = localStorage.inn8_view;
};

var inn9_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn9_view) {localStorage.inn9_view = Number(localStorage.inn9_view) + 1;}
    else {localStorage.inn9_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn9_view").innerHTML = localStorage.inn9_view;
};

var inn10_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn10_view) {localStorage.inn10_view = Number(localStorage.inn10_view) + 1;}
    else {localStorage.inn10_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn10_view").innerHTML = localStorage.inn10_view;
};

var inn11_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn11_view) {localStorage.inn11_view = Number(localStorage.inn11_view) + 1;}
    else {localStorage.inn11_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn11_view").innerHTML = localStorage.inn11_view;
};

var inn12_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.inn12_view) {localStorage.inn12_view = Number(localStorage.inn12_view) + 1;}
    else {localStorage.inn12_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("inn12_view").innerHTML = localStorage.inn12_view;
};


//검색기능 - jQuery 사용
$(document).ready(function(){
  $('.input-search-submit').click(function() {
    var search_string = $('.input_search').val(); //검색한 내용을 가져온다

    if(document.getElementById('all').checked == true)
    {
      for(var i=1;i<=12;i++)
      {
        $('#inn'+i).show();
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#inn'+i).hide();}
      }
    }//if <!-- #all -->

    if(document.getElementById('motel').checked == true)
    {
      for(var i=1;i<=12;i++) $('#inn'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#inn'+i+'-type').text() != inn_categories[1])
        {
          $('#inn'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#inn'+i).hide();}
      }
    }//if <!-- #motel -->

    if(document.getElementById('hotel').checked == true)
    {
      for(var i=1;i<=12;i++) $('#inn'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#inn'+i+'-type').text() != inn_categories[2])
        {
          $('#inn'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#inn'+i).hide();}
      }
    }//if <!-- #hotel -->

    if(document.getElementById('guesthouse').checked == true)
    {
      for(var i=1;i<=12;i++) $('#inn'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#inn'+i+'-type').text() != inn_categories[3])
        {
          $('#inn'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#inn'+i).hide();}
      }
    }//if <!-- #guesthouse -->
  });
});
