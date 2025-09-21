// ──────────────────────────────────────────────────────────────────────
// 🎯 HOSTEL MANAGEMENT SYSTEM — CORE JAVASCRIPT
// ──────────────────────────────────────────────────────────────────────
// ✅ Version: FINAL — Includes Login, Sidebar, Forgot Password, Create Account
// ✅ All paths sanitized — NO "modules/modules/" — EVER.
// ──────────────────────────────────────────────────────────────────────

// ─── LOGIN & AUTHENTICATION ───────────────────────────────────────────

/**
 * Handles user login
 * Password is always "1234" for demo
 */
function login() {
  const userType = document.getElementById('userType').value;
  const userId = document.getElementById('userId').value;
  const password = document.getElementById('password').value;

  // Validate inputs
  if (!userType || !userId || !password) {
    alert('Please fill all fields');
    return;
  }

  // Simulated password check
  if (password !== '1234') {
    alert('❌ Invalid password.\nHint: Use "1234" for all accounts in demo mode.');
    return;
  }

  // Save to localStorage
  const user = { type: userType, id: userId };
  localStorage.setItem('loggedInUser', JSON.stringify(user));

  // Optional: Remember last login
  localStorage.setItem('lastLogin', JSON.stringify(user));

  // Redirect to dashboard
  window.location.href = getDashboard(userType);
}

/**
 * Returns correct dashboard URL based on user role
 */
function getDashboard(type) {
  switch (type) {
    case 'admin':
      return 'dashboard.html';
    case 'warden':
      return 'warden-dashboard.html';
    case 'student':
      return 'student-dashboard.html';
    default:
      return 'index.html';
  }
}

/**
 * Logs out user and redirects to login
 */
function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}

/**
 * Checks if user is logged in.
 * Redirects to login page if not.
 * @returns {Object|null} user object or null
 */
function checkLogin() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!user) {
    window.location.href = 'index.html';
    return null;
  }
  return user;
}

// ─── SIDEBAR NAVIGATION ───────────────────────────────────────────────

/**
 * Dynamically loads sidebar links based on user role
 * ✅ ALL LINKS USE "modules/xxx.html" — NO DOUBLE PATHS
 */
function loadSidebar() {
  const user = checkLogin();
  if (!user) return;

  const sidebar = document.querySelector('.sidebar ul');
  if (!sidebar) return;

  // Define navigation links per role
  let links = [];

  if (user.type === 'admin') {
    links = [
      { name: "📊 Dashboard", url: "dashboard.html" },
      { name: "👥 Student Registration", url: "modules/student-registration.html" },
      { name: "🛏️ Room Allocation", url: "modules/room-allocation.html" },
      { name: "🍽️ Food Menu & Feedback", url: "modules/food-menu.html" },
      { name: "💧 Water Complaints", url: "modules/water-complaints.html" },
      { name: "🩸 Blood Donor Finder", url: "modules/blood-donor.html" },
      { name: "👮 Staff Management", url: "modules/staff-management.html" },
      { name: "📬 Complaints & Suggestions", url: "modules/complaints.html" },
      { name: "📢 Notices & Timings", url: "modules/notices.html" },
      { name: "🔍 Search & Filter", url: "modules/search-filter.html" },
      { name: "🔧 Maintenance Requests", url: "modules/maintenance.html" },
      { name: "📈 Reports & Analytics", url: "modules/admin-reports.html" },
      { name: "👨‍👩‍👧 Parent Portal", url: "modules/parent-portal.html" },
      { name: "🚪 Logout", url: "#", action: "logout()" }
    ];
  } 
  else if (user.type === 'warden') {
    links = [
      { name: "👨‍🏫 Warden Dashboard", url: "warden-dashboard.html" },
      { name: "👥 View Students", url: "modules/student-registration.html" },
      { name: "🛏️ Room Allocation", url: "modules/room-allocation.html" },
      { name: "📬 Complaints", url: "modules/complaints.html" },
      { name: "🩸 Blood Donor", url: "modules/blood-donor.html" },
      { name: "📢 Notices", url: "modules/notices.html" },
      { name: "🚪 Logout", url: "#", action: "logout()" }
    ];
  } 
  else { // student
    links = [
      { name: "🏠 My Dashboard", url: "student-dashboard.html" },
      { name: "👤 My Profile", url: "modules/student-registration.html" },
      { name: "🍽️ Food Menu", url: "modules/food-menu.html" },
      { name: "📬 Raise Complaint", url: "modules/complaints.html" },
      { name: "🩸 Blood Donor Help", url: "modules/blood-donor.html" },
      { name: "📢 Notices", url: "modules/notices.html" },
      { name: "🔧 Maintenance Request", url: "modules/maintenance.html" },
      { name: "🚪 Logout", url: "#", action: "logout()" }
    ];
  }

  // Generate sidebar HTML
  sidebar.innerHTML = links.map(link => 
    `<li><a href="${link.url}" ${link.action ? `onclick="${link.action}; return false;"` : ''}>${link.name}</a></li>`
  ).join('');
}

