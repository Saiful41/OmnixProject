document.querySelectorAll('.division-card').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.getAttribute('data-link');
    window.location.href = link;
  });
});

function addToCart(product) {
  alert(product + " added to cart!");
}