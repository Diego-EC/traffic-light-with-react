1. Clean Code:en el caso de `export const FIRST_LIGHT = "red";` está bien lo de pasar el color por parámetro y luego en un switch
 devolver la clase, o mejor pasar la clase por parámetro directamente.

2. lo métodos de un <Componente /> se deben implementar en el componente <Home />,
 o en el propio <Componente />. Es decir, ¿para quien es trasnparente el método?
  para el componente que lo invoca o para el 'contenedor' que invoca al componente.

3. si en lugar de que glowEffectOn de Light sea una const quiero que sea un función, ¿cómo lo hago?

4. Debería haber puesto la lógica del color en el <Home /> en lugar de en el <Light />