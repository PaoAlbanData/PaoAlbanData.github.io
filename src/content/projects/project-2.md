---
title: Segmentación de jugadores con K-Means
excerpt: Proyecto de aprendizaje no supervisado aplicado a la segmentación de jugadores de videojuegos según su tiempo diario de juego y gasto en moneda virtual.
publishDate: 2026-05-25
seo:
  image:
    src: /project-2.jpg
    alt: Segmentación de jugadores con K-Means
---

# Segmentación de jugadores de videojuegos con K-Means

## Descripción general del proyecto

Este proyecto aplica técnicas de aprendizaje no supervisado para segmentar jugadores de videojuegos a partir de su comportamiento dentro del juego.

El análisis se centra en dos variables principales: el tiempo medio diario que cada jugador dedica al videojuego y la cantidad media diaria de moneda virtual que gasta. A partir de estos datos, se utiliza el algoritmo K-Means para identificar grupos de jugadores con características similares.

El objetivo del proyecto no es predecir una variable de salida, sino descubrir patrones ocultos dentro del conjunto de datos. Por esta razón, el análisis se enmarca dentro del aprendizaje no supervisado, concretamente en el área de clustering.

## Contexto del problema

Una empresa de videojuegos necesita conocer mejor a sus jugadores para tomar decisiones basadas en datos.

Aunque todos los usuarios pertenecen al mismo juego, no todos interactúan de la misma forma. Algunos jugadores pueden pasar muchas horas dentro de la plataforma, pero gastar poco dinero virtual. Otros pueden jugar menos tiempo, pero realizar un gasto elevado. También pueden existir jugadores con baja actividad y bajo gasto.

La segmentación permite identificar estos perfiles de forma automática, agrupando a los jugadores según patrones similares de comportamiento.

## Objetivo del proyecto

El objetivo principal del proyecto es aplicar el algoritmo K-Means para segmentar jugadores de videojuegos en función de dos variables de comportamiento:

- Horas diarias dedicadas al juego.
- Gasto diario en moneda virtual.

A partir de esta segmentación, se busca interpretar los grupos obtenidos y explicar cómo estos resultados pueden aportar valor a una empresa de videojuegos.

## Dataset utilizado

El dataset utilizado se denomina `game_players.csv`.

Cada fila representa un jugador y cada columna describe una característica de su comportamiento dentro del videojuego.

| Variable | Descripción |
|---|---|
| `daily_hours_spent` | Media diaria de horas que el jugador pasa jugando |
| `daily_currency_spent` | Media diaria de dinero virtual que el jugador gasta dentro del juego |

## Metodología aplicada

El proyecto sigue una metodología práctica de análisis no supervisado:

1. Carga y revisión inicial del dataset.
2. Visualización de la relación entre horas de juego y gasto.
3. Aplicación del método del codo para seleccionar el número adecuado de clústeres.
4. Entrenamiento del modelo K-Means.
5. Visualización de los clústeres y centroides.
6. Evaluación mediante métricas internas.
7. Interpretación de resultados desde una perspectiva de negocio.

## Fundamento técnico

El aprendizaje no supervisado permite descubrir patrones en datos que no tienen una variable objetivo previamente definida.

En este proyecto no se busca predecir una categoría conocida. El objetivo es identificar grupos de jugadores con comportamientos similares.

K-Means agrupa las observaciones en función de su distancia respecto a unos puntos centrales llamados centroides. Cada jugador se asigna al centroide más cercano, formando así distintos clústeres.

## Elbow Method

Para elegir el número adecuado de clústeres se utiliza el Elbow Method.

Este método compara la inercia obtenida con diferentes valores de `k`. La inercia mide qué tan compactos son los clústeres. El valor adecuado de `k` suele encontrarse en el punto donde la reducción de la inercia empieza a ser menos significativa.

## Resultados obtenidos

El análisis permite identificar tres perfiles principales de jugadores:

### Jugadores de baja actividad y bajo gasto

Este grupo representa a usuarios que dedican poco tiempo diario al juego y también presentan bajo gasto en moneda virtual. Podrían ser jugadores ocasionales o usuarios con bajo nivel de compromiso.

### Jugadores activos con gasto moderado

Este segmento agrupa a jugadores que dedican más tiempo al juego, pero cuyo gasto no es necesariamente el más alto. Pueden ser usuarios comprometidos con potencial para campañas personalizadas.

### Jugadores de alta actividad y alto gasto

Este grupo incluye jugadores con alto nivel de participación y mayor gasto en moneda virtual. Desde el punto de vista del negocio, puede tratarse de un segmento de alto valor.

## Valor de negocio

La segmentación obtenida puede aportar valor a una empresa de videojuegos en varias áreas:

- Monetización.
- Fidelización.
- Personalización de campañas.
- Reactivación de jugadores.
- Diseño de estrategias diferenciadas por perfil de usuario.

Este tipo de análisis ayuda a pasar de una visión general de los usuarios a una comprensión más segmentada y útil para la toma de decisiones.

## Tecnologías utilizadas

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Plotly
- Scikit-learn
- K-Means

## Repositorio del proyecto

El repositorio del proyecto incluye el notebook desarrollado en Python, el dataset utilizado, el archivo de dependencias y el README con la descripción técnica del análisis.

[Ver repositorio en GitHub](https://github.com/PaoAlbanData/game-player-segmentation-kmeans)

## Conclusión

Este proyecto demuestra cómo el aprendizaje no supervisado puede utilizarse para descubrir patrones de comportamiento en datos de usuarios.

A partir de dos variables sencillas, K-Means permite identificar grupos diferenciados de jugadores y generar una lectura útil desde el punto de vista de negocio.

El proyecto conecta la técnica del clustering con decisiones reales relacionadas con monetización, fidelización, personalización y reactivación de usuarios.
