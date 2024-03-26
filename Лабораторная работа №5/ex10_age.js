db.EMPLOYEE_BLANK.aggregate([
  { $match: { date_of_birth: { $exists: true } } },
  {
    $project: {
      _id: 1,
      name: 1,
      sername: 1,
      father_name: 1,
      email: 1,
      telephone_number: 1,
      date_of_birth: {
        $arrayElemAt: [{ $split: ["$date_of_birth", ": "] }, 1], // Разделяем строку по ": " и берем вторую часть
      },
      hobbies: 1,
      prikaz: 1,
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      sername: 1,
      date_of_birth: 1,
      diff: {
        $dateDiff: {
          startDate: { $toDate: "$date_of_birth" },
          endDate: { $toDate: "26.03.2024" },
          unit: "year",
        },
      },
    },
  },
  {
    $match: {
      diff: { $gte: 30 },
    },
  },
]);