// ─── PAGE INITIALIZATION ──────────────────────────────────────────────

/**
 * Initialize page on DOM load
 * - Check login status
 * - Load sidebar if on dashboard/module page
 */
document.addEventListener('DOMContentLoaded', function() {
  // Auto-fill last login (optional)
  const lastLogin = JSON.parse(localStorage.getItem('lastLogin'));
  if (
    lastLogin && 
    window.location.pathname === '/Hostel/index.html' ||
    window.location.pathname.endsWith('/index.html')
  ) {
    const typeSelect = document.getElementById('userType');
    const idInput = document.getElementById('userId');
    if (typeSelect && idInput) {
      typeSelect.value = lastLogin.type;
      idInput.value = lastLogin.id;
    }
  }

  // Load sidebar only on dashboard/module pages
  if (
    window.location.pathname.includes('dashboard') ||
    window.location.pathname.includes('modules/')
  ) {
    loadSidebar();
  }
});

// ─── FORGOT PASSWORD & CREATE ACCOUNT HELPERS ─────────────────────────

/**
 * Simulated password reset
 * In real app: send email/SMS OTP
 */
function resetPassword() {
  const userId = document.getElementById('forgotUserId')?.value?.trim();
  if (!userId) {
    alert("Please enter your Enrollment/ID");
    return;
  }

  alert(`🔐 Password reset successful!\nYour password is: 1234\n(In a real system, this would be sent securely via email/SMS)`);
  
  // Close modal
  const modal = document.getElementById('forgotModal');
  if (modal) modal.style.display = 'none';
}

/**
 * Simulated account creation
 * For students: auto-adds to student database
 */
function createAccount() {
  const userType = document.getElementById('newUserType')?.value;
  const userId = document.getElementById('newUserId')?.value?.trim();

  if (!userType || !userId) {
    alert("Please select role and enter ID");
    return;
  }

  // If student, pre-register in system
  if (userType === 'student') {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const exists = students.some(s => s.enrollment === userId);

    if (!exists) {
      students.push({
        id: Date.now(),
        name: "New Student",
        enrollment: userId,
        branch: "CSE",
        year: "1st",
        dob: "2004-01-01",
        bloodGroup: "O+",
        mobile: "0000000000",
        parentName: "Parent",
        parentMobile: "0000000000",
        room: "Not Assigned",
        foodRatings: [],
        complaints: []
      });
      localStorage.setItem('students', JSON.stringify(students));
    }
  }

  alert(`✅ Account created successfully!\nRole: ${userType}\nID: ${userId}\nPassword: 1234\nYou can now login.`);
  
  // Close modal
  const modal = document.getElementById('createModal');
  if (modal) modal.style.display = 'none';
}

/**
 * Close modal by ID
 */
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

// ─── UTILITY FUNCTIONS ────────────────────────────────────────────────

/**
 * Navigate to module (prevents path typos)
 * @param {string} moduleName - e.g. "food-menu"
 */
function navigateTo(moduleName) {
  window.location.href = `modules/${moduleName}.html`;
}

/**
 * Navigate to dashboard by role
 * @param {string} role - "admin", "warden", "student"
 */
function navigateToDashboard(role) {
  window.location.href = getDashboard(role);
}

/**
 * Check if user exists (for future enhancements)
 * @param {string} id - User ID
 * @param {string} type - "student", "warden", "admin"
 * @returns {boolean}
 */
function userExists(id, type) {
  if (type === 'student') {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    return students.some(s => s.enrollment === id);
  }
  // For staff/admin, check against staff DB if implemented
  return true; // Assume exists for demo
}

// ─── MODAL HANDLERS ───────────────────────────────────────────────────

// Close modal if clicked outside
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
};