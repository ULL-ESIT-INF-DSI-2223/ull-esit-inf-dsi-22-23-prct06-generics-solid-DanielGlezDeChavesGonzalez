# Guion Practica 05-dsi

## Introduccion

***En esta practica se realizara 2 ejercicios de clases y objetos en typescript.***

## Ejercicio 1 - Biblioteca musical

### Descripcion

Se desea modelar una biblioteca musical. Para ello se debera crear una clase llamada `Cancion` , una llamada `Artista` , una llamada `Disco`, una llamada `Discografica` y una llamada `Biblioteca`.

### Cancion

```typescript
class Cancion {
  private nombre: string;
  private duracion: number;
  private genero: string;
  private single: boolean;
  private numero_de_reproducciones: number;
  private disco: string;

  /**
   * constructor de la clase Cancion
   * @param nombre nombre de la canción
   * @param duracion duración de la canción
   * @param disco disco al que pertenece la canción
   * @param genero género de la canción
   * @param single si es single o no
   * @param numero_de_reproducciones número de reproducciones de la canción
   */
  constructor(
    nombre: string,
    duracion: number,
    disco: string,
    genero: string,
    single: boolean,
    numero_de_reproducciones: number
  ) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.disco = disco;
    this.genero = genero;
    this.single = single;
    this.numero_de_reproducciones = numero_de_reproducciones;
  }

  /**
   * función que devuelve el nombre de la canción
   * @returns devuelve el nombre de la canción
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la duración de la canción
   * @returns devuelve la duración de la canción
   */
  public getDuracion(): number {
    return this.duracion;
  }

  /**
   * función que devuelve el disco al que pertenece la canción
   * @returns devuelve el disco al que pertenece la canción
   */
  public getDisco(): string {
    return this.disco;
  }

  /**
   * función que devuelve el género de la canción
   * @returns devuelve el género de la canción
   */
  public getGenero(): string {
    return this.genero;
  }

  /**
   * función que devuelve si es single o no
   * @returns devuelve si es single o no
   */
  public getSingle(): boolean {
    return this.single;
  }

  /**
   * función que devuelve el número de reproducciones de la canción
   * @returns devuelve el número de reproducciones de la canción
   */
  public getNumeroDeReproducciones(): number {
    return this.numero_de_reproducciones;
  }

  /**
   * función que establece el nombre de la canción
   * @param nombre nombre de la canción a establecer
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que establece la duración de la canción
   * @param duracion duración de la canción a establecer
   */
  public setDuracion(duracion: number): void {
    this.duracion = duracion;
  }

  /**
   * función que establece el disco al que pertenece la canción
   * @param disco disco al que pertenece la canción a establecer
   */
  public setDisco(disco: string): void {
    this.disco = disco;
  }

  /**
   * función que establece el género de la canción
   * @param genero genero de la canción a establecer
   */
  public setGenero(genero: string): void {
    this.genero = genero;
  }

  /**
   * función que establece si es single o no
   * @param single si es single o no a establecer
   */
  public setSingle(single: boolean): void {
    this.single = single;
  }

  /**
   * función que establece el número de reproducciones de la canción
   * @param numero_de_reproducciones número de reproducciones de la canción a establecer
   */
  public setNumeroDeReproducciones(numero_de_reproducciones: number): void {
    this.numero_de_reproducciones = numero_de_reproducciones;
  }
}
```

Esta clase representa una canción. Tiene los siguientes atributos, nombre, duración, genero, single, número de reproducciones y disco. Además tiene los siguientes métodos, get y set para cada atributo.
Esto nos permitirá crear canciones con sus respectivos atributos.

### Artista

```typescript
class Artista {
  private nombre: string;
  private numero_de_oyentes_mensuales: number;
  private discografica: string;

  /**
   * constructor de la clase Artista
   * @param nombre nombre del artista
   * @param numero_de_oyentes_mensuales número de oyentes mensuales del artista
   * @param discografica discográfica del artista
   */
  constructor(
    nombre: string,
    numero_de_oyentes_mensuales: number,
    discografica: string
  ) {
    this.nombre = nombre;
    this.numero_de_oyentes_mensuales = numero_de_oyentes_mensuales;
    this.discografica = discografica;
  }

  /**
   * función que devuelve el nombre del artista
   * @returns devuelve el nombre del artista
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve el número de oyentes mensuales del artista
   * @returns devuelve el número de oyentes mensuales del artista
   */
  public getNumeroDeOyentesMensuales(): number {
    return this.numero_de_oyentes_mensuales;
  }

  /**
   * función que devuelve la discográfica del artista
   * @returns devuelve la discográfica del artista
   */
  public getDiscografica(): string {
    return this.discografica;
  }

  /**
   * función que asigna un nombre al artista
   * @param nombre nombre del artista a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna un número de oyentes mensuales al artista
   * @param numero_de_oyentes_mensuales número de oyentes mensuales del artista a asignar
   */
  public setNumeroDeOyentesMensuales(
    numero_de_oyentes_mensuales: number
  ): void {
    this.numero_de_oyentes_mensuales = numero_de_oyentes_mensuales;
  }

  /**
   * función que asigna una discográfica al artista
   * @param discografica discográfica del artista a asignar
   */
  public setDiscografica(discografica: string): void {
    this.discografica = discografica;
  }
}
```

