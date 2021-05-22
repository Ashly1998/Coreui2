<template>
  <div>
    <CToast
      :show="true"
      position="static"
      title="CToast static component"
    >
      Hello, world! This is a <b>toast</b> message.
    </CToast>
    <CButton 
      color="primary" 
      @click="addFixedToast"
    >
      click to add fixed toast!
    </CButton>
    <CToaster :autohide="3000">
      <template v-for="toast in fixedToasts">
        <CToast
          :key="'toast' + toast"
          :show="true"
          header="CToast fixed component"
        >
          Hello, world! This is a <b>toast</b> number {{toast}}.
        </CToast>
      </template>
    </CToaster>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fixedToasts: 0
    }
  },
  methods: {
    addFixedToast () {
      this.fixedToasts++
    }
  }
}
</script>