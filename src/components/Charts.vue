<template>
  <CChartBar
    style="height:300px"
    :datasets="[
      {
        data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
        backgroundColor: '#E55353',
        label: 'Sales',
      }
    ]"
    labels="months"
    :options="{ maintainAspectRatio: false }"
  />
</template>