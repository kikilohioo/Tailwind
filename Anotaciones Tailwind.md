# Anotaciones sobre framework Tailwind

#### Puntos de quiebre
Por defecto lo que no se indica con un tamaño de punto de quiebre, se considera el tamaño minimo, luego tenemos:
- ```sm:atribute```
- ```md:atribute```
- ```lg:atribute```
- ```xl:atribute```

#### Margenes y Paddings
Son bastante similares a los de Bootstrap, diferencias:
- Van hasta el ```m-64```
- Existen margenes negativos ```-m-64```

#### Fuentes
- Tamaño ```text-xs ~ text-6xl```

#### Colores
Existen para fuente y para background, además tienen 2 partes:
```bg-color-opacity``` ej: ```bg-pink-500```

#### Personalizar Tailwind
- Primero ejecutaremos el comando ```npx tailwindcss init```
- Ahora deberemos de realizar modificaciones en el archivo tailwind.config.js. Agregaremos todos los cambios que deseemos realizar sobre el framework a:
```
  theme: {
    fontFamily: {
      fontName: ['realFontName']
    },
    extend: {
      colors:{
        newColor: {
          100: exacode,
          200: exacode2,
          300: exacode3,
        }
      }
    }
  }
```

### Instalacion para React
- Debemos contar con una aplicacion de React creada
- Ejecutaremos el siguiente comando ```npm i tailwindcss postcss-cli autoprefixer -D```
- Luego ejecutaremos ```npx tailwindcss init```
- Editamos el archivo tailwind.config.js incluyendo el siguiente codigo
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
- Ahora crearemos el archivo ```postcss.config.js``` e incluiremos el siguiente codigo
```
module.exports = {
	plugings: {
		tailwindcss: {},
		autoprefixer: {},
	}
}
```

#### Tip #1
Centrado basico del sitio ```class="container mx-auto"```
#### Tip #2
Para los puntos de quiebre, siempre primero la clase base, para el tamaño más pequeño y luego para los puntos de quiebre, sino la pantalla más pequeña no sabrá de donde heredar el tamaño.
#### Tip #3
Clases para modificaciones en textos:
- ```uppercase``` = TEXTO MAYUSCULA
- ```lowercase``` = texto minuscula
- ```capitalize``` = Testo Capitalizado
- ```normal-case``` = TexTo NorMal
#### Tip #4
Para agregar muchas clases de Tailwind bajo una unica clase contenedora, usaremos la directiva @apply de css de la siguiente forma:
```
.btn {
  @apply font-bold py-2 px-4 rounded-md;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.bnt-blue:hover {
  @apply bg-blue-700;
}
```