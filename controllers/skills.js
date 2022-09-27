import { Skill } from '../models/skill.js'

function index(req, res)  {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills: skills,
      time: req.time
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newSkill(req, res)  {
  console.log('your hitting the router!')
  res.render('skills/new')
}

function create(req, res) {
  console.log(req.body)
  Skill.create(req.body)
  .then(skill =>  {
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res) {
  Skill.findById(req.params.id)
  .then(skill =>  {
    res.render('skills/show',  {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  Skill.findByIdAndDelete(req.params.id)
  .then(skill =>  {
    res.redirect('/skills')
  })
}

function edit(req, res) {
  Skill.findById(req.params.id)
  .then(skill =>  {
    res.render('skills/edit', {
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function update(req, res) {
  console.log('COMING FROM UPDATE CONTROLLER FUNCTION', req.body)
  req.body.mastered = !!req.body.mastered
  Skill.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(skill =>  {
    console.log('UPDATED SKILL', skill)
    res.redirect(`/skills/show`)
  })
  .catch(error => {
    console.log(error) 
    res.redirect('/skills')
  })
}

export  {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
  edit,
  update,
}