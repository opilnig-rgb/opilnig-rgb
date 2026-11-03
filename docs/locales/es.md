| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# ¡Hola! Soy Opilnig 👋

Programador de sistemas, apasionado del procesamiento digital de señales (DSP) y hacker de audio de código abierto. Dedico mis días a diseñar canalizaciones de audio en tiempo real deterministas en Rust, construir arquitecturas de sintetizadores modulares y explorar el audio web de latencia cero mediante WebAssembly.

Cuando no estoy rastreando microcortes de audio en la escala de nanosegundos (buffer underruns) o hackeando circuitos analógicos clásicos de los años 80 (circuit bending), me encontrarás calibrando amplificadores a válvulas, escribiendo kernels matemáticos DSP a medida o contribuyendo a la infraestructura de audio de bajo nivel.

---

## 🛠️ Enfoque Principal y Filosofía de Ingeniería

- **DSP en Tiempo Real y Síntesis de Sonido**: Diseño de motores de tabla de ondas polifónicos, modelado acústico físico y filtros analógicos con retroalimentación de retardo cero (ZDF).
- **Ingeniería de Sistemas de Ultra Baja Latencia**: Búferes circulares libres de bloqueos (lock-free ring buffers), kernels matemáticos acelerados por SIMD y gestión determinista de memoria sin pausas de recolector de basura.
- **Puente entre Audio Embebido y Web**: Compilación cruzada de código DSP en Rust tanto para plugins de escritorio nativos VST3/CLAP como para módulos de alto rendimiento en WebAssembly/AudioWorklet.

---

## 💻 Repertorio Técnico

| Categoría | Tecnologías y Cadenas de Herramientas |
| :--- | :--- |
| **Sistemas Centrales** | Rust, Modern C++ (C++20), C, Zig |
| **Audio y DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware y Embebidos** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocolos y Estándares** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Herramientas y Plataformas** | Linux (Arch / Debian con kernel de tiempo real), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 Proyectos Activos y Experimentos

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Motor sintetizador DSP modular libre de bloqueos y sin asignaciones de memoria dinámica (zero-allocation), escrito íntegramente en Rust moderno. Cuenta con osciladores de tren de impulsos con banda limitada (BLIT), filtros Ladder ZDF y una matriz de conexiones ampliable que opera a 192 kHz con latencia de ida y vuelta inferior a un milisegundo.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualizador de audio interactivo y rack modular basado en nodos que corre a velocidad nativa en el navegador mediante WebAssembly y AudioWorklet. Impulsado por SharedArrayBuffer y colas atómicas sin bloqueos.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Enrutador e inspector de paquetes MIDI 2.0 Universal MIDI Packet (UMP) ultraligero y multiplataforma. Soporta pitch bend de alta resolución por nota, perfiles de articulación y descubrimiento bidireccional de dispositivos.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulación numérica discreta no lineal de amplificadores operacionales de transconductancia (OTA) y circuitos recortadores de diodos clásicos mediante análisis nodal modificado (MNA) y solucionadores Newton-Raphson.

---

## 📊 Filosofía de Código y Artesanía

```rust
pub trait AudioProcessor: Send {
    /// Procesamiento de bloques de audio puramente determinista sin asignaciones en el heap.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Cero Asignaciones en Rutas Críticas (Zero Allocation in Hot Paths)**: Los hilos de audio en tiempo real nunca deben bloquearse por malloc, operaciones de E/S de archivos o cerrojos mutex.
- **Matemáticas Deterministas**: Cada cálculo numérico debe ser exacto a nivel de bit, estar acotado y evitar la degradación por números flotantes desnormalizados (denormals).
- **Estándares Abiertos**: Creación de herramientas libres de ataduras a proveedores exclusivos y totalmente interoperables entre plataformas.

---

## 🎧 Laboratorio de Hardware y Banco de Trabajo

- **Osciloscopio**: Rigol DS1054Z Osciloscopio digital de 4 canales
- **Interfaz de Audio**: RME Babyface Pro FS (reloj de ultra bajo jitter SteadyClock FS)
- **Monitores y Auriculares**: Genelec 8030C, Sennheiser HD600 (calibrados para campo difuso)
- **Equipo Modular**: Cajas Eurorack personalizadas, clones de Mutable Instruments, placas de desarrollo Teensy 4.1

---

## 📫 Conexión y Colaboración

- **GitHub Discussions**: No dudes en abrir un issue o debate en cualquiera de mis repositorios sobre algoritmos DSP, arquitectura de audio o ideas de síntesis.
- **Temas que me apasionan**: Topología de filtros, algoritmos antialiasing, anillos de memoria en tiempo real sin bloqueos y esquemas de sintetizadores modulares DIY.
- **Meta Actual**: Lanzar una suite completa de plugins de audio nativos CLAP/VST3 construidos íntegramente en Rust de código abierto.

---

*“Entran bits, sale sonido impecable. Mantén la latencia cerca de cero.”*
