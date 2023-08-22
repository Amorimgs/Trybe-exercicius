const school = {
  lessons: [
    {
      course: "Python",
      students: 20,
      professor: "Carlos Patrício",
      shift: "Manhã",
    },
    {
      course: "Kotlin",
      students: 10,
      professor: "Gabriel Oliva",
      shift: "Noite",
    },
    {
      course: "JavaScript",
      students: 738,
      professor: "Gustavo Caetano",
      shift: "Tarde",
    },
    {
      course: "MongoDB",
      students: 50,
      shift: "Noite",
    },
  ],
};

// Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

const chaveValue = (obj, position) => {
  let result = obj.lessons[position];
  return result;
};
// console.log(chaveValue(school, 0));

//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const todosEstudantes = (obj) => {
  let result = 0;
  for (let i = 0; i < obj.lessons.length; i += 1) {
    let position = obj.lessons[i];
    result += position.students;
  }

  return result;
};
// console.log(todosEstudantes(school));

// Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verificaChave = (obj, chave) => {
  let result;
  for (let i = 0; i < obj.lessons.length; i += 1) {
    let item = obj.lessons[i];
    if (chave in item) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};
// console.log(verificaChave(school, "professor"));

// Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const alteraTurno = (obj, curso, turno) => {
  let turnoAlterado;
  for (let i = 0; i < obj.lessons.length; i += 1) {
    item = obj.lessons[i];
    if (item.course == curso) {
      item.shift = turno;
      turnoAlterado = item;
    }
  }
  return turnoAlterado;
};
console.log(alteraTurno(school, "Python", "Noite"));
