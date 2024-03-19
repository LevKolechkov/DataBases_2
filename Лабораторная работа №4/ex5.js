db.Students.aggregate([
  { $match: { age: { $gte: 20, $lte: 30 } } },
  { $unwind: "$skills" },
  { $group: { _id: "$skills" } },
]);
