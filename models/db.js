const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin123:admin123@employeedb-kqf5k.mongodb.net/testemployees?retryWrites=true', {useNewUrlParser: true}, (err) => {
    if (!err) {console.log('MongoDB connection succeeded...')}
    else {console.log('Error in DB connection...')}
})

require('./employee.model')