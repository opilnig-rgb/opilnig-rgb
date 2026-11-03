| [KR 한국어](./ko.md) | [US English](../../README.md) | [JP 日本語](./ja.md) | [CN 简体中文](./zh-CN.md) | [ES Español](./es.md) |
| :---: | :---: | :---: | :---: | :---: |
| [FR Français](./fr.md) | [DE Deutsch](./de.md) | [RU Русский](./ru.md) | [SA العربية](./ar.md) | [IN हिन्दी](./hi.md) |

---

# Bonjour, je suis Opilnig 👋

Programmeur système senior, spécialiste du traitement numérique du signal (DSP) et ingénieur logiciel audio haute performance. Je me consacre à la conception de systèmes audio déterministes en temps réel avec Rust, aux architectures de synthétiseurs modulaires et aux logiciels audio web à performances natives via WebAssembly.

Mes travaux portent sur la précision temporelle à l'échelle de la microseconde, la robustesse numérique et la conception de systèmes adaptés au cache. Hors du terminal, je passe mon temps aux bancs d'essai de circuits analogiques discrets, à l'étalonnage d'amplificateurs à lampes et à la conception de filtres DSP sur mesure.

---

## 🛠️ Domaines d'Expertise et Principes de Conception

- **Audio Déterministe Temps Réel** : Création de threads de rendu audio sans allocation dynamique (zero-allocation), de tampons circulaires sans verrou (lock-free) et de boucles DSP à temps borné sans décrochage.
- **Calcul Numérique Haute Performance** : Conception de noyaux vectoriels accélérés par SIMD (AVX2/NEON), de topologies de filtres analogiques à rétroaction sans retard (ZDF) et de résolveurs de circuits non linéaires.
- **Architecture Audio Multiplateforme** : Structuration de bases de code portables en Rust et C++ moderne compilables sur les standards de greffons de bureau (CLAP, VST3) et les AudioWorklets pour navigateurs.
- **Ingénierie Système Robuste** : Respect strict des invariants de concurrence, sûreté mémoire et vérification du comportement déterministe sur toutes les plateformes cibles.

---

## 💻 Boîte à Outils Technique

| Catégorie | Technologies Clés et Chaînes d'Outils |
| :--- | :--- |
| **Systèmes Fondamentaux** | Rust, C++ Moderne (C++20), C, Zig |
| **Audio & DSP** | WebAssembly, AudioWorklet, SIMD (AVX2/NEON), FAUST, JUCE, CLAP / VST3 |
| **Embarqué & Firmware** | STM32 (ARM Cortex-M4/M7), ESP32, Teensy, FreeRTOS, Embedded Rust |
| **Protocoles & E/S** | MIDI 2.0 (UMP), OSC (Open Sound Control), I2S, SPI, USB Audio Class 2.0 |
| **Plateformes & Analyse** | Linux (Noyau temps réel), Git, CMake, Cargo, GDB, Valgrind, Perf, Wireshark |

---

## 🚀 Projets Open-Source Majeurs

### 1. [pulse-dsp](https://github.com/opilnig-rgb)
> Moteur de synthèse modulaire DSP sans allocation dynamique et sans verrou, écrit en pur Rust. Intègre des oscillateurs à train d'impulsions à bande limitée (BLIT), des filtres en échelle ZDF et une matrice de patchs polyphonique extensible fonctionnant à 192 kHz avec une latence aller-retour inférieure à la milliseconde.

### 2. [wasm-audio-canvas](https://github.com/opilnig-rgb)
> Visualiseur audio interactif et baie modulaire nodale s'exécutant à vitesse native dans le navigateur via WebAssembly et AudioWorklet. Conçu autour de SharedArrayBuffer et de files d'attente atomiques sans verrou.

### 3. [midi2-router](https://github.com/opilnig-rgb)
> Routeur et inspecteur de protocoles MIDI 2.0 Universal MIDI Packet (UMP) ultra-léger et multiplateforme. Prend en charge le pitch bend haute résolution par note, le profilage d'articulation et la détection bidirectionnelle d'appareils.

### 4. [analog-modeler](https://github.com/opilnig-rgb)
> Simulation numérique discrète non linéaire d'amplificateurs opérationnels à transconductance (OTA) et de circuits d'écrêtage à diodes classiques à l'aide de l'analyse nodale modifiée (MNA) et de solveurs de Newton-Raphson amortis.

---

## 📊 Philosophie du Code et d'Architecture

```rust
pub trait AudioProcessor: Send {
    /// Traitement déterministe pur de blocs audio sans allocation sur le tas ni verrou.
    fn process_block(&mut self, input: &[f32], output: &mut [f32], sample_rate: f64);
}
```

- **Zéro Allocation sur les Chemins Critiques (Zero Allocation in Hot Paths)** : Les threads temps réel ne doivent jamais être bloqués par des appels malloc, des descripteurs de fichiers ou des verrous mutex.
- **Mathématiques Déterministes** : Chaque calcul en virgule flottante doit être borné, exact au bit près et protégé contre les baisses de régime causées par les nombres dénormalisés (denormals).
- **Standards Ouverts** : Bâtir des logiciels modulaires et propres, exempts de dépendance propriétaire et pleinement interopérables entre systèmes d'exploitation.

---

## 🎧 Établi Matériel & Instruments de Mesure

- **Instrumentation** : Rigol DS1054Z Oscilloscope numérique à mémoire 4 canaux
- **Interface Audio** : RME Babyface Pro FS (horloge de référence SteadyClock FS à très faible gigue)
- **Monitoring** : Genelec 8030C Moniteurs actifs, Sennheiser HD600 (étalonnés en champ diffus)
- **Matériel Modulaire** : Boîtiers Eurorack personnalisés, modules de filtrage discrets, cartes Teensy 4.1

---

## 📫 Échange et Contact Technique

- **GitHub Discussions** : N'hésitez pas à ouvrir un ticket ou une discussion sur mes dépôts pour échanger autour des algorithmes DSP, de l'architecture audio ou de schémas de synthétiseurs.
- **Sujets d'Échange** : Topologie de filtres, algorithmes d'anticrénelage, structures de données concurrentes sans verrou et simulation analogique discrète.
- **Objectif Actuel** : Publier une suite de greffons audio natifs CLAP/VST3 de qualité professionnelle conçue exclusivement en Rust open-source.

---

*« Architecture propre, exécution déterministe et latence proche de zéro. »*