Esta clase representa un artista. Tiene los siguientes atributos, nombre, número de oyentes mensuales y discográfica. Además tiene los siguientes métodos, get y set para cada atributo.
Esto nos permitirá crear artistas con sus respectivos atributos.

### Disco

```typescript
class Disco {
  private nombre: string;
  private fecha_publicacion: string;
  private canciones: string[];

  /**
   * constructor de la clase Disco
   * @param nombre nombre del disco
   * @param fecha_publicacion fecha de publicación del disco
   * @param canciones canciones del disco
   */
  constructor(nombre: string, fecha_publicacion: string, canciones: string[]) {
    this.nombre = nombre;
    this.fecha_publicacion = fecha_publicacion;
    this.canciones = canciones;
  }

  /**
   * función que devuelve el nombre del disco
   * @returns devuelve el nombre del disco
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la fecha de publicación del disco
   * @returns devuelve la fecha de publicación del disco
   */
  public getFechaPublicacion(): string {
    return this.fecha_publicacion;
  }

  /**
   * función que devuelve las canciones del disco
   * @returns devuelve las canciones del disco
   */
  public getCanciones(): string[] {
    return this.canciones;
  }

  /**
   * función que asigna un nombre al disco
   * @param nombre nombre del disco a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna una fecha de publicación al disco
   * @param fecha_publicacion fecha de publicación del disco a asignar
   */
  public setFechaPublicacion(fecha_publicacion: string): void {
    this.fecha_publicacion = fecha_publicacion;
  }

  /**
   * función que asigna canciones al disco
   * @param canciones canciones del disco a asignar
   */
  public setCanciones(canciones: string[]): void {
    this.canciones = canciones;
  }
}
```

Esta clase representa un disco. Tiene los siguientes atributos, nombre, fecha de publicación y canciones. Además tiene los siguientes métodos, get y set para cada atributo.
Esto nos permitirá crear discos con sus respectivos atributos.

### Discografica

```typescript
class Discografica {
  private nombre: string;
  private discos: Disco[];

  /**
   * constructor de la clase Discografica
   * @param nombre nombre de la discografica
   * @param discos discos de la discografica
   */
  constructor(nombre: string, discos?: Disco[]) {
    this.nombre = nombre;

    if (discos) {
      this.discos = discos;
    } else {
      this.discos = [];
    }
  }

  /**
   * función que devuelve el nombre de la discografica
   * @returns devuelve el nombre de la discografica
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que asigna un nombre a la discografica
   * @param nombre nombre de la discografica a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que devuelve los discos de la discografica
   * @returns devuelve los discos de la discografica
   */
  public getDiscos(): Disco[] {
    return this.discos;
  }

  /**
   * función que asigna discos a la discografica
   * @param discos discos de la discografica a asignar
   */
  public setDiscos(discos: Disco[]): void {
    this.discos = discos;
  }
}
```

Esta clase representa una discográfica. Tiene los siguientes atributos, nombre y discos. Además tiene los siguientes métodos, get y set para cada atributo.
Esto nos permitirá crear discográficas con sus respectivos atributos.

### Biblioteca

```typescript
class Biblioteca_musical {
  private canciones: Cancion[];
  private discos: Disco[];
  private discograficas: Discografica[];
  private artistas: Artista[];

  /**
   * constructor de la clase Biblioteca_musical
   * @param canciones canciones de la biblioteca
   * @param discos discos de la biblioteca
   * @param discograficas discograficas de la biblioteca
   * @param artistas artistas de la biblioteca
   */
  constructor(
    canciones: Cancion[],
    discos: Disco[],
    discograficas: Discografica[],
    artistas: Artista[]
  ) {
    this.canciones = canciones;
    this.discos = discos;
    this.discograficas = discograficas;
    this.artistas = artistas;
  }

  /**
   * getter de las canciones
   * @returns canciones de la biblioteca
   */
  public getCanciones(): Cancion[] {
    return this.canciones;
  }

  /**
   * getter de los discos
   * @returns discos de la biblioteca
   */
  public getDiscos(): Disco[] {
    return this.discos;
  }

  /**
   * getter de las discograficas
   * @returns discograficas de la biblioteca
   */
  public getDiscograficas(): Discografica[] {
    return this.discograficas;
  }

  /**
   * getter de los artistas
   * @returns artistas de la biblioteca
   */
  public getArtistas(): Artista[] {
    return this.artistas;
  }

  /**
   * setter de las canciones
   * @param canciones canciones de la biblioteca
   */
  public setCanciones(canciones: Cancion[]): void {
    this.canciones = canciones;
  }

  /**
   * setter de los discos
   * @param discos discos de la biblioteca
   */
  public setDiscos(discos: Disco[]): void {
    this.discos = discos;
  }

  /**
   * setter de las discograficas
   * @param discograficas discograficas de la biblioteca
   */
  public setDiscograficas(discograficas: Discografica[]): void {
    this.discograficas = discograficas;
  }

  /**
   * setter de los artistas
   * @param artistas artistas de la biblioteca
   */
  public setArtistas(artistas: Artista[]): void {
    this.artistas = artistas;
  }

```

