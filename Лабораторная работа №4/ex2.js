db.Students.aggregate([
  {
    $group: {
      _id: null,
      maxSalary: { $max: "$salary" },
      minSalary: { $min: "$salary" },
    },
  },
]);
