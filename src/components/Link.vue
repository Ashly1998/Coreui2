<template>
  <CRow>
    <CCol lg>
      <CLink
        href="https://coreui.io"
        target="_blank"
      >
        Normal external link.
      </CLink>
    </CCol>
    <CCol lg>
      <CLink to="#features">
        Router link.
      </CLink>
    </CCol>
    <CCol lg>
      <CLink disabled>
        Disabled link without action
      </CLink>
    </CCol>
    <CCol lg>
      <CLink
        class="text-white bg-info px-2"
        href="https://coreui.io"
        target="_blank"
      >
        Custom link.
      </CLink>
    </CCol>
  </CRow>
</template>