//  DATA KENDARAAN
const vehicles = [
    { id:1, status:"Tersedia", tipe:"CDD",             plat:"17066V",  driver:"DIAMBIL SENDIRI",        kapasitas:"3 Ton" },
    { id:2, status:"Tersedia", tipe:"PICK UP",         plat:"A8691KT", driver:"DIAMBIL SENDIRI",        kapasitas:"1 Ton" },
    { id:3, status:"Kirim",    tipe:"CDD LONG",        plat:"A8930FS", driver:"PT. SINAR LANANG LOGISTIK", kapasitas:"7 Ton" },
    { id:4, status:"Kirim",    tipe:"CDD LONG",        plat:"A8947FS", driver:"PT. SINAR LANANG LOGISTIK", kapasitas:"7 Ton" },
    { id:5, status:"Tersedia", tipe:"FUSO",            plat:"B 1234 CD", driver:"PT. MAJU BERSAMA",     kapasitas:"8 Ton" },
    { id:6, status:"Muat",     tipe:"KONTAINER",       plat:"B 9876 EF", driver:"PT. LOGISTIK NUSANTARA", kapasitas:"20 Ton" },
    { id:7, status:"Siap",     tipe:"TRAILER PANJANG", plat:"B 3456 GH", driver:"PT. CAHAYA LOGISTIK",   kapasitas:"25 Ton" },
    { id:8, status:"Blokir",   tipe:"PICK UP",         plat:"B 5555 ZZ", driver:"KENDARAAN OFFLINE",     kapasitas:"1 Ton" },
    { id:9, status:"Tersedia", tipe:"TRONTON",         plat:"B 7788 UV", driver:"DIAMBIL SENDIRI",       kapasitas:"30 Ton" },
    { id:10, status:"Siap",    tipe:"TRONTON",         plat:"B 2211 WX", driver:"PT. SINAR LANANG LOGISTIK", kapasitas:"30 Ton" },
    { id:11, status:"Tersedia", tipe:"TRONTON PENDEK", plat:"B 4433 YZ", driver:"DIAMBIL SENDIRI",       kapasitas:"22 Ton" },
    { id:12, status:"Kirim",   tipe:"TRONTON PENDEK",  plat:"B 6655 AB", driver:"PT. MAJU BERSAMA",      kapasitas:"22 Ton" },
    { id:13, status:"Nonaktif", tipe:"FUSO",           plat:"A8896FS",  driver:"KENDARAAN NONAKTIF",     kapasitas:"8 Ton" },
];

// STAT CARD CONFIG
const statConfig = [
    { key:"Tersedia", label:"Tersedia", sub:"Semua kendaraan siap",  color:"blue",   icon:"fa-truck" },
    { key:"Siap",     label:"Siap",     sub:"Siap diberangkatkan",   color:"green",  icon:"fa-clipboard-check" },
    { key:"Kirim",    label:"Kirim",    sub:"Sedang dalam perjalanan", color:"purple", icon:"fa-paper-plane" },
    { key:"Muat",     label:"Muat",     sub:"Sedang dimuat",         color:"orange", icon:"fa-box" },
    { key:"Blokir",   label:"Blokir",   sub:"Tidak dapat digunakan", color:"red",    icon:"fa-ban" },
];

function countStatus(status){
    return vehicles.filter(v=>v.status===status).length;
}

function renderStats(){
    const container=document.getElementById("statCards");
    container.innerHTML = statConfig.map(s=>`
        <div class="stat-card ${s.color}">
            <div class="stat-icon"><i class="fa-solid ${s.icon}"></i></div>
            <div class="stat-value">${countStatus(s.key)}</div>
            <div class="stat-label">${s.label}</div>
            <div class="stat-dots"><span></span><span></span><span></span><span></span></div>
            <div class="stat-sub">${s.sub}</div>
        </div>
    `).join("");
}

