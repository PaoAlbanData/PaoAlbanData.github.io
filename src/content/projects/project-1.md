---
title: 'Predicción del Abandono Estudiantil con Machine Learning'
description: 'Proyecto de Data Science aplicado a la predicción del abandono estudiantil en educación superior mediante análisis exploratorio, preparación de datos, modelos supervisados e interpretación con SHAP.'
publishDate: 2026-05-21
seo:
  image:
    src: '../../../assets/images/project-1.jpg'
    alt: 'Vista previa del proyecto'
---

## Descripción general del proyecto

Este proyecto aplica técnicas de Data Science y Machine Learning para predecir el abandono estudiantil en educación superior a partir de variables académicas, personales y socioeconómicas.

El objetivo principal es identificar patrones asociados al riesgo de abandono y construir un modelo predictivo capaz de clasificar a los estudiantes según su situación académica: abandono, continuidad o graduación.

El proyecto incluye análisis exploratorio de datos, preparación de variables, comparación de modelos supervisados, optimización del modelo final e interpretación de resultados mediante técnicas de explicabilidad.

## Objetivo

Desarrollar un modelo de Machine Learning que permita anticipar posibles casos de abandono estudiantil a partir de información académica y socioeconómica, aportando una visión analítica útil para la toma de decisiones en contextos educativos.

## Conjunto de datos utilizado

El proyecto utiliza el conjunto de datos Predict Students' Dropout and Academic Success, disponible en el UCI Machine Learning Repository.

El dataset contiene información académica, demográfica y socioeconómica de estudiantes de educación superior, junto con una variable objetivo que clasifica el resultado académico final en tres categorías: abandono, continuidad o graduación.

## Proceso desarrollado

El desarrollo del proyecto se estructuró en las siguientes fases:

1. Carga y revisión inicial de los datos.
2. Análisis exploratorio de datos.
3. Limpieza y transformación de variables.
4. Codificación de variables categóricas.
5. División del conjunto de datos en entrenamiento y prueba.
6. Entrenamiento y comparación de modelos supervisados.
7. Optimización del modelo final.
8. Evaluación mediante métricas de clasificación.
9. Interpretación del modelo con técnicas de explicabilidad.

## Modelos evaluados

Durante el desarrollo se compararon distintos modelos de clasificación supervisada:

1. Regresión Logística.
2. Árbol de Decisión.
3. Random Forest.
4. XGBoost.

El modelo final seleccionado fue XGBoost, debido a su mejor equilibrio entre rendimiento predictivo, capacidad de generalización e interpretación de variables relevantes.

## Resultados principales

El modelo permitió identificar variables académicas especialmente relevantes para la predicción del abandono, destacando el rendimiento del estudiante durante los primeros semestres.

Las variables relacionadas con unidades curriculares aprobadas, calificaciones obtenidas y desempeño académico temprano mostraron un peso importante en la clasificación de los estudiantes.

Además, se utilizaron técnicas de interpretación como SHAP para analizar la influencia de las variables en las predicciones del modelo.

## Herramientas y tecnologías

Python, pandas, NumPy, scikit-learn, XGBoost, Matplotlib, Seaborn, SHAP y Google Colab/Jupyter Notebook.

## Acceso al proyecto

El desarrollo completo del proyecto está disponible en GitHub, incluyendo el README, el notebook y la documentación técnica del análisis.

[Ver repositorio en GitHub](https://github.com/PaoAlbanData/Prediccion_abandono_estudiantil)

## Conclusión

Este proyecto muestra cómo el Machine Learning puede aplicarse en el ámbito educativo para apoyar la detección temprana de estudiantes en riesgo de abandono.

Más allá de la predicción, el análisis permite comprender qué factores influyen con mayor intensidad en el desempeño académico, aportando información útil para diseñar estrategias de seguimiento, orientación y prevención.
