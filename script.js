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
           console.log(weekEnd);
       }
   });
});



