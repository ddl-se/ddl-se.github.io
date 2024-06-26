// DATABASE
// Note 1: CODE ASSUMES DEADLINES ARE SPECIFIED IN BJ TIME
// Note 2: dates are shifted by 1 for month, as they start at 0. Thanks date object in Javascript!

function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day, 23, 59, 59, 0);  //
}

function createDeadline(venue, rank, area, deadlineStr, notificationStr, note, url) {
    return {
        venue,
        rank,
        area,
        deadline: parseDate(deadlineStr),
        note,
        notification: parseDate(notificationStr),
        url
    };
}


var deadlines = new Array();

deadlines.push(createDeadline("ASE 2024", "CCF-A", "软件工程/系统软件/程序设计语言", "2024-6-7", "2024-8-6", 
			      "Paper Submission", "https://conf.researchr.org/track/ase-2024/ase-2024-research"));

deadlines.push(createDeadline("ICSE 2025 - Second round", "CCF-A", "软件工程/系统软件/程序设计语言", "2024-8-2", "2024-11-1", 
			      "Paper Submission", "https://conf.researchr.org/track/icse-2025/icse-2025-research-track"));

deadlines.push(createDeadline("AAAI 2025", "CCF-A", "人工智能", "2024-8-15", "2025-12-9", 
			      "Paper Submission", "https://aaai.org/conference/aaai/aaai-25"));

deadlines.push(createDeadline("FSE 2025", "CCF-A", "软件工程/系统软件/程序设计语言", "2024-9-5", "2025-1-14", 
			      "Paper Submission", "https://conf.researchr.org/track/fse-2025/fse-2025-research-papers"));

deadlines.push(createDeadline("ISSTA 2025", "CCF-A", "软件工程/系统软件/程序设计语言", "2024-10-31", "2024-12-19", 
			      "Paper Submission", "https://conf.researchr.org/track/issta-2025/issta-2025-papers"));

// deadlines.push({venue: "ASE 2024", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2024, 6 - 1, 7, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2024, 8 - 1, 6, 23, 59, 59, 0), url: "https://conf.researchr.org/track/ase-2024/ase-2024-research"});
// deadlines.push({venue: "ICSE 2025 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2024, 8 - 1, 2, 23, 59, 59, 0), note: "Submissions Deadline", 
//                 notification: new Date(2024, 11 - 1, 1, 23, 59, 59, 0), url: "https://conf.researchr.org/track/icse-2025/icse-2025-research-track"});
// deadlines.push({venue: "FSE 2025", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2023, 9 - 1, 5, 23, 59, 59, 0), note: "Full paper submission", 
//                 notification: new Date(2023, 1 - 1, 14, 23, 59, 59, 0), url: "https://conf.researchr.org/track/fse-2025/fse-2025-papers"});
// deadlines.push({venue: "PLDI 2024", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2023, 11 - 1, 16, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2024, 2 - 1, 26, 23, 59, 59, 0), url: "https://pldi24.sigplan.org"});
// deadlines.push({venue: "ISSTA 2024 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), note: "Technical Papers due", 
//                 notification: new Date(2024, 3 - 1, 2, 23, 59, 59, 0), url: "https://2024.issta.org/track/issta-2024-papers"});
// deadlines.push({venue: "ICSE 2025 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2024, 3 - 1, 22, 23, 59, 59, 0), note: "Submissions Deadline", 
//                 notification: new Date(2024, 7 - 1, 5, 23, 59, 59, 0), url: "https://conf.researchr.org/track/icse-2025/icse-2025-research-track"});
// deadlines.push({venue: "ISSTA 2024 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2024, 4 - 1, 12, 23, 59, 59, 0), note: "Technical Papers due", 
//                 notification: new Date(2024, 7 - 1, 3, 23, 59, 59, 0), url: "https://2024.issta.org/track/issta-2024-papers"});
// deadlines.push({venue: "OOPSLA 2024 - Second round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2024, 4 - 1, 5, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2024, 7 - 1, 15, 23, 59, 59, 0), url: "https://2024.splashcon.org/track/splash-2024-oopsla"});
// deadlines.push({venue: "ISSRE 2022", rank: "CCF-B", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2022, 5 - 1, 13, 23, 59, 59, 0), note: "Abstract submission deadline", 
//                 notification: new Date(2022, 7 - 1, 29, 23, 59, 59, 0), url: "https://issre2022.github.io/calls_cfp-research.html"});
// deadlines.push({venue: "ACSAC 2023", rank: "CCF-B", area: "网络与信息安全", 
//                 deadline: new Date(2023, 5 - 1, 26, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2023, 7 - 1, 6, 23, 59, 59, 0), url: "https://www.acsac.org/2023/submissions/papers"});
// deadlines.push({venue: "SANER 2024", rank: "CCF-B", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2023, 10 - 1, 29, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), url: "https://conf.researchr.org/track/saner-2024/saner-2024-papers"});
// deadlines.push({venue: "OOPSLA 2024 - First round", rank: "CCF-A", area: "软件工程/系统软件/程序设计语言", 
//                 deadline: new Date(2023, 10 - 1, 20, 23, 59, 59, 0), note: "Paper Submission", 
//                 notification: new Date(2023, 12 - 1, 15, 23, 59, 59, 0), url: "https://2024.splashcon.org/track/splash-2024-oopsla"});

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
