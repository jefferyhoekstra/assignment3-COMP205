let menuButton = document.querySelector('.nav-link-menu');
let orderButtonLink = document.querySelector('.order');

function animationZoom() 
{
    menuButton.style.transform = 'scale(1.2)';
    menuButton.style.transition = 'transform 0.3s ease';
}
function resetZoom() 
{
    menuButton.style.transform = 'scale(1)';
}

function animationZoom2() 
{
    orderButtonLink.style.transform = 'scale(1.1)';
    orderButtonLink.style.transition = 'transform 0.3s ease';
}
function resetZoom2() 
{
    orderButtonLink.style.transform = 'scale(1)';
}

// --- event listeners
menuButton.addEventListener('mouseover', animationZoom);
menuButton.addEventListener('mouseout', resetZoom);

orderButtonLink.addEventListener('mouseover', animationZoom2);
orderButtonLink.addEventListener('mouseout', resetZoom2);


