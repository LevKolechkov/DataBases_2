db.Students.aggregate([
  { $match: { skills: "Python" } },
  { $unwind: "$skills" },
  { $match: { skills: { $ne: "Python" } } },
  { $group: { _id: "Skills", quantity: { $addToSet: "$skills" } } },
]);
