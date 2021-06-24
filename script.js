$(document).ready(function() {
   $("#weekpicker").datepicker({
       showOtherMonths:true,
       selectOtherMonths:true,
       onSelect:function(selectedDate, instance){
           console.log(selectedDate);
           var myDate = new Date(selectedDate);
           console.log(MyDate);
       }
   });
});



