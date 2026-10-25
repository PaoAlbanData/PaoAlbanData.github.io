---
title: 'Clinical Protocol AI: consulta documental de protocolos clínicos'
description: 'Aplicación web que responde preguntas sobre protocolos clínicos por texto o voz, con extractos literales, documento y página exacta del PDF, búsqueda 100 % en el navegador y coste 0 €.'
publishDate: 2026-10-25
---

## Descripción general del proyecto

Clinical Protocol AI es una aplicación web para consultar protocolos clínicos hospitalarios mediante preguntas escritas o por voz. En lugar de generar texto libre, localiza los fragmentos relevantes de los documentos y responde con extractos literales, indicando el documento, la institución, el año y la página exacta del PDF.

Si los protocolos no contienen información suficiente, la aplicación lo dice: «No encuentro información suficiente en los protocolos incluidos para responder con seguridad».

Utiliza como material de simulación cuatro Procesos Asistenciales Integrados de la Junta de Andalucía (trauma grave, EPOC, ictus y diabetes mellitus), publicados con licencia CC BY-NC-ND 4.0.

## Objetivo

Demostrar cómo construir una herramienta de consulta documental fiable para un contexto sensible como el sanitario: respuestas siempre trazables a su fuente, capacidad de rechazar preguntas sin evidencia y ningún dato del usuario enviado a servidores externos.

## Funcionalidades

- Chat de preguntas escritas y dictado por voz con la Web Speech API del navegador.
- Respuestas con referencias numeradas, extracto literal y botón para abrir el PDF original en la página citada.
- Rechazo de preguntas cuando los términos relevantes no aparecen en las fuentes.
- Aviso cuando las fuentes proceden de protocolos distintos.
- Lectura en voz alta y copia de la respuesta con sus referencias.
- IA generativa local opcional (WebLLM) que redacta la respuesta en el propio dispositivo, solo si cada frase cita una fuente y sus cifras aparecen en los documentos.
- Interfaz en español, adaptada a móvil, con avisos de uso exclusivamente demostrativo.

## Arquitectura y decisiones técnicas

- **Preparación con Python y PyMuPDF:** extracción del texto, limpieza de cabeceras y guiones de corte y fragmentación por página, de modo que cada cita apunta a una única página. Un script verifica que los 754 fragmentos aparecen en la página que citan.
- **Búsqueda BM25 en el navegador (MiniSearch)** sobre un índice estático de 174 KB comprimido, con normalización del español, sinónimos clínicos, reordenación por proximidad y una verificación de cobertura ponderada por IDF que decide si hay evidencia suficiente.
- **Sitio estático en Vercel**, sin backend, sin base de datos y sin APIs de pago. Las preguntas no salen del navegador.
- **Seguridad:** política de seguridad de contenidos (CSP) restrictiva, sin cookies ni analítica, y bloqueo de consultas con identificadores personales.

## Pruebas y resultados

- 36 pruebas automatizadas: 20 preguntas con respuesta en los cuatro protocolos (página correcta y dato literal recuperado), 8 preguntas sin evidencia rechazadas correctamente y pruebas de las salvaguardas de la IA local.
- Consultas resueltas en 1–10 ms y 0 peticiones a dominios externos en producción.
- Documentación honesta de las limitaciones: la búsqueda léxica no capta todas las paráfrasis y un modelo local de 1,5B parámetros llegó a inventar una respuesta, lo que motivó nuevas salvaguardas que hoy impiden mostrarla.

## Tecnologías utilizadas

React, TypeScript, Vite, Tailwind CSS, MiniSearch (BM25), Python, PyMuPDF, WebLLM, Web Speech API y Vitest. Publicada en Vercel.

## Enlaces del proyecto

- [Ver la demo en vivo](https://clinical-protocol-ai-kappa.vercel.app)
- [Ver repositorio en GitHub](https://github.com/PaoAlbanData/clinical-protocol-ai)

## Aviso

Demostración técnica sin uso clínico: no es un sistema de diagnóstico, prescripción ni apoyo a decisiones clínicas. Los documentos (2015–2020) se usan solo como material de simulación.
