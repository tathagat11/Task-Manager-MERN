const request = require('supertest');
const app = require('../server.js');
const User = require('../database/model/user.model.js');
const Task = require('../database/model/task.model.js');
jest.mock("../database/model/user.model");
jest.mock("../database/model/task.model");

beforeAll(async () => {
  await Task.deleteMany({});
});


describe('Task Controller', () => {
  let testUser;
  let testTask;

  beforeEach(async () => {
    await User.deleteMany({});
    await Task.deleteMany({});

    testUser = new User({ username: 'testuser', email: 'test@example.com', password: 'password' });
    await testUser.save();

    testTask = new Task({ task: 'Test Task', createdBy: testUser._id });
    await testTask.save();
  });

  describe('addTask', () => {
    it('should add a new task', async () => {
      const response = await request(app)
        .post('/task/add')
        .send({ task: 'New Task', id: testUser._id })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(200);
    });

    it('should return 400 if task addition fails', async () => {
      jest.spyOn(Task.prototype, 'save').mockRejectedValueOnce(new Error('Task addition failed'));

      const response = await request(app)
        .post('/task/add')
        .send({ task: 'New Task', id: testUser._id })
        .set('Content-Type', 'application/json');

      expect(response.status).toBe(400);
      expect(response.text).toBe('task addition failed');
    });
  });

  describe('getAllTasks', () => {
    // it('should get all tasks for a user', async () => {
    //   const response = await request(app)
    //     .get('/task/tasks')
    //     .query({ id: testUser._id });

    //   expect(response.status).toBe(200);
    //   expect(response.body).toHaveLength(1);
    //   expect(response.body[0].task).toBe('Test Task');
    //   expect(response.body[0].createdBy).toEqual(testUser._id);
    // });

    it('should return 400 if getting tasks fails', async () => {
      jest.spyOn(Task, 'find').mockRejectedValueOnce(new Error('Failed to get tasks'));

      const response = await request(app)
        .get('/task/tasks')
        .query({ id: testUser._id });

      expect(response.status).toBe(400);
      expect(response.text).toBe("{}");
    });
  });
});