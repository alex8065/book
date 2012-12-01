define(function() {
    
    /**
     * Initializes the commenting system.
     */
    function init() {
        // Find all commentable elements.
        var commentableElements = Array.prototype.slice.call(document.querySelectorAll(".page p[id]"));
        // Add in the comment action.
        commentableElements.forEach(function(element) {
            // Add in a button to initialize comments.
            var button = document.createElement("span");
            var buttonInner = document.createElement("span");
            button.appendChild(buttonInner);
            buttonInner.appendChild(document.createTextNode("0 comments"));
            button.classList.add("comment-action");
            element.appendChild(button);
            element.classList.add("comment-block");
        });
    }
    
    // Export the public API.
    
    return {
        init: init
    }
    
});