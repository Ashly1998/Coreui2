<template>
  <div>
    Active page: {{page}}
    <CPagination
      :activePage.sync="page"
      :pages="10"
      size="lg"
      align="center"
    />
  </div>
</template>