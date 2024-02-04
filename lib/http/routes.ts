import { Request, Response, Express } from "express";
//import { prisma }  from "../app";
//import { json } from "stream/consumers";
import { FilmController } from "../controllers/film";

export class Routes {

    public static buildRoutes(app: Express) {

        app.route('/').get((req: Request, res: Response) => {
            console.log(req.query);
            res.json({result: "success"})
        })

          // Route pour récupérer tous les films
        app.route('/films').get((req: Request, res: Response) => {
            const controller = new FilmController();
            controller.allFilms(req, res);
        })

          // Route pour ajouter un film
        app.route('/films').post((req: Request, res: Response) => {
            const controller = new FilmController();
            controller.addFilm(req, res);
        });

          // Route pour mettre à jour un film
        app.route('/films/:id').put((req: Request, res: Response) => {
            const controller = new FilmController();
            controller.updateFilm(req, res);
        });

          // Route pour supprimer un film
        app.route('/films/:id').delete((req: Request, res: Response) => {
            const controller = new FilmController();
            controller.remove(req, res);
        })
        
    }
}