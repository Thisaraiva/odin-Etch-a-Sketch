# odin-Etch-a-Sketch

# Grid Project

This project involves creating a webpage with a 16x16 grid of squares using JavaScript and Flexbox. The goal is to practice DOM manipulation, Flexbox, and user interaction events.

## Instructions

1. **Repository Setup**:
   - Follow the provided instructions to set up the GitHub repository.
   - Don’t forget to commit early and often with descriptive messages.

2. **Grid Creation**:
   - Create a webpage with a 16x16 grid of square `divs`.
   - Use JavaScript to dynamically generate the squares. **Do not create the squares manually in the HTML file**.
   - Place the squares inside a container `div`, which can be written directly in the HTML file.
   - Use Flexbox to arrange the squares into a grid. **Do not use CSS Grid** for this project.

3. **Styling**:
   - Be careful with borders and margins, as they can adjust the size of the squares.
   - Ensure the CSS file is properly linked to the HTML.

4. **User Interaction**:
   - Implement a "hover" effect so that the grid squares change color when the mouse passes over them, leaving a pixelated trail.
   - Hint: Use events like `mouseenter` and `mouseleave` to detect when the mouse enters and exits a square.

5. **Resize Button**:
   - Add a button at the top of the page that, when clicked, prompts the user for the number of squares per side for a new grid.
   - After the user input, the existing grid should be removed, and a new grid should be generated in the same total space (e.g., 960px wide).
   - Limit the user input to a maximum of 100 squares to avoid performance issues.

6. **Push to GitHub**:
   - Once the project is complete, push it to GitHub.

## Extra Credit

For an additional challenge, you can implement the following features:

- **Random Colors**: Instead of all squares having the same color, randomize the RGB values of each square on every interaction.
- **Progressive Darkening**: Implement an effect where each interaction darkens the square by 10%, until it becomes completely black (or colored) after ten interactions.
  - Hint: Use the `opacity` CSS property to control the darkening.

## Debugging Tips

If the grid is not being created correctly:

- Check if the CSS file is properly linked.
- Open the browser’s developer tools and check the JavaScript console for errors.
- Check the elements panel to see if the elements are being created but are hidden.
- Add `console.log` statements in your JavaScript to verify if the code is running correctly.

## Helpful Resources

- [MDN Web Docs: Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
- [MDN Web Docs: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [MDN Web Docs: Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

---

**Note**: This project is an opportunity to practice Flexbox and DOM manipulation. Avoid using CSS Grid, as it will be covered in future lessons.