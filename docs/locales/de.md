| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Hallo, ich bin Opilnig 👋

Systemprogrammierer, Enthusiast für digitale Signalverarbeitung (DSP) und Open-Source-Audio-Hacker. Ich widme meine Zeit dem Entwurf deterministischer Echtzeit-Audio-Pipelines in Rust, dem Aufbau modularer Synthesizer-Architekturen und der Erforschung von latenzfreiem Web-Audio mittels WebAssembly.

Wenn ich nicht gerade Audio-Dropouts im Nanosekundenbereich aufspüre oder analoge Vintage-Hardware aus den 80er Jahren modifiziere (Circuit Bending), kalibriere ich Röhrenverstärker, schreibe maßgeschneiderte DSP-Rechenkerne oder trage zur Low-Level-Audio-Infrastruktur bei.

---

## 🛠️ Schwerpunkte & Ingenieurphilosophie

- **Echtzeit-DSP & Klangsynthese**: Entwurf polyphoner Wavetable-Engines, physikalische akustische Modellierung und analoge Zero-Delay-Feedback-Filter (ZDF).
- **Ultra-Niedriglatenz-Systemtechnik**: Sperrenfreie Ringpuffer (Lock-free Ring Buffers), SIMD-beschleunigte Mathematik-Kernel und deterministisches Speichermanagement ohne Garbage-Collection-Pausen.
- **Brücke zwischen Embedded & Web Audio**: Cross-Kompilierung von Rust-DSP-Codebasen sowohl für native Desktop-Plugins (VST3/CLAP) als auch für performante WebAssembly/AudioWorklet-Module.

---

## 💻 Technischer Werkzeugkasten

| Kategorie | Primäre Technologien & Toolchains |
| :--- | :--- |
| **Kernsysteme** | Rust, Modernes C++ (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware & Embedded** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protokolle & Standards** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Tools & Plattformen** | Linux (Arch / Debian mit Echtzeit-Kernel), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 Aktuelle Projekte & Experimente

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Eine allokationsfreie, sperrenfreie modulare DSP-Synthesizer-Engine, die vollständig in modernem Rust implementiert ist. Bietet bandbegrenzte Impulsfolgen-Oszillatoren (BLIT), ZDF-Ladder-Filter und eine erweiterbare Patch-Matrix, die bei 192 kHz mit einer Latenz von unter einer Millisekunde arbeitet.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Interaktiver Audio-Visualisierer und knotenbasiertes modulares Rack mit nativer Ausführungsgeschwindigkeit im Browser via WebAssembly und AudioWorklet. Angetrieben von SharedArrayBuffer und sperrenfreien atomaren Warteschlangen.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Extrem leichtgewichtiger, plattformübergreifender MIDI 2.0 Universal MIDI Packet (UMP) Router und Paket-Inspektor. Unterstützt hochauflösendes Pitch-Bend pro Note, Artikulations-Profiling und bidirektionale Geräteerkennung.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Nichtlineare diskrete numerische Simulation historischer analoger Operations-Transkonduktanz-Verstärker (OTA) und Dioden-Clipper-Schaltungen mittels modifizierter Knotenpunktanalyse (MNA) und Newton-Raphson-Lösern.

---

## 📊 Philosophie zu Code & Handwerk

```rust
pub trait AudioProcessor: Send {
    /// Reine deterministische Audio-Blockverarbeitung ohne Heap-Allokationen.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Keine Allokation auf kritischen Pfaden (Zero Allocation in Hot Paths)**: Echtzeit-Audio-Threads dürfen niemals durch malloc, Datei-I/O oder Mutex-Sperren blockiert werden.
- **Deterministische Mathematik**: Jede numerische Berechnung muss bitgenau, beschränkt und immun gegen denormalisierte Gleitkommazahlen (Denormals) sein.
- **Offene Standards**: Entwicklung von Werkzeugen ohne Bindung an proprietäre Anbieter und mit voller Interoperabilität über Plattformgrenzen hinweg.

---

## 🎧 Hardware-Labor & Werkbank

- **Oszilloskop**: Rigol DS1054Z 4-Kanal Digital-Speicheroszilloskop
- **Audio-Interface**: RME Babyface Pro FS (SteadyClock FS jitterarme Taktung)
- **Monitore & Kopfhörer**: Genelec 8030C, Sennheiser HD600 (diffusfeldentzerrt)
- **Modulares Equipment**: Kundenspezifische Eurorack-Gehäuse, Mutable-Instruments-Nachbauten, Teensy-4.1-Entwicklungsboards

---

## 📫 Kontakt & Austausch

- **GitHub Discussions**: Gerne können Sie ein Issue oder eine Diskussion in meinen Repositories zu DSP-Algorithmen, Audio-Architektur oder Patch-Konzepten eröffnen.
- **Lieblings-Themen**: Filter-Topologien, Antialiasing-Algorithmen, sperrenfreie Echtzeit-Speicherringe und Schaltpläne für DIY-Modularsynthesizer.
- **Aktuelles Ziel**: Veröffentlichung einer nativen, plattformübergreifenden CLAP/VST3-Audio-Plugin-Suite, die rein in Open-Source-Rust entwickelt wurde.

---

*„Bits rein, unverfälschter Klang raus. Die Latenz stets nahe Null halten.“*
