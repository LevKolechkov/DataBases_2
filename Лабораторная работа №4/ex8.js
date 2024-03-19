db.Students.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills", count: { $sum: 1 } } },
  {
    $project: {
      _id: 0,
      skillsCount: { $concat: ["$_id", " ", { $toString: "$count" }] },
    },
  },
  { $group: { _id: "Skills List", skillsList: { $push: "$skillsCount" } } },
]);
