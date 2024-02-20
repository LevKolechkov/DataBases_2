// Получаем элемент таблицы, куда будем выводить расписание
var scheduleTable = document.getElementById("scheduleTable");

var scheduleData = [
  {
    time: "9:45-11:45",
    activity: "Спортивные игры (по выбору) (пр)\n" + "Спортивный зал пантера ",
  },
  {
    time: "11:45-13:20",
    activity:
      "Введение в финансовую математику (по выбору) (пр)\n" + "ауд. 5401 ",
  },
  {
    time: "13:30-15:05",
    activity:
      "чет. Введение в финансовую математику (по выбору) " +
      "ауд. 2226 " +
      "| неч. Социальная психология (пр) " +
      "ауд. 2226 ",
  },
  {
    time: "15:30-17:05",
    activity:
      "чет. Прикладная статистика (пр)\n" +
      "ауд. 2141 " +
      "| неч. Компьютерные сети (л)\n" +
      "ауд. 2226",
  },
];

// Создаем строки таблицы на основе данных расписания
scheduleData.forEach(function (item) {
  var row = scheduleTable.insertRow();
  var timeCell = row.insertCell(0);
  var activityCell = row.insertCell(1);

  timeCell.textContent = item.time;
  activityCell.textContent = item.activity;
});
