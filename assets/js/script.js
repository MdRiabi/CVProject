// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})


/*This JavaScript code initializes the Repeater jQuery plugin on the page.
 It uses the $.repeater() method to apply the plugin to elements with the class "repeater".

Here's a breakdown of the code:

The $(document).ready() function ensures that the code is executed after the Document Object Model (DOM) is loaded.
 This is a best practice for initializing JavaScript code that interacts with the DOM.

The $('.repeater').repeater() function applies the Repeater plugin to elements with the class "repeater".

The initEmpty: false option indicates that the Repeater will start with at least one item, 
rather than being empty by default.

The defaultValues option specifies default values for input elements within the Repeater. In this case,
 it sets the default value of text inputs to an empty string.

The show option defines a function that is called when a new item is added to the Repeater. 
In this case, the function uses the jQuery slideDown() method to animate the item into view.

The hide option defines a function that is called when an item is removed from the Repeater. 
In this case, the function uses the jQuery slideUp() method to animate the item out of view. 
The deleteElement parameter is a boolean that indicates whether the item should be deleted from the DOM after being removed.

The isFirstItemUndeletable: true option specifies that the first item in the Repeater should not have a delete button.
 This ensures that there is always at least one item in the Repeater.

After a change in the Repeater (e.g., adding or removing an item), 
the generateCV() function is called with a delay of 500 milliseconds. 
This function presumably generates a CV based on the contents of the Repeater. */