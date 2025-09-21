function initSampleData() {
  if (!localStorage.getItem('students')) {
    localStorage.setItem('students', JSON.stringify([
      {
        id: 1,
        name: "Kartikey Sharma",  // ✅ UPDATED NAME
        enrollment: "CS2021001",
        branch: "CSE",
        year: "3rd",
        dob: "2002-05-15",
        bloodGroup: "O+",
        mobile: "9876543210",
        parentName: "Mr.Kamlesh Kumar Sharma",
        parentMobile: "9123456780",
        room: "A-101",
        foodRatings: [],
        complaints: []
      },
      {
        id: 2,
        name: "Priya Patel",
        enrollment: "EC2021002",
        branch: "ECE",
        year: "2nd",
        dob: "2003-02-20",
        bloodGroup: "A+",
        mobile: "8765432109",
        parentName: "Mrs. Patel",
        parentMobile: "9012345678",
        room: "B-205",
        foodRatings: [],
        complaints: []
      }
    ]));
  }

  if (!localStorage.getItem('staff')) {
    localStorage.setItem('staff', JSON.stringify({
      warden: { name: "Dr. Meena Reddy", phone: "9876543211", shift: "Full Day" },
      caretakers: [
        { name: "Ramesh", shift: "Morning", phone: "9123456781" },
        { name: "Suresh", shift: "Night", phone: "9123456782" }
      ],
      guards: [
        { name: "Vijay", shift: "Morning", phone: "9123456783" },
        { name: "Ajay", shift: "Night", phone: "9123456784" }
      ]
    }));
  }

  if (!localStorage.getItem('foodMenu')) {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('foodMenu', JSON.stringify({
      [today]: {
        breakfast: "Poha + Tea",
        lunch: "Dal + Rice + Sabzi",
        dinner: "Chapati + Paneer Butter Masala"
      }
    }));
  }

  if (!localStorage.getItem('complaints')) localStorage.setItem('complaints', '[]');
  if (!localStorage.getItem('maintenance')) localStorage.setItem('maintenance', '[]');
  if (!localStorage.getItem('notices')) localStorage.setItem('notices', JSON.stringify([
    { title: "Room Inspection", date: "2025-04-10", desc: "All rooms will be inspected." },
    { title: "Holiday Notice", date: "2025-04-15", desc: "University Holiday" }
  ]));
  if (!localStorage.getItem('healthReports')) localStorage.setItem('healthReports', '[]');
  if (!localStorage.getItem('customContacts')) localStorage.setItem('customContacts', '[]');
  if (!localStorage.getItem('otpLogs')) localStorage.setItem('otpLogs', '[]');
  if (!localStorage.getItem('alertPreferences')) localStorage.setItem('alertPreferences', JSON.stringify({ smsAlerts: true, emailAlerts: false }));
}

initSampleData();