// Auto-hide messages after 5 seconds
document.addEventListener('DOMContentLoaded', function() {
    const messages = document.querySelectorAll('.alert');
    
    messages.forEach(function(message) {
        setTimeout(function() {
            message.style.transition = 'opacity 0.5s';
            message.style.opacity = '0';
            
            setTimeout(function() {
                message.remove();
            }, 500);
        }, 5000);
    });
    
    // Confirm before removing cart items
    const removeButtons = document.querySelectorAll('.btn-danger');
    
    removeButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (!confirm('Are you sure you want to remove this item?')) {
                e.preventDefault();
            }
        });
    });
});