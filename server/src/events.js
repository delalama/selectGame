const express = require('express');
const { type } = require('os');

/*TEMA SEGURIDAD , SANEAR CUALQUIER ENTRADA DE DATOS*/
function createRouter(db) {
    const router = express.Router();
    const owner = '';


/*FLAGS*/
        router.get('/flags', function (req, res, next) {
          level = req.query.level;
           query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.flags WHERE dif = '+level+'';
                  db.query(
                      query,
                      [owner, 10*(req.params.page || 0)],
                      (error, results) => {
                          if (error) {
                              res.status(500).json({status: 'error'});
                          } else {
                              res.status(200).json(results);
                          }
                      }
                  );
              });


/*ACTORS*/
        router.get('/actors', function (req, res, next) {
          level = req.query.level;
           query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.actors WHERE dif = '+level+'';
                  db.query(
                      query,
                      [owner, 10*(req.params.page || 0)],
                      (error, results) => {
                          if (error) {
                              res.status(500).json({status: 'error'});
                          } else {
                              res.status(200).json(results);
                          }
                      }
                  );
              });

/*topFootballPlayers*/
router.get('/topFootballPlayers', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.topFootballPlayers WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });

/*topAthletes*/
router.get('/topAthletes', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.topAthletes WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });


/*mobilesAllTime*/
router.get('/mobilesAllTime', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.mobilesAllTime WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });

/*mobilesAllTime*/
router.get('/mobilesNokia', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.mobilesNokia WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });

/*appleIphones*/
router.get('/appleIphones', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.appleIphones WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });

        
/*appleWatches*/
router.get('/appleWatches', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.appleWatches WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });

        
/*sportCars*/
router.get('/sportCars', function (req, res, next) {
    level = req.query.level;
     query = 'SELECT id, name ,link, dif type FROM sebabeunfollon.sportCars WHERE dif = '+level+' ';
            db.query(
                query,
                [owner, 10*(req.params.page || 0)],
                (error, results) => {
                    if (error) {
                        res.status(500).json({status: 'error'});
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        });








    return router;
            
}


module.exports = createRouter;
