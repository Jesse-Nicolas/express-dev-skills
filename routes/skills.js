import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

router.get('/', skillsCtrl.index)

// GET - localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

// GET - localhost:3000/skills/:id
router.get('/:id', skillsCtrl.show)

// GET - localhost:3000/skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit)

// POST - localhost:3000/skills/create
router.post('/', skillsCtrl.create)

// DELETE - localhost:3000/skills/:id/delete
router.delete('/:id', skillsCtrl.delete)

// PUT - localhost:3000/skills/:id/update
router.put('/:id', skillsCtrl.update)

export  {
  router
}