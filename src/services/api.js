export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'dshfuysdhufisdhuoilfsdjhfui2189y3782r',
        user: {
          name: 'Johnn',
          password: 'joao123',
        },
      });
    }, 1000);
  });
}
