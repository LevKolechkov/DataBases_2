db.Students.aggregate([
  { $group: { _id: "$level", averageSalary: { $avg: "$salary" } } },
  { $sort: { averageSalary: 1 } },
]);
