db.Students.aggregate([
  { $group: { _id: "$level", minAge: { $min: "$age" } } },
]);
