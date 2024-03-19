db.Students.aggregate([
  {
    $match: {
      level: "Middle",
    },
  },
  {
    $group: {
      _id: "$level",
      averageAge: { $avg: "$age" },
    },
  },
]);
