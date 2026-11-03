| [KR 한국어](./docs/locales/ko.md) | [US English](./README.md) | [JP 日本語](./docs/locales/ja.md) | [CN 简体中文](./docs/locales/zh-CN.md) | [ES Español](./docs/locales/es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./docs/locales/fr.md) | [DE Deutsch](./docs/locales/de.md) | [RU Русский](./docs/locales/ru.md) | [SA العربية](./docs/locales/ar.md) | [IN हिन्दी](./docs/locales/hi.md) |

---

# Hi there, I'm Opilnig 👋

Senior systems programmer, digital signal processing (DSP) specialist, and open-source audio engineer. I focus on building deterministic real-time audio systems in Rust, modular synthesizer architectures, and low-latency audio software for native platforms and the web via WebAssembly.

My work centers on numerical robustness, microsecond-level timing precision, and cache-conscious systems design. Outside the terminal, I spend time bench-testing discrete analog circuitry, calibrating tube amplifiers, and designing custom DSP filters.

---

## 🛠️ Engineering Focus & Principles

- **Deterministic Real-Time Audio**: Writing zero-allocation audio render threads, lock-free ring buffers, and bounded-time DSP loops that never block or drop samples.
- **High-Performance Numerical Computing**: Designing SIMD-accelerated vector kernels (AVX2/NEON), zero-delay feedback (ZDF) analog filter topologies, and non-linear circuit solvers.
- **Cross-Platform Audio Architecture**: Structuring portable DSP codebases in Rust and modern C++ compiled across desktop plugin standards (CLAP, VST3) and browser AudioWorklets.
- **Robust Systems Engineering**: Enforcing memory safety, strict concurrency invariants, and deterministic behavior across all supported targets.

---

## 💻 Technical Stack

| Category | Primary Technologies & Toolchains |
| :--- | :--- |
| **Core Systems** | Rust, Modern C++ (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Embedded & Firmware** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocols & I/O** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Platforms & Tooling** | Linux (Real-Time Kernel), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 Key Open-Source Projects

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> A zero-allocation, lock-free modular DSP synthesizer engine written in pure Rust. Features band-limited impulse train (BLIT) oscillators, zero-delay feedback Ladder filters, and an extensible polyphonic patch matrix operating at 192 kHz with sub-millisecond roundtrip latency.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> High-throughput interactive audio visualizer and node-based modular rack running natively in the browser via WebAssembly and AudioWorklet. Architected around SharedArrayBuffer and lock-free atomic queues.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Ultra-lightweight, cross-platform MIDI 2.0 Universal MIDI Packet (UMP) router and protocol inspector. Supports high-resolution per-note pitch bend, articulation profiling, and bidirectional device discovery.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Non-linear discrete numerical simulation of vintage operational transconductance amplifiers (OTA) and diode clipper circuits using modified nodal analysis (MNA) and damped Newton-Raphson solvers.

---

## 📊 Code & Architecture Philosophy

```rust
pub trait AudioProcessor: Send {
    /// Pure deterministic audio block processing without heap allocations or locks.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zero Allocation in Hot Paths**: Real-time threads must never invoke heap allocators, file descriptors, or locking primitives.
- **Deterministic Math**: Every floating-point computation must be strictly bounded, bit-accurate, and guarded against denormal float performance penalties.
- **Open Standards**: Building clean, modular software free of vendor lock-in and fully interoperable across operating systems.

---

## 🎧 Hardware Workbench & Measurement Gear

- **Analysis**: Rigol DS1054Z 4-Channel Digital Storage Oscilloscope
- **Audio Interface**: RME Babyface Pro FS (SteadyClock FS low-jitter reference)
- **Monitoring**: Genelec 8030C Active Monitors & Sennheiser HD600 (Diffused-field calibrated)
- **Modular Gear**: Custom Eurorack cases, discrete analog filter modules, Teensy 4.1 development boards

---

## 📫 Connect & Collaborate

- **GitHub Discussions**: Feel free to open an issue or discussion on any of my repositories regarding DSP algorithms, audio architecture, or synthesizer schematics.
- **Technical Topics**: Filter topology, antialiasing algorithms, lock-free concurrent data structures, and discrete analog simulation.
- **Current Focus**: Releasing a production-grade, cross-platform CLAP/VST3 audio plugin suite built purely in open-source Rust.

---

*“Clean architecture, deterministic execution, and latency close to zero.”*
