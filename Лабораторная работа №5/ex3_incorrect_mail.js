db.EMPLOYEE_BLANK.find({
  email: {
    $nin: [/.*@gmail.com$/, /.*@rambler.ru$/, /.*@yandex.com$/, /.@mail.ru$/],
  },
});
