import multer from "multer";
import path from 'path';
import __dirname from "../utils.js";
const storage = multer.diskStorage({
    destination: path.join(__dirname, './public/img'),
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }

})

export const uploader = multer({storage})