Esta clase representa la biblioteca musical. Tiene los siguientes atributos, canciones, discos, discográficas y artistas. Además tiene los siguientes métodos, get y set para cada atributo.
Esto nos permitirá crear bibliotecas musicales con sus respectivos atributos.

Además tiene los siguientes métodos:

```typescript

  /**
   * Método que muestra por pantalla la biblioteca musical
   */
  public mostrarPorPantalla(): void {
    console.log("Canciones");
    console.table(this.canciones);
    console.log("Discos");
    console.table(this.discos);
    console.log("Discograficas");
    console.table(this.discograficas);
    console.log("Artistas");
    console.table(this.artistas);
  }

```
Este método muestra por pantalla en forma de tabla la biblioteca musical.
    
```typescript

  /**
   * función que añade una canción a la biblioteca
   * @param cancion canción a añadir a la biblioteca
   */
  public añadirCancion(cancion: Cancion): void {
    this.canciones.push(cancion);
  }

```
Este método añade una canción a la biblioteca musical.

```typescript

  /**
   * función que añade un disco a la biblioteca
   * @param disco disco a añadir a la biblioteca
   */
  public añadirDisco(disco: Disco): void {
    this.discos.push(disco);
  }

```
Este método añade un disco a la biblioteca musical.

```typescript

  /**
   * función que añade una discografica a la biblioteca
   * @param discografica discografica a añadir a la biblioteca
   */
  public añadirDiscografica(discografica: Discografica): void {
    this.discograficas.push(discografica);
  }
```
Este método añade una discográfica a la biblioteca musical.

```typescript
  /**
   * función que añade un artista a la biblioteca
   * @param artista artista a añadir a la biblioteca
   */
  public añadirArtista(artista: Artista): void {
    this.artistas.push(artista);
  }
```
Este método añade un artista a la biblioteca musical.

```typescript
  /**
   * función que busca un artista por su nombre
   * @param nombre nombre del artista a buscar
   * @returns devuelve el artista buscado o undefined si no existe
   */
  public BuscarArtistaPorNombre(nombre: string): Artista | undefined {
    return this.artistas.find((artista) => artista.getNombre() === nombre);
  }
```
Este método busca un artista por su nombre. Si no existe devuelve undefined. Para ello utilizamos el método find de los arrays. Este método recorre el array y devuelve el primer elemento que cumpla la condición que le pasemos. En este caso la condición es que el nombre del artista sea igual al nombre que le pasamos por parámetro.

```typescript
  /**
   * función que busca una discografica por su nombre
   * @param nombre nombre del disco a buscar
   * @returns devuelve la discografica buscada o undefined si no existe
   */
  public BuscarDiscoPorNombre(nombre: string): Disco | undefined {
    return this.discos.find((disco) => disco.getNombre() === nombre);
  }
```

Este método busca un disco por su nombre. Si no existe devuelve undefined. Para ello utilizamos el método find de los arrays. Este método recorre el array y devuelve el primer elemento que cumpla la condición que le pasemos. En este caso la condición es que el nombre del disco sea igual al nombre que le pasamos por parámetro.

```typescript
  /**
   * función que busca una canción por su nombre
   * @param nombre nombre de la canción a buscar
   * @returns devuelve la canción buscada o undefined si no existe
   */
  public BuscarCancionPorNombre(nombre: string): Cancion | undefined {
    return this.canciones.find((cancion) => cancion.getNombre() === nombre);
  }
```

Este método busca una canción por su nombre. Si no existe devuelve undefined. Para ello utilizamos el método find de los arrays. Este método recorre el array y devuelve el primer elemento que cumpla la condición que le pasemos. En este caso la condición es que el nombre de la canción sea igual al nombre que le pasamos por parámetro.

