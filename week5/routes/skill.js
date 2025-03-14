const express = require('express')

const router = express.Router()
const { dataSource } = require('../db/data-source')
const logger = require('../utils/logger')('Skill')

const { isValidString } = require('../utils/validUtils')

router.get('/', async (req, res, next) => {
  try {
    
  } catch (error) {
    logger.error(error)
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    
  } catch (error) {
    logger.error(error)
    next(error)
  }
})

router.delete('/:skillId', async (req, res, next) => {
  try {
    
  } catch (error) {
    logger.error(error)
    next(error)
  }
  
})

module.exports = router
