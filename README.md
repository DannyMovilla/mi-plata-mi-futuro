# Mi Plata, Mi Futuro

Sitio web de la campaña digital de **educación financiera para jóvenes** «Mi Plata, Mi Futuro: pequeños hábitos, grandes metas». Es el proyecto de aula de Informática y Convergencia Tecnológica de la CUN (2026).

Está hecho con [Astro](https://astro.build) y se publica en Netlify.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio: datos, plan en cuatro movimientos y el reparto 50/30/20 en vivo |
| `/campana` | Descripción, justificación, misión, visión, objetivos e identidad visual |
| `/aprende` y `/aprende/<tema>` | Cinco artículos: presupuesto, ahorro, crédito, estafas y compras |
| `/herramientas` | Calculadora 50/30/20, simulador de ahorro y quiz |
| `/multimedia` | Video, infografía descargable, galería y recursos |
| `/equipo` | Integrantes y datos del curso |
| `/referencias` | Referencias en APA 7 |

## Cómo editar lo pendiente

Todo lo que falta llenar está en **`src/data/config.ts`**:

- `VIDEO_ID`: el ID del video de YouTube. Por ejemplo, en `https://www.youtube.com/watch?v=abc123` el ID es `abc123`.
- `equipo`: los nombres y roles de los integrantes.
- `curso`: el programa, el docente y la ficha o grupo.

Los artículos están en `src/data/articulos.ts`.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicar en Netlify

1. En Netlify, elige **Add new site → Import an existing project** y conecta este repositorio.
2. Netlify lee `netlify.toml`, así que el build command (`npm run build`) y la carpeta de publicación (`dist`) ya vienen configurados.
3. También puedes ejecutar `npm run build` y arrastrar la carpeta `dist` a https://app.netlify.com/drop.