```typescript
  /**
   * función que calcula el número de canciones de un disco
   * @param nombre nombre del disco
   * @returns devuelve el número de canciones del disco o undefined si no existe
   */
  public CalcularNumeroDeCancionesEnUnDisco(
    nombre: string
  ): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      return canciones_disco.length;
    }
    return undefined;
  }
```

Este método calcula el número de canciones de un disco. Para ello recorremos el array de canciones y si el nombre del disco de la canción es igual al nombre del disco que le pasamos por parámetro, añadimos la canción al array canciones_disco. Al final devolvemos el tamaño del array canciones_disco. Si el disco no existe devolvemos undefined.

```typescript
  /**
   * función que calcula la duración total de un disco
   * @param nombre nombre del disco
   * @returns devuelve la duración total del disco o undefined si no existe
   */
  public CalcularDuracionTotalDeUnDisco(nombre: string): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      if (canciones_disco.length === 0) {
        return 0;
      }
      if (canciones_disco.length > 0) {
        return canciones_disco.reduce(
          (total, cancion) => total + cancion.getDuracion(),
          0
        );
      }
    }
    return undefined;
  }
```

Este método calcula la duración total de un disco. Para ello recorremos el array de canciones y si el nombre del disco de la canción es igual al nombre del disco que le pasamos por parámetro, añadimos la canción al array canciones_disco. Al final devolvemos la suma de las duraciones de las canciones del disco. Si el disco no existe devolvemos undefined. Si el disco no tiene canciones devolvemos 0. Para calcular la duración total del disco utilizamos el método reduce de los arrays. Este método recorre el array y devuelve un valor. En este caso el valor es la suma de las duraciones de las canciones del disco.

```typescript
  /**
   * función que calcula el número de reproducciones de un disco
   * @param nombre nombre del disco
   * @returns devuelve el número de reproducciones del disco o undefined si no existe
   */
  public CalcularNumeroReproduccionesDeUnDisco(
    nombre: string
  ): number | undefined {
    if (this.BuscarDiscoPorNombre(nombre) !== undefined) {
      const canciones_disco: Cancion[] = [];
      for (let i = 0; i < this.canciones.length; i++) {
        if (this.canciones[i].getDisco() === nombre) {
          canciones_disco.push(this.canciones[i]);
        }
      }
      if (canciones_disco.length === 0) {
        return 0;
      }
      if (canciones_disco.length > 0) {
        return canciones_disco.reduce(
          (total, cancion) => total + cancion.getNumeroDeReproducciones(),
          0
        );
      }
    }
    return undefined;
  }
```

Este método calcula el número de reproducciones de un disco. Para ello recorremos el array de canciones y si el nombre del disco de la canción es igual al nombre del disco que le pasamos por parámetro, añadimos la canción al array canciones_disco. Al final devolvemos la suma de las reproducciones de las canciones del disco. Si el disco no existe devolvemos undefined. Si el disco no tiene canciones devolvemos 0. Para calcular el número de reproducciones del disco utilizamos el método reduce de los arrays. Este método recorre el array y devuelve un valor. En este caso el valor es la suma de las reproducciones de las canciones del disco.

