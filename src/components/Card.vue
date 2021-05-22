<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            Card title
            <div class ="card-header-actions">
                <a
                    href="https://coreui.io/vue/docs/card-components"
                    class="card-header-action"
                    rel="noreferrer noopener"
                    target="_blank"
                    >
                    <small class="text-muted">docs</small>
                </a>
            </div>
          </CCardHeader>
          <CCardBody>
              {{loremIpsum}}
          </CCardBody>
          <CCardFooter>
            Standard Footer.
          </CCardFooter>
        </CCard>
      </CCol>
      <CCol sm="6" md="4">
        <CCard color="info" class="text-center" body-wrapper text-color="white">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CCard>
      </CCol>
      <CCol sm="6">
        <CCard bodyWrapper>
          Content is rendered inside CCardBody component.
        </CCard>
      </CCol>
    </CRow>
  </div>
   
</template>