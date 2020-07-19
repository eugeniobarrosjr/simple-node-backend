const express = require('express');
const app = express();

app.use(express.json())

const projects = [{id: 1, name: 'Project 1'},
{id: 2, name: 'Project 2'}];

app.get('/projects', (request, response) => {
  const {title, owner} = request.query;
  console.log(title, owner);
  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const project = request.body;
  console.log(project);
  return response.json([...projects, {id: 3, name: 'Project 3'}]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([...projects, {id: 3, name: 'Project 4'}])
});

app.delete('/projects/:id', (request, response) => {
  return response.json({id: 3, name: 'Project 4'})
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});