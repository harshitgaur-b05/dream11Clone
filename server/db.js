import mongoose from "mongoose";


  
     mongoose.connect('mongodb+srv://fullpaytmuser:etx8eIp2j25GLjPT@cluster0.jojeyht.mongodb.net/')
    console.log('MongoDB connected');
    const playerSchema = new mongoose.Schema({
        name: String,
        position: String,
        team: String,
        points: Number
      });
     const Player= mongoose.model('Player',playerSchema)
      const teamSchema = new mongoose.Schema({
        name: String,
        players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
      });
      const Team=mongoose.model('Team',teamSchema)



export  {Player,Team}