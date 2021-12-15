import {getPlanModels,addPlanModels} from "../controllers/plane_model.js";
import {getPlanCab,addPlanCab} from '../controllers/plane_cab.js';
import {getSpclReq,addSpeclReq} from '../controllers/flight_req.js';
import {getMealPlan,addMealPlan} from '../controllers/meal_plan.js';
import { Router } from 'express';
const router = Router();
// get or change plane models
router.get('/get_airplan_models', getPlanModels);
router.post('/add_airplan_models', addPlanModels);
// get or change plane cabinet
router.get('/get_airplan_cab', getPlanCab);
router.post('/add_airplan_cab', addPlanCab);
// get or change flight requirements
router.get('/get_spcl_req', getSpclReq);
router.post('/add_spcl_req', addSpeclReq);

// get or change flight meal plan 
router.get('/get_meal_plan', getMealPlan);
router.post('/add_meal_plan', addMealPlan);
export default router;
