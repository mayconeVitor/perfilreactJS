function Perfil() {
  return (
    <h5>
      Meu nome é maycon, sou negro tenho 16 anos e estudo em Etec polivalente de Americana
    </h5>
  );
}

function Perfil2() {
  return (
    <h5>
      Meu nome é Borges, tenho 16 anos, moro em sumaré, trabalho no goodbom na area de TI
    </h5>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem vindo aos nossos Perfil</h1>
      <Perfil />
      <Perfil2 />
    </div>
  );
}
