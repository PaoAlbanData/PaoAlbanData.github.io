---
title: 'Constructor de prompts: formulario para pedir mejor a la IA'
description: 'Herramienta web que convierte unos pocos campos en un prompt completo, adaptado a 10 tipos de tarea y a 10 herramientas de imagen y vídeo, con versión en inglés y sin enviar datos a ningún servidor.'
publishDate: 2026-11-03
---

## Descripción general del proyecto

Constructor de prompts es un formulario web para escribir peticiones completas a un asistente de IA sin tener que recordar qué información necesita cada caso. Eliges lo que quieres hacer, rellenas los campos y obtienes un prompt ordenado, listo para pegar en Claude, ChatGPT, Gemini o en una herramienta de generación de imagen o vídeo.

## Objetivo

Reducir las respuestas genéricas que provienen de peticiones incompletas. En lugar de una plantilla única, cada tipo de tarea pide la información que más influye en el resultado: la pregunta de negocio en un análisis de datos, la relación con el destinatario en un email o lo que no se debe tocar al revisar un texto.

## Funcionalidades

- **10 tareas de texto:** genérico, análisis de datos, post de LinkedIn, resumen de documentos, email, fórmulas y código, investigación, presentaciones, revisión de textos y lluvia de ideas. Cada una termina con una instrucción de buenas prácticas específica.
- **Imagen y vídeo:** campos comunes (sujeto, acción, entorno, estilo, luz, encuadre) cuyo resultado se adapta a Midjourney, ChatGPT, Gemini, Adobe Firefly, Ideogram, Stable Diffusion, Runway, Google Veo, Sora y Kling: parámetros de Midjourney, prompt negativo en su propio bloque, solo movimiento cuando Runway parte de una imagen, y campos de sonido y diálogo en Veo y Sora.
- **Separación por destino:** lo que se configura en la interfaz de cada herramienta, como la proporción o la duración, aparece como recordatorio y no se mezcla con el prompt.
- **Versión en inglés:** un botón copia el prompt con la instrucción de traducirlo y adaptarlo, para usarlo en cualquier chat. Abierta dentro de Claude, la página puede hacer la traducción directamente.
- Indicador de campos clave pendientes, ejemplos completos para cada caso y guardado automático en el navegador.

## Decisiones de diseño

- **Por tarea y no por plataforma:** los asistentes de texto entienden de forma muy parecida un prompt bien estructurado, así que adaptar el formulario a cada plataforma apenas cambia el resultado. Lo que sí cambia la respuesta es pedir la información adecuada para cada tipo de tarea.
- **Herramientas creativas aparte:** un prompt de imagen o vídeo no se parece a uno de texto, y cada herramienta tiene su propia sintaxis.
- **Sin backend ni claves de API:** la traducción se resuelve copiando una instrucción o, dentro de Claude, con la cuenta de quien la usa. Publicar una clave en una web abierta habría expuesto su coste a cualquier visitante.

## Tecnologías utilizadas

HTML, CSS y JavaScript en un único archivo, sin dependencias ni proceso de build. Datos guardados en `localStorage`, tema claro y oscuro, diseño adaptado a móvil. Publicada con GitHub Pages.

## Enlaces del proyecto

- [Ver la demo en vivo](https://paoalbandata.github.io/Constructor-prompts/)
- [Ver repositorio en GitHub](https://github.com/PaoAlbanData/Constructor-prompts)

## Conclusión

El proyecto aplica a la redacción de prompts la misma idea que un buen formulario de recogida de requisitos: preguntar solo lo necesario, en el orden adecuado y según el caso. El resultado es una herramienta de uso diario que hace explícitas las buenas prácticas sin exigir conocerlas de antemano.
