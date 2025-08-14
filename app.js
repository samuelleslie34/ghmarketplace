// ====== Simple SPA utilities ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const nowYear = new Date().getFullYear();
const yearSpans = $$('#year'); yearSpans.forEach(s=> s.textContent = nowYear);

// ====== localStorage helpers ======
const LS = {
  get(key, fallback){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback; }catch{ return fallback; } },
  set(key, val){ localStorage.setItem(key, JSON.stringify(val)); },
  remove(key){ localStorage.removeItem(key); }
};


// ====== Force refresh products function ======
function refreshProducts() {
  localStorage.removeItem('__seeded');
  localStorage.removeItem('products');
  location.reload();
}

// ====== Seed data on first load ======
(function seed(){
  const seeded = LS.get('__seeded', false);
  if (seeded) return;
  const users = [];
  const products = [
    { id: crypto.randomUUID(), name:'Kentes Scarf', price:120, imageURL:'https://images.unsplash.com/photo-1589923158776-5b1a53f71f2c?q=80&w=1000&auto=format&fit=crop', desc:'Handwoven Kente accessory.' },
    { id: crypto.randomUUID(), name:'Shea Butter (250g)', price:45, imageURL:'https://images.unsplash.com/photo-1606858525636-7b1f10fba588?q=80&w=1000&auto=format&fit=crop', desc:'Organic shea butter from the North.' },
    { id: crypto.randomUUID(), name:'Bolga Basket', price:180, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Durable handwoven market basket.' },
    { id: crypto.randomUUID(), name:'Adinkra Print Fabric', price:95, imageURL:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', desc:'Traditional Adinkra symbols on cotton fabric.' },
    { id: crypto.randomUUID(), name:'Ghanaian Beaded Necklace', price:65, imageURL:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop', desc:'Handcrafted beaded jewelry with local patterns.' },
    { id: crypto.randomUUID(), name:'Cocoa Beans (500g)', price:75, imageURL:'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop', desc:'Premium Ghanaian cocoa beans for chocolate making.' },
    { id: crypto.randomUUID(), name:'Kente Cloth (2m)', price:280, imageURL:'https://images.unsplash.com/photo-1589923158776-5b1a53f71f2c?q=80&w=1000&auto=format&fit=crop', desc:'Authentic handwoven Kente cloth, perfect for special occasions.' },
    { id: crypto.randomUUID(), name:'Shea Soap Bar', price:25, imageURL:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', desc:'Natural shea butter soap with moisturizing properties.' },
    { id: crypto.randomUUID(), name:'Wooden Carved Mask', price:150, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Traditional wooden mask, hand-carved by local artisans.' },
    { id: crypto.randomUUID(), name:'Ghanaian Spice Mix', price:35, imageURL:'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop', desc:'Authentic blend of local spices for traditional cooking.' },
    { id: crypto.randomUUID(), name:'Batik Print Dress', price:200, imageURL:'https://images.unsplash.com/photo-1589923158776-5b1a53f71f2c?q=80&w=1000&auto=format&fit=crop', desc:'Beautiful batik print dress with vibrant Ghanaian colors.' },
    { id: crypto.randomUUID(), name:'Palm Oil (500ml)', price:40, imageURL:'https://images.unsplash.com/photo-1606858525636-7b1f10fba588?q=80&w=1000&auto=format&fit=crop', desc:'Pure red palm oil, essential for traditional Ghanaian dishes.' },
    { id: crypto.randomUUID(), name:'Bamboo Baskets Set', price:120, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Set of 3 handwoven bamboo baskets in different sizes.' },
    { id: crypto.randomUUID(), name:'Ghanaian Honey (250g)', price:55, imageURL:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', desc:'Pure natural honey from local beekeepers.' },
    { id: crypto.randomUUID(), name:'Traditional Drum', price:350, imageURL:'https://images.unsplash.com/photo-1589923158776-5b1a53f71f2c?q=80&w=1000&auto=format&fit=crop', desc:'Handcrafted traditional drum for cultural performances.' },
    { id: crypto.randomUUID(), name:'Ghanaian Coffee Beans', price:85, imageURL:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop', desc:'Premium Arabica coffee beans from the Volta region.' },
    { id: crypto.randomUUID(), name:'Handwoven Placemats', price:60, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Set of 6 colorful handwoven placemats.' },
    { id: crypto.randomUUID(), name:'Ghanaian Black Soap', price:30, imageURL:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', desc:'Traditional black soap made with plantain skins and shea butter.' },
    { id: crypto.randomUUID(), name:'Beaded Anklets', price:40, imageURL:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1000&auto=format&fit=crop', desc:'Beautiful beaded anklets with traditional patterns.' },
    { id: crypto.randomUUID(), name:'Ghanaian Peanut Butter', price:50, imageURL:'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop', desc:'Natural peanut butter made from locally grown peanuts.' },
    { id: crypto.randomUUID(), name:'Traditional Pottery', price:90, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Handcrafted clay pottery with traditional designs.' },
    { id: crypto.randomUUID(), name:'Ghanaian Tea Leaves', price:35, imageURL:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop', desc:'Organic tea leaves from the Ashanti region.' },
    { id: crypto.randomUUID(), name:'Handmade Sandals', price:110, imageURL:'https://images.unsplash.com/photo-1589923158776-5b1a53f71f2c?q=80&w=1000&auto=format&fit=crop', desc:'Comfortable leather sandals with traditional beadwork.' },
    { id: crypto.randomUUID(), name:'Ghanaian Cashew Nuts', price:70, imageURL:'https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&w=1000&auto=format&fit=crop', desc:'Premium roasted cashew nuts from local farms.' },
    { id: crypto.randomUUID(), name:'Traditional Stool', price:220, imageURL:'https://images.unsplash.com/photo-1603484477859-abe6a73f9361?q=80&w=1000&auto=format&fit=crop', desc:'Hand-carved wooden stool with symbolic carvings.' }
  ];
  LS.set('users', users);
  LS.set('products', products);
  LS.set('__seeded', true);
})();

// ====== Auth ======
function getUsers(){ return LS.get('users', []); }
function saveUsers(arr){ LS.set('users', arr); }
function getCurrentUser(){ return LS.get('currentUser', null); }
function setCurrentUser(u){ LS.set('currentUser', u); updateHeaderUI(); }
function isLoggedIn(){ return !!getCurrentUser(); }
function isAdmin(){ return getCurrentUser()?.role === 'admin'; }

function signup(email, password){
  const users = getUsers();
  if (users.some(u => u.email === email)) throw new Error('Email already exists.');
  users.push({ email, password, role:'user', cart:[] });
  saveUsers(users);
  setCurrentUser({ email, role:'user' });
}

function login(email, password){
  const user = getUsers().find(u => u.email === email && u.password === password);
  if (!user) throw new Error('Invalid credentials.');
  setCurrentUser({ email: user.email, role: user.role });
}

function logout(){
  setCurrentUser(null);
  window.location.href = 'index.html';
}

// ====== Products (CRUD) ======
function getProducts(){ return LS.get('products', []); }
function saveProducts(arr){ LS.set('products', arr); }

function createProduct({name, price, imageURL, desc}){
  const products = getProducts();
  products.push({ id: crypto.randomUUID(), name, price: Number(price), imageURL, desc: desc||'' });
  saveProducts(products);
}

function updateProduct(id, updates){
  const products = getProducts().map(p => p.id === id ? { ...p, ...updates, price: Number(updates.price ?? p.price)} : p);
  saveProducts(products);
}

function deleteProduct(id){
  saveProducts(getProducts().filter(p => p.id !== id));
}

// ====== Cart ======
function syncUserCart(mutator){
  const cur = getCurrentUser();
  if (!cur) return;
  const users = getUsers();
  const idx = users.findIndex(u => u.email === cur.email);
  if (idx === -1) return;
  users[idx].cart = mutator(users[idx].cart || []);
  saveUsers(users);
  // update badge live
  renderCartBadge();
}

function addToCart(productId){
  if (!isLoggedIn()) return window.location.href = 'login.html';
  syncUserCart(cart => {
    const item = cart.find(i => i.productId === productId);
    if (item) item.qty += 1; else cart.push({ productId, qty: 1 });
    return cart;
  });
}

function removeFromCart(productId){
  syncUserCart(cart => cart.filter(i => i.productId !== productId));
}

function changeQty(productId, delta){
  syncUserCart(cart => cart.map(i => i.productId === productId ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
}

function clearCart(){ syncUserCart(() => []); }

// ====== FX Rate (GHS->USD) with simple cache (1 hour) ======
async function getGhsUsdRate(){
  const cache = LS.get('fxCache', null);
  const stale = !cache || (Date.now() - cache.ts) > (60*60*1000);
  if (!stale) return cache.rate;
  try{
    const res = await fetch('https://api.exchangerate.host/latest?base=GHS');
    const data = await res.json();
    const rate = data?.rates?.USD ?? 0.08; // fallback
    LS.set('fxCache', { rate, ts: Date.now() });
    return rate;
  }catch{
    return cache?.rate ?? 0.08;
  }
}

// ====== UI: header/auth links/badge ======
function updateHeaderUI(){
  const authLinks = $('#authLinks');
  const cur = getCurrentUser();
  const cartCountEl = $('#cartCount');

  if (authLinks){
    if (cur){
      authLinks.innerHTML = `
        <span class="muted small">Hi, ${cur.email}${isAdmin()?' · Admin':''}</span>
        <button class="btn" id="btnLogout">Logout</button>
      `;
    } else {
      authLinks.innerHTML = `<a href="login.html" class="btn">Login</a>`;
    }
    $('#btnLogout')?.addEventListener('click', logout);
  }

  if (cartCountEl){
    renderCartBadge();
  }
}

function renderCartBadge(){
  const cur = getCurrentUser();
  const users = getUsers();
  const badge = $('#cartCount');
  if (!badge) return;
  if (!cur){ badge.textContent = '0'; return; }
  const u = users.find(x => x.email === cur.email);
  const count = (u?.cart || []).reduce((a,b)=>a+b.qty,0);
  badge.textContent = String(count);
}

// ====== Page: index.html ======
async function initHome(){
  const welcome = $('#welcomeMsg');
  const adminCreate = $('#adminCreate');
  const grid = $('#productGrid');
  const editModal = $('#editModal');
  const editForm = $('#editForm');
  const cancelEdit = $('#cancelEdit');

  const cur = getCurrentUser();
  if (cur){
    welcome.innerHTML = `Welcome, <strong>${cur.email}</strong> · Happy shopping!`;
  }

  // Admin UI
  if (isAdmin()){
    adminCreate.classList.remove('hidden');
    $('#createProductForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      createProduct({
        name: $('#pName').value.trim(),
        price: $('#pPrice').value,
        imageURL: $('#pImg').value.trim(),
        desc: $('#pDesc').value.trim()
      });
      e.target.reset();
      renderProducts();
    });
  }

  // Rate info
  const rate = await getGhsUsdRate();
  $('#rateInfo').textContent = `Live FX: 1 GHS ≈ ${rate.toFixed(4)} USD (exchangerate.host)`;

  function renderProducts(){
    const products = getProducts();
    if (!products.length){
      grid.innerHTML = `<div class="card"><p class="muted">No products yet.</p></div>`;
      return;
    }
    grid.innerHTML = products.map(p=>{
      const usd = (p.price * rate).toFixed(2);
      return `
        <article class="product">
          <img src="${p.imageURL}" alt="${p.name}" onerror="this.src='https://picsum.photos/600/400?blur=2';">
          <div class="pad">
            <h3>${p.name}</h3>
            <p class="muted small">${p.desc ?? ''}</p>
            <div class="row">
              <div>
                <strong>GHS ${p.price.toFixed(2)}</strong>
                <div class="muted small">~ USD ${usd}</div>
              </div>
              <div class="row" style="gap:6px">
                <button class="btn primary" data-add="${p.id}">Add to Cart</button>
                ${isAdmin() ? `
                  <button class="btn" data-edit="${p.id}">Edit</button>
                  <button class="btn danger" data-del="${p.id}">Delete</button>
                ` : ''}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Wire buttons
    grid.querySelectorAll('[data-add]').forEach(btn=>{
      btn.addEventListener('click', ()=> addToCart(btn.dataset.add));
    });
    if (isAdmin()){
      grid.querySelectorAll('[data-del]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if (confirm('Delete this product?')){ deleteProduct(btn.dataset.del); renderProducts(); }
        });
      });
      grid.querySelectorAll('[data-edit]').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          const prod = getProducts().find(p=>p.id===btn.dataset.edit);
          if (!prod) return;
          $('#editId').value = prod.id;
          $('#editName').value = prod.name;
          $('#editPrice').value = prod.price;
          $('#editImg').value = prod.imageURL;
          $('#editDesc').value = prod.desc ?? '';
          editModal.showModal();
        });
      });
    }
  }

  // Edit modal handlers
  cancelEdit?.addEventListener('click', ()=> editModal.close());
  editForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const id = $('#editId').value;
    updateProduct(id, {
      name: $('#editName').value.trim(),
      price: Number($('#editPrice').value),
      imageURL: $('#editImg').value.trim(),
      desc: $('#editDesc').value.trim()
    });
    editModal.close();
    renderProducts();
  });

  // Appointment form handler
  $('#appointmentForm')?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const appointmentData = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      date: formData.get('date'),
      time: formData.get('time'),
      reason: formData.get('reason') || ''
    };
    
    try {
      createAppointment(appointmentData);
      showMessage('Appointment booked successfully! We will contact you soon.', 'success');
      e.target.reset();
    } catch (err) {
      showMessage('Error booking appointment: ' + err.message, 'error');
    }
  });

  renderProducts();
}

// ====== Message Display Utility ======
function showMessage(message, type = 'info') {
  // Remove existing message
  const existingMsg = document.querySelector('.auth-message');
  if (existingMsg) existingMsg.remove();
  
  // Create message element
  const msgEl = document.createElement('div');
  msgEl.className = `auth-message alert alert-${type === 'error' ? 'danger' : type === 'success' ? 'success' : 'info'} alert-dismissible fade show`;
  msgEl.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;
  
  // Insert after form header
  const formHeader = document.querySelector('.auth-form-header');
  if (formHeader) {
    formHeader.parentNode.insertBefore(msgEl, formHeader.nextSibling);
  }
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (msgEl.parentNode) msgEl.remove();
  }, 5000);
}

// ====== Page: login.html ======
function initLogin(){
  // tabs
  $$('.auth-tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $$('.auth-tab-btn').forEach(b=>b.classList.remove('active'));
      $$('.auth-tab').forEach(t=>t.classList.remove('active'));
      btn.classList.add('active');
      $('#'+btn.dataset.tab).classList.add('active');
    });
  });

  $('#loginForm')?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = $('#loginEmail').value.trim();
    const pass  = $('#loginPassword').value;
    
    // Basic validation
    if (!email || !pass) {
      showMessage('Please fill in all fields', 'error');
      return;
    }
    
    try{
      login(email, pass);
      showMessage('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }catch(err){
      showMessage(err.message, 'error');
    }
  });

  $('#signupForm')?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = $('#signupEmail').value.trim();
    const pass  = $('#signupPassword').value;
    
    // Basic validation
    if (!email || !pass) {
      showMessage('Please fill in all fields', 'error');
      return;
    }
    
    if (pass.length < 4) {
      showMessage('Password must be at least 4 characters', 'error');
      return;
    }
    
    try{
      signup(email, pass);
      showMessage('Account created successfully! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    }catch(err){
      showMessage(err.message, 'error');
    }
  });
}

// ====== Page: cart.html ======
async function initCart(){
  const itemsEl = $('#cartItems');
  const emptyEl = $('#cartEmpty');
  const totalGHSEl = $('#totalGHS');
  const totalUSDEl = $('#totalUSD');
  const btnClear = $('#btnClearCart');
  const btnCheckout = $('#btnCheckout');

  const cur = getCurrentUser();
  if (!cur){ window.location.href = 'login.html'; return; }

  const rate = await getGhsUsdRate();

  function getCart(){
    const users = getUsers();
    const u = users.find(x => x.email === cur.email);
    return u?.cart || [];
  }

  function render(){
    const cart = getCart();
    const products = getProducts();
    if (!cart.length){
      itemsEl.innerHTML = '';
      emptyEl.classList.remove('hidden');
      totalGHSEl.textContent = '0.00';
      totalGHSEl.textContent = '0.00';
      totalUSDEl.textContent = '0.00';
      return;
    }
    emptyEl.classList.add('hidden');
    let total = 0;

    itemsEl.innerHTML = cart.map(line=>{
      const p = products.find(pp=>pp.id===line.productId);
      if (!p) return '';
      const sub = p.price * line.qty;
      total += sub;
      return `
        <div class="line">
          <div>
            <strong>${p.name}</strong>
            <div class="muted small">GHS ${p.price.toFixed(2)} × ${line.qty} = GHS ${sub.toFixed(2)}</div>
          </div>
          <div class="row">
            <button class="btn" data-dec="${p.id}">−</button>
            <button class="btn" data-inc="${p.id}">+</button>
            <button class="btn danger" data-rem="${p.id}">Remove</button>
          </div>
        </div>
      `;
    }).join('');

    totalGHSEl.textContent = total.toFixed(2);
    totalUSDEl.textContent = (total * rate).toFixed(2);

    // Wire qty/remove
    itemsEl.querySelectorAll('[data-inc]').forEach(b=> b.addEventListener('click', ()=>{ changeQty(b.dataset.inc, +1); render(); }));
    itemsEl.querySelectorAll('[data-dec]').forEach(b=> b.addEventListener('click', ()=>{ changeQty(b.dataset.dec, -1); render(); }));
    itemsEl.querySelectorAll('[data-rem]').forEach(b=> b.addEventListener('click', ()=>{ removeFromCart(b.dataset.rem); render(); }));
  }

  btnClear.addEventListener('click', ()=>{ clearCart(); render(); });
  btnCheckout.addEventListener('click', ()=>{
    if (!confirm('Proceed to checkout? This will clear your cart.')) return;
    clearCart(); render();
    alert('Order placed! (Demo)');
  });

  render();
}

// ====== Page: sessions.html ======
function initSessions(){
  const sessionsList = $('#sessionsList');
  const noSessions = $('#noSessions');
  const adminControls = $('#adminControls');
  const btnClearAll = $('#btnClearAllSessions');

  function renderSessions(){
    const appointments = getAppointments();
    
    if (!appointments.length) {
      sessionsList.innerHTML = '';
      noSessions.classList.remove('hidden');
      return;
    }

    noSessions.classList.add('hidden');
    
    sessionsList.innerHTML = appointments.map(apt => {
      const date = new Date(apt.date);
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      const createdDate = new Date(apt.createdAt).toLocaleDateString();
      
      return `
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card h-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <span class="badge bg-${apt.status === 'pending' ? 'warning' : apt.status === 'confirmed' ? 'success' : 'secondary'}">${apt.status}</span>
              <small class="text-muted">${createdDate}</small>
            </div>
            <div class="card-body">
              <h5 class="card-title">${apt.name}</h5>
              <p class="card-text">
                <strong>Date:</strong> ${formattedDate}<br>
                <strong>Time:</strong> ${apt.time}<br>
                <strong>Email:</strong> ${apt.email}<br>
                ${apt.phone ? `<strong>Phone:</strong> ${apt.phone}<br>` : ''}
                ${apt.reason ? `<strong>Reason:</strong> ${apt.reason}` : ''}
              </p>
            </div>
            <div class="card-footer">
              <div class="btn-group w-100" role="group">
                <button class="btn btn-sm btn-outline-primary" data-status="${apt.id}" data-action="confirm">✅ Confirm</button>
                <button class="btn btn-sm btn-outline-warning" data-status="${apt.id}" data-action="pending">⏳ Pending</button>
                <button class="btn btn-sm btn-outline-danger" data-status="${apt.id}" data-action="delete">🗑️ Delete</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Wire status change buttons
    sessionsList.querySelectorAll('[data-status]').forEach(btn => {
      btn.addEventListener('click', () => {
        const aptId = btn.dataset.status;
        const action = btn.dataset.action;
        
        if (action === 'delete') {
          if (confirm('Are you sure you want to delete this appointment?')) {
            deleteAppointment(aptId);
            renderSessions();
          }
        } else if (action === 'confirm') {
          updateAppointmentStatus(aptId, 'confirmed');
          renderSessions();
        } else if (action === 'pending') {
          updateAppointmentStatus(aptId, 'pending');
          renderSessions();
        }
      });
    });
  }

  // Admin controls
  if (isAdmin()) {
    adminControls.classList.remove('hidden');
    
    btnClearAll?.addEventListener('click', () => {
      if (confirm('Are you sure you want to clear all appointments? This cannot be undone.')) {
        saveAppointments([]);
        renderSessions();
      }
    });
  }

  // Automatically render sessions when page loads
  renderSessions();
}

// ====== Boot per page ======
document.addEventListener('DOMContentLoaded', ()=>{
  updateHeaderUI();

  // route by elements present
  if ($('#productGrid')) initHome();
  if ($('#loginForm') || $('#signupForm')) initLogin();
  if ($('#cartItems')) initCart();
  if ($('#sessionsList')) initSessions();
});
