import express from 'express'
import { log } from '../../middlewares/logger.middleware.js'
import { getBoards, getBoardById, addBoard, updateBoard, removeBoard } from './board.controller.js'

export const boardRoutes = express.Router()

boardRoutes.get('/', log, getBoards)
boardRoutes.get('/:id', getBoardById)
boardRoutes.post('/', addBoard)
boardRoutes.put('/:id', updateBoard)
boardRoutes.delete('/:id', removeBoard)