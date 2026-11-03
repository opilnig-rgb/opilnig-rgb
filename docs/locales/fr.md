| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Bonjour, je suis Opilnig 👋

Programmeur système, passionné de traitement numérique du signal (DSP) et hacker audio open-source. Je consacre mon temps à concevoir des pipelines audio temps réel déterministes en Rust, à bâtir des architectures de synthétiseurs modulaires et à explorer l'audio web à latence zéro grâce à WebAssembly.

Quand je ne traque pas des pertes de paquets audio à l'échelle de la nanoseconde (buffer underruns) ou que je ne modifie pas les circuits d'instruments analogiques des années 80 (circuit bending), vous me trouverez en train d'étalonner des amplificateurs à lampes, d'écrire des noyaux de calcul DSP sur mesure ou de contribuer à l'infrastructure audio bas niveau.

---

## 🛠️ Domaines d'Expertise et Philosophie d'Ingénierie

- **DSP Temps Réel et Synthèse Sonore** : Conception de moteurs à tables d'ondes polyphoniques, modélisation acoustique physique et filtres analogiques à rétroaction sans retard (Zero-Delay Feedback - ZDF).
- **Ingénierie Système Ultra-Basse Latence** : Buffers circulaires sans verrou (lock-free ring buffers), noyaux mathématiques accélérés par SIMD et gestion déterministe de la mémoire sans pauses de ramasse-miettes (GC).
- **Passerelles Embarqué et Web Audio** : Compilation croisée de bases de code Rust DSP vers des greffons de bureau natifs VST3/CLAP ainsi que des modules WebAssembly/AudioWorklet haute performance.

---

## 💻 Boîte à Outils Technique

| Catégorie | Technologies Clés et Chaînes d'Outils |
| :--- | :--- |
| **Systèmes Fondamentaux** | Rust, C++ Moderne (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Firmware & Embarqué** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocoles & Standards** | MIDI 2.0, OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Outils & Environnements** | Linux (Arch / Debian avec noyau temps réel), Git, CMake, Cargo, GDB, Valgrind, Wireshark |

---

## 🚀 Projets en Cours et Expérimentations

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Un moteur de synthèse modulaire DSP sans allocation dynamique (zero-allocation) et sans verrou, écrit entièrement en Rust moderne. Il propose des oscillateurs à train d'impulsions à bande limitée (BLIT), des filtres en échelle ZDF et une matrice de patch extensible fonctionnant à 192 kHz avec une latence aller-retour inférieure à la milliseconde.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualiseur audio interactif et baie modulaire nodale s'exécutant à vitesse native dans le navigateur via WebAssembly et AudioWorklet. Propulsé par SharedArrayBuffer et des files d'attente atomiques sans verrou.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Routeur et inspecteur de paquets MIDI 2.0 Universal MIDI Packet (UMP) ultra-léger et multiplateforme. Prend en charge le pitch bend haute résolution par note, le profilage d'articulation et la découverte bidirectionnelle d'appareils.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulation numérique discrète non-linéaire d'amplificateurs opérationnels à transconductance (OTA) et de circuits d'écrêtage à diodes classiques à l'aide de l'analyse nodale modifiée (MNA) et de solveurs de Newton-Raphson.

---

## 📊 Philosophie du Code et de l'Artisanat

```rust
pub trait AudioProcessor: Send {
    /// Traitement de blocs audio purement déterministe, sans allocation sur le tas (heap).
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zéro Allocation sur les Chemins Critiques (Zero Allocation in Hot Paths)** : Les threads audio temps réel ne doivent jamais être bloqués par un malloc, des opérations d'E/S fichier ou des verrous mutex.
- **Mathématiques Déterministes** : Chaque calcul numérique doit être exact au niveau du bit, strictement borné et immunisé contre les nombres flottants dénormalisés (denormals).
- **Normes Ouvertes** : Bâtir des chaînes d'outils libres de tout verrouillage propriétaire et interopérables sur toutes les plateformes.

---

## 🎧 Laboratoire Matériel & Établi

- **Oscilloscope** : Rigol DS1054Z Oscilloscope numérique à mémoire 4 canaux
- **Interface Audio** : RME Babyface Pro FS (horloge SteadyClock FS à très faible gigue)
- **Écoutes & Casques** : Genelec 8030C, Sennheiser HD600 (étalonnés en champ diffus)
- **Matériel Modulaire** : Boîtiers Eurorack sur mesure, répliques Mutable Instruments, cartes de développement Teensy 4.1

---

## 📫 Échange et Collaboration

- **GitHub Discussions** : N'hésitez pas à ouvrir un ticket ou une discussion sur mes dépôts pour échanger autour des algorithmes DSP, de l'architecture audio ou d'idées de patchs.
- **Sujets Favoris** : Topologie des filtres, algorithmes d'anticrénelage, anneaux de mémoire temps réel sans verrou et schémas électroniques de synthés modulaires DIY.
- **Objectif Actuel** : Publier une suite complète de greffons audio natifs CLAP/VST3 développés intégralement en Rust open-source.

---

*« Entrez des bits, récoltez un son cristallin. Gardez la latence aussi proche de zéro que possible. »*
