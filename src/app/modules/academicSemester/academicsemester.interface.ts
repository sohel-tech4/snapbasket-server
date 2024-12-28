export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TName = "Automn" | "Summer" | "Fall";

export type TCode = "01" | "02" | "03";

export type TacademicSemester = {
  name: TName;
  code: TCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};
