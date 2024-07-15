<template>
	<div id="app">
	  <Navbar :isSidebarExpanded="isSidebarExpanded" @toggle-sidebar="toggleSidebar" />
	  <Sidebar :isExpanded="isSidebarExpanded" />
	  <div :class="['content', { 'content-shifted': isSidebarExpanded }]">
		<router-view />
	  </div>
	</div>
  </template>
  
  <script>
  import Navbar from './components/Navbar.vue';
  import Sidebar from './components/Sidebar.vue';
  
  export default {
	name: 'App',
	components: {
	  Navbar,
	  Sidebar,
	},
	data() {
	  return {
		isSidebarExpanded: false,
	  };
	},
	methods: {
	  toggleSidebar() {
		this.isSidebarExpanded = !this.isSidebarExpanded;
	  },
	},
  };
  </script>
  
  <style>
  #app {
	display: flex;
	height: 100vh;
	overflow: hidden;
  }
  
  .content {
	margin-top: 60px; /* Height of the navbar */
	margin-left: 60px; /* Width of the collapsed sidebar */
	flex-grow: 1;
	padding: 20px;
	transition: margin-left 0.3s;
  }
  
  .content-shifted {
	margin-left: 20px; /* Width of the expanded sidebar */
  }
  </style>
  