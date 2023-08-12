export const generatorUserError = (user) => {
    return `One or more of the following fields are invalid or incomplete.
    List of required fields:
      - Nombre : ${user.nombre}
      - Apellido  : ${user.apellido}
      - img       : ${user.img}
      - email     : ${user.email}
      - dni     : ${user.dni}
      - edad       : ${user.edad}
      `
    }