```typescript
  /**
   * Método que ejecuta el menú de la biblioteca
   */
  public menu(): void {
    let seguir = true;
    while (seguir) {
      console.log("1. Mostrar por pantalla");
      console.log("2. Añadir artista");
      console.log("3. Añadir disco");
      console.log("4. Añadir canción");
      console.log("5. Añadir discografica");
      console.log("6. Buscar artista por nombre");
      console.log("7. Buscar disco por nombre");
      console.log("8. Buscar canción por nombre");
      console.log("9. Calcular número de canciones en un disco");
      console.log("10. Calcular duración total de un disco");
      console.log("11. Calcular número de reproducciones de un disco");
      console.log("12. Salir");

      let opcion = prompt("Introduce una opción ");
      console.log(opcion);

      switch (opcion) {
        case "1":
          this.mostrarPorPantalla();
          break;
        case "2":
          let nombre_artista = prompt("Introduce el nombre del artista ");
          if (nombre_artista) {
            let numero_de_oyentes_mensuales = prompt(
              "Introduce el número de oyentes mensuales"
            );
            if (numero_de_oyentes_mensuales) {
              let discografica = prompt(
                "Introduce la discografica del artista "
              );
              if (discografica) {
                let artista = new Artista(
                  nombre_artista,
                  parseInt(numero_de_oyentes_mensuales),
                  discografica
                );
                this.añadirArtista(artista);
                this.mostrarPorPantalla();
              } else {
                console.log("No se ha introducido la discografica del artista");
              }
            } else {
              console.log(
                "No se ha introducido el número de oyentes mensuales"
              );
            }
          } else {
            console.log("No se ha introducido el nombre del artista");
          }
          break;
        case "3":
          let nombre_disco = prompt("Introduce el nombre del disco ");
          if (nombre_disco) {
            let artista_disco = prompt("Introduce el artista del disco ");
            if (artista_disco) {
              let nombre_canciones = prompt(
                "Introduce las canciones del disco "
              );
              if (nombre_canciones) {
                let canciones_disco = nombre_canciones.split(",");
                let disco = new Disco(
                  nombre_disco,
                  artista_disco,
                  canciones_disco
                );
                this.añadirDisco(disco);
                this.mostrarPorPantalla();
              } else {
                console.log("No se ha introducido las canciones del disco");
              }
            } else {
              console.log("No se ha introducido el artista del disco");
            }
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "4":
          let nombre_cancion = prompt("Introduce el nombre de la canción ");
          if (nombre_cancion) {
            let duracion = prompt("Introduce la duración de la canción ");
            if (duracion) {
              let disco_cancion = prompt("Introduce el disco de la canción ");
              if (disco_cancion) {
                let genero = prompt("Introduce el género de la canción ");
                if (genero) {
                  let single = prompt("¿Es single? (true/false )");
                  if (single) {
                    let numero_de_reproducciones = prompt(
                      "Introduce el número de reproducciones"
                    );
                    if (numero_de_reproducciones) {
                      let cancion = new Cancion(
                        nombre_cancion,
                        parseInt(duracion),
                        disco_cancion,
                        genero,
                        single.toLowerCase() === "true",
                        parseInt(numero_de_reproducciones)
                      );
                      this.añadirCancion(cancion);
                      this.mostrarPorPantalla();
                    } else {
                      console.log(
                        "No se ha introducido el número de reproducciones"
                      );
                    }
                  } else {
                    console.log("No se ha introducido si es single");
                  }
                } else {
                  console.log("No se ha introducido el género de la canción");
                }
              } else {
                console.log("No se ha introducido el disco de la canción");
              }
            } else {
              console.log("No se ha introducido la duración de la canción");
            }
          } else {
            console.log("No se ha introducido el nombre de la canción");
          }
          break;
        case "5":
          let nombre_discografica = prompt(
            "Introduce el nombre de la discografica"
          );
          if (nombre_discografica) {
            let discografica = new Discografica(nombre_discografica);
            this.añadirDiscografica(discografica);
            this.mostrarPorPantalla();
          } else {
            console.log("No se ha introducido el nombre de la discografica");
          }

          break;
        case "6":
          let nombre_artista_buscar = prompt(
            "Introduce el nombre del artista "
          );
          if (nombre_artista_buscar) {
            let artista_busqueda = this.BuscarArtistaPorNombre(
              nombre_artista_buscar
            );
            console.log(artista_busqueda);
          } else {
            console.log("No se ha introducido el nombre del artista");
          }
          break;
        case "7":
          let nombre_disco_buscar = prompt("Introduce el nombre del disco ");
          if (nombre_disco_buscar) {
            let disco_busqueda = this.BuscarDiscoPorNombre(nombre_disco_buscar);
            console.log(disco_busqueda);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "8":
          let nombre_cancion_buscar = prompt(
            "Introduce el nombre de la canción "
          );
          if (nombre_cancion_buscar) {
            let cancion_busqueda = this.BuscarCancionPorNombre(
              nombre_cancion_buscar
            );
            console.table(cancion_busqueda);
          } else {
            console.log("No se ha introducido el nombre de la canción");
          }
          break;
        case "9":
          let nombre_disco_canciones = prompt("Introduce el nombre del disco ");
          if (nombre_disco_canciones) {
            let canciones_disco = this.CalcularNumeroDeCancionesEnUnDisco(
              nombre_disco_canciones
            );
            console.log(canciones_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "10":
          let nombre_disco_duracion = prompt("Introduce el nombre del disco ");
          if (nombre_disco_duracion) {
            let duracion_disco = this.CalcularDuracionTotalDeUnDisco(
              nombre_disco_duracion
            );
            console.log(duracion_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "11":
          let nombre_disco_reproducciones = prompt(
            "Introduce el nombre del disco "
          );
          if (nombre_disco_reproducciones) {
            let reproducciones_disco =
              this.CalcularNumeroReproduccionesDeUnDisco(
                nombre_disco_reproducciones
              );
            console.log(reproducciones_disco);
          } else {
            console.log("No se ha introducido el nombre del disco");
          }
          break;
        case "12":
          console.log("Adios");
          seguir = false;
          break;
        default:
          console.log("Opción no válida");
          break;
      }
    }
  }
}
```

