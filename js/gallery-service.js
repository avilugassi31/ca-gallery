var gProjects;
var gProjNames = [
  'MineSweeper',
  'Touch Board',
  'Whats In The Picture',
];
const PAGE_SIZE = 3;
gPageIdx = 0;
_createProjects();

function getProjects() {
  var startIdx = gPageIdx * PAGE_SIZE;
  return gProjects.slice(startIdx, startIdx + PAGE_SIZE);
}

function getProjById(projId) {
  var project = gProjects.find(function (project) {
    console.log(project);
    return projId === project.id;
  });
  return project;
}
// function addProject(name) {
//     var project = _createProj(name);
//     gProjects.unshift(project);
//     _saveToStorage();
//   }

function getProjectsNames() {
  return gProjNames;
}

// private functions:

function _createProj(name) {
  return {
    id: makeId(),
    name: name,
    title: makeLorem(2),
    url: '',
    imgUrl: name,
    publishedAt: Date.now(),
    description: makeLorem(20),
  };
}

function _createProjects() {
  var projects = [];
  for (var i = 0; i < gProjNames.length; i++) {
    var projName = gProjNames[i];
    projects.push(_createProj(projName));
  }
  gProjects = projects;
  console.log('gProjects:', gProjects);
}
