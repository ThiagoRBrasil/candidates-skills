import CandidateRepository, { ICandidate } from '../CandidatesRepository';

describe('CandidatesRepository', () => {
  let candidateRepository: CandidateRepository;

  beforeAll(() => {
    candidateRepository = new CandidateRepository();
  });

  afterAll(async () => {
  });

  test('create candidate', async () => {
    const mockCandidate: ICandidate = {
      name: 'John Doe',
      skills: ['JavaScript', 'TypeScript', 'Node.js'],
    };

    const result = await candidateRepository.create(mockCandidate);
    expect(result).toBeDefined();
  });

  test('find candidate by skills', async () => {
    const skillsToSearch = ['JavaScript', 'TypeScript'];

    const result = await candidateRepository.findBySkills(skillsToSearch);

    expect(result).toMatchObject({
      name: expect.any(String),
      skills: expect.any(String),
    });
  });
});






