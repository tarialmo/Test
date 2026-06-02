const buttonWrapper = document.querySelector(".slider-controls");
const buttons = buttonWrapper.querySelectorAll("button");
const sliderText = document.querySelectorAll(".slider-item");
const sliderImageContainer = document.querySelector(".site-wrapper");

const renderSliderText = (num) => {
sliderText.forEach((item, index) => {
  if (index === num) {
    item.classList.add("slide-current");
  } else {
    item.classList.remove("slide-current");
  }
})
}

buttonWrapper.addEventListener("click", (evt) => {

  buttons.forEach((button, index) => {
     if (evt.target === buttons[index]) {
      sliderImageContainer.classList = sliderImageContainer.className.replace(/\d/, +index+1);
      button.classList.add("current");
      renderSliderText(index);
    } else {
      button.classList.remove("current");
     };
  });
});
