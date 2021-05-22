<template>
  <main>
    <!-- Example showing dynamic sidebar mechanism with CRenderFunction-->
    <CSidebar :show.sync="showSidebar">
      <CSelect
        label="Select user role:"
        :options="[ 'admin', 'not logged in', 'user', 'unknown']"
        :value.sync="role"
        class="p-2"
      />
      <CRenderFunction :contentToRender="computedSidebar" flat/>
    </CSidebar>
    <div class="p-5">
      <CButton @click="showSidebar = true" color="success">Show sidebar</CButton>
    </div>
  </main>
</template>

<script>
const allItems = [
  {
    _name: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard"
  },
  {
    _name: "CSidebarNavItem",
    name: "User profile",
    to: "/theme/colors",
    roles: ["user", "admin"]
  },
  {
    _name: "CSidebarNavItem",
    name: "Admin panel",
    to: "/admin-panel",
    roles: ["admin"]
  }
];

export default {
  data() {
    return {
      showSidebar: true,
      role: "admin"
    };
  },
  computed: {
    currentItems() {
      //sidebar items are not shown until role is known
      if (this.role === "unknown") {
        return [];
      }
      return allItems.filter(item => {
        return !item.roles || item.roles.includes(this.role);
      });
    },
    computedSidebar() {
      return [
        {
          _name: "CSidebarNav",
          _children: this.currentItems
        }
      ];
    }
  }
};
</script>
