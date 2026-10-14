# Demonstration of Distribution Layer Functions Using Cisco Packet Tracer

A comprehensive network architecture design and web-based documentation platform demonstrating the pivotal role and functionality of the **Distribution Layer** in a 3-tier hierarchical enterprise network.

---

## 🌟 Project Overview

In a modern enterprise network, flat topologies fail due to unmanaged broadcast domains, lack of traffic isolation, and security vulnerabilities. This project demonstrates how the **Distribution Layer** bridges Access and Core switches to provide:
- **Inter-VLAN Routing**: Switching packets between subnets using Layer 3 Switch SVIs (Switched Virtual Interfaces).
- **VLAN Segmentation**: Logical division into Students (VLAN 10), Faculty (VLAN 20), and Administration (VLAN 30).
- **Trunking & Encapsulation**: 802.1Q trunk links transporting multi-VLAN traffic across switches.
- **Traffic Control & Filtering**: Preparing for Access Control List (ACL) security enforcement.

---

## 📁 Repository Structure

```
Distribution-Layer-Project/
│
├── README.md                          # Project README & Guide
│
├── Cisco-Packet-Tracer/               # Packet Tracer Lab Implementation
│   ├── topology/
│   │   └── distribution_network.pkt   # Packet Tracer simulation file
│   ├── configurations/                # Cisco IOS CLI Script Files
│   │   ├── vlan-config.txt            # VLAN creation and port assignment
│   │   ├── trunk-config.txt           # 802.1Q Trunk link configuration
│   │   └── routing-config.txt         # Layer 3 SVI & Inter-VLAN Routing
│   └── screenshots/                   # Cisco Packet Tracer Lab Screenshots
│       ├── network-topology.png
│       ├── vlan-configuration.png
│       └── inter-vlan-routing.png
│
├── Website/                           # Web-Based Interactive Documentation
│   ├── index.html                     # Executive Dashboard Homepage
│   ├── pages/                         # Feature & Section Pages
│   │   ├── project.html               # Problem Statement, Scope & Progress
│   │   ├── architecture.html          # 3-Tier Hierarchical Model Breakdown
│   │   ├── vlan.html                  # VLAN & Subnet Matrix & Calculator
│   │   └── topology.html              # Interactive Network Topology & Node Inspector
│   ├── css/
│   │   └── style.css                  # Cyber-Tech Glassmorphism Design System
│   ├── js/
│   │   └── main.js                    # Interactive features, search & modal handlers
│   └── assets/                        # Visual Diagrams & Assets
│       ├── images/
│       │   ├── architecture.png
│       │   └── topology.png
│       └── screenshots/
│           ├── packet-tracer-topology.png
│           └── vlan-config.png
│
└── Documentation/                     # Academic & Faculty Review Documents
    ├── problem-statement.md           # Network bottlenecks & security challenges
    ├── objectives.md                  # Project goals and milestones
    ├── modules.md                     # 7 core implementation modules
    ├── software-hardware.md           # Tools, equipment, and Cisco hardware specs
    └── progress.md                    # 30-40% review progress report
```

---

## 🚀 How to Run & View

### 1. View Web Documentation & Visualization
Open `Website/index.html` in any web browser (Chrome, Firefox, Edge, Safari). Or serve locally using standard HTTP servers like Live Server or `npx serve Website`.

### 2. Cisco Packet Tracer Simulation
1. Launch **Cisco Packet Tracer** (v8.0+ recommended).
2. Open `Cisco-Packet-Tracer/topology/distribution_network.pkt`.
3. Inspect switch configurations using the CLI commands in `Cisco-Packet-Tracer/configurations/`.

---

## 📊 Project Status (Review Stage: 30–40%)

- **Completed**: Requirements, Network Architecture Design, Packet Tracer Topology, VLAN Creation, Subnetting, 802.1Q Trunking, SVI Inter-VLAN Routing, Web Portal Foundation.
- **In Progress**: Traffic Control (ACLs), Interactive Visual Simulator, Connectivity Matrix Dashboard.
- **Planned**: Security Hardening, Dynamic Routing Protocols (OSPF), Final Faculty Demo Presentation.
