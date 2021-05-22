<template>
  <div>
    <CLink
      href="https://coreui.io/vue/demo/#/base/switches"
      target="_blank"
    >Check out more examples here!</CLink><br>
    <template v-for="(mode, index) in modes">
      Passed props: {{mode}}
      <div class="d-flex justify-content-between my-4" :key="index">
        <CSwitch
          :key="key"
          :color="color"
          v-bind="mode"
          checked
          :value="color"
          v-for="(color, key) in colors"
        />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      modes: [
        {},
        { size: 'sm'},
        { size: 'lg'},
        { variant: '3d' },
        { shape: 'pill' },
        { variant: 'opposite' },
        { variant: 'outline', shape:'pill' },

      ],
      colors: ['primary', 'success', 'warning', 'danger', 'info', 'dark', 'light', 'secondary']
    }
  }
}
</script>