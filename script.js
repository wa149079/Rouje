// Beispieldaten für Produkte
const products = [
    { id: 1, name: 'Skateboard Deck', category: 'Decks', price: 49.99, description: 'Hochwertiges Skateboard Deck' },
    { id: 2, name: 'Skateboard Rollen', category: 'Rollen', price: 19.99, description: 'Hochabriebfeste Skateboard Rollen' },
    { id: 3, name: 'Skateboard Achsen', category: 'Achsen', price: 29.99, description: 'Robuste Skateboard Achsen' },
    { id: 4, name: 'Kugellager', category: 'Kugellager', price: 9.99, description: 'Hochpräzise Skateboard Kugellager' }
];

// Warenkorb
const cart = [];

// Funktion zum Produkte in der Kategorie anzeigen
function displayProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    const categoryProducts = products.filter(product => product.category === category);

    categoryProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <p class="product-title" onclick="showProductDetails(${product.id})">${product.name}</p>
            <p>Preis: ${product.price.toFixed(2)} €</p>
            <button onclick="addToCart(${product.id})">In den Warenkorb</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

// Funktion zum Produkt zum Warenkorb hinzufügen
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Funktion zum Warenkorb aktualisieren
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${product.name}</span>
            <span>${product.price.toFixed(2)} €</span>
            <button onclick="removeFromCart(${product.id})">Entfernen</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += product.price;
    });

    document.getElementById('cart-total').textContent = total.toFixed(2) + ' €';
}

// Funktion zum Produkt aus dem Warenkorb entfernen
function removeFromCart(productId) {
    const index = cart.findIndex(product => product.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Funktion zur Anzeige von Produkt-Details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Produkt: ${product.name}\nPreis: ${product.price.toFixed(2)} €\nBeschreibung: ${product.description}`);
    }
}

// Event-Listener für Kategorien
document.getElementById('decks').addEventListener('click', () => displayProducts('Decks'));
document.getElementById('rollen').addEventListener('click', () => displayProducts('Rollen'));
document.getElementById('achsen').addEventListener('click', () => displayProducts('Achsen'));
document.getElementById('kugellager').addEventListener('click', () => displayProducts('Kugellager'));

// Initialanzeige
displayProducts('Decks');

// Funktion zur Anzeige von Produkt-Details in einem Modal-Fenster
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const modal = document.getElementById('product-details-modal');
        const modalContent = document.getElementById('modal-content');
        const productInfo = document.getElementById('product-info');

        // Das Modal-Fenster ausblenden, falls es bereits geöffnet ist
        modal.style.display = 'none';

        // Fülle das Modal mit Produktinformationen
        productInfo.innerHTML = `
            
            <p>Produkt: ${product.name}</p>
            <p>Preis: ${product.price.toFixed(2)} €</p>
            <p>Beschreibung: ${product.description}</p>
        `;

        // Zeige das Modal
        modal.style.display = 'block';
    }
}

// Funktion zum Schließen des Modal-Fensters
function closeProductDetailsModal() {
    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'none';
}