Finalmente tenemos el metodo menu que es publico y que es el que se ejecuta al crear un objeto de la clase. Este metodo se encarga de mostrar el menu por pantalla y de llamar a los metodos privados de la clase para realizar las acciones que el usuario elija. Para ello se utiliza un switch que dependiendo de la opcion que elija el usuario ejecutara un metodo u otro. Para que el usuario pueda elegir una opcion se utiliza el metodo prompt que nos permite introducir datos por pantalla. Si el usuario introduce una opcion valida se ejecutara el metodo correspondiente y se mostrara por pantalla el resultado. Si el usuario introduce una opcion no valida se mostrara un mensaje de error por pantalla. Si el usuario introduce la opcion 12 se terminara el programa. Las 12 opciones disponibles seran las siguientes:

  1. Mostrar por pantalla
  2. Añadir artista
  3. Añadir disco
  4. Añadir canción
  5. Añadir discografica
  6. Buscar artista por nombre
  7. Buscar disco por nombre
  8. Buscar canción por nombre
  9. Calcular número de canciones en un disco
  10. Calcular duración total de un disco
  11. Calcular número de reproducciones de un disco
  12. Salir

## Programa principal

```javascript
const disco1 = new Disco("Disco 1", "01/01/2000", ["Cancion 1"]);
const disco2 = new Disco("Disco 2", "04/02/2000", [
  "Cancion 2",
  "Cancion 4",
  "Cancion 5",
]);
const disco3 = new Disco("Disco 3", "10/06/2000", ["Cancion 3", "Cancion 6"]);
const discos = [disco1, disco2, disco3];

const discografica = new Discografica("Discografica 1", [discos[0], discos[1]]);
const discografica2 = new Discografica("Discografica 2", [discos[2]]);
const discograficas = [discografica, discografica2];

const artista = new Artista("Artista 1", 100, "Discografica 1");
const artista2 = new Artista("Artista 2", 200, "Discografica 2");
const artista3 = new Artista("Artista 3", 300, "Discografica 3");
const artistas = [artista, artista2, artista3];

const cancion = new Cancion("Cancion 1", 100, "Disco 1", "Rock", true, 100);
const cancion2 = new Cancion("Cancion 2", 200, "Disco 2", "Pop", false, 200);
const cancion3 = new Cancion("Cancion 3", 300, "Disco 3", "Rock", false, 300);
const cancion4 = new Cancion("Cancion 4", 400, "Disco 2", "Pop", false, 400);
const cancion5 = new Cancion("Cancion 5", 400, "Disco 2", "Pop", false, 400);
const cancion6 = new Cancion("Cancion 6", 400, "Disco 3", "Pop", false, 400);
const canciones = [cancion, cancion2, cancion3, cancion4, cancion5, cancion6];

const biblioteca = new Biblioteca_musical(
  canciones,
  discos,
  discograficas,
  artistas
);

biblioteca.menu();
```

En el programa principal se crean los objetos de las clases y se añaden a las listas correspondientes. Se crea un objeto de la clase Biblioteca_musical y se ejecuta el metodo menu. Este metodo es el que se encarga de mostrar el menu por pantalla y de llamar a los metodos privados de la clase para realizar las acciones que el usuario elija. 

## Conclusiones 

En este proyecto se ha creado una biblioteca musical que permite gestionar canciones, discos, discograficas y artistas. Para ello se han creado las clases Cancion, Disco, Discografica, Artista y Biblioteca_musical. Se han creado los metodos necesarios para poder añadir, buscar y calcular datos de los objetos de las clases. Se ha creado un menu que permite al usuario elegir que accion quiere realizar.

## Ejercicio 2 - Cuatro en raya

### Descripción

El objetivo de este ejercicio es crear un juego de cuatro en raya. Para ello se crearan dos clases una llamada tablero que tendra los siguientes atributos:
    
    * tablero: matriz de 6x7 que contendra las fichas de los jugadores.

Y una clase llamada ficha que tendra los siguientes atributos:

    * ficha: caracter que representara la ficha del jugador.
    
## Clase tablero

```javascript
class Tablero {
  private tablero: Ficha[][];

  /**
   * constructor de la clase tablero
   * @param tablero tablero de 6x7
   */
  constructor(tablero: Ficha[][]) {
    if (tablero.length != 6 || tablero[0].length != 7) {
      throw new Error("El tablero debe ser de 6x7");
    }
    this.tablero = tablero;
  }

  /**
   * setter del tablero
   * @param new_tablero nuevo tablero
   */
  public setTablero(new_tablero: Ficha[][]): void {
    this.tablero = new_tablero;
  }

  /**
   * getter del tablero
   * @returns devuelve el tablero
   */
  public getTablero(): Ficha[][] {
    return this.tablero;
  }

  /**
   * funcion que pone una ficha en el tablero
   * @param ficha ficha que se va a poner en el tablero
   * @param fila fila donde se va a poner la ficha
   * @param columna columna donde se va a poner la ficha
   */
  public setFicha(ficha: Ficha, fila: number, columna: number): void {
    this.tablero[fila][columna] = ficha;
  }

  /**
   * funcion que devuelve una ficha del tablero
   * @param fila fila donde donde esta la ficha a devolver
   * @param columna columna donde esta la ficha a devolver
   * @returns
   */
  public getFicha(fila: number, columna: number): Ficha {
    return this.tablero[fila][columna];
  }
```

