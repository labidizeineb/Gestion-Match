// import express module
const express = require("express");
// import body-parser module
const bodyParser = require("body-parser");
//import bcrypt module
const bCrypt = require("bcrypt");
//import module json web session
const jwt = require("jsonwebtoken");
//import module express session
const session = require("express-session");

//import mongoose module
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
//importation du module multer pour lire les fichier(image,video,audio)
const multer = require("multer");
//importation du module path(interne : pas d'installation)
const path = require("path");
const weatherRouter=require("./routes/weather-router");
const matchesRouter=require("./routes/matches-router");
// create express application
const app = express();
// Configuration  :
// 1) Send JSON responses
app.use(bodyParser.json());
// 2) Get object from request
app.use(bodyParser.urlencoded({ extended: true }));
// configuration des images
app.use("/avatars", express.static(path.join("backend/images")));

// 3) Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});
// Session Configuration
const secretKey = "ca 1920";
app.use(
  session({
    secret: secretKey,
  })
);
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};
//multer configuration : FileName and destination
const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
  const isValid = MIME_TYPE[file.mimetype];
  let error = new Error("Mime type is invalid");
  if (isValid) {
  error = null;
}
cb(null, "backend/images")
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(" ").join("-");
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + "-crococoder-" + "." + extension;
cb(null, imgName);
}
});

//
//
// Models Importation

const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
const Stadium = require("./models/stadium");

// Business Logic :players
// Business Logic :Get All players
app.get("/api/players", (req, res) => {
  console.log("Here into BL : Get All Players");
  Player.find().then((docs) => {
    res.json({ players: docs });
  });
});
// Business Logic : Get player by Id
app.get("/api/players/:id", (req, res) => {
  console.log("Here into BL : Get Player by Id");
  let id = req.params.id;
  Player.findOne({ _id: id }).then((doc) => {
    res.json({ player: doc });
  });
});
// Business Logic : Delete player by Id
app.delete("/api/players/:id", (req, res) => {
  let id = req.params.id;
  Player.deleteOne({ _id: id }).then((isDeleted) => {
    isDeleted.deletedCount
      ? res.json({ playerIsDeleted: true })
      : res.json({ playerIsDeleted: false });
  });
});
// Business Logic : Add player

app.post("/api/players", multer({ storage: storageConfig }).single("img") , (req, res) => {
  req.body.imgPlayer=`http://localhost:3000/avatars/${req.file.filename}`;
 
   try {
    Team.findById(req.body.tId).then((team) => {
      if (!team) {
        return res.json({ message: "Team not found" });
      }
      
      const player = new Player({
        name: req.body.name,
        number: req.body.number,
        position: req.body.position,
        age: req.body.age,
        tId: team._id,
        imgPlayer : req.body.imgPlayer,
      });
      player.save((err, doc) => {
        team.players.push(player);
        team.save();
        res.json({ message: " Player is Saved" });
      });
    });
  } catch (error) {
    res.json({ message: `Catched error :  ${error}` });
  }
}
  
 
);

// Business Logic : Update player
app.put("/api/players", (req, res) => {
  Player.updateOne({ _id: req.body._id }, req.body).then((updateResult) => {
    updateResult.nModified
      ? res.json({ PlayerIsUpdated: true })
      : res.json({ PlayerIsUpdated: false });
  });
});

// Business Logic :teams
// Business Logic :Get All teams
app.get("/teams", (req, res) => {
  Team.find().then((docs) => {
    res.json({ teams: docs });
  });
});
//Busniss Logic : Get All players by team ID
app.get("/api/players/teams/:id", (req, res) => {
  console.log("here into BL : Get All Players By Team Id", req.params.id);
  // find team by ID
  Team.findById(req.params.id)
    //find all players in this team
    .populate("players")
    // team is not found
    .then((team) => {
      if (!team) {
        return res.status(404).json({ message: "Team not found" });
      }
      res.json({ teamPlayers: team.players });
    });
});

// Business Logic : Search team by name
app.get("/teams/:name", (req, res) => {
  let name = req.params.name;
  Team.findOne({ name: name }).then((doc) => {
    res.json({ teamSerach: doc });
  });
});
// Business Logic : Get team by id
app.get("/teams/searchById/:id", (req, res) => {
  let id = req.params.id;
  Team.findOne({ _id: id }).then((doc) => {
    res.json({ team: doc });
  });
});
// Business Logic : Get team by stadium
app.get("/teams/search/:stadium", (req, res) => {
  let stadium = req.params.stadium;
  Team.findOne({ stadium: stadium }).then((doc) => {
    res.json({ teamSearchByStadium: doc });
  });
});
// Business Logic : Delete team by Id
app.delete("/teams/deleteById/:id", (req, res) => {
  let id = req.params.id;
  Team.deleteOne({ _id: id }).then((isDeleted) => {
    isDeleted.deletedCount
      ? res.json({ TeamIsDeleted: true })
      : res.json({ TeamIsDeleted: false });
  });
});
// Business Logic : Delete all teams
app.delete("/teams", (req, res) => {
  Team.deleteMany().then((isDeletedMany) => {
    console.log("here into BL : Delete ALL Teams", isDeletedMany);
  });
});

