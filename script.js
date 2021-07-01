$(document).ready(function() {
    var weekStart, weekEnd;
    function completeWeek() {
        window.setTimeout(function(){
            $(".ui-datepicker-current-day a").addClass("ui-state-active");
        },1);
    }
   $("#weekpicker").datepicker({
       showOtherMonths:true,
       selectOtherMonths:true,
       onSelect:function(selectedDate, instance){
           var myDate = new Date(selectedDate);
           weekStart = new Date(myDate.getFullYear(),
           myDate.getMonth(), myDate.getDate()-
           myDate.getDay());
           weekEnd = new Date(myDate.getFullYear(),
           myDate.getMonth(), myDate.getDate()-
           myDate.getDay()+6);
           var dateFormat = "dd/mm/yy";
           $("#start").text($.datepicker.formatDate(dateFormat, weekStart));
           $("#end").text($.datepicker.formatDate(dateFormat, weekEnd));
           completeWeek();
       },
       beforeShowDay:function(date){
           console.log(date);
           var cssClass = "";
           if(date >= weekStart && date <= weekEnd)
           cssClass = "ui-datepicker-current-day";
           return [true, cssClass];
       },
       onChangeMonthYear:function(){
           completeWeek();
       }
   });
});
 


