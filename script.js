// ESTADOS
let currentPrice = 0;
let maxFlavors = 0;
let selectedFlavors = [];
let sizeName = "";
let deliveryMode = "delivery"; // 'delivery' ou 'pickup'
let paymentMethod = "";

// ABRIR/FECHAR
function openModal() {
    document.getElementById('pizzaModal').style.display = 'flex';
    resetOrder();
}
function closeModal() {
    document.getElementById('pizzaModal').style.display = 'none';
}

// SELECIONAR TAMANHO
function selectSize(element, price, max, name) {
    currentPrice = price;
    maxFlavors = max;
    sizeName = name;
    selectedFlavors = [];
    
    // Atualiza visual
    document.querySelectorAll('.size-item').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
    
    // Libera sabores
    document.getElementById('flavor-section').classList.remove('disabled-section');
    document.querySelectorAll('.flavor-card').forEach(el => el.classList.remove('selected'));
    
    updateUI();
}

// SELECIONAR SABOR
function toggleFlavor(element, flavorName) {
    if (selectedFlavors.includes(flavorName)) {
        selectedFlavors = selectedFlavors.filter(f => f !== flavorName);
        element.classList.remove('selected');
    } else {
        if (selectedFlavors.length < maxFlavors) {
            selectedFlavors.push(flavorName);
            element.classList.add('selected');
        } else {
            alert(`Máximo de ${maxFlavors} sabores para este tamanho.`);
        }
    }
    updateUI();
}

// MODO DE ENTREGA
function setDeliveryMode(mode) {
    deliveryMode = mode;
    
    // Visual dos botões
    document.getElementById('opt-delivery').classList.remove('active');
    document.getElementById('opt-pickup').classList.remove('active');
    document.getElementById(`opt-${mode}`).classList.add('active');
    
    // Esconder/Mostrar endereço
    const addressBox = document.getElementById('address-box');
    if (mode === 'pickup') {
        addressBox.classList.add('hidden');
    } else {
        addressBox.classList.remove('hidden');
    }
}

// SELECIONAR PAGAMENTO
function selectPayment(element, method) {
    paymentMethod = method;
    document.querySelectorAll('.pay-card').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
}

// ATUALIZAR UI (Preço e Contador)
function updateUI() {
    document.getElementById('flavor-counter').innerText = `${selectedFlavors.length}/${maxFlavors}`;
    document.getElementById('total-display').innerText = `R$ ${currentPrice.toFixed(2).replace('.', ',')}`;
}

// RESETAR
function resetOrder() {
    currentPrice = 0;
    maxFlavors = 0;
    selectedFlavors = [];
    sizeName = "";
    paymentMethod = "";
    deliveryMode = "delivery";
    
    // Resetar visuais
    document.querySelectorAll('.size-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.flavor-card').forEach(el => el.classList.remove('selected'));
    document.querySelectorAll('.pay-card').forEach(el => el.classList.remove('selected'));
    
    document.getElementById('flavor-section').classList.add('disabled-section');
    document.getElementById('obs-text').value = "";
    document.getElementById('address-input').value = "";
    
    setDeliveryMode('delivery'); // Volta para entrega padrão
    updateUI();
}

// FINALIZAR
function finishOrder() {
    if (currentPrice === 0) return alert("Escolha um tamanho!");
    if (selectedFlavors.length === 0) return alert("Escolha os sabores!");
    
    // Validação de endereço
    let address = "Retirada no Balcão";
    if (deliveryMode === 'delivery') {
        address = document.getElementById('address-input').value;
        if (!address) return alert("Digite o endereço de entrega!");
    }
    
    if (!paymentMethod) return alert("Selecione a forma de pagamento!");

    const obs = document.getElementById('obs-text').value;
    
    alert(`✅ PEDIDO ENVIADO!\n\n🍕 Pizza: ${sizeName}\n😋 Sabores: ${selectedFlavors.join(', ')}\n🛵 Modo: ${deliveryMode === 'delivery' ? 'Entrega' : 'Retirada'}\n📍 Local: ${address}\n💳 Pagamento: ${paymentMethod}\n💰 Total: R$ ${currentPrice.toFixed(2)}`);
    
    closeModal();
}

// Fechar ao clicar fora
window.onclick = function(event) {
    if (event.target == document.getElementById('pizzaModal')) closeModal();
}