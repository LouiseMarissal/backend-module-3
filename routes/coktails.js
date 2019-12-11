const express = require("express");
const cocktailModel = require("./../models/Cocktail");
const TagModel = require("./../models/Tag");
const userModel = require("./../models/User");
const router = express.Router();
const uploadCloud = require("./../config/cloudinary");

// Show Cocktails

// router.get("/", (req, res) => {
//   cocktailModel
//     .find({
//       $text: {
//         $search: `.*${req.query.query}.*`,
//         $caseSensitive: false
//       }
//     })
//     .populate("tag")
//     .then(dbRes => {
//       res.status(200).send(dbRes);
//     })
//     .catch(dbErr => {
//       console.log(dbErr);
//       res.status(500).send(dbErr);
//     });
// });

router.get("/", (req, res) => {
  // return res.send("yo");
  cocktailModel
    .find({
      $or: [
        { Name: { $regex: `.*${req.query.query}.*`, $options: "i" } },
        { Tags: { $regex: `.*${req.query.query}.*`, $options: "i" } },
        { Ingredients: { $regex: `.*${req.query.query}.*`, $options: "i" } }
      ]
    })
    .populate("tag")
    .then(dbRes => {
      let favAndSearch = {};
      let cocktailsWithFavorites = [];
      if (req.session.currentUser) {
        const userId = req.session.currentUser;
        userModel.findById(userId).then(dbRes2 => {
          const user = dbRes2;
          const allCocktails = dbRes;
          // console.log(user);
          if (user) {
            cocktailsWithFavorites = allCocktails.filter(cocktail => {
              return user.favorites.includes(cocktail._id);
            });
          }
          res.send({ dbRes, cocktailsWithFavorites });
          // res.status(200).send("todo");
        });
      }
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
});

// router.get("/userpro-cocktail", (req, res) => {
//   cocktailModel
//     .find({
//       UserProID: req.params.id
//     })
//     .then(dbRes => {
//       res.status(200).send(dbRes);
//     })
//     .catch(dbErr => {
//       res.status(500).send(dbErr);
//     });
// });

// router.get("/userFav", (req, res) => {
//   const userId = req.session.currentUser;
//   userModel
//     .findById(userId)
//     .then(dbRes => {
//       const user = dbRes;
//       cocktailModel.find().then(dbRes => {
//         const allCocktails = dbRes;
//         const coktailsWithFavorites = allCocktails.map(cocktail => {
//           const copy = cocktail.toJSON();
//           copy.isFavorite = user.Favorites && user.Favorites.includes(copy._id);
//           console.log(copy);
//           return copy;
//         });
//       });
//     })
//     .catch(dbErr => console.log(dbErr));
// });

// Show One Cocktail
router.get("/:id", (req, res) => {
  cocktailModel
    .findById(req.params.id)
    .populate("tag")
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

//FindByUserId
router.get("/profile/edit-cocktail/:id", (req, res) => {
  // userModel
  //   .findById(req.params.id)
  //   .then(dbRes => {
  // res.status(200).send(dbRes);
  // console.log("'iiiiici");
  cocktailModel
    .findById(req.params.id)
    .populate("cocktail")
    .then(dbRes => {
      console.log(dbRes);
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
  // })
  // .catch(dbErr => {
  //   console.log;
  //   res.status(500).send(dbErr);
  // });
});

// Create one Cocktail
router.post("/", uploadCloud.single("Image"), (req, res) => {
  if (req.file) {
    req.body.Image = req.file.secure_url;
  }
  const newCocktail = { ...req.body, UserProID: req.session.currentUser };
  cocktailModel
    .create(newCocktail)
    .then(dbRes => {
      res.status(201).send(dbRes);
    })
    .catch(dbErr => {
      console.log(dbErr);
      res.status(500).send(dbErr);
    });
  // res.send("Ok");
});
// // findbyId cocktail and update
router.patch(
  "/profile/edit-cocktail/:id",
  uploadCloud.single("Image"),

  (req, res) => {
    console.log("coucou ici");
    if (req.file) req.body.Image = req.file.secure_url;
    cocktailModel
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(dbRes => {
        res.status(200).send(dbRes);
      })
      .catch(dbErr => {
        res.status(500).send(dbErr);
      });
  }
);
// findbyId and update
// router.patch("/:id", (req, res) => {
//   cocktailModel
//     .findByIdAndUpdate(req.params.id, req.body)
//     .then(dbRes => {
//       res.status(200).send(dbRes);
//     })
//     .catch(dbErr => {
//       res.status(500).send(dbErr);
//     });
// });

// Delete cocktails
router.delete("/:id", (req, res) => {
  cocktailModel
    .findByIdAndDelete(req.params.id)
    .then(dbRes => {
      res.status(200).send(dbRes);
    })
    .catch(dbErr => {
      res.status(500).send(dbErr);
    });
});

// Like a cocktail
router.patch("/addLike/:id", (req, res) => {
  cocktailModel
    .findByIdAndUpdate(req.params.id, { $inc: { Like: +1 } }, { new: true })
    .then(dbRes => {
      //res.status(200).send(dbRes);
      userModel
        .findByIdAndUpdate(req.session.currentUser, {
          $addToSet: { favorites: req.params.id }
        })
        .then(dbRes2 => res.status(200).send(dbRes));
    })
    .catch(dbErr => res.status(500).send(dbErr));
});

// Remove like
router.patch("/removeLike/:id", (req, res) => {
  cocktailModel
    .findByIdAndUpdate(req.params.id, { $inc: { Like: -1 } }, { new: true })
    .then(dbRes => {
      res.status(200).send(dbRes);
      userModel.findByIdAndUpdate(req.session.currentUser, {
        $pull: { favorites: req.params.id }
      });
    })
    .catch(dbErr => res.status(500).send(dbErr));
});

module.exports = router;
