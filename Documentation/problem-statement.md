# Problem Statement

## 1. Background & Challenges in Flat Network Topologies
Traditional enterprise networks frequently suffer from unsegmented, flat network architecture where all end devices (students, staff, servers, administrative computers) reside within a single Layer 2 broadcast domain. 

In such legacy networks:
1. **Broadcast Storms & Congestion**: Broadcast packets (ARP, DHCP, NetBIOS) are flooded to every connected port across all switches, leading to severe latency and bandwidth degradation.
2. **Security Vulnerabilities**: Without logical segmentation, any compromised host on the network can easily eavesdrop on sensitive administrative traffic, execute ARP spoofing attacks, or access restricted faculty databases.
3. **Lack of Centralized Policy Control**: Without a designated Distribution Layer, access switches connect directly to edge routers or each other without centralized filtering, making Access Control List (ACL) deployment complex and inefficient.
4. **Poor Scalability & Single Point of Failure**: Adding new departments or buildings requires extending large broadcast domains, compounding performance degradation and making link failover unpredictable.

---

## 2. The Distribution Layer Solution
To resolve these core enterprise networking challenges, this project designs and simulates a **Hierarchical 3-Tier Enterprise Network Model** centered on the **Distribution Layer**.

By introducing a Layer 3 Multilayer Switch at the Distribution Layer:
- Broadcast domains are localized to individual Access Switches using VLANs (Students, Faculty, Administration).
- Inter-VLAN Routing is executed efficiently at wire-speed via Switched Virtual Interfaces (SVIs).
- Security policies and traffic controls (ACLs) are centralized between the Access Layer and Core Layer.
- Redundant link topologies can be managed predictably using Spanning Tree Protocol (STP) and EtherChannel.
