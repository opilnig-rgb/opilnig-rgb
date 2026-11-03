| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Hallo, ich bin Opilnig 👋

Leitender Systemprogrammierer, Spezialist für digitale Signalverarbeitung (DSP) und Open-Source-Audioingenieur. Mein Schwerpunkt liegt auf der Entwicklung deterministischer Echtzeit-Audiosysteme in Rust, modularer Synthesizer-Architekturen sowie extrem latenzarmer Audiosoftware für native Plattformen und das Web über WebAssembly.

Im Mittelpunkt meiner Arbeit stehen numerische Robustheit, Mikrosekunden-Timing-Präzision und cache-optimiertes Systemdesign. Abseits des Terminals verbringe ich Zeit mit Messungen an diskreten analogen Schaltungen, der Kalibrierung von Röhrenverstärkern und der Entwicklung maßgeschneiderter DSP-Filtertopologien.

---

## 🛠️ Technische Schwerpunkte & Architekturprinzipien

- **Deterministisches Echtzeit-Audio**: Allokationsfreie Audio-Render-Threads (Zero-allocation), sperrenfreie Ringpuffer (Lock-free) und zeitlich streng begrenzte DSP-Schleifen ohne Dropouts.
- **Hochleistungs-Numerik**: SIMD-beschleunigte Vektorkerne (AVX2/NEON), analoge Zero-Delay-Feedback (ZDF) Filterstrukturen und nichtlineare Schaltungslöser.
- **Plattformübergreifende Audio-Architektur**: Strukturierung portabler Rust- und moderner C++-Codebasen für Desktop-Plugin-Standards (CLAP, VST3) sowie Browser-AudioWorklets.
- **Robuste Systemtechnik**: Strikte Speicher- und Nebenläufigkeits-Invarianten sowie deterministisches Verhalten über alle Zielarchitekturen hinweg.

---

## 💻 Technischer Werkzeugkasten

| Kategorie | Primäre Technologien & Toolchains |
| :--- | :--- |
| **Kernsysteme** | Rust, Modernes C++ (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Embedded & Firmware** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protokolle & I/O** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Plattformen & Analyse** | Linux (Echtzeit-Kernel), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 Wichtige Open-Source-Projekte

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Allokationsfreie, sperrenfreie modulare DSP-Synthesizer-Engine, vollständig in reinem Rust entwickelt. Ausgestattet mit bandbegrenzten Impulsfolge-Oszillatoren (BLIT), ZDF-Ladder-Filtern und einer erweiterbaren polyphonen Patch-Matrix, die bei 192 kHz mit Sub-Millisekunden-Latenz operiert.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Durchsatzstarker interaktiver Audio-Visualisierer und knotenbasiertes modulares Rack mit nativer Ausführungsgeschwindigkeit im Webbrowser via WebAssembly und AudioWorklet. Basiert auf SharedArrayBuffer und sperrenfreien atomaren Warteschlangen.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Extrem leichtgewichtiger, plattformübergreifender MIDI 2.0 Universal MIDI Packet (UMP) Router und Protokoll-Inspektor. Unterstützt hochauflösendes Pitch-Bend pro Note, Artikulations-Profiling und bidirektionale Geräteerkennung.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Nichtlineare diskrete numerische Simulation historischer Operations-Transkonduktanz-Verstärker (OTA) und Dioden-Clipper-Schaltungen mittels modifizierter Knotenpunktanalyse (MNA) und gedämpfter Newton-Raphson-Löser.

---

## 📊 Code- & Architekturphilosophie

```rust
pub trait AudioProcessor: Send {
    /// Reine deterministische Audio-Blockverarbeitung ohne Heap-Allokationen oder Sperren.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Keine Allokation auf kritischen Pfaden (Zero Allocation in Hot Paths)**: Echtzeit-Threads dürfen niemals Heap-Allokatoren, Datei-Handles oder blockierende Sperrmechanismen aufrufen.
- **Deterministische Mathematik**: Jede Fließkommaberechnung muss streng begrenzt, bitgenau und gegen Leistungsabfälle durch denormalisierte Zahlen geschützt sein.
- **Offene Standards**: Entwicklung modularer Software ohne proprietäre Bindung und mit vollständiger Interoperabilität über verschiedene Betriebssysteme.

---

## 🎧 Hardware-Messplatz & Laborausstattung

- **Messtechnik**: Rigol DS1054Z 4-Kanal Digital-Speicheroszilloskop
- **Audio-Interface**: RME Babyface Pro FS (SteadyClock FS jitterarme Referenz)
- **Monitoring**: Genelec 8030C Aktivmonitore & Sennheiser HD600 (diffusfeldentzerrt)
- **Modulare Systeme**: Kundenspezifische Eurorack-Gehäuse, diskrete analoge Filtermodule, Teensy-4.1-Entwicklungsboards

---

## 📫 Kontakt & Austausch

- **GitHub Discussions**: Eröffnen Sie gerne Issues oder Diskussionen in meinen Repositories zu DSP-Algorithmen, Audio-Architektur oder Synthesizer-Schaltungen.
- **Fachliche Themen**: Filtertopologien, Antialiasing-Algorithmen, sperrenfreie Datenstrukturen und diskrete Analogsimulation.
- **Aktueller Fokus**: Veröffentlichung einer nativen, plattformübergreifenden CLAP/VST3-Audio-Plugin-Suite in reinem Open-Source-Rust.

---

*„Saubere Architektur, deterministische Ausführung und eine Latenz nahe Null.“*
