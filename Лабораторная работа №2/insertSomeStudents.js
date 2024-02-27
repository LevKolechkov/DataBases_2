db.Students.insertMany([
  {
    first_name: "Дмитрий",
    middle_name: "Александрович",
    last_name: "Козлов",
    age: 21,
    course: 3,
    year_of_admission: 2021,
    group: "MM-211",
    list_of_hobbies: ["Chess", "Surfing"],
    list_of_languages: ["Russian", "German", "Chinese"],
  },
  {
    first_name: "Алексей",
    middle_name: "Александрович",
    last_name: "Губанов",
    age: 22,
    course: 2,
    year_of_admission: 2021,
    group: "PY-221",
    list_of_hobbies: ["Dance", "Fishing"],
    list_of_languages: ["Russian", "Hispanic", "Hindi"],
  },
]);
