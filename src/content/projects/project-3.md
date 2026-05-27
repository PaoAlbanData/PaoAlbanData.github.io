---
title: 'Análisis exploratorio de alojamientos Airbnb en Barcelona'
excerpt: 'Proyecto de análisis exploratorio de datos aplicado a alojamientos de Airbnb en Barcelona, enfocado en precios, disponibilidad, distribución geográfica y patrones de concentración turística.'
publishDate: 2026-05-26
---

## Descripción general del proyecto

Este proyecto presenta un análisis exploratorio de datos de alojamientos de Airbnb en la ciudad de Barcelona. El objetivo principal es estudiar cómo se distribuye la oferta de alojamientos en la ciudad, qué variables se relacionan con el precio, qué patrones aparecen en la disponibilidad mensual y hasta qué punto los datos permiten reflexionar sobre algunas de las propuestas de valor asociadas a Airbnb.

El análisis parte de un dataset con información sobre alojamientos publicados en la plataforma, incluyendo variables relacionadas con ubicación, precio, disponibilidad, número de habitaciones, camas, baños, reseñas y características generales de cada alojamiento.

## Objetivo del análisis

El propósito del proyecto es transformar un conjunto de datos turístico en información útil para entender mejor el comportamiento de la oferta de Airbnb en Barcelona.

A partir del análisis, se busca responder preguntas como:

- ¿En qué zonas de Barcelona se concentra la mayor parte de los alojamientos?
- ¿Qué características del alojamiento parecen estar más relacionadas con el precio?
- ¿Qué patrones de disponibilidad mensual presentan las propiedades?
- ¿La oferta se distribuye de forma equilibrada por la ciudad o se concentra en áreas turísticas?
- ¿Qué conclusiones de negocio pueden extraerse a partir de los datos?

## Proceso realizado

El proyecto comienza con la carga y revisión inicial del dataset. Posteriormente, se realiza una fase de limpieza de datos, eliminando columnas poco relevantes para el análisis, revisando valores nulos y ajustando variables necesarias para trabajar correctamente con la información disponible.

También se transforman las variables de latitud y longitud para poder utilizarlas en visualizaciones geográficas. A partir de esta preparación, el análisis se centra únicamente en los registros correspondientes a la ciudad de Barcelona.

Una vez preparado el dataset, se desarrolla un análisis exploratorio para identificar patrones generales en los datos. Se estudian variables relacionadas con el precio, la disponibilidad, el número de reseñas, los distritos y las características físicas de los alojamientos.

Además, se incluye un análisis de correlaciones para explorar la relación entre el precio y variables como el número de baños, habitaciones y camas. Como complemento, se desarrolla una regresión múltiple básica con el objetivo de observar cómo estas variables pueden contribuir a explicar la variación del precio.

Finalmente, el proyecto incorpora una visualización geográfica mediante mapas para observar la distribución espacial de los alojamientos en Barcelona.

## Principales hallazgos

Uno de los resultados más relevantes del análisis es la concentración de alojamientos en zonas céntricas y turísticas de Barcelona. Distritos como Eixample, Ciutat Vella y Gràcia muestran una presencia destacada dentro de la oferta analizada.

Este patrón sugiere que la actividad de Airbnb no se distribuye de forma homogénea por toda la ciudad, sino que tiende a concentrarse en áreas con mayor atractivo turístico, mejor conectividad y mayor demanda por parte de los visitantes.

En relación con el precio, el análisis muestra una asociación positiva entre el valor del alojamiento y algunas características físicas, especialmente el número de baños, habitaciones y camas. Estas variables ayudan a explicar parte de la variación del precio, aunque el análisis también permite entender que el precio de un alojamiento turístico no depende únicamente de sus características internas, sino también de factores como la ubicación, la demanda, el tipo de propiedad y la actividad turística del entorno.

Respecto a la disponibilidad, se observan alojamientos disponibles durante una parte importante del mes, lo que puede indicar un uso más continuo de algunas propiedades como alquiler turístico. Este punto permite reflexionar sobre la diferencia entre un uso ocasional de la vivienda y una estrategia más orientada a la rentabilidad mediante alquiler de corta estancia.

## Enfoque de negocio

Más allá del análisis técnico, este proyecto incorpora una lectura de negocio basada en la propuesta de valor de Airbnb.

El análisis permite observar que algunas propuestas de valor se cumplen parcialmente, especialmente en zonas turísticas consolidadas donde existe una alta actividad de alojamientos, reseñas y disponibilidad.

Sin embargo, la idea de dispersar el turismo hacia barrios menos céntricos parece limitada, ya que los alojamientos tienden a concentrarse en las áreas más demandadas de la ciudad. Esto puede tener implicaciones para la gestión turística, la planificación urbana y la relación entre plataformas digitales, anfitriones, visitantes y residentes.

Desde una perspectiva de Data Analytics, el proyecto muestra cómo un análisis exploratorio puede ayudar a convertir datos operativos en conclusiones útiles para la toma de decisiones.

## Tecnologías utilizadas

Python, Pandas, NumPy, Matplotlib, Seaborn, Statsmodels, Folium y Google Colab.

## Archivos del proyecto

El repositorio incluye el notebook con el desarrollo técnico del análisis, el dataset utilizado y un informe en PDF con las principales visualizaciones y conclusiones.

## Enlaces del proyecto

- [Ver repositorio en GitHub](https://github.com/PaoAlbanData/airbnb-barcelona-eda)
- [Ver notebook del proyecto](https://github.com/PaoAlbanData/airbnb-barcelona-eda/blob/main/Proyecto_Airbnb.ipynb)
- [Ver informe en PDF](https://github.com/PaoAlbanData/airbnb-barcelona-eda/blob/main/Proyecto_Airbnb.pdf)
