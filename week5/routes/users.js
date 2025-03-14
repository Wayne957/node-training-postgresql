const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()
const { dataSource } = require('../db/data-source')
const logger = require('../utils/logger')('User')
const { isValidString, isValidPassword } = require('../utils/validUtils')

const saltRounds = 10

router.post('/signup', async (req, res, next) => {
   try {
    const { name, email, password } = req.body;
    if (!isValidString(name) || !isValidString(email) || !isValidString(password)) {
        res.status(400).json({
            status : "failed",
            message: "欄位未填寫正確"
        })
        return
    }
    if (!isValidPassword(password)){
        res.status(400).json({
            status : "failed",
            message: "密碼不符合規則，需要包含英文數字大小寫，最短8個字，最長16個字"
        })
        return
    }
    
    res.status(201).json({
      status : "success",
      data: {
        user: {
          id: 'result.id',
          name: 'result.name'
        }
      }
    })
   } catch (error) {
    logger.error(error)
    next(error)
   }
})

module.exports = router