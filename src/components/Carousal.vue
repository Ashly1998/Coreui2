<template>
  <CCarousel
    arrows
    indicators
    animate
    height="450px"
  >
    <CCarouselItem
      captionHeader="First Slide"
      image="https://picsum.photos/1024/480/?image=52"
      captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
    />
    <CCarouselItem
      captionHeader="Blank page"
      :image="{ placeholderColor: 'grey' }"
      captionText="Nulla vitae elit libero, a pharetra augue mollis interdum."
    />
    <CCarouselItem
     image="https://picsum.photos/1024/480/?image=54"
    />
  </CCarousel>
</template>