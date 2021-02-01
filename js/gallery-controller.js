function init() {
  renderProjects();
}

function renderProjects() {
  var projects = getProjects();
  console.log('projects:', projects);
  var strHTMLS = projects.map(function (project) {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onSelectProject('${project.id}')">
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
  console.log('proj:', proj);
  var strHTML = `<h2>${proj.name}</h2>
<p class="item-intro text-muted">${proj.title}.</p>
<img class="img-fluid d-block mx-auto" src="img/${proj.imgUrl}.png" alt="">
<p>${proj.description}</p>
<ul class="list-inline">
  <li>Publish Date:${proj.publishedAt}</li>
  <li>url:${proj.url}</li>
</ul>
<button class="btn btn-primary" data-dismiss="modal" type="button">
  <i class="fa fa-times"></i>
  Close Project</button>`;

  document.querySelector('.modal-body').innerHTML = strHTML;
  console.log('elProject:', elProject);
}
