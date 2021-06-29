$(document).ready(function() {
    var weekStart, weekEnd;
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
       },
       beforeShowDay:function(date){
           var cssClass = "";
           if(date >= weekStart && date <= weekEnd)
           css = "ui-datepicker-current-day";
           return [true, cssClass];
       }
   });
});



