db.Students.aggregate([
  { $match: { salary: { $gt: 7000 } } },
  { $group: { _id: null, count: { $sum: 1 } } },
]);