En la clase tablero se crean los atributos y los metodos necesarios para poder crear un tablero de 6x7. Se crea un constructor que comprueba que el tablero que se le pasa como parametro es de 6x7. Se crean los metodos getter y setter para poder acceder a los atributos de la clase. Se crea un metodo que permite poner una ficha en el tablero y otro que devuelve una ficha del tablero.

Además se crean los siguientes metodos:

```typescript
public comprobarDiagonalDerecha(): boolean {
    let ganador: boolean = false;
    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 0; j < 4; j++) {
        if (
          this.tablero[i][j].getFicha() == "X" &&
          this.tablero[i + 1][j + 1].getFicha() == "X" &&
          this.tablero[i + 2][j + 2].getFicha() == "X" &&
          this.tablero[i + 3][j + 3].getFicha() == "X"
        ) {
          ganador = true;
        } else if (
          this.tablero[i][j].getFicha() == "O" &&
          this.tablero[i + 1][j + 1].getFicha() == "O" &&
          this.tablero[i + 2][j + 2].getFicha() == "O" &&
          this.tablero[i + 3][j + 3].getFicha() == "O"
        ) {
          ganador = true;
        }
      }
    }
    return ganador;
  }
```

Este metodo comprueba si hay cuatro fichas iguales en diagonal hacia la derecha. Para ello recorre el tablero y comprueba si hay cuatro fichas iguales en diagonal hacia la derecha. Si las hay devuelve true, si no devuelve false.

```typescript
public comprobarDiagonalIzquierda(): boolean {
    let ganador: boolean = false;
    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 3; j < 7; j++) {
        if (
          this.tablero[i][j].getFicha() == "X" &&
          this.tablero[i + 1][j - 1].getFicha() == "X" &&
          this.tablero[i + 2][j - 2].getFicha() == "X" &&
          this.tablero[i + 3][j - 3].getFicha() == "X"
        ) {
          ganador = true;
        } else if (
          this.tablero[i][j].getFicha() == "O" &&
          this.tablero[i + 1][j - 1].getFicha() == "O" &&
          this.tablero[i + 2][j - 2].getFicha() == "O" &&
          this.tablero[i + 3][j - 3].getFicha() == "O"
        ) {
          ganador = true;
        }
      }
    }
    return ganador;
  }
```

Este metodo comprueba si hay cuatro fichas iguales en diagonal hacia la izquierda. Para ello se recorre el tablero desde la fila 0 hasta la 3 y desde la columna 3 hasta la 7. Si encuentra cuatro fichas iguales en diagonal hacia la izquierda devuelve true. Si no encuentra ninguna devuelve false.

```typescript
public comprobarHorizontal(): boolean {
    let ganador: boolean = false;
    for (let i: number = 0; i < 6; i++) {
      for (let j: number = 0; j < 4; j++) {
        if (
          this.tablero[i][j].getFicha() == "X" &&
          this.tablero[i][j + 1].getFicha() == "X" &&
          this.tablero[i][j + 2].getFicha() == "X" &&
          this.tablero[i][j + 3].getFicha() == "X"
        ) {
          ganador = true;
        } else if (
          this.tablero[i][j].getFicha() == "O" &&
          this.tablero[i][j + 1].getFicha() == "O" &&
          this.tablero[i][j + 2].getFicha() == "O" &&
          this.tablero[i][j + 3].getFicha() == "O"
        ) {
          ganador = true;
        }
      }
    }
    return ganador;
  }
```

Este metodo comprueba si hay cuatro fichas iguales en horizontal. Para ello recorre el tablero de arriba a abajo y de izquierda a derecha. Si encuentra cuatro fichas iguales en horizontal devuelve true.

```typescript
public comprobarVertical(): boolean {
    let ganador: boolean = false;
    for (let i: number = 0; i < 3; i++) {
      for (let j: number = 0; j < 7; j++) {
        if (
          this.tablero[i][j].getFicha() == "X" &&
          this.tablero[i + 1][j].getFicha() == "X" &&
          this.tablero[i + 2][j].getFicha() == "X" &&
          this.tablero[i + 3][j].getFicha() == "X"
        ) {
          ganador = true;
        } else if (
          this.tablero[i][j].getFicha() == "O" &&
          this.tablero[i + 1][j].getFicha() == "O" &&
          this.tablero[i + 2][j].getFicha() == "O" &&
          this.tablero[i + 3][j].getFicha() == "O"
        ) {
          ganador = true;
        }
      }
    }
    return ganador;
  }
```

