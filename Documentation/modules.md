# Project Modules Breakdown

This project is divided into **7 core modules**, systematically covering requirements, simulation design, Cisco IOS configuration, security policy, web visualization, and testing.

---

### Module 1: Requirements Analysis & Network Topology Design
- **Focus**: Defining subnet addresses, host capacity per department, selecting Cisco hardware models (Catalyst 3650 Multilayer Switch, 2960 Access Switches, 4331 Core Router).
- **Deliverables**: Network diagram layout, IP addressing table.

### Module 2: Access Layer & VLAN Configuration
- **Focus**: Setting up Access Switches (`SW-ACCESS-01`, `SW-ACCESS-02`), creating VLAN 10 (Students), VLAN 20 (Faculty), VLAN 30 (Admin), and binding switchports to corresponding end devices.
- **Deliverables**: `vlan-config.txt`, port assignment list.

### Module 3: 802.1Q Trunking & VLAN Tagging
- **Focus**: Configuring IEEE 802.1Q trunking on uplink switch ports connecting Access Switches to the Distribution Switch, defining allowed VLAN lists.
- **Deliverables**: `trunk-config.txt`, `show interfaces trunk` output.

### Module 4: Distribution Layer Inter-VLAN Routing (SVI)
- **Focus**: Enabling global IP routing (`ip routing`) on the Layer 3 Distribution Switch (`SW-DIST-01`), creating SVI interfaces (`Vlan10`, `Vlan20`, `Vlan30`), and setting default gateways.
- **Deliverables**: `routing-config.txt`, SVI route table inspection.

### Module 5: Traffic Control & Security Filtering (ACLs)
- **Focus**: Implementing Extended Access Control Lists (ACLs) at the Distribution Layer boundary to permit/deny inter-department traffic (e.g., block Student VLAN from accessing Admin subnet `192.168.30.0/24`).
- **Deliverables**: ACL CLI script, packet drop test logs.

### Module 6: Web Visualization & Documentation Platform
- **Focus**: Developing a responsive cyber-tech styled web application (HTML, CSS, JS) featuring executive overview, architectural tier breakdown, VLAN calculator, interactive topology node inspector, and packet simulation previews.
- **Deliverables**: Complete `Website/` directory structure.

### Module 7: Comprehensive Testing, Simulation & Faculty Review
- **Focus**: End-to-end ping validation, traceroute verification across subnets, Packet Tracer simulation mode demonstration, and progress documentation report.
- **Deliverables**: `progress.md`, verified Packet Tracer `.pkt` file, screenshots.
