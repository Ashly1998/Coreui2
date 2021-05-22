<template>
  <CRenderFunction :contentToRender="renderFunction" class="d-flex justify-content-between">
    <template #named-slot>
      Element rendered by<CBadge class="ml-2" color="success">NAMED SLOT</CBadge>
    </template>
  </CRenderFunction>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  computed: {
    renderFunction () {
      return [
        'CAlert', 
        { props: { color: 'success' } }, 
        [
          [
            'CButton', 
            {
              props: { color: this.counter > 0 ? 'success' : 'warning' }, 
              on: { click: () => this.counter++ }
            }, 
            [`Button was clicked ${this.counter} times`] 
          ], 
          [
            'CButton', 
            { props: { color: 'warning' }}, 
            [{ slot: 'named-slot' }] 
          ],
        ]
      ]
    }
  }
}
</script>