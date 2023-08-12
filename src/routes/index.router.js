import { Router } from "express";
import BusinessRouter from "./api/business.router.js"
import UsuarioRouter from "./api/usurios.router.js";
import OrdersRouter from "./api/orders.router.js";
import DomiciliosRouter from "./api/domicilios.router.js";
import ViewsRouter from "./views/views.router.js";
import SessionsRouter from "./api/sessions.js";
const router = Router()
router.use('/api/sessions', BusinessRouter, UsuarioRouter, OrdersRouter, DomiciliosRouter, SessionsRouter)
router.use('/api', ViewsRouter)
router.get('*', (req, res) => { 
    //req.logger.error('Esto fue un error')
    res.status(404).json({ error: 'Endpoint not found' }) })
export default router;