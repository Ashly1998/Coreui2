<template>
  <div>
   
  <CLoadingButton  timeout="2000" color="primary">Click Me!</CLoadingButton>
  <CLoadingButton spinnerType="grow" timeout="2000" color="secondary">Click Me!</CLoadingButton>
  <CLoadingButton progress timeout="2000" color="success">Click Me!</CLoadingButton>
  <CLoadingButton progress :spinner="false" timeout="2000" color="warning" :onChange="test">Click Me!</CLoadingButton>
  </div>
</template>

<script>
export default {
  name: "LoadingButton",
  methods:{
    test: function(a){
      console.log('a -> ' + a)
    }
  }
}
</script>

 