| [KR 한국어](./docs/locales/ko.md) | [US English](./README.md) | [JP 日本語](./docs/locales/ja.md) | [CN 简体中文](./docs/locales/zh-CN.md) | [ES Español](./docs/locales/es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./docs/locales/fr.md) | [DE Deutsch](./docs/locales/de.md) | [RU Русский](./docs/locales/ru.md) | [SA العربية](./docs/locales/ar.md) | [IN हिन्दी](./docs/locales/hi.md) |

---

# Hi there, I'm Opilnig 👋

Systems programmer, digital signal processing (DSP) enthusiast, and open-source audio hacker. I spend my days designing deterministic real-time audio pipelines in Rust, building modular synthesizer architectures, and exploring zero-latency web audio through WebAssembly.

When I am not tracking down nanosecond audio dropouts or circuit-bending vintage 80s analog hardware, you can find me calibrating tube amplifiers, writing custom DSP kernels, or contributing to low-level audio infrastructure.

---

## 🛠️ Primary Focus & Engineering Ethos

- **Real-Time DSP & Sound Synthesis**: Designing polyphonic wavetable engines, physical acoustic modeling, and zero-delay feedback (ZDF) analog filters.
- **Low-Latency Systems Engineering**: Lock-free ring buffers, SIMD-accelerated math kernels, and deterministic memory management without garbage collection pauses.
- **Embedded & Web Audio Bridges**: Compiling Rust DSP codebases to native desktop VST3/CLAP plugins as well as high-performance WebAssembly/AudioWorklet modules.

---

## 💻 Technical Toolkit

| Category | Primary Technologies & Toolchains |
| :--- | :--- |
| **Core Systems** | Rust, Modern C++ (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware & Embedded** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocols & Standards** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Tooling & Platform** | Linux (Arch / Debian Real-Time Kernel), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 Active Projects & Experiments

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> A zero-allocation, lock-free modular DSP synthesizer engine written entirely in modern Rust. Features band-limited impulse train (BLIT) oscillators, zero-delay feedback Ladder filters, and an extensible patch matrix running at 192kHz with sub-millisecond roundtrip latency.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> High-throughput interactive audio visualizer and node-based modular rack running natively in the browser via WebAssembly and AudioWorklet. Driven by SharedArrayBuffer and lock-free atomic queues.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Ultra-lightweight, cross-platform MIDI 2.0 Universal MIDI Packet (UMP) router and packet inspector supporting high-resolution per-note pitch bend, articulation profiling, and bidirectional discovery.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Non-linear discrete numerical simulation of vintage analog operational transconductance amplifiers (OTA) and diode clipper circuits using modified nodal analysis (MNA) and Newton-Raphson solvers.

---

## 📊 Philosophy on Code & Craft

```rust
pub trait AudioProcessor: Send {
    /// Pure deterministic audio block processing without heap allocations.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zero Allocation in Hot Paths**: Audio threads must never block on malloc, file I/O, or mutex locks.
- **Deterministic Math**: Every numerical calculation must be bit-accurate, bounded, and resistant to denormal floats.
- **Open Standards**: Building toolchains that remain accessible, free of vendor lock-in, and interoperable across platforms.

---

## 🎧 Hardware Lab & Workbench

- **Oscilloscope**: Rigol DS1054Z 4-Channel Digital Storage Oscilloscope
- **Audio Interface**: RME Babyface Pro FS (SteadyClock FS low-jitter)
- **Monitors & Headphones**: Genelec 8030C, Sennheiser HD600 (Diffused-field calibrated)
- **Modular Gear**: Eurorack custom cases, Mutable Instruments clones, Teensy 4.1 devboards

---

## 📫 Connect & Collaborate

- **GitHub Discussions**: Feel free to open an issue or discussion on any of my repositories regarding DSP algorithms, audio architecture, or patch ideas.
- **Topics I Love Talking About**: Filter topology, antialiasing algorithms, real-time lock-free memory rings, and DIY modular synth schematics.
- **Current Goal**: Releasing a native CLAP/VST3 cross-compiled audio plugin suite built purely in open-source Rust.

---

*“Bits in, pristine sound out. Keep latency close to zero.”*
