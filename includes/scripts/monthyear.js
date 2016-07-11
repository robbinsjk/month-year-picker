$(document).ready(function () { 

  $('#monthyear').val('');
  $('#monthyearalt').val('');

  $('#monthyear').datepicker({
    dateFormat: 'MM yy',
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    altField: "#monthyearalt",
    altFormat: "yyMM",
    defaultDate: new Date(),
    onClose: function (dateText, instance) {
      var month = $('#ui-datepicker-div .ui-datepicker-month :selected').val();
      var year = $('#ui-datepicker-div .ui-datepicker-year :selected').val();
      $(this).val($.datepicker.formatDate('MM yy', new Date(year, month)));
      $('#monthyearalt').val($.datepicker.formatDate('yymm', new Date(year, month)));
    }
  });

});


