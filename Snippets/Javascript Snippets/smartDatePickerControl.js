/**
  * Smart functionality for https://github.com/eternicode/bootstrap-datepicker that updates start/end dates to agree with one another
  *
  * @author Fleming Slone [https://github.com/fslone]
 */
function _initDateRangeControls($startDate, $endDate, onChangeCallback, skipDateSet) {
  //initialize date pickers
  var datePickerOptions = {
    endDate: Date.today(),
    todayBtn: "linked",
    autoclose: true
  };
  $startDate.datepicker(datePickerOptions);
  $endDate.datepicker(datePickerOptions);

  //set start date default to this monday unless skip is true
  if(!skipDateSet){
    var dayToSet;
    if (Date.today().is().sunday()) dayToSet = "last monday";
    else dayToSet = "monday";
    $startDate.val(Date.parse(dayToSet).toString("MM/dd/yyyy"));
  }

  //handle datepicker changes
  $startDate.on("change", function(event) {
    _validateDateRange($startDate, $endDate, "start");

    if (onChangeCallback) {
      onChangeCallback.call();
    }
  });
  $endDate.on("change", function(event) {
    _validateDateRange($startDate, $endDate, "end");

    if (onChangeCallback) {
      onChangeCallback.call();
    }
  });
}