'use strict';

const employeeListItems = document.querySelectorAll('ul > li');

const employees = Array.from(employeeListItems).map((item) => {
  return {
    name: item.textContent.trim(),
    position: item.getAttribute('data-position'),
    salary: Number(item.getAttribute('data-salary').replace(/[$,]/g, '')),
    age: item.getAttribute('data-age'),
  };
});

const sortList = function (list) {
  list.sort((a, b) => b.salary - a.salary);
};

const getEmployees = function (list) {
  return list;
};

sortList(employees);
getEmployees(employees);
