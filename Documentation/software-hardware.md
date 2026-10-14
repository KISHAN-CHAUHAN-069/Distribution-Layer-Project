# Software & Hardware Requirements

This document outlines the software packages, simulation tools, hardware equipment specifications, and web platform standards utilized in the project.

---

## 🛠️ Software Requirements

| Category | Software / Tool | Version / Spec | Purpose |
| :--- | :--- | :--- | :--- |
| **Network Simulator** | Cisco Packet Tracer | v8.2+ | Topology design, switch CLI configuration, packet flow simulation |
| **Web Browser** | Google Chrome / MS Edge / Firefox | Modern Evergreen | Testing and rendering the interactive documentation website |
| **Code Editor** | VS Code / Antigravity IDE | Latest | HTML5, CSS3, JavaScript, and Markdown editing |
| **Styling & Logic** | CSS3 & Vanilla JavaScript (ES6+) | Modern Standard | Design tokens, dynamic animations, network calculator, switch inspector |

---

## 🔌 Hardware Network Devices (Simulated & Specs)

| Device Role | Cisco Hardware Model | Quantity | Key Specifications & Interface Allocation |
| :--- | :--- | :--- | :--- |
| **Core Layer Router** | Cisco 4331 ISR | 1 | GigabitEthernet 0/0/0 (Connection to ISP / Core network) |
| **Distribution Switch** | Cisco Catalyst 3650 Multilayer Switch | 1 | Layer 3 Switching, SVI support, `ip routing`, Gigabit uplinks |
| **Access Switches** | Cisco Catalyst 2960 Series | 2 | Layer 2 Switching, 24x FastEthernet ports, 2x Gigabit Trunk ports |
| **End Devices** | Standard PC Workstations / Servers | 8 | NICs configured with Static IPs & Gateways for VLAN 10, 20, 30 |

---

## 🌐 Subnetting & IP Addressing Scheme

| VLAN ID | Subnet Name | Network Address | Default Gateway (SVI) | Usable IP Range | Subnet Mask |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **VLAN 10** | Students | `192.168.10.0/24` | `192.168.10.1` | `192.168.10.2 - 192.168.10.254` | `255.255.255.0` |
| **VLAN 20** | Faculty | `192.168.20.0/24` | `192.168.20.1` | `192.168.20.2 - 192.168.20.254` | `255.255.255.0` |
| **VLAN 30** | Administration | `192.168.30.0/24` | `192.168.30.1` | `192.168.30.2 - 192.168.30.254` | `255.255.255.0` |
| **Core Link**| Core Uplink | `10.0.0.0/30` | `10.0.0.1` | `10.0.0.1 - 10.0.0.2` | `255.255.255.252` |
