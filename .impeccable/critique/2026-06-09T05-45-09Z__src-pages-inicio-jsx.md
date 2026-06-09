---
target: Inicio (homepage)
total_score: 31
p0_count: 0
p1_count: 1
timestamp: 2026-06-09T05-45-09Z
slug: src-pages-inicio-jsx
---
# Critique — Inicio (homepage)

Target: `src/pages/Inicio.jsx` · Register: brand · Primary purpose: respaldar la acreditación

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Estados activos/hover y breadcrumbs OK; sin async real |
| 2 | Match System / Real World | 4 | Español natural, terminología académica clara |
| 3 | User Control and Freedom | 3 | Nav clara; superficie marketing de bajo riesgo |
| 4 | Consistency and Standards | 3 | Badges de noticias usan pasteles fuera de paleta; "SINEACE" rompe la franja numérica |
| 5 | Error Prevention | 3 | n/a (sin formularios en el home) |
| 6 | Recognition Rather Than Recall | 4 | Nav etiquetada, accesos rápidos, íconos + texto |
| 7 | Flexibility and Efficiency | 3 | Accesos rápidos como atajos; sin shortcuts (marketing) |
| 8 | Aesthetic and Minimalist | 2 | Dos grids de cards seguidos, franja de stats, eyebrows, texto gris |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 3 | Contacto en topbar/footer; sin ayuda contextual (no requerida) |
| **Total** | | **31/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment:** No grita "IA" a primera vista — la identidad UNT (azul institucional + dorado, foto real, escudo) lo ancla y el hero se siente específico, no plantilla. Pero hay tells acumulados en la zona media: (1) franja de **stats tipo hero-metric** (números gigantes + label, patrón SaaS), (2) **eyebrows** uppercase ("Explora", "Infraestructura") encima de secciones, (3) **dos grids de cards idénticas** consecutivos (noticias 3-col + accesos 5-col) sobre el mismo gris, (4) **reflejo de reveal uniforme** (casi todo entra con el mismo fade-up).

**Deterministic scan:** `detect.mjs` sobre `Inicio.jsx` → `[]` (0 hallazgos, exit 0). Limpio de gradient-text, side-stripes, SVG sketchy, stripe backgrounds. Los tells de arriba son contextuales (badge por prop, sombra por valor arbitrario) y el detector conservador no los marca.

**Visual overlays:** No disponible — sin automatización de navegador en esta sesión (fallback: revisión de código + detector CLI).

## Overall Impression
Base sólida y on-brand: el hero y las tarjetas de "Ambientes" están bien resueltos y la paleta institucional quedó coherente. Lo que lo frena: el home está optimizado para **captar postulantes**, no para el objetivo declarado (**respaldar la acreditación**) — la evidencia de calidad/SINEACE aparece como un solo chip. Mayor oportunidad: subir la evidencia institucional y limpiar 3-4 tells de relleno.

## What's Working
1. **Hero institucional fuerte y específico** — azul + dorado, foto real, H1 con `clamp()` tope 6rem (no grita), CTA claro ("Ver Plan de Estudios"). Se siente UNT, no genérico.
2. **Tarjetas "Ambientes"** — bespoke: imagen + degradado navy + acento dorado que se expande en hover. No es el grid de cards perezoso.
3. **Sistema cohesionado** — paleta institucional unificada, componentes reutilizables (SectionTitle, Card), motion con reduced-motion resuelto global.

## Priority Issues

- **[P1] El home no respalda la acreditación (su objetivo primario).** Lidera como reclutamiento; la evidencia (SINEACE, indicadores de calidad) está enterrada en un chip. Un evaluador no tiene ruta rápida a "calidad/acreditación".
  - **Fix:** elevar una sección de evidencia institucional (acreditación, indicadores, sello SINEACE con contexto) cerca del inicio; reordenar la jerarquía del home.
  - **Comando:** `$impeccable shape` (replantear el home) o `$impeccable layout`.

- **[P2] Tells de IA acumulados.** Eyebrows uppercase por sección, franja de stats hero-metric, y dos grids de cards idénticas seguidos.
  - **Fix:** quitar el badge eyebrow del patrón por defecto; rediseñar la franja de cifras (que no sea número-gigante genérico) y diferenciar/condensar los dos grids.
  - **Comando:** `$impeccable quieter` o `$impeccable distill`.

- **[P2] Contraste por debajo de WCAG AA (tu meta).** `text-gray-400` (fechas ≈2.9:1), `text-gray-500` (descripciones/subtítulos, borderline sobre gris), y `text-white/40` (sub de cifras sobre navy).
  - **Fix:** subir el texto muteado hacia el extremo ink; mínimo 4.5:1 (3:1 en grande).
  - **Comando:** `$impeccable audit` luego `$impeccable polish`.

- **[P2] Badges de categoría fuera de paleta.** Noticias usa `bg-blue-100 / orange-100 / green-100` (pasteles genéricos) que rompen el sistema de 2 colores.
  - **Fix:** mapear categorías a variantes de azul/dorado institucional.
  - **Comando:** `$impeccable colorize` o `$impeccable polish`.

- **[P3] Copy de la bienvenida.** Prosa florida ("asombrosa travesía", "emocionante viaje"), texto **justificado** (ríos), CTA vago "Conocer más", y cita de "Rectora" sin nombre/foto/atribución.
  - **Fix:** condensar a 2-3 frases específicas, quitar `text-justify`, CTA verbo+objeto, atribuir la cita.
  - **Comando:** `$impeccable clarify`.

## Persona Red Flags

**Jordan (primerizo):** "SINEACE" como stat sin explicación (jerga). La bienvenida es un muro de texto. "Conocer más" no dice a dónde lleva.

**Casey (móvil):** hero `text-right`/`ml-auto` se siente raro alineado a la derecha en móvil; `min-h-[680px]` empuja todo; el grid de 5 accesos colapsa a 1-col = scroll largo; iframe de YouTube pesa en la carga.

**Evaluador SINEACE (persona del proyecto):** aterriza en un hero emocional de reclutamiento; la evidencia de acreditación está dispersa y sin jerarquía. No hay un "aquí está la calidad del programa" inmediato.

## Minor Observations
- Imports sin uso probables en `Inicio.jsx` (`director`, `Sparkles`, `Star`).
- Noticias (bg-gray-50) → Accesos (bg-gray-50): mismo fondo dos secciones seguidas, ritmo monótono.
- Cards de accesos: `border` + `hover:shadow-[0_12px_40px...]` roza el patrón "ghost-card" (solo en hover).
- Reveals `whileInView` parten de opacity:0; en SPA con JS está bien, pero gatear visibilidad en transición es frágil para no-JS/headless.

## Questions to Consider
- ¿Qué ve un evaluador de SINEACE en los primeros 5 segundos que lo convenza de la calidad del programa?
- ¿La franja de cifras necesita ser "números gigantes", o evidencia más concreta (acreditación vigente, ratios, logros)?
- ¿Tres audiencias, un solo home: necesita el home rutas diferenciadas (postulante / evaluador / comunidad)?
