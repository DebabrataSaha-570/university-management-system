import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = Router();

router.use('/users', UserRoutes);
router.use('/students', StudentRoutes);
router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;
