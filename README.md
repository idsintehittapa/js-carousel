# js-carousel

In this project a custom carousel is developed. It displays a lot of content without displaying it all at the same time.

## Features

* Built with vanilla JavaScript, HTML, and CSS
* Contains 5 images
* Responsive
* Supports navigation via buttons
* Rotates content without reloading page

## Approach

To achieve a working carousel I declared 7 variables and I have considered the following:

* Firstly, the content has to be fully loaded before the width of the screen is calculated. Otherwise, the sizing will not be correct and the carousel will not hide some of the content correctly. I have, therefore, made use of a ```window.onload``` function.
  
* Secondly, we have to create a **counter** to monitor which image we are on, and a **calculator** which calculate the width of the screen to know how much to slide - this also makes the carousel work on different screen sizes
  > Note that since the carousel jumps its position instead of reloading I have created two clones (first and last clone). The counter, therefore, starts at 1 instead of 0 (which is the clone)

* Thirdly, to ensure we are jumping the position we make use of ```transitionend``` as an event listener. We create a function with two if-statements, one for each clone. We make use of the **counter** and if the img is one of the cloned ones we reset the transition and jump to the original one.

* Lastly, we have to have two button event listeners. Here we again make use of the **counter** and increment or decrement depending on which button we use. We use an if-statement to prevent us to move outside the carousel container.

_Please see code fore comments related to the code approach_

## View it live
The site is deployed <a href="https://nervous-hugle-bb3f3f.netlify.app">here.</a>