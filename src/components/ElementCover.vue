<template>
  <div>
    <h4>With all element covered with default spinner:</h4>
    <div class="position-relative">
      <CMedia>
        <h5 class="mt-0">Media Title</h5>
        <p class="mb-0">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </CMedia>
      <CElementCover :opacity="0.8"/>
    </div>
    <h4 class="mt-4">Only part of element covered with custom content:</h4>
    <div class="position-relative">
      <CMedia>
        <h5 class="mt-0">Media Title</h5>
        <p class="mb-0">
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
          Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
          ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </CMedia>
      <CElementCover 
        :boundaries="[{ sides: ['top', 'left'], query: '.media-body' }]"
        :opacity="0.8"
      >
        <h1 class="d-inline">Loading... </h1><CSpinner size="5xl" color="success"/>
      </CElementCover>
    </div>
  </div>
</template>