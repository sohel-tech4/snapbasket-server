import {
  TAcademicSemesterCode,
  TMonths,
  TAcademicSemesterName,
  TacademiesSemesterNameCodeMapper,
} from "./academicsemester.interface";

export const SemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];

export const Months: TMonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const SemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];

export const academiesSemesterNameCodeMapper : TacademiesSemesterNameCodeMapper = {
  Autumn : '01',
  Summar : '02',
  Fall : '03'
}
