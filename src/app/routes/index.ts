import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademmicSemesterRoutes } from "../modules/academicSemester/academicsemester.route";
import { AcademicFacultyRoutes } from "../modules/academicFaculty/academicfaculty.route";
import { AcademicDepartmentRoutes } from "../modules/academicdDepartment/academicdepartment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/academic-semesters",
    route: AcademmicSemesterRoutes,
  },
  {
    path: "/academic-faculties",
    route: AcademicFacultyRoutes,
  },
  {
    path: "/academic-departments",
    route: AcademicDepartmentRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
