/**
 * Master JavaScript File for Distribution Layer Network Project
 * Interactivity, Dynamic Navigation, VLAN Subnet Inspector & Ping Simulation
 */

document.addEventListener('DOMContentLoaded', () => {
  initActiveNavigation();
  initCopyCodeButtons();
  initDeviceInspector();
  initVlanCalculator();
  initPingSimulator();
});

/**
 * 1. Automatically highlight the active nav menu item based on window location
 */
function initActiveNavigation() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalize paths
    if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href.includes('index.html'))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/**
 * 2. Add copy button to CLI code blocks
 */
function initCopyCodeButtons() {
  const codeHeaders = document.querySelectorAll('.code-header');

  codeHeaders.forEach(header => {
    if (header.querySelector('.copy-btn')) return; // avoid duplicate

    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn-secondary copy-btn';
    copyBtn.style.padding = '3px 10px';
    copyBtn.style.fontSize = '0.75rem';
    copyBtn.innerHTML = '📋 Copy CLI';

    copyBtn.addEventListener('click', () => {
      const codeBlock = header.nextElementSibling;
      if (codeBlock && codeBlock.classList.contains('code-content')) {
        navigator.clipboard.writeText(codeBlock.textContent.trim()).then(() => {
          copyBtn.innerHTML = '✅ Copied!';
          setTimeout(() => { copyBtn.innerHTML = '📋 Copy CLI'; }, 2000);
        });
      }
    });

    header.appendChild(copyBtn);
  });
}

/**
 * 3. Interactive Topology Node Inspector (Used in topology.html)
 */
const DEVICE_DATA = {
  'core-router': {
    name: 'Core Router (R-CORE-01)',
    model: 'Cisco ISR 4331',
    layer: 'Core Layer',
    ip: '10.0.0.1 /30',
    role: 'Provides WAN connection to ISP, internet gateway, and high-speed core packet switching across campus enterprise networks.',
    ports: 'Gi0/0/0 (ISP Uplink), Gi0/0/1 (To Distribution Switch 10.0.0.2/30)',
    vlan: 'N/A (Layer 3 Router)'
  },
  'dist-switch': {
    name: 'Multilayer Distribution Switch (SW-DIST-01)',
    model: 'Cisco Catalyst 3650',
    layer: 'Distribution Layer (Primary Focus)',
    ip: 'SVI Gateways: 192.168.10.1, 192.168.20.1, 192.168.30.1',
    role: 'Centralized Inter-VLAN Routing, SVI default gateways, 802.1Q trunk termination, and upcoming ACL traffic control enforcement.',
    ports: 'Gi0/1 (Trunk SW-ACCESS-01), Gi0/2 (Trunk SW-ACCESS-02), Gi0/24 (Routed Port to Core)',
    vlan: 'VLAN 10, VLAN 20, VLAN 30 (SVI Interfaces)'
  },
  'access-sw1': {
    name: 'Access Switch 1 (SW-ACCESS-01)',
    model: 'Cisco Catalyst 2960-24TT',
    layer: 'Access Layer',
    ip: '192.168.10.2 (Management)',
    role: 'Provides local port connectivity for Students (Fa0/1-10) and Faculty (Fa0/11-18). Aggregates user traffic and tags 802.1Q frames.',
    ports: 'Fa0/1-10 (Students), Fa0/11-18 (Faculty), Gi0/1 (Trunk to SW-DIST-01)',
    vlan: 'VLAN 10, VLAN 20'
  },
  'access-sw2': {
    name: 'Access Switch 2 (SW-ACCESS-02)',
    model: 'Cisco Catalyst 2960-24TT',
    layer: 'Access Layer',
    ip: '192.168.30.2 (Management)',
    role: 'Provides local port connectivity for Administrative workstations and servers (Fa0/19-24). Connects to Distribution Switch via 802.1Q Trunk.',
    ports: 'Fa0/19-24 (Admin), Gi0/1 (Trunk to SW-DIST-01)',
    vlan: 'VLAN 30'
  },
  'pc-student': {
    name: 'Student Computer (PC-STUDENT-01)',
    model: 'Generic Workstation',
    layer: 'End Devices Layer',
    ip: '192.168.10.10 /24',
    role: 'Student lab endpoint assigned to VLAN 10. Default Gateway: 192.168.10.1 (Distribution Switch SVI).',
    ports: 'NIC Connected to SW-ACCESS-01 Fa0/1',
    vlan: 'VLAN 10 (Students)'
  },
  'pc-faculty': {
    name: 'Faculty Workstation (PC-FACULTY-01)',
    model: 'Generic Workstation',
    layer: 'End Devices Layer',
    ip: '192.168.20.10 /24',
    role: 'Faculty staff workstation assigned to VLAN 20. Default Gateway: 192.168.20.1.',
    ports: 'NIC Connected to SW-ACCESS-01 Fa0/11',
    vlan: 'VLAN 20 (Faculty)'
  },
  'server-admin': {
    name: 'Admin Database Server (SRV-ADMIN-01)',
    model: 'Rack Server',
    layer: 'End Devices Layer',
    ip: '192.168.30.10 /24',
    role: 'Secure administrative server residing in VLAN 30. Stores student grades and administrative records.',
    ports: 'NIC Connected to SW-ACCESS-02 Fa0/19',
    vlan: 'VLAN 30 (Administration)'
  }
};

