<template>
  <div>
    <CAlert color="primary">
      This is info alert.
    </CAlert>
    <CAlert color="warning" closeButton>
      This is warning dismissible alert.
    </CAlert>
    <CAlert
      color="danger"
      :show.sync="currentAlertCounter"
      closeButton
    >
      This alert will close after {{currentAlertCounter}} seconds.
      <CProgress
        :max="10"
        :value="currentAlertCounter"
        height="3px"
        color="danger"
        animate
      />
    </CAlert>
    <CButton
      color="primary"
      v-if="!currentAlertCounter"
      @click="currentAlertCounter = 10"
    >
      Show alert with timer
    </CButton>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentAlertCounter: 10
    }
  }
}
</script>