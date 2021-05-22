<template>
  <div>
    <CProgress :value="counter" size="sm"/>
    <CProgress
      :value="counter"
      color="success"
      animated
      show-value
      style="height:20px;"
      class="mt-1"
    />
    <CProgress class="mt-1" show-value>
      <CProgressBar
        :value="counter*(6/10)"
        color="success"
      />
      <CProgressBar
        :value="counter*(2.5/10)"
        color="warning"
      />
      <CProgressBar
        :value="counter*(1.5/10)"
        color="danger"
      />
    </CProgress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 86
    }
  }
}
</script>