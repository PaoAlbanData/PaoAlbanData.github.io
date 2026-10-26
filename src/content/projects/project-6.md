---
title: 'Clinical Protocol AI: consulta documental de una guía clínica'
description: 'Aplicación web que responde preguntas sobre la enfermedad tromboembólica venosa por texto o voz, con extractos literales, página exacta del PDF y clase de recomendación, búsqueda 100 % en el navegador y coste 0 €.'
publishDate: 2026-10-25
---

## Descripción general del proyecto

Clinical Protocol AI es una aplicación web para consultar una guía clínica mediante preguntas escritas o por voz. En lugar de generar texto libre, localiza los fragmentos relevantes del documento y responde con extractos literales, indicando la sección, la página exacta del PDF y, cuando existe, la clase de recomendación y el nivel de evidencia.

Si el documento no contiene información suficiente, la aplicación lo dice: «No encuentro información suficiente en los protocolos incluidos para responder con seguridad».

El documento consultado es el Consenso para el Diagnóstico y Tratamiento de la Enfermedad Tromboembólica Venosa de la Sociedad Argentina de Cardiología y la Sociedad Argentina de Hematología (2025), publicado con licencia CC BY-NC-SA 2.5 Argentina. Abarca la tromboembolia de pulmón y la trombosis venosa profunda: diagnóstico, estratificación del riesgo, anticoagulación, fibrinólisis, filtros de vena cava y poblaciones especiales.

## Objetivo

Demostrar cómo construir una herramienta de consulta documental fiable para un contexto sensible como el sanitario: respuestas siempre trazables a su fuente, capacidad de rechazar preguntas sin evidencia y ningún dato del usuario enviado a servidores externos.

## Funcionalidades

- Chat de preguntas escritas y dictado por voz con la Web Speech API del navegador.
- Respuestas con referencias numeradas, extracto literal, sección del documento y botón para abrir el PDF original en la página citada.
- Clase de recomendación y nivel de evidencia mostrados junto a cada recomendación.
- Rechazo de preguntas cuando los términos relevantes no aparecen en el documento.
- Lectura en voz alta y copia de la respuesta con sus referencias.
- IA generativa local opcional (WebLLM) que redacta la respuesta en el propio dispositivo, solo si cada frase cita una fuente y sus cifras aparecen en el documento.
- Interfaz en español, adaptada a móvil, con avisos de uso exclusivamente demostrativo.

## Arquitectura y decisiones técnicas

- **Preparación con Python y PyMuPDF usando coordenadas:** eliminación de cabeceras y de la bibliografía intercalada, unión solo de líneas contiguas y fragmentación por página, de modo que cada cita apunta a una única página. Un script verifica que los 481 fragmentos aparecen en la página que citan.
- **Clase de recomendación por posición:** en las tablas del consenso, la clase y el nivel de evidencia se asignan a cada recomendación según su fila en la página, y solo si no hay ambigüedad (219 recomendaciones).
- **Búsqueda BM25 en el navegador (MiniSearch)** sobre un índice estático de 108 KB comprimido, con normalización del español, sinónimos clínicos, equivalencias de terminología entre España y Argentina y una verificación de cobertura ponderada por IDF que decide si hay evidencia suficiente.
- **Sitio estático en Vercel**, sin backend, sin base de datos y sin APIs de pago. Las preguntas no salen del navegador.
- **Seguridad:** política de seguridad de contenidos (CSP) restrictiva, sin cookies ni analítica, y bloqueo de consultas con identificadores personales.

## Selección del documento y licencias

La primera versión usaba procesos asistenciales de 2015–2020, demasiado antiguos. Antes de cambiar de documento se revisaron las licencias: una guía internacional de 2026 prohibía expresamente su distribución y un consenso español no tenía licencia abierta, así que se eligió un consenso actual, en español y con licencia que permite publicarlo.

## Pruebas y resultados

- 38 pruebas automatizadas: 21 preguntas con respuesta (página correcta y dato literal recuperado), 8 preguntas sin evidencia rechazadas correctamente y pruebas de las salvaguardas de la IA local.
- Validación de la clase de recomendación: todas las recomendaciones de clase III son negativas («se desaconseja», «no se recomienda»), como corresponde.
- Consultas resueltas en milisegundos y 0 peticiones a dominios externos en producción.
- Documentación honesta de las limitaciones y de los errores encontrados y corregidos, como la asignación inicial de clases por orden de aparición, que se sustituyó por la asignación por coordenadas.

## Tecnologías utilizadas

React, TypeScript, Vite, Tailwind CSS, MiniSearch (BM25), Python, PyMuPDF, WebLLM, Web Speech API y Vitest. Publicada en Vercel.

## Enlaces del proyecto

- [Ver la demo en vivo](https://clinical-protocol-ai-kappa.vercel.app)
- [Ver repositorio en GitHub](https://github.com/PaoAlbanData/clinical-protocol-ai)

## Aviso

Demostración técnica sin uso clínico: no es un sistema de diagnóstico, prescripción ni apoyo a decisiones clínicas. Las respuestas deben verificarse siempre en el documento original y en los protocolos de cada centro.
