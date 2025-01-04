import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { UserRoutes } from "../modules/user/user.route";
import { AcademmicSemesterRoutes } from "../modules/academicSemester/academicsemester.route";
import academicfacultyRoutes from "../modules/academicFaculty/academicfaculty.route";

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
    path: "/academic-faculty",
    route: academicfacultyRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