// ===== TRUCK SVG BY STATUS =====
function truckSVG(status){

    const theme = {
        Tersedia:{text:"IDLE",  fill:"#94a3b8", light:"#e2e8f0", dark:"#64748b"},
        Siap:    {text:"READY", fill:"#22c55e", light:"#dcfce7", dark:"#15803d"},
        Kirim:   {text:"OTW",   fill:"#3b82f6", light:"#dbeafe", dark:"#1d4ed8"},
        Muat:    {text:"LOAD",  fill:"#f59e0b", light:"#fef3c7", dark:"#b45309"},
        Blokir:  {text:"BAN",   fill:"#ef4444", light:"#fee2e2", dark:"#b91c1c"},
        Nonaktif:{text:"NOT",   fill:"#334155", light:"#cbd5e1", dark:"#0f172a"},
    }[status] || {text:"IDLE", fill:"#94a3b8", light:"#e2e8f0", dark:"#64748b"};

    return `
    <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="110" cy="132" rx="80" ry="8" fill="#000" opacity="0.07"/>
        <rect x="20" y="35" width="110" height="70" rx="8" fill="${theme.light}" stroke="${theme.dark}" stroke-width="3"/>
        <line x1="20" y1="60" x2="130" y2="60" stroke="${theme.dark}" stroke-width="1.5" opacity="0.4"/>
        <path d="M130 55 h40 c6 0 11 3 14 8 l14 22 v20 h-68 z" fill="${theme.fill}" stroke="${theme.dark}" stroke-width="3"/>
        <path d="M145 63 h22 c4 0 7 2 9 5 l9 14 h-40 z" fill="#dbeeff" stroke="${theme.dark}" stroke-width="2"/>
        <rect x="185" y="95" width="14" height="10" rx="2" fill="${theme.dark}"/>
        <circle cx="60" cy="112" r="18" fill="#334155"/>
        <circle cx="60" cy="112" r="8" fill="#cbd5e1"/>
        <circle cx="165" cy="112" r="18" fill="#334155"/>
        <circle cx="165" cy="112" r="8" fill="#cbd5e1"/>
        <rect x="48" y="60" width="60" height="22" rx="11" fill="#fff" stroke="${theme.fill}" stroke-width="2.5"/>
        <text x="78" y="75" font-size="12" font-weight="700" text-anchor="middle" fill="${theme.fill}" font-family="Poppins, sans-serif">${theme.text}</text>
        ${status==="Kirim" ? `
        <line x1="0" y1="70" x2="16" y2="70" stroke="${theme.fill}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <line x1="0" y1="80" x2="10" y2="80" stroke="${theme.fill}" stroke-width="3" stroke-linecap="round" opacity="0.5"/>
        <line x1="0" y1="90" x2="6" y2="90" stroke="${theme.fill}" stroke-width="3" stroke-linecap="round" opacity="0.3"/>` : ``}
    </svg>`;
}

// ===== RENDER VEHICLE GRID =====
function renderVehicles(list){
    const grid=document.getElementById("vehicleGrid");

    if(list.length===0){
        grid.innerHTML=`
        <div class="empty-state">
            <i class="fa-solid fa-box-open"></i>
            Tidak ada kendaraan yang cocok dengan pencarian
        </div>`;
        return;
    }

    grid.innerHTML = list.map(v=>`
        <div class="vehicle-card" data-id="${v.id}">
            <div class="vehicle-status">
                <span class="dot ${v.status}"></span> ${v.status==="Nonaktif" ? "" : v.status}
            </div>
            <div class="truck-visual">${truckSVG(v.status)}</div>
            <div class="vehicle-type">${v.tipe}</div>
            <div class="vehicle-plate">${v.plat}</div>
            <div class="vehicle-driver" title="${v.driver}">${v.driver}</div>
        </div>
    `).join("");

    document.querySelectorAll(".vehicle-card").forEach(card=>{
        card.addEventListener("click",()=>openVehicleModal(Number(card.dataset.id)));
    });
}

// ===== FILTERING =====
function applyFilter(){
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const status = document.getElementById("filterStatus").dataset.value;
    const tipe = document.getElementById("filterTipe").dataset.value;

    const filtered = vehicles.filter(v=>{
        const matchQuery = !query ||
            v.plat.toLowerCase().includes(query) ||
            v.driver.toLowerCase().includes(query) ||
            v.tipe.toLowerCase().includes(query);
        const matchStatus = !status || v.status===status;
        const matchTipe = !tipe || v.tipe===tipe;
        return matchQuery && matchStatus && matchTipe;
    });

    renderVehicles(filtered);
}

