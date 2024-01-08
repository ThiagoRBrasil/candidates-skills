import { Request, Response } from 'express';
import { z } from 'zod'
import CandidateRepository, { ICandidate } from '../repository/CandidatesRepository';

const candidateRepository = new CandidateRepository()

const searchSchema = z.object({
  skills: z.string().min(1),
});

const storeSchema = z.object({
  name: z.string(),
  skills: z.string().array().min(1)
});

class CandidatesController {
  async index(request: Request, response: Response) {
    try {
      const queryParse = searchSchema.safeParse(request.query)

      if (!queryParse.success) {
        return response.status(400).json();
      }

      const { skills } = queryParse.data
      const skills_splited = skills.split(',')
      const candidate = await candidateRepository.findBySkills(skills_splited);

      if (!candidate) {
        return response.status(400).json();
      }

      return response.status(200).json(candidate)
    } catch (error) {
      return response.status(500).json()
    }
  }

  async create(request: Request, response: Response) {
    try {
      const queryParse = storeSchema.safeParse(request.body)

      if (!queryParse.success) {
        return response.status(400).json();
      }

      const candidate: ICandidate = queryParse.data
      const newCandidate = await candidateRepository.create(candidate);

      return response.status(201).json({ id: newCandidate.id, ...candidate });
    } catch (error) {
      return response.status(500).json();
    }
  }
}

export default CandidatesController;