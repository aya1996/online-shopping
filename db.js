const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://aya:admin@cluster0-ezqma.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=>{
    console.info('connected successfully to MongoDB');
})
.catch(err => {
    console.error(`error while connection to mongo`, err);
});
