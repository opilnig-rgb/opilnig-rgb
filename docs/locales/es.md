| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# ¡Hola! Soy Opilnig 👋

Programador senior de sistemas, especialista en procesamiento digital de señales (DSP) e ingeniero de software de audio de alto rendimiento. Mi trabajo se centra en el diseño de sistemas de audio deterministas en tiempo real con Rust, arquitecturas de sintetizadores modulares y aplicaciones de audio web de alto rendimiento mediante WebAssembly.

Mi enfoque técnico persigue la precisión temporal a nivel de microsegundos, la robustez numérica y el diseño de arquitecturas orientadas a la caché. Fuera del terminal, dedico mi tiempo a pruebas de laboratorio con circuitos analógicos discretos, calibración de amplificadores a válvulas y diseño de filtros DSP a medida.

---

## 🛠️ Áreas de Especialización y Principios de Diseño

- **Audio Determinista en Tiempo Real**: Construcción de hilos de renderizado de audio sin asignaciones dinámicas (zero-allocation), búferes circulares sin bloqueo (lock-free) y bucles DSP de tiempo acotado sin cortes de señal.
- **Cálculo Numérico de Alto Rendimiento**: Diseño de kernels vectoriales acelerados por SIMD (AVX2/NEON), topologías de filtros analógicos con retroalimentación de retardo cero (ZDF) y solucionadores para circuitos no lineales.
- **Arquitectura de Audio Multiplataforma**: Estructuración de código portable en Rust y C++ moderno compatible con estándares de plugins de escritorio (CLAP, VST3) y AudioWorklets en navegadores.
- **Ingeniería de Sistemas Robusta**: Garantía de invariantes de concurrencia estrictas, seguridad en memoria y comportamiento determinista en todos los entornos objetivo.

---

## 💻 Repertorio Técnico

| Categoría | Tecnologías y Cadenas de Herramientas |
| :--- | :--- |
| **Sistemas Centrales** | Rust, Modern C++ (C++20), C, Zig |
| **Audio y DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware y Embebidos** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocolos y E/S** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Plataformas y Herramientas** | Linux (Kernel de tiempo real), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 Proyectos de Código Abierto Destacados

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Motor de síntese modular DSP sin asignación dinámica de memoria (zero-allocation) y libre de bloqueos, escrito íntegramente en Rust puro. Dispone de osciladores de tren de impulsos con banda limitada (BLIT), filtros Ladder ZDF y una matriz de conexiones polifónica que opera a 192 kHz con latencia inferior a un milisegundo.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualizador de audio interactivo y rack modular basado en nodos que corre a velocidad nativa en el navegador mediante WebAssembly y AudioWorklet. Construido sobre SharedArrayBuffer y colas atómicas sin bloqueo.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Enrutador e inspector de protocolos MIDI 2.0 Universal MIDI Packet (UMP) ultraligero y multiplataforma. Admite pitch bend de alta resolución por nota, perfiles de articulación y detección bidireccional de dispositivos.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulación numérica discreta no lineal de amplificadores operacionales de transconductancia (OTA) y circuitos recortadores de diodos clásicos mediante análisis nodal modificado (MNA) y solucionadores de Newton-Raphson amortiguados.

---

## 📊 Filosofía de Código y Arquitectura

```rust
pub trait AudioProcessor: Send {
    /// Procesamiento de bloques de audio puramente determinista sin memoria en el heap ni cerrojos.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Cero Asignación en Rutas Críticas (Zero Allocation in Hot Paths)**: Los hilos de audio en tiempo real nunca deben bloquearse por llamadas a malloc, operaciones de E/S de archivos o cerrojos mutex.
- **Matemáticas Deterministas**: Cada cálculo en coma flotante debe ser exacto a nivel de bit, acotado y protegido contra caídas de rendimiento por números desnormalizados (denormals).
- **Estándares Abiertos**: Construcción de software limpio y desacoplado, sin ataduras a proveedores exclusivos y totalmente interoperable entre sistemas operativos.

---

## 🎧 Banco de Trabajo y Equipamiento de Medición

- **Instrumentación**: Rigol DS1054Z Osciloscopio digital de almacenamiento de 4 canales
- **Interfaz de Audio**: RME Babyface Pro FS (reloj de referencia SteadyClock FS)
- **Monitores y Auriculares**: Genelec 8030C, Sennheiser HD600 (calibrados para campo difuso)
- **Equipo Modular**: Cajas Eurorack personalizadas, módulos de filtrado analógico discreto, placas Teensy 4.1

---

## 📫 Conexión y Contacto Técnico

- **GitHub Discussions**: Te invito a abrir un issue o debate en mis repositorios para dialogar sobre algoritmos DSP, arquitectura de motores de sonido o esquemas de sintetizadores.
- **Temas de Interés**: Topología de filtros, algoritmos antialiasing, estructuras de datos concurrentes sin bloqueos y simulación de circuitos discretos.
- **Meta Actual**: Lanzar una suite completa de plugins de audio nativos CLAP/VST3 para entornos de producción, desarrollada puramente en Rust de código abierto.

---

*“Arquitectura limpia, ejecución determinista y latencia cercana a cero.”*
