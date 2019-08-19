var beauty_categories = ["전체", "화장품", "헬스장", "마사지", "성형외과", "미용실"];
//                          0       1       2         3         4         5

// nav 카테고리에 대해 지정!
document.querySelector("label[for='all']").innerHTML = beauty_categories[0];
document.querySelector("label[for='cosmetics']").innerHTML = beauty_categories[1];
document.querySelector("label[for='healthclub']").innerHTML = beauty_categories[2];
document.querySelector("label[for='massage']").innerHTML = beauty_categories[3];
document.querySelector("label[for='PS']").innerHTML = beauty_categories[4];

// 디폴트로 전체 라디오버튼에 체크!
document.getElementById('all').checked = true;

// 푸드 카테고리 가게들마다 종류 지정!
document.getElementById('beauty1-type').innerHTML = beauty_categories[1];
document.getElementById('beauty2-type').innerHTML = beauty_categories[3];
document.getElementById('beauty3-type').innerHTML = beauty_categories[3];
document.getElementById('beauty4-type').innerHTML = beauty_categories[3];
document.getElementById('beauty5-type').innerHTML = beauty_categories[4];
document.getElementById('beauty6-type').innerHTML = beauty_categories[2];
document.getElementById('beauty7-type').innerHTML = beauty_categories[1];
document.getElementById('beauty8-type').innerHTML = beauty_categories[1];
document.getElementById('beauty9-type').innerHTML = beauty_categories[1];
document.getElementById('beauty10-type').innerHTML = beauty_categories[5];
document.getElementById('beauty11-type').innerHTML = beauty_categories[5];
document.getElementById('beauty12-type').innerHTML = beauty_categories[2];

if(localStorage.beauty1_view == undefined) localStorage.beauty1_view = 0;
if(localStorage.beauty2_view == undefined) localStorage.beauty2_view = 0;
if(localStorage.beauty3_view == undefined) localStorage.beauty3_view = 0;
if(localStorage.beauty4_view == undefined) localStorage.beauty4_view = 0;
if(localStorage.beauty5_view == undefined) localStorage.beauty5_view = 0;
if(localStorage.beauty6_view == undefined) localStorage.beauty6_view = 0;
if(localStorage.beauty7_view == undefined) localStorage.beauty7_view = 0;
if(localStorage.beauty8_view == undefined) localStorage.beauty8_view = 0;
if(localStorage.beauty9_view == undefined) localStorage.beauty9_view = 0;
if(localStorage.beauty10_view == undefined) localStorage.beauty10_view = 0;
if(localStorage.beauty11_view == undefined) localStorage.beauty11_view = 0;
if(localStorage.beauty12_view == undefined) localStorage.beauty12_view = 0;

// 평점수 초기값 0으로 셋팅
if(localStorage.beauty1_gpa == undefined) localStorage.setItem("beauty1_gpa", Number(0.0));
if(localStorage.beauty1_gpacnt == undefined) localStorage.setItem("beauty1_gpacnt", Number(0));
if(localStorage.beauty1_gpasum == undefined) localStorage.setItem("beauty1_gpasum", Number(0.0));


//조회수 - localStorage 적용
var beauty1_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty1_view) {localStorage.beauty1_view = Number(localStorage.beauty1_view) + 1;}
    else {localStorage.beauty1_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty1_view").innerHTML = localStorage.beauty1_view;
};

var beauty2_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty2_view) {localStorage.beauty2_view = Number(localStorage.beauty2_view) + 1;}
    else {localStorage.beauty2_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty2_view").innerHTML = localStorage.beauty2_view;
};

var beauty3_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty3_view) {localStorage.beauty3_view = Number(localStorage.beauty3_view) + 1;}
    else {localStorage.beauty3_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty3_view").innerHTML = localStorage.beauty3_view;
};

