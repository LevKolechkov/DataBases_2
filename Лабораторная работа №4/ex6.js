db.Students.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills" } },
  { $group: { _id: "Skills", countOfSkills: { $sum: 1 } } },
]);
