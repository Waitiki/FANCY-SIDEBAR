<template>
    <div class="navbar">
      <div class="navbar-left">
        <img src="src/assets/SAMIS-LOGO.jpg" alt="Logo" class="logo">
        
      </div>
      <div class="navbar-center">
        <button @click="toggleSidebar" class="toggle-button">
          <i class="fas fa-bars"></i>
        </button>

        <span v-if="isSidebarExpanded">Murang'a University Of Technology</span>
      </div>
      <div class="navbar-right">
        <div class="user-info">
          <span>Hi, Wainaina</span>
          <img src="src/assets/user-avatar.webp" alt="User Avatar" class="avatar">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
      isSidebarExpanded: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      toggleSidebar() {
        this.$emit('toggle-sidebar');
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
  }
  
  .logo {
    height: 40px;
  }
  
  .toggle-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .user-info {
    display: flex;
    align-items: center;
  }
  
  .user-info .avatar {
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
  }
  </style>  