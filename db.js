const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://onlineshopping:<fatma12345>@cluster0-oo5rx.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.info('connected successfully to MongoDB');
})
.catch(err => {
    console.error(`error while connection to mongo`, err);
});