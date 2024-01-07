import { Request, Response } from 'express';
import { z } from 'zod'

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

      return response.json({
        "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
        "name": "John Coder",
        "skills": ["javascript", "es6", "nodejs", "express"]
      }).status(200);
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

      const candidate = queryParse.data

      return response.status(201).json(candidate);
    } catch (error) {
      return response.status(500).json()
    }
  }
}

export default CandidatesController;