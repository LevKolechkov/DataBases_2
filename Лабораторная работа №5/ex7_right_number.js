db.EMPLOYEE_BLANK.find({
  telephone_number: /\d{1}\(\d{3}\)\d{3}\-\d{2}\-\d{2}/,
});
