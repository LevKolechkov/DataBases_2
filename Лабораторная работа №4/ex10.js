db.Students.aggregate([
  {
    $group: {
      _id: "$level",
      min_salary: { $min: "$salary" },
      max_salary: { $max: "$salary" },
    },
  },
  {
    $project: {
      _id: 0,
      info: {
        $concat: [
          "$_id",
          ". Минимальная зарплата: ",
          { $toString: "$min_salary" },
          ". Максимальная зарплата: ",
          { $toString: "$max_salary" },
        ],
      },
    },
  },
  {
    $group: {
      _id: "Salary Info",
      salaryInfo: { $push: "$info" },
    },
  },
]);
