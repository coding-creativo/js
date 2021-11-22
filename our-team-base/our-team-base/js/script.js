const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  console.log(team);
  drawTeam();

  const addButton = document.getElementById('addMemberButton');

  addButton.addEventListener('click', addNewMember);


// funzione che prende i dati dall'array di oggetti

 function drawTeam(){
    for(let i = 0; i < team.length; i++){
        console.log(team[i].role);
        //devo creare dinamicamente le card
        drawTeamMember(team[i]);
      }
 }
  

 //funzione che crea dinamicamente la card

  function drawTeamMember(member) {
    const container = document.querySelector('.team-container');
    container.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
        <img src="img/${member.image}"
            alt="${member.name}"/>
        </div>
        <div class="card-text">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
  </div>`;
  }


  function addNewMember() {
      const name = document.getElementById('name').value;
      const role = document.getElementById('role').value;
      const image = document.getElementById('image').value;
      
      console.log(name, role, image);

      const newTeamMember = {
          name,
          role,
          image
      };

      team.push(newTeamMember);
      console.log(team);
      drawTeamMember(newTeamMember);

      console.log(newTeamMember);
  }