import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface ICandidate {
  name: string;
  skills: string[]
}

export default class CandidateRepository {
  public async create(candidate: ICandidate) {
    return prisma.candidate.create({
      data: {
        name: candidate.name,
        skills: {
          create: candidate.skills.map((skill) => ({ name: skill })),
        },
      },
    });
  }

  public async findBySkills(skills: string[]) {
    const candidates = await prisma.candidate.findMany({
      include: {
        skills: true,
      },
    });

    let candidateWithMoreSkills = null;
    let maxSkillDiscovered = 0;

    for (const candidate of candidates) {
      const skillsCandidate = candidate.skills.map((skill) => skill.name);

      const withSkills = skills.filter((skill) =>
        skillsCandidate.includes(skill)
      );

      if (withSkills.length > maxSkillDiscovered) {
        maxSkillDiscovered = withSkills.length;
        candidateWithMoreSkills = candidate;
      }
    }

    return candidateWithMoreSkills;

  }
}