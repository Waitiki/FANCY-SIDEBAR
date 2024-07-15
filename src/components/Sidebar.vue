<template>
	<div :class="['sidebar', { 'sidebar-expanded': isExpanded }]">
	  <ul>
		<li v-for="item in menuItems" :key="item.text" @mouseover="hoverItem = item.text" @mouseleave="hoverItem = null">
		  <a :class="{ 'hovered': hoverItem === item.text }">
			<i :class="item.icon"></i>
			<div class="label-container">
			  <span class="label">{{ item.text }}</span>
			</div>
		  </a>
		</li>
	  </ul>
	  <div class="footer" v-if="isExpanded">
		<p>&copy;2024 - ABNO Softwares International</p>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Sidebar',
	props: {
	  isExpanded: {
		type: Boolean,
		default: false,
	  },
	},
	data() {
	  return {
		hoverItem: null,
		menuItems: [
		  { text: 'Dashboard', icon: 'fas fa-th-large' },
		  { text: 'Socials', icon: 'fas fa-users' },
		  { text: 'Message', icon: 'fas fa-envelope' },
		  { text: 'Admission', icon: 'fas fa-university' },
		  { text: 'Academic', icon: 'fas fa-book' },
		  { text: 'Repository', icon: 'fas fa-archive' },
		  { text: 'Financials', icon: 'fas fa-dollar-sign' },
		  { text: 'Timetable', icon: 'fas fa-calendar-alt' },
		  { text: 'Evaluations', icon: 'fas fa-clipboard-check' },
		  { text: 'Complaints', icon: 'fas fa-exclamation-circle' },
		  { text: 'FAQs', icon: 'fas fa-question-circle' },
		  { text: 'Virtual Assistant', icon: 'fas fa-user-circle' },
		],
	  };
	},
  };
  </script>  
  
<style scoped>  

*{
	padding: 0;
	margin: o;
	box-sizing: border-box;
}
.sidebar {
  width: 60px;
  background-color: #30c39e;
  transition: width 0.3s;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  padding-top: 20px;
  z-index: 1000;
}

.sidebar-expanded {
  width: 200px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin: 20px 0;
  position: relative;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s, width 0.3s;
  width: 60px;
}

.sidebar ul li a:hover,
.sidebar ul li a.hovered {
  background-color: #ff1e1e; /* Background color on hover */
  color: white; /* Text color on hover */
  width: 200px; /* Expand width on hover */
}

.sidebar ul li a i {
  font-size: 24px;
  min-width: 24px;
}

.sidebar ul li a .label {
  display: none;
  margin-left: 10px;
  font-size: 16px;
  white-space: nowrap; /* Prevent text from wrapping */
}

.sidebar ul li a:hover .label,
.sidebar ul li a.hovered .label {
  display: block;
}

.sidebar-expanded ul li a .label {
  display: inline-block;
}

.footer {
  position: absolute;
  bottom: 20px;
  width: 100%;
  color: white;
  text-align: center;
}
</style>  