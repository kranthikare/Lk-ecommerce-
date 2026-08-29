const products=[
    {id:1,name:'Executive Cotton T-Shirt',gender:'Men',category:'T-Shirts',type:'Clothing',price:14999,oldPrice:17999,rating:4.8,badge:'NEW',image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',description:'A premium everyday tee with a refined silhouette.'},
    {id:2,name:'Krown Oxford Shirt',gender:'Men',category:'Shirts',type:'Clothing',price:21999,oldPrice:25999,rating:4.9,badge:'ICON',image:'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85',description:'A polished Oxford shirt designed for modern tailoring.'},
    {id:3,name:'Midnight Tailored Pants',gender:'Men',category:'Pants',type:'Clothing',price:29999,oldPrice:34999,rating:4.8,badge:'BESTSELLER',image:'https://images.unsplash.com/photo-1506629905607-d9c297d6c5b6?auto=format&fit=crop&w=900&q=85',description:'Clean-cut tailored trousers with a luxurious finish.'},
    {id:4,name:'Signature Denim Jeans',gender:'Men',category:'Jeans',type:'Clothing',price:24999,oldPrice:29999,rating:4.7,badge:'NEW',image:'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=85',description:'Premium denim with a contemporary straight silhouette.'},
    {id:5,name:'Krown Leather Jacket',gender:'Men',category:'Jackets',type:'Clothing',price:89999,oldPrice:109999,rating:4.8,badge:'ICON',image:'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85',description:'A statement leather jacket with a sharp cut and timeless attitude.'},
    {id:6,name:'Crown Leather Loafers',gender:'Men',category:'Shoes',type:'Shoes',price:54999,oldPrice:64999,rating:4.9,badge:'NEW',image:'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=85',description:'Polished leather loafers built for formal and smart-casual looks.'},
    {id:7,name:'Krown Chronograph',gender:'Men',category:'Watches',type:'Accessories',price:74999,oldPrice:84999,rating:4.8,badge:'LIMITED',image:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85',description:'A sophisticated chronograph inspired by classic luxury watchmaking.'},
    {id:8,name:'Signature Leather Belt',gender:'Men',category:'Belts',type:'Accessories',price:16999,oldPrice:19999,rating:4.7,badge:'',image:'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85',description:'Full-grain leather belt with a signature metal buckle.'},
    {id:9,name:'Krown Card Wallet',gender:'Men',category:'Wallets',type:'Accessories',price:12999,oldPrice:15999,rating:4.8,badge:'NEW',image:'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85',description:'Slim leather wallet with refined everyday functionality.'},
    
    {id:10,name:'Silk Signature T-Shirt',gender:'Women',category:'T-Shirts',type:'Clothing',price:15999,oldPrice:18999,rating:4.8,badge:'NEW',image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',description:'A soft luxury tee with an elegant feminine cut.'},
    {id:11,name:'Silk Signature Shirt',gender:'Women',category:'Shirts',type:'Clothing',price:24999,oldPrice:29999,rating:4.9,badge:'ICON',image:'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85',description:'A fluid silk shirt with a clean silhouette.'},
    {id:12,name:'Tailored Wide-Leg Pants',gender:'Women',category:'Pants',type:'Clothing',price:32999,oldPrice:38999,rating:4.8,badge:'NEW',image:'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85',description:'Fluid tailored trousers with a flattering wide-leg profile.'},
    {id:13,name:'Premium Denim Jeans',gender:'Women',category:'Jeans',type:'Clothing',price:26999,oldPrice:31999,rating:4.7,badge:'',image:'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=85',description:'Premium denim shaped for a modern feminine silhouette.'},
    {id:14,name:'Sculpted Leather Jacket',gender:'Women',category:'Jackets',type:'Clothing',price:84999,oldPrice:99999,rating:4.9,badge:'LIMITED',image:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',description:'A sculpted leather layer with confident tailoring.'},
    {id:15,name:'Krown Stiletto Heels',gender:'Women',category:'Shoes',type:'Shoes',price:64999,oldPrice:74999,rating:4.9,badge:'ICON',image:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=85',description:'Elegant heels designed for evening statements.'},
    {id:16,name:'Krown Mini Bag',gender:'Women',category:'Accessories',type:'Accessories',price:59999,oldPrice:69999,rating:4.9,badge:'BESTSELLER',image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85',description:'Compact leather statement bag finished for day-to-night styling.'},
    {id:17,name:'Heritage Bracelet Watch',gender:'Women',category:'Watches',type:'Accessories',price:69999,oldPrice:79999,rating:4.8,badge:'NEW',image:'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85',description:'A refined bracelet watch with a timeless luxury profile.'},
    {id:18,name:'Signature Leather Belt',gender:'Women',category:'Belts',type:'Accessories',price:17999,oldPrice:21999,rating:4.7,badge:'',image:'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=85',description:'A sleek belt designed to finish elevated looks.'},
    {id:19,name:'Sculpted Evening Dress',gender:'Women',category:'Dresses',type:'Clothing',price:74999,oldPrice:84999,rating:4.8,badge:"EDITOR'S PICK",image:'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=85',description:'An elegant evening silhouette with sculptural detailing.'},
    
    {id:20,name:'Signature Sneakers',gender:'Unisex',category:'Shoes',type:'Shoes',price:49999,oldPrice:59999,rating:4.7,badge:'BESTSELLER',image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',description:'Premium everyday sneakers balancing comfort and understated luxury.'},
    {id:21,name:'Crown Runner',gender:'Unisex',category:'Shoes',type:'Shoes',price:44999,oldPrice:52999,rating:4.6,badge:'NEW',image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85',description:'A contemporary runner for effortless luxury streetwear.'},
    {id:22,name:'Krown High-Top Sneakers',gender:'Unisex',category:'Shoes',type:'Shoes',price:52999,oldPrice:62999,rating:4.8,badge:'ICON',image:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=85',description:'A premium high-top sneaker with a bold silhouette.'},
    {id:23,name:'Krown Chelsea Boots',gender:'Unisex',category:'Shoes',type:'Shoes',price:69999,oldPrice:79999,rating:4.9,badge:'NEW',image:'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=900&q=85',description:'Polished Chelsea boots built for year-round styling.'},
    {id:24,name:'Krown Court Trainers',gender:'Unisex',category:'Shoes',type:'Shoes',price:47999,oldPrice:56999,rating:4.7,badge:'',image:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=85',description:'Minimal court trainers with a luxury finish.'}
    ];
    const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);const money=n=>'₹'+Number(n).toLocaleString('en-IN');
    const getCart=()=>JSON.parse(localStorage.getItem('lk_cart')||'[]');function saveCart(c){localStorage.setItem('lk_cart',JSON.stringify(c));updateBadge()}function updateBadge(){let n=getCart().reduce((a,x)=>a+x.qty,0);$$('.cart-count').forEach(x=>x.textContent=n)}
    function toast(m,type='success'){let b=$('.toast-container')||document.body.appendChild(Object.assign(document.createElement('div'),{className:'toast-container'}));let t=document.createElement('div');t.className='toast '+type;t.textContent=m;b.appendChild(t);setTimeout(()=>t.remove(),2600)}
    function addToCart(id,qty=1){let p=products.find(x=>x.id==id),c=getCart(),i=c.find(x=>x.id==p.id);i?i.qty+=qty:c.push({id:p.id,qty});saveCart(c);toast(p.name+' added to your Krown Bag.')}
    function removeFromCart(id){let p=products.find(x=>x.id==id);saveCart(getCart().filter(x=>x.id!=id));toast((p?.name||'Item')+' removed.','error');renderCart()}
    function changeQty(id,d){let c=getCart(),i=c.find(x=>x.id==id);if(!i)return;i.qty+=d;if(i.qty<1)return removeFromCart(id);saveCart(c);renderCart()}
    function total(){return getCart().reduce((s,i)=>{let p=products.find(x=>x.id==i.id);return s+(p?p.price*i.qty:0)},0)}
    function card(p){return `<article class="product-card reveal"><div class="product-image">${p.badge?`<span class="product-badge">${p.badge}</span>`:''}<button class="wishlist" onclick="wish(this,${p.id})">♡</button><a href="product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}"></a></div><div class="product-info"><small>${p.gender} · ${p.category}</small><h3>${p.name}</h3><div class="stars">★★★★★ <span class="muted">${p.rating}</span></div><div class="price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div><button class="btn quick-add" onclick="addToCart(${p.id})">Add to Krown Bag</button></div></article>`}
    
    const categoryMenus={
      Men:['T-Shirts','Shirts','Pants','Jeans','Jackets','Shoes','Belts','Wallets','Watches'],
      Women:['T-Shirts','Shirts','Pants','Jeans','Jackets','Shoes','Belts','Wallets','Watches','Dresses','Accessories'],
      Unisex:['Shoes']
    };
    
    let selectedGender='all';
    let selectedSubcategory='all';
    
    function categoryIcon(gender,icon,title,description){
      return `<button class="category-card ${selectedGender===gender?'active':''}" onclick="openCategory('${gender}')">
        <span class="category-icon">${icon}</span><strong>${title}</strong><span>${description}</span><em>Explore →</em>
      </button>`;
    }
    
    function renderCategoryCards(target='#categoryCards'){
      const el=$(target); if(!el)return;
      el.innerHTML=[
        categoryIcon('Men','♔','Men','Tailoring, streetwear & accessories'),
        categoryIcon('Women','♕','Women','Elevated fashion & accessories'),
        categoryIcon('Unisex','◇','Unisex','Premium shoes for everyone')
      ].join('');
    }
    
    function openCategory(gender){
      selectedGender=gender;
      selectedSubcategory='all';
      renderCategoryCards();
      renderSubcategories();
      renderCategoryProducts();
      const section=$('#categoryProductsSection');
      if(section) section.scrollIntoView({behavior:'smooth',block:'start'});
    }
    
    function renderSubcategories(){
      const el=$('#subcategoryCards'); if(!el)return;
      if(selectedGender==='all'){el.innerHTML='';return;}
      const labels=categoryMenus[selectedGender]||[];
      el.innerHTML=`<button class="subcat-card ${selectedSubcategory==='all'?'active':''}" onclick="selectSubcategory('all')">All ${selectedGender}</button>`+
        labels.map(x=>`<button class="subcat-card ${selectedSubcategory===x?'active':''}" onclick="selectSubcategory('${x}')">${x}</button>`).join('');
    }
    
    function selectSubcategory(category){
      selectedSubcategory=category;
      renderSubcategories();
      renderCategoryProducts();
    }
    
    function renderCategoryProducts(){
      const el=$('#categoryProductGrid'); if(!el)return;
      if(selectedGender==='all'){
        el.innerHTML='<div class="category-empty">Choose <strong>Men</strong>, <strong>Women</strong> or <strong>Unisex</strong> above to explore the collection.</div>';
        return;
      }
      let list=products.filter(p=>p.gender===selectedGender);
      if(selectedSubcategory!=='all'){
        if(selectedSubcategory==='Accessories') list=list.filter(p=>p.type==='Accessories');
        else list=list.filter(p=>p.category===selectedSubcategory);
      }
      el.innerHTML=list.map(card).join('');
      reveal();
    }
    
    function renderProducts(list=products,target='#productGrid'){let e=$(target);if(e){e.innerHTML=list.map(card).join('');reveal()}}
    
    function wish(b,id){let w=JSON.parse(localStorage.getItem('lk_wish')||'[]'),i=w.indexOf(id);if(i>=0){w.splice(i,1);b.classList.remove('active')}else{w.push(id);b.classList.add('active');toast('Saved to wishlist.')}localStorage.setItem('lk_wish',JSON.stringify(w))}
    
    function filters(){
     let q=$('#productSearch'),c=$('#categoryFilter'),s=$('#sortFilter');
     if(!q)return;
     let apply=()=>{
       let l=[...products],v=q.value.toLowerCase(),cat=c.value;
       if(v)l=l.filter(p=>(p.name+' '+p.gender+' '+p.category+' '+p.type).toLowerCase().includes(v));
       if(cat!=='all')l=l.filter(p=>p.gender===cat||p.category===cat||p.type===cat);
       if(s.value==='low')l.sort((a,b)=>a.price-b.price);
       if(s.value==='high')l.sort((a,b)=>b.price-a.price);
       if(s.value==='rating')l.sort((a,b)=>b.rating-a.rating);
       renderProducts(l)
     };
     [q,c,s].forEach(x=>x.addEventListener('input',apply));
     let qurl=new URLSearchParams(location.search).get('q');if(qurl)q.value=qurl;
     let gurl=new URLSearchParams(location.search).get('gender');if(gurl){selectedGender=gurl;renderCategoryCards();renderSubcategories();renderCategoryProducts();}
     apply();
    }
    function renderProduct(){let e=$('#productDetail');if(!e)return;let p=products.find(x=>x.id==Number(new URLSearchParams(location.search).get('id')))||products[0];e.innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name}"></div><div class="detail-info"><div class="eyebrow">${p.category} · ${p.type}</div><h1>${p.name}</h1><div class="stars">★★★★★ <span class="muted">${p.rating} / 5</span></div><div class="detail-price">${money(p.price)} <span class="old-price">${money(p.oldPrice)}</span></div><p class="detail-description">${p.description}</p><div class="option"><label>Size</label><div class="size-grid">${['XS','S','M','L','XL'].map((x,i)=>`<button class="size ${i==2?'active':''}" onclick="sizePick(this)">${x}</button>`).join('')}</div></div><div class="option"><label>Quantity</label><div class="qty"><button onclick="dq(-1)">−</button><span id="dqv">1</span><button onclick="dq(1)">+</button></div></div><div class="detail-actions"><button class="btn" onclick="detailAdd(${p.id})">Add to Krown Bag</button><button class="btn btn-outline" onclick="wish(this,${p.id})">♡ Wishlist</button></div><div class="detail-meta">Free shipping over ₹50,000 · Secure checkout · 7-day returns</div></div>`}
    function sizePick(b){$$('.size').forEach(x=>x.classList.remove('active'));b.classList.add('active')}function dq(d){let e=$('#dqv');e.textContent=Math.max(1,+e.textContent+d)}function detailAdd(id){addToCart(id,+$('#dqv').textContent)}
    function renderCart(){let b=$('#cartItems');if(!b)return;let c=getCart(),empty=$('#emptyCart');if(!c.length){b.innerHTML='';empty?.classList.remove('hidden')}else{empty?.classList.add('hidden');b.innerHTML=c.map(i=>{let p=products.find(x=>x.id==i.id);return `<div class="cart-item"><img src="${p.image}" alt="${p.name}"><div><small class="muted">${p.category} · ${p.type}</small><h3>${p.name}</h3><p>${money(p.price)} each</p><div class="cart-controls"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button><button class="btn btn-danger" onclick="removeFromCart(${p.id})">Remove</button></div></div><div class="price">${money(p.price*i.qty)}</div></div>`}).join('')}$('#subtotal').textContent=money(total());$('#cartTotal').textContent=money(total())}
    function validate(f){let ok=true;f.querySelectorAll('[required]').forEach(x=>{let er=x.parentElement.querySelector('.error');if(er)er.textContent='';if(!x.value.trim()){ok=false;if(er)er.textContent='Required.'}if(x.type=='email'&&x.value&&!/^\S+@\S+\.\S+$/.test(x.value)){ok=false;if(er)er.textContent='Invalid email.'}});return ok}
    function init(){if(localStorage.getItem('lk_theme')=='light')document.body.classList.add('light');$('#menuBtn')?.addEventListener('click',()=>$('#navLinks').classList.toggle('open'));$('#themeBtn')?.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('lk_theme',document.body.classList.contains('light')?'light':'dark')});updateBadge();reveal();if($('#categoryCards')){renderCategoryCards();renderSubcategories();renderCategoryProducts();}if(location.pathname.endsWith('products.html')){
      filters();
      renderCategoryCards();
      renderSubcategories();
      renderCategoryProducts();
    }if(location.pathname.endsWith('product.html')){renderProduct();renderProducts(products.slice(2,6),'#relatedGrid')}if(location.pathname.endsWith('cart.html'))renderCart();let cf=$('#checkoutForm');if(cf){let ci=$('#checkoutItems');ci.innerHTML=getCart().map(i=>{let p=products.find(x=>x.id==i.id);return `<div class="sum-row"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`}).join('');$('#checkoutTotal').textContent=money(total());cf.addEventListener('submit',e=>{e.preventDefault();if(!getCart().length)return toast('Your cart is empty.','error');if(validate(cf)){localStorage.removeItem('lk_cart');updateBadge();toast('Order placed successfully!');setTimeout(()=>location.href='index.html',1200)}})}let lf=$('#loginForm'),sf=$('#signupForm');if(lf&&sf){$$('.tab').forEach(t=>t.onclick=()=>{$$('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');lf.style.display=t.dataset.form=='login'?'grid':'none';sf.style.display=t.dataset.form=='signup'?'grid':'none'});lf.onsubmit=e=>{e.preventDefault();if(validate(lf))toast('Login validated successfully.')};sf.onsubmit=e=>{e.preventDefault();if(validate(sf))toast('Account created successfully.')}}let contact=$('#contactForm');if(contact)contact.onsubmit=e=>{e.preventDefault();if(contact.checkValidity()){toast('Message sent successfully.');contact.reset()}}}
    function reveal(){let o=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.1});$$('.reveal').forEach(x=>o.observe(x))}document.addEventListener('DOMContentLoaded',init);
    