function initDeviceInspector() {
  const nodeBtns = document.querySelectorAll('.node-btn');
  const detailsBox = document.getElementById('device-details-card');

  if (!nodeBtns.length || !detailsBox) return;

  nodeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      nodeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const deviceId = btn.dataset.device;
      const data = DEVICE_DATA[deviceId];

      if (data) {
        detailsBox.innerHTML = `
          <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 12px;">
            <span class="badge badge-cyan" style="margin-bottom: 6px;">${data.layer}</span>
            <h3 style="font-size: 1.3rem; color: var(--text-primary);">${data.name}</h3>
            <p style="font-size: 0.85rem; color: var(--accent-cyan); font-family: var(--font-code);">${data.model} | IP: ${data.ip}</p>
          </div>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 12px;">${data.role}</p>
          <div style="background: rgba(0,0,0,0.3); padding: 10px; border-radius: var(--radius-sm); font-size: 0.85rem; font-family: var(--font-code);">
            <div><strong>Active Interfaces:</strong> ${data.ports}</div>
            <div><strong>Assigned VLANs:</strong> ${data.vlan}</div>
          </div>
        `;
      }
    });
  });
}

/**
 * 4. Interactive VLAN Calculator on vlan.html
 */
function initVlanCalculator() {
  const calcBtn = document.getElementById('vlan-calc-btn');
  const inputIp = document.getElementById('vlan-calc-input');
  const resultDiv = document.getElementById('vlan-calc-result');

  if (!calcBtn || !inputIp || !resultDiv) return;

  calcBtn.addEventListener('click', () => {
    const ip = inputIp.value.trim();
    if (!ip) {
      resultDiv.innerHTML = `<span style="color: var(--accent-amber);">Please enter a valid IP address.</span>`;
      return;
    }

    if (ip.startsWith('192.168.10.')) {
      resultDiv.innerHTML = `
        <div class="badge badge-blue">VLAN 10: Students</div>
        <p style="margin-top: 8px; color: var(--text-primary);">Subnet: <code>192.168.10.0/24</code> | Default Gateway: <code>192.168.10.1</code> (SW-DIST-01)</p>
      `;
    } else if (ip.startsWith('192.168.20.')) {
      resultDiv.innerHTML = `
        <div class="badge badge-emerald">VLAN 20: Faculty</div>
        <p style="margin-top: 8px; color: var(--text-primary);">Subnet: <code>192.168.20.0/24</code> | Default Gateway: <code>192.168.20.1</code> (SW-DIST-01)</p>
      `;
    } else if (ip.startsWith('192.168.30.')) {
      resultDiv.innerHTML = `
        <div class="badge badge-purple">VLAN 30: Administration</div>
        <p style="margin-top: 8px; color: var(--text-primary);">Subnet: <code>192.168.30.0/24</code> | Default Gateway: <code>192.168.30.1</code> (SW-DIST-01)</p>
      `;
    } else {
      resultDiv.innerHTML = `
        <div class="badge badge-amber">External / Unassigned IP</div>
        <p style="margin-top: 8px; color: var(--text-secondary);">The IP address <code>${ip}</code> is routed via the Core Router <code>10.0.0.1</code> default gateway route.</p>
      `;
    }
  });
}

/**
 * 5. Interactive Inter-VLAN Ping Flow Simulator
 */
function initPingSimulator() {
  const pingBtn = document.getElementById('ping-sim-btn');
  const srcSelect = document.getElementById('ping-src');
  const dstSelect = document.getElementById('ping-dst');
  const consoleLog = document.getElementById('ping-console-log');

  if (!pingBtn || !srcSelect || !dstSelect || !consoleLog) return;

  pingBtn.addEventListener('click', () => {
    const src = srcSelect.value;
    const dst = dstSelect.value;

    consoleLog.innerHTML = `<span style="color: var(--accent-cyan);">Packet Tracer ICMP Simulation Initialized...</span><br>`;

    setTimeout(() => {
      consoleLog.innerHTML += `> Generating ICMP Echo Request from <strong>${src}</strong> to <strong>${dst}</strong><br>`;
    }, 400);

    setTimeout(() => {
      consoleLog.innerHTML += `> Encapsulating 802.1Q frame → Sending to Access Switch<br>`;
    }, 900);

    setTimeout(() => {
      consoleLog.innerHTML += `> <strong>Trunk Link Traversal:</strong> Trunking tagged frame over GigabitEthernet to Distribution Switch (SW-DIST-01)<br>`;
    }, 1400);

    setTimeout(() => {
      consoleLog.innerHTML += `> <strong>Distribution Layer SVI Lookup:</strong> SW-DIST-01 performs Inter-VLAN routing across Switched Virtual Interfaces.<br>`;
    }, 1900);

    setTimeout(() => {
      if (src.includes('192.168.10') && dst.includes('192.168.30') && window.ACL_ENABLED) {
        consoleLog.innerHTML += `<span style="color: #ef4444;">❌ Access Control List Blocked! ACL 101 Denied Packet at SW-DIST-01 interface Vlan30.</span><br>`;
      } else {
        consoleLog.innerHTML += `<span style="color: var(--accent-emerald);">✅ ICMP Reply Received! Reply from ${dst}: bytes=32 time<1ms TTL=127 (Success Rate 100%)</span><br>`;
      }
    }, 2500);
  });
}