// ===== MODAL INFORMASI / KONFIRMASI KENDARAAN =====

// Cuma dua arah yang bisa diubah: Tersedia <-> Siap.
// Kirim, Muat, Blokir, dan Nonaktif hanya menampilkan info, tanpa opsi ubah status.
const statusFlow = {
    Tersedia: "Siap",
    Siap: "Tersedia",
};

const statusLabel = {
    Tersedia: "idle (tersedia)",
    Siap: "ready (siap)",
};

let activeVehicleId = null;

function openVehicleModal(id){
    const v = vehicles.find(x=>x.id===id);
    if(!v) return;

    activeVehicleId = id;
    const next = statusFlow[v.status]; // undefined kalau Kirim/Muat/Blokir

    let bodyHTML = `
        <p>Kendaraan dengan Informasi:</p>
        <p>Driver : <strong>${v.driver}</strong></p>
        <p>Plat Nomor : <strong>${v.plat}</strong></p>
        <p>Kapasitas : <strong>${v.kapasitas}</strong></p>
        <p>Tipe Kendaraan : <strong>${v.tipe}</strong></p>
        <p>Status : <strong>${v.status}</strong></p>
    `;

    const actions = document.getElementById("modalActions");

    if(next){
        // Tersedia atau Siap -> tampilkan pertanyaan konfirmasi ubah status
        bodyHTML += `
            <p class="confirm-question">
                Apakah Anda ingin mengubah status menjadi ${statusLabel[next]}?
            </p>
        `;
        actions.classList.add("show");
    } else {
        // Kirim, Muat, Blokir -> info saja, tanpa opsi ubah status
        actions.classList.remove("show");
    }

    document.getElementById("modalBody").innerHTML = bodyHTML;
    document.getElementById("detailModal").classList.add("show");
}

function closeVehicleModal(){
    document.getElementById("detailModal").classList.remove("show");
    activeVehicleId = null;
}

function confirmStatusChange(){
    if(activeVehicleId === null) return;

    const v = vehicles.find(x=>x.id===activeVehicleId);
    const next = v ? statusFlow[v.status] : null;
    if(v && next){
        v.status = next; // langsung ubah di data lokal (tanpa API)
    }

    closeVehicleModal();
    renderStats();
    applyFilter(); // render ulang sambil tetap mempertahankan filter/pencarian aktif
}

document.getElementById("modalClose").addEventListener("click", closeVehicleModal);
document.getElementById("confirmCancel").addEventListener("click", closeVehicleModal);
document.getElementById("confirmYes").addEventListener("click", confirmStatusChange);
document.getElementById("detailModal").addEventListener("click",(e)=>{
    if(e.target.id==="detailModal") closeVehicleModal();
});

// ===== CUSTOM DROPDOWN =====
document.querySelectorAll(".custom-select").forEach(cs=>{
    const trigger = cs.querySelector(".custom-select-trigger");
    const label = cs.querySelector(".custom-select-label");
    const options = cs.querySelectorAll(".custom-select-option");

    trigger.addEventListener("click",(e)=>{
        e.stopPropagation();
        document.querySelectorAll(".custom-select").forEach(other=>{
            if(other!==cs) other.classList.remove("open");
        });
        cs.classList.toggle("open");
    });

    options.forEach(opt=>{
        opt.addEventListener("click",()=>{
            options.forEach(o=>o.classList.remove("selected"));
            opt.classList.add("selected");
            label.textContent = opt.textContent;
            cs.dataset.value = opt.dataset.value;
            cs.classList.remove("open");
            applyFilter();
        });
    });
});

document.addEventListener("click",()=>{
    document.querySelectorAll(".custom-select").forEach(cs=>cs.classList.remove("open"));
});

// ===== EVENTS =====
document.getElementById("searchInput").addEventListener("input", applyFilter);
document.getElementById("filterBtn").addEventListener("click", applyFilter);

document.getElementById("notifBtn").addEventListener("click",()=>{
    document.getElementById("notifCount").textContent = "0";
    alert("Belum ada notifikasi baru.");
});

document.querySelector(".logout").addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href = "index.html";
});

// Init
renderStats();
renderVehicles(vehicles);
