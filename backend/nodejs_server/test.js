import { getPlanModels } from "./controllers/plane_model.js";
// import config from './config.js';
// const env = process.env;
// console.log(config);
// console.log(env.HOST)
getPlanModels().then(res=>{
    console.log(res)
})