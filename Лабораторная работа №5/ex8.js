db.EMPLOYEE_BLANK.find(
  {
    email: { $in: [/a.*@/, /v.*@/] },
    hobbies: { $exists: true },
  },
  {
    _id: 1,
    name: 1,
    sername: 1,
    father_name: 1,
    email: 1,
    count_of_hobbies: { $size: "$hobbies" },
  }
);