// Business Logic : Add team
app.post("/teams",  multer({ storage: storageConfig }).single("img") , (req, res) => {
  req.body.logoTeam=`http://localhost:3000/avatars/${req.file.filename}`;
  let team = new Team(req.body);
  team.save((err, doc) => {
    if (err) {
      res.json({ objectIsAdded: false });
    } else {
      res.json({ objectIsAdded: true });
    }
  });
});
// Business Logic : Update team
app.put("/teams", (req, res) => {
  Team.updateOne({ _id: req.body._id }, req.body).then((updateResult) => {
    updateResult.nModified
      ? res.json({ isUpdated: true })
      : res.json({ isUpdated: false });
  });
});
//
//
//
// Business Logic :stadium
// Business Logic :Get All stadiums
app.get("/stadiums", (req, res) => {
  console.log("Here into BL : Get All stadiums");
  Stadium.find().then((docs) => {
    res.json({ stadiums: docs });
  });
});
// Business Logic : Search stadium by name
app.get("/stadiums/:name", (req, res) => {
  console.log("Here into BL : Get stadium by Name");
  let name = req.params.name;

  Stadium.findOne({ name: name }).then((doc) => {
    res.json({ stadiumSerach: doc });
  });
});
// Business Logic : Get stadium by id
app.get("/stadiums/searchStadiumById/:id", (req, res) => {
  let id = req.params.id;
  Stadium.findOne({ _id: id }).then((doc) => {
    res.json({ stadium: doc });
  });
});
// Business Logic : Get stadium by capacity
app.get("/stadiums/searchByCapacity/:capacity", (req, res) => {
  console.log("Here into BL : Get staduim by capacity");
  let capacity = req.params.capacity;
  Stadium.findOne({ capacity: capacity }).then((doc) => {
    res.json({ stadiumSearchByCapacity: doc });
  });
});
// Business Logic : Delete stadium by Id
app.delete("/stadiums/deleteStadiumById/:id", (req, res) => {
  let id = req.params.id;
  Stadium.deleteOne({ _id: id }).then((isDeleted) => {
    isDeleted.deletedCount
      ? res.json({ stadiumIsDeleted: true })
      : res.json({ stadiumIsDeleted: false });
  });
});
// Business Logic : Delete all stadiums
app.delete("/stadiums", (req, res) => {
  Stadium.deleteMany().then((isDeletedMany) => {
    console.log("here into BL : Delete ALL Stadiums", isDeletedMany);
  });
});
// Business Logic : Add stadium
app.post("/stadiums", (req, res) => {
  console.log("Here into BL : Add stadium ", req.body);
  let stadium = new Stadium(req.body);
  stadium.save();
  res.json({ stadiumIsAdded: true });
});
// Business Logic : Update stadium
app.put("/stadiums", (req, res) => {
  Stadium.updateOne({ _id: req.body._id }, req.body).then((updateResult) => {
    updateResult.nModified
      ? res.json({ stadiumIsUpdated: true })
      : res.json({ stadiumIsUpdated: false });
  });
});
//
//
//
// Business Logic : users
// Business Logic : Get All users
app.get("/users", (req, res) => {
  console.log("Here into BL : Get All users");
  User.find().then((docs) => {
    res.json({ users: docs });
  });
});
// Business Logic : Add user(signup)
app.post("/users/signup", multer({ storage: storageConfig }).single("img") , (req, res) => {
  console.log("Here into BL : Add user ", req.body);

  bCrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
    console.log("here pwd crypted ", cryptedPwd);
    req.body.pwd = cryptedPwd;
    req.body.avatar=`http://localhost:3000/avatars/${req.file.filename}`;
    let user = new User(req.body);
    user.save((err, doc) => {
      if (err) {
        if (err.errors.email) {
          res.json({ message: 0 });
        }
      } else {
        res.json({ message: 1 });
      }
    });
  });
});
// Business Logic : Search user by email && pwd
app.post("/users/login", (req, res) => {
  let user;
  User.findOne({ email: req.body.email })
    .then((doc) => {
      //
      if (!doc) {
        // send response 0 : check your email
        //Send Response 1 : Please check your pwd
        //Send Response 2 : Welcome
        res.json({ msg: "0" });
        // user is founded by email
      } else {
        user = doc;
        // compare crypted pwd and req.body.pwd
        return bCrypt.compare(req.body.pwd, doc.pwd);
      }
    })
    // get the result of bCrypt.compare
    .then((pwdResult) => {
      // pwd and cryptedPwd are  equals
      if (pwdResult) {
        let userToSend = {
          firstName: user.firstName,
          lastName: user.lastName,
          email : user.email,
          role: user.role,
          image : user.avatar ,
          id: user._id,
        };
        const token = jwt.sign(userToSend, secretKey, { expiresIn: "24h" });
        // send response 2 : Welcome to Our Site
        res.json({ msg: "2", token: token });
        // pwd and cryptedPwd are  NOT equals
      } else {
        res.json({ msg: "1" });
      }
    });
});

app.post("/imc", (req, res) => {
  console.log("Here into BE : IMC", req.body);
  let message;
  let IMC = req.body.poids / (req.body.taille * req.body.taille * 0.0001);

  if (IMC < 16.5) {
    message = "eleve";
  } else if (IMC >= 16.5 && IMC < 18.5) {
    message = "Accru";
  } else if (IMC >= 18.5 && IMC < 25) {
    message = "Faible";
  } else if (IMC >= 25 && IMC < 30) {
    message = "Accru";
  } else if (IMC >= 30 && IMC < 35) {
    message = "eleve";
  } else if (IMC >= 35 && IMC < 40) {
    message = "Trés elevée";
  } else if (IMC >= 40) {
    message = "Extremement  elevé";
  }

  res.json({ VerifIMC: message, imc: IMC });
});
app.use("/weather",weatherRouter);
app.use("/matches",matchesRouter);

// e48c8fddf6dc7883144db378b52d21f4
// make app impotable from another files
module.exports = app;
