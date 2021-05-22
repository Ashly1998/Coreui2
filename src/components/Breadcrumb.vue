<template>
  <div>
    Standard breadcrumb:
    <CBreadcrumb :items="items"/>
    Customized breadcrumb:
    <CBreadcrumb :items="customizedItems" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          text: 'This is a router link',
          to: '/components/Breadcrumb.html'
        },
        {
          text: 'This is a link without actions'
        },
        {
          text: 'This is a span'
        }
      ],
      customizedItems: [
        {
          text: 'This is a link with additional class and props',
          addClasses: 'font-xl',
          href: 'https://coreui.io/',
          target: '_blank'
        },
        {
          text: 'This is a styled span',
          addClasses: 'font-xl text-success'
        }
      ]
    }
  }
}
</script>