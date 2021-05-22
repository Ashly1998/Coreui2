<template>
  <div>
    <CButton 
      @click="collapse = !collapse" 
      color="primary"
      class="mb-2"
    >
      Toggle Collapse
    </CButton>
    <CCollapse :show="collapse">
      <CCard body-wrapper>
        <p class="card-text">Collapse contents Here</p>
        <CButton  
          @click="innerCollapse = !innerCollapse" 
          size="sm" 
          color="secondary"
        >
          Toggle Inner Collapse
        </CButton>
        <CCollapse :show="innerCollapse" class="mt-2">
          <CCard body-wrapper>Hello!</CCard>
        </CCollapse>
      </CCard>
    </CCollapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      collapse: false,
      innerCollapse: false
    }
  }
}
</script>