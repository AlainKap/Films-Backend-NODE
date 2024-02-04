import { Request, Response } from "express";
import { prisma } from "../app";

export class FilmController {  

      // Méthode pour récupérer tous les films
    async allFilms(req: Request, res: Response) {
        console.log('Requête GET /films reçue');
        try {
            const types = await prisma.films.findMany({});
            console.log('Données récupérées avec succès :', types);
            return res.json({ data: types });
        } catch (error) {
            console.error('Erreur lors de la récupération des films :', error);
            return res.status(500).json({ error: 'Erreur lors de la récupération des films' });
        }
    }
    
      // Méthode pour ajouter un film
    async addFilm(req: Request, res: Response) {
        const filmData = req.body.films;
    
        if (!filmData) {
            return res.json({ status: 'error', data: 'Veuillez encoder un film valide' });
        }    
        try {
            const film = await prisma.films.create({
                data: {
                    nom: filmData.nom,
                    annee: filmData.annee,
                    realisateur: filmData.realisateur,
                    synopsis: filmData.synopsis,
                }
            });
    
            return res.json({ status: 'success', data: film });
        } catch (e) {
            console.error('Erreur lors de l\'ajout du film:', e);
            return res.status(500).json({ status: 'error', data: 'Erreur lors de l\'ajout du film' });
        }
    }
    
      // Méthode pour mettre à jour un film
    async updateFilm(req: Request, res: Response) {
        const filmId = parseInt(req.params.id);
        if (isNaN(filmId)) {
            return res.status(400).json({ status: 'error', data: 'ID de film non valide' });
        }
        const filmData = req.body;
        if (!filmData) {
            return res.status(400).json({ status: 'error', data: 'Veuillez fournir des données valides pour la mise à jour' });
        }
        try {
            const updatedFilm = await prisma.films.update({
                where: { id: filmId },
                data: {
                    nom: filmData.nom,
                    annee: filmData.annee,
                    realisateur: filmData.realisateur,
                    synopsis: filmData.synopsis,
                },
            });
            return res.json({ status: 'success', data: updatedFilm });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du film:', error);
            return res.status(500).json({ status: 'error', data: 'Erreur lors de la mise à jour du film' });
        }
    }

  // Méthode pour supprimer un film
    async remove(req: Request, res: Response) {
        try {
            const id = +req.params.id;
            let result = await prisma.films.delete({
                where: {
                    id: id
                }
            })
            return res.json({result: result});
        }
        catch (e) {
            return res.status(500).json({status: 'error', data: "error"});
        }
    }

}