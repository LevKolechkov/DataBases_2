db.Students.insertMany([
  {
    first_name: "Владимир",
    middle_name: "Дмитриевич",
    last_name: "Медведев",
    year_of_birthday: 2001,
    course: 2,
    studying_orientation: "Philosophy",
    group: "PS-221",
    list_of_languages: ["Russian", "Greek", "German", "Latin", "Italian"],
    list_of_dicsiplines: [
      {
        name: "Mathematics",
        semester: 2,
        score: 3,
      },
      {
        name: "Philosophy",
        semester: 4,
        score: 5,
      },
      { name: "Latin", semester: 3, score: 4 },
    ],
  },
  {
    first_name: "Александр",
    middle_name: "Сергеевич",
    last_name: "Иванов",
    year_of_birthday: 2002,
    course: 1,
    studying_orientation: "Computer Science",
    group: "CS-101",
    list_of_languages: ["Russian", "English"],
    list_of_dicsiplines: [
      {
        name: "Programming Fundamentals",
        semester: 1,
        score: 4,
      },
      {
        name: "Data Structures",
        semester: 2,
        score: 5,
      },
      { name: "Web Development", semester: 3, score: 4 },
    ],
  },
  {
    first_name: "Екатерина",
    middle_name: "Александровна",
    last_name: "Смирнова",
    year_of_birthday: 2000,
    course: 3,
    studying_orientation: "Biology",
    group: "BIO-301",
    list_of_languages: ["Russian", "English", "German"],
    list_of_dicsiplines: [
      {
        name: "Genetics",
        semester: 2,
        score: 5,
      },
      {
        name: "Ecology",
        semester: 3,
        score: 4,
      },
      { name: "Microbiology", semester: 4, score: 5 },
    ],
  },
  {
    first_name: "Мария",
    middle_name: "Игоревна",
    last_name: "Петрова",
    year_of_birthday: 2003,
    course: 1,
    studying_orientation: "Linguistics",
    group: "LN-102",
    list_of_languages: ["Russian", "English", "Spanish", "German"],
    list_of_dicsiplines: [
      {
        name: "Phonetics",
        semester: 1,
        score: 4,
      },
      {
        name: "Syntax",
        semester: 2,
        score: 5,
      },
      { name: "Semantics", semester: 3, score: 4 },
    ],
  },
]);
