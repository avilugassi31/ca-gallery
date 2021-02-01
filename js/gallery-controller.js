function init() {
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  console.log('projects:', projects);
  var strHTMLS = projects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}" onclick="onSelectProject('${project.id}')">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
    </div>
    <img class="img-fluid" src="img/${project.imgUrl}.png" >
    </a>
    <div class="portfolio-caption">
    <h4>${project.name}</h4>
    <p class="text-muted">${project.title}</p>
    </div>
   </div>`;
  });
  document.querySelector('.gallery').innerHTML = strHTMLS.join('');
}


function onSelectProject(projId) {
  var proj = getProjById(projId);
  console.log('proj:', proj)
  var elProject = document.querySelector('.modal-body');
  console.log('elProject:', elProject);
 
}
