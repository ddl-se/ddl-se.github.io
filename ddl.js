// DATABASE
// Note 1: CODE ASSUMES DEADLINES ARE SPECIFIED IN BJ TIME
// Note 2: dates are shifted by 1 for month, as they start at 0. Thanks date object in Javascript!
var deadlines = new Array();

deadlines.push({venue: "FSE 2024", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 9 - 1, 28, 23, 59, 59, 0), note: "Full paper submission", 
                notification: new Date(2023, 1 - 1, 23, 23, 59, 59, 0), url: "https://conf.researchr.org/track/fse-2024/fse-2024-research-papers"});
deadlines.push({venue: "SANER 2024", rank: "CCF-B", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 10 - 1, 29, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), url: "https://conf.researchr.org/track/saner-2024/saner-2024-papers"});
deadlines.push({venue: "OOPSLA 2024 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 10 - 1, 20, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), url: "https://2024.splashcon.org/track/splash-2024-oopsla"});
deadlines.push({venue: "PLDI 2024", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 11 - 1, 10, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2024, 2 - 1, 15, 23, 59, 59, 0), url: "https://pldi23.sigplan.org/track/pldi-2023-pldi"});
deadlines.push({venue: "ISSTA 2024 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), note: "Technical Papers due", 
                notification: new Date(2024, 3 - 1, 2, 23, 59, 59, 0), url: "https://2024.issta.org/track/issta-2024-papers"});
deadlines.push({venue: "ISSTA 2024 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2024, 4 - 1, 12, 23, 59, 59, 0), note: "Technical Papers due", 
                notification: new Date(2024, 7 - 1, 3, 23, 59, 59, 0), url: "https://2024.issta.org/track/issta-2024-papers"});
deadlines.push({venue: "OOPSLA 2024 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2024, 4 - 1, 5, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2024, 7 - 1, 15, 23, 59, 59, 0), url: "https://2024.splashcon.org/track/splash-2024-oopsla"});
deadlines.push({venue: "ICSE 2024 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 3 - 1, 29, 23, 59, 59, 0), note: "Submissions Deadline", 
                notification: new Date(2023, 6 - 1, 2, 23, 59, 59, 0), url: "https://conf.researchr.org/track/icse-2024/icse-2024-technical-track"});
deadlines.push({venue: "ISSRE 2022", rank: "CCF-B", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2022, 5 - 1, 13, 23, 59, 59, 0), note: "Abstract submission deadline", 
                notification: new Date(2022, 7 - 1, 29, 23, 59, 59, 0), url: "https://issre2022.github.io/calls_cfp-research.html"});
deadlines.push({venue: "ASE 2023", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 5 - 1, 5, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2023, 7 - 1, 17, 23, 59, 59, 0), url: "https://conf.researchr.org/track/ase-2023/ase-2023-papers"});
deadlines.push({venue: "ACSAC 2023", rank: "CCF-B", area: "网络与信息安全", 
                deadline: new Date(2023, 5 - 1, 26, 23, 59, 59, 0), note: "Paper Submission", 
                notification: new Date(2023, 7 - 1, 6, 23, 59, 59, 0), url: "https://www.acsac.org/2023/submissions/papers"});
deadlines.push({venue: "ICSE 2024 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
                deadline: new Date(2023, 8 - 1, 1, 23, 59, 59, 0), note: "Submissions Deadline", 
                notification: new Date(2023, 10 - 1, 10, 23, 59, 59, 0), url: "https://conf.researchr.org/track/icse-2024/icse-2024-technical-track"});

var backi = -1;

// HELPER FUNCTIONS
// x is date object
var timeDescription = function(x) {
  return x.toLocaleString();
}

var timeLeftDescription = function(x) {

  var t = x.getTime();
  if(t<0) t=0;

  var tseconds = t / 1000;
  var seconds = Math.floor(tseconds) % 60;
  var tminutes = tseconds / 60;
  var minutes = Math.floor(tminutes) % 60;
  var thours = tminutes / 60;
  var hours = Math.floor(thours) % 24;
  var tdays = thours / 24;
  var days = Math.floor(tdays);

  return days + " 天, " + hours + "时" + minutes + "分" + seconds + "秒";
}

// Display function, called every second or so
function refreshDisplay() {

    var dc = new Date();
    $("#currtime").text("当前时间: " + timeDescription(dc) + ".");

    // convert from Local time to Beijing time
    var utc = dc.getTime() + (dc.getTimezoneOffset() * 60000);
    var utc_bj_offset = +12;
    var d = new Date(utc + (3600000*utc_bj_offset) - 3600000*24);

    // calculate and display deadlines
    for(var i=0;i<deadlines.length;i++) {
      var dl= deadlines[i];
      var timeLeft= new Date(dl.deadline.getTime() - d.getTime());

      // convert the deadline (specified in MSK) to Local timezone time for displaying on the countdown
      // (since the timeline displayed to the user should be listed in their local time)
      // deadline: UTC-12; now: UTC+8    UTC-12    +          12             -  UTC-now
      var dlLocal = new Date(dl.deadline.getTime() + (3600000*utc_bj_offset) - (dc.getTimezoneOffset() * 60000));
      var notiLocal = new Date(dl.notification.getTime() + (3600000*utc_bj_offset) - (dc.getTimezoneOffset() * 60000));

      warningString= "";
      if("approx" in dl) { warningString= "based on previous term!"; }

      $("#deadline" + i).html(
        "<div class=\"tld\">" + timeLeftDescription(timeLeft) + "</div>"
      + "<div class=\"vd\">" + "<a href=" + dl.url + ">" + dl.venue + "</a>" + "</div>"
      + "<div class=\"ad\">" + dl.area + " (" + dl.rank + ") " + "</div>"
      + "<div class=\"td\"> Deadline:  " + "<font color='#FF0000'>" + timeDescription(dlLocal) + "</font>" + " (" + timeDescription(new Date(dl.deadline.getTime())) + ") " + ".</div>"
      + "<div class=\"td\"> Note:  " +  dl.note + ".</div>"
      + "<div class=\"td\"> Author Notification:  " + "<font color='#FF0000'>" + timeDescription(notiLocal) + "</font>" + " (" + timeDescription(new Date(dl.notification.getTime())) + ") " + ".</div>"
      + "<div class=\"wd\">" + warningString + "</div>"
      );
    }

    if(backi !== -1) {
      var dl= deadlines[backi];
      var timeLeft= new Date(dl.deadline.getTime() - d.getTime());
      $("#backfacetext").html(
        dl.venue + "</br>"
        + timeLeftDescription(timeLeft)
        );
    }

}

// int main(){}
$(document).ready(function() {

  // create divs for all deadlines and insert into DOM
  for(var i=0;i<deadlines.length;i++) {
    var dl= deadlines[i];
    $("<div class=dd id=deadline" + i + "></div>").appendTo("div#deadlinesdiv");
    var divid= "#deadline" + i;

    $(divid).hide();
    $(divid).fadeIn(200*(i+1), function() { }); // create a nice fade in effect

   

  }

  // set up deadline timer to redraw
  setInterval(
    function(){ refreshDisplay(); },
    1000
  );

  $("#backface").click(function() {
    backi = -1;
    $("#backface").fadeOut("slow");
  });

  $("#makeown").click(function() {
    backi = -1;
    $("#instrown").fadeToggle();
  });

  // draw!
  refreshDisplay();

});
!function(d,s,id){
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');