Este metodo comprueba si hay cuatro fichas iguales en vertical. Para ello recorre el tablero de izquierda a derecha y de arriba a abajo. Si encuentra cuatro fichas iguales en vertical devuelve true.

```typescript
public imprimirTablero(): void {
    for (let i: number = 0; i < 6; i++) {
      let row = "|";
      for (let j: number = 0; j < 7; j++) {
        row += this.tablero[i][j].getFicha() + "|";
      }
      console.log(row);
    }
  }
```

Este metodo imprime el tablero por consola. Para ello recorre el tablero y va imprimiendo cada ficha del tablero.

```typescript
public jugar(): void {
    let ganador: boolean = false;
    let turno: number = 1;
    let contador: number = 1;
    let repetir: boolean = false;

    while (ganador == false && contador <= 42) {
      if (turno == 1) {
        let ficha1: Ficha = new Ficha("X");
        let columna: number = parseInt(
          prompt("Jugador 1, elija una columna: ")
        );
        columna--;
        let fila: number = 5;
        while (this.tablero[fila][columna].getFicha() != " ") {
          fila--;
          if (fila < 0) {
            console.log("Columna llena, elija otra");
            repetir = true;
            break;
          }
        }
        if (repetir) {
          repetir = false;
          continue;
        }
        this.tablero[fila][columna] = ficha1;
        turno = 2;
      } else {
        let ficha2: Ficha = new Ficha("O");
        let columna: number = parseInt(
          prompt("Jugador 2, elija una columna: ")
        );
        columna--;
        let fila: number = 5;
        while (this.tablero[fila][columna].getFicha() != " ") {
          fila--;
          if (fila < 0) {
            console.log("Columna llena, elija otra");
            repetir = true;
            break;
          }
        }
        if (repetir) {
          repetir = false;
          continue;
        }

        this.tablero[fila][columna] = ficha2;
        turno = 1;
      }

      this.imprimirTablero();
      if (turno == 1) {
        if (
          this.comprobarHorizontal() ||
          this.comprobarVertical() ||
          this.comprobarDiagonalDerecha() ||
          this.comprobarDiagonalIzquierda()
        ) {
          ganador = true;
          console.log("Gana el jugador 2");
        }
      } else {
        if (
          this.comprobarHorizontal() ||
          this.comprobarVertical() ||
          this.comprobarDiagonalDerecha() ||
          this.comprobarDiagonalIzquierda()
        ) {
          ganador = true;
          console.log("Gana el jugador 1");
        }
      }
      contador++;
    }
  }
```

Este metodo es el que se encarga de jugar. Primero crea un bucle que se repetira hasta que se cumpla una de las dos condiciones: que haya un ganador o que se hayan completado todas las casillas del tablero. Dentro del bucle se comprueba si es el turno del jugador 1 o del jugador 2. Si es el turno del jugador 1 crea una ficha con el valor X y le pide al jugador que elija una columna. Si la columna esta llena le pide que elija otra. Despues de elegir la columna se comprueba si hay cuatro fichas iguales en horizontal, vertical, diagonal derecha o diagonal izquierda. Si hay cuatro fichas iguales en alguna de estas direcciones se acaba el juego y se muestra por consola que ha ganado el jugador 1. Si no hay cuatro fichas iguales en ninguna direccion se repite el proceso para el jugador 2.

## Programa principal

```typescript
import * as Prompt from "prompt-sync";
import { Tablero } from "./tablero";
import { Ficha } from "./ficha";

const prompt = Prompt();

// conecta 4
let tablero = new Tablero([
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
  [
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
    new Ficha(" "),
  ],
]);

tablero.jugar();
```

En el programa principal se crea un tablero y se llama al metodo jugar. El tablero se crea con 6 filas y 7 columnas. Cada casilla del tablero es una ficha con el valor " ". Cuando se crea el tablero se le pasa como parametro un array de arrays de fichas. Este array de arrays de fichas se le pasa al constructor de la clase tablero. El constructor de la clase tablero recibe un array de arrays de fichas y lo guarda en la variable tablero. Y finalmente se llama al metodo jugar.


## Conclusiones

En este ejercicio hemos creado un juego de conecta 4. Para ello hemos creado una clase tablero y una clase ficha. La clase tablero tiene un array de arrays de fichas. La clase ficha tiene un atributo ficha que es un string. El tablero tiene varios metodos, como por ejemplo: imprimirTablero, jugar, comprobarHorizontal, comprobarVertical, comprobarDiagonalDerecha y comprobarDiagonalIzquierda. Finalmente en el programa principal se crea un tablero y se llama al metodo jugar.