var beauty4_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty4_view) {localStorage.beauty4_view = Number(localStorage.beauty4_view) + 1;}
    else {localStorage.beauty4_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty4_view").innerHTML = localStorage.beauty4_view;
};

var beauty5_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty5_view) {localStorage.beauty5_view = Number(localStorage.beauty5_view) + 1;}
    else {localStorage.beauty5_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty5_view").innerHTML = localStorage.beauty5_view;
};

var beauty6_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty6_view) {localStorage.beauty6_view = Number(localStorage.beauty6_view) + 1;}
    else {localStorage.beauty6_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty6_view").innerHTML = localStorage.beauty6_view;
};

var beauty7_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty7_view) {localStorage.beauty7_view = Number(localStorage.beauty7_view) + 1;}
    else {localStorage.beauty7_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty7_view").innerHTML = localStorage.beauty7_view;
};

var beauty8_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty8_view) {localStorage.beauty8_view = Number(localStorage.beauty8_view) + 1;}
    else {localStorage.beauty8_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty8_view").innerHTML = localStorage.beauty8_view;
};

var beauty9_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty9_view) {localStorage.beauty9_view = Number(localStorage.beauty9_view) + 1;}
    else {localStorage.beauty9_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty9_view").innerHTML = localStorage.beauty9_view;
};

var beauty10_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty10_view) {localStorage.beauty10_view = Number(localStorage.beauty10_view) + 1;}
    else {localStorage.beauty10_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty10_view").innerHTML = localStorage.beauty10_view;
};

var beauty11_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty11_view) {localStorage.beauty11_view = Number(localStorage.beauty11_view) + 1;}
    else {localStorage.beauty11_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty11_view").innerHTML = localStorage.beauty11_view;
};

var beauty12_clicked = function() {
  if (typeof(Storage) !== "undefined") {
    if(localStorage.beauty12_view) {localStorage.beauty12_view = Number(localStorage.beauty12_view) + 1;}
    else {localStorage.beauty12_view = 1;}
  } else {
    //Sorry! No Web Storage support..
  }
  document.getElementById("beauty12_view").innerHTML = localStorage.beauty12_view;
};


//검색기능 - jQuery 사용
$(document).ready(function (){
  $('.input-search-submit').click(function() {
    var search_string = $('.input_search').val(); //검색한 내용을 가져온다

    if(document.getElementById('all').checked == true)
    {
      for(var i=1;i<=12;i++)
      {
        $('#beauty'+i).show();
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #all -->

    if(document.getElementById('cosmetics').checked == true)
    {
      for(var i=1;i<=12;i++) $('#beauty'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#beauty'+i+'-type').text() != beauty_categories[1])
        {
          $('#beauty'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #cosmetics -->

    if(document.getElementById('healthclub').checked == true)
    {
      for(var i=1;i<=12;i++) $('#beauty'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#beauty'+i+'-type').text() != beauty_categories[2])
        {
          $('#beauty'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #healthclub -->

    if(document.getElementById('massage').checked == true)
    {
      for(var i=1;i<=12;i++) $('#beauty'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#beauty'+i+'-type').text() != beauty_categories[3])
        {
          $('#beauty'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #massage -->

    if(document.getElementById('PS').checked == true)
    {
      for(var i=1;i<=12;i++) $('#beauty'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#beauty'+i+'-type').text() != beauty_categories[4])
        {
          $('#beauty'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #mPS -->

    if(document.getElementById('hair').checked == true)
    {
      for(var i=1;i<=12;i++) $('#beauty'+i).show();
      for(var i=1;i<=12;i++)
      {
        if($('#beauty'+i+'-type').text() != beauty_categories[5])
        {
          $('#beauty'+i).hide();
        }//if
      }//for
      for(var i=1;i<=12;i++)
      {
        if(search_string == ""){return;}
        if($("#title_name"+i).text() != search_string){$('#beauty'+i).hide();}
      }
    }//if <!-- #hair -->
  });
});
