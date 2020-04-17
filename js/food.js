var food_categories = ["전체", "한식", "일식", "중식", "양식", "해산물 요리", "카페"];

// nav 카테고리에 대해 지정!
document.querySelector("label[for='all']").innerHTML = food_categories[0];
document.querySelector("label[for='korfood']").innerHTML = food_categories[1];
document.querySelector("label[for='jpnfood']").innerHTML = food_categories[2];
document.querySelector("label[for='chifood']").innerHTML = food_categories[3];
document.querySelector("label[for='westernfood']").innerHTML = food_categories[4];
document.querySelector("label[for='seafood']").innerHTML = food_categories[5];
document.querySelector("label[for='cafe']").innerHTML = food_categories[6];

// 디폴트로 전체 라디오버튼에 체크!
document.getElementById('all').checked = true;

// 푸드 카테고리 가게들마다 종류 지정!
document.getElementById('food1-type').innerHTML = food_categories[1];
document.getElementById('food2-type').innerHTML = food_categories[1];
document.getElementById('food3-type').innerHTML = food_categories[5];
document.getElementById('food4-type').innerHTML = food_categories[1];
document.getElementById('food5-type').innerHTML = food_categories[3];
document.getElementById('food6-type').innerHTML = food_categories[4];
document.getElementById('food7-type').innerHTML = food_categories[4];
document.getElementById('food8-type').innerHTML = food_categories[6];
document.getElementById('food9-type').innerHTML = food_categories[2];
document.getElementById('food10-type').innerHTML = food_categories[2];
document.getElementById('food11-type').innerHTML = food_categories[1];
document.getElementById('food12-type').innerHTML = food_categories[6];

//조회수 초기값 0으로 셋팅
if(localStorage.food1_view == undefined) localStorage.food1_view = 0;
if(localStorage.food2_view == undefined) localStorage.food2_view = 0;
if(localStorage.food3_view == undefined) localStorage.food3_view = 0;
if(localStorage.food4_view == undefined) localStorage.food4_view = 0;
if(localStorage.food5_view == undefined) localStorage.food5_view = 0;
if(localStorage.food6_view == undefined) localStorage.food6_view = 0;
if(localStorage.food7_view == undefined) localStorage.food7_view = 0;
if(localStorage.food8_view == undefined) localStorage.food8_view = 0;
if(localStorage.food9_view == undefined) localStorage.food9_view = 0;
if(localStorage.food10_view == undefined) localStorage.food10_view = 0;
if(localStorage.food11_view == undefined) localStorage.food11_view = 0;
if(localStorage.food12_view == undefined) localStorage.food12_view = 0;

// 평점수 초기값 0으로 셋팅
if(localStorage.food1_gpa == undefined) localStorage.setItem("food1_gpa", Number(0.0));
if(localStorage.food1_gpacnt == undefined) localStorage.setItem("food1_gpacnt", Number(0));
if(localStorage.food1_gpasum == undefined) localStorage.setItem("food1_gpasum", Number(0.0));


// 조회수 기록 - 로컬스토리지 이용
var food1_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food1_view) {localStorage.food1_view = Number(localStorage.food1_view) + 1;}
    else {localStorage.food1_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food1_view").innerHTML = localStorage.food1_view;
};

var food2_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food2_view) {localStorage.food2_view = Number(localStorage.food2_view) + 1;}
    else {localStorage.food2_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food2_view").innerHTML = localStorage.food2_view;
};

var food3_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food3_view) {localStorage.food3_view = Number(localStorage.food3_view) + 1;}
    else {localStorage.food3_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food3_view").innerHTML = localStorage.food3_view;
};

var food4_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food4_view) {localStorage.food4_view = Number(localStorage.food4_view) + 1;}
    else {localStorage.food4_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food4_view").innerHTML = localStorage.food4_view;
};

var food5_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food5_view) {localStorage.food5_view = Number(localStorage.food5_view) + 1;}
    else {localStorage.food5_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food5_view").innerHTML = localStorage.food5_view;
};

var food6_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food6_view) {localStorage.food6_view = Number(localStorage.food6_view) + 1;}
    else {localStorage.food6_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food6_view").innerHTML = localStorage.food6_view;
};

var food7_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food7_view) {localStorage.food7_view = Number(localStorage.food7_view) + 1;}
    else {localStorage.food7_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food7_view").innerHTML = localStorage.food7_view;
};

var food8_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food8_view) {localStorage.food8_view = Number(localStorage.food8_view) + 1;}
    else {localStorage.food8_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food8_view").innerHTML = localStorage.food8_view;
};

var food9_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food9_view) {localStorage.food9_view = Number(localStorage.food9_view) + 1;}
    else {localStorage.food9_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food9_view").innerHTML = localStorage.food9_view;
};

var food10_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food10_view) {localStorage.food10_view = Number(localStorage.food10_view) + 1;}
    else {localStorage.food10_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food10_view").innerHTML = localStorage.food10_view;
};

var food11_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food11_view) {localStorage.food11_view = Number(localStorage.food11_view) + 1;}
    else {localStorage.food11_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food11_view").innerHTML = localStorage.food11_view;
};

var food12_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.food12_view) {localStorage.food12_view = Number(localStorage.food12_view) + 1;}
    else {localStorage.food12_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("food12_view").innerHTML = localStorage.food12_view;
};

// 검색 기능! -jQuery : hide 이용
$(document).ready(function(){
  $('.input-search-submit').click(function() {
    var search_string = $('.input_search').val(); //검색한 내용을 가져온다

    if(document.getElementById('all').checked == true)
    {
      for(var i=1;i<=12;i++)
      {
        $('#food'+i).show();
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #all -->

    if(document.getElementById('korfood').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[1])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #korfood -->

    if(document.getElementById('jpnfood').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[2])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #jpnfood -->

    if(document.getElementById('chifood').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[3])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #chifood -->

    if(document.getElementById('westernfood').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[4])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #westernfood -->

    if(document.getElementById('seafood').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[5])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #seafood -->

    if(document.getElementById('cafe').checked == true)
    {
      for(var i=1;i<=12;i++) $('#food'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#food'+i+'-type').text() != food_categories[6])
        {
          $('#food'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#food'+i).hide();}
      }
    }//if <!-- #cafefood -->

  });// korfood 클릭 이벤트 종료
});//jQuery 종료
