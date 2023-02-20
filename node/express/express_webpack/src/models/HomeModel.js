const { default: mongoose } = require("mongoose");

const HomeSchema = new mongoose.Schema({
  
  titulo: {
    type: String,
    required: true
  },

  descricao: {
    type: String,
    required: true
  }

});

class Home {

}

module.exports = Home;