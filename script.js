// Beispieldaten für Produkte
const products = [
    { id: 1, name: 'Skateboard Deck', category: 'Decks', price: 49.99, description: 'Hochwertiges Skateboard Deck', image: 'images/s-l1600.jpg' },
    { id: 2, name: 'Skateboard Rollen', category: 'Rollen', price: 19.99, description: 'Hochabriebfeste Skateboard Rollen', image: 'images/Screenshot-2023-08-16-at-10-34-27-Blank-Skateboard-Rollen-Weiss-100a-Kopie.png.webp' },
    { id: 3, name: 'Skateboard Achsen', category: 'Achsen', price: 29.99, description: 'Robuste Skateboard Achsen', imagine: 'images/independent-skateboard-achse-axis-149-stage-11-polished-silver-99040-3.jpg' },
    { id: 4, name: 'Kugellager', category: 'Kugellager', price: 9.99, description: 'Hochpräzise Skateboard Kugellager', imagine: 'images/Skateboard+Kugellager+kaufen.jpg' }
];

// Warenkorb
const cart = [];

// Funktion zum Produkte in der Kategorie anzeigen
f// Funktion zum Produkte in der Kategorie anzeigen
function displayProducts(category) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    const categoryProducts = products.filter(product => product.category === category);

    categoryProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="showProductDetails(${product.id})">
            <p class="product-title">${product.name}</p>
            <p>Preis: ${product.price.toFixed(2)} €</p>
            <button onclick="addToCart(${product.id})">In den Warenkorb</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}




// Füge dem HTML eine Container-Div für den Warenkorb hinzu
document.body.innerHTML += '<div id="cart"></div>';

// Funktion zum Warenkorb ein- oder ausblenden
function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
    updateCart(); // Aktualisiere den Warenkorbinhalt, wenn er angezeigt wird
}

// Passe die updateCart-Funktion an, um den Warenkorbinhalt im 'cart'-Element anzuzeigen
function updateCart() {
    const cartElement = document.getElementById('cart');
    const cartItemsContainer = document.createElement('ul');
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

    // Füge den Warenkorbinhalt zum 'cart'-Element hinzu
    cartElement.innerHTML = '';
    cartElement.appendChild(cartItemsContainer);

    // Füge den Gesamtpreis hinzu
    const totalElement = document.createElement('p');
    totalElement.textContent = `Gesamt: ${total.toFixed(2)} €`;
    cartElement.appendChild(totalElement);
}

// Passe die addToCart- und removeFromCart-Funktionen an, um den Warenkorb zu aktualisieren
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

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
