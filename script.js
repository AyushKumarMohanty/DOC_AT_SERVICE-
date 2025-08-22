// ========== Splash Screen ==========
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
  }, 2500);
});

// ========== Dummy Doctor Data ==========
const doctors = [
  {
    id: 1,
    name: "Dr. Aarav Sharma",
    age: 45,
    hospital: "Apollo Hospital",
    experience: "20 years",
    education: "MBBS, MD - AIIMS Delhi",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    contact: "+91 9876543210",
    available: true,
    reviews: [
      { user: "Rahul", text: "Very kind and helpful.", stars: 5 },
      { user: "Meera", text: "Explained everything well.", stars: 4 },
    ],
  },
  {
    id: 2,
    name: "Dr. Kavya Nair",
    age: 38,
    hospital: "Fortis Hospital",
    experience: "12 years",
    education: "MBBS, MS - JIPMER Pondicherry",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    contact: "+91 9123456780",
    available: false,
    reviews: [
      { user: "Arjun", text: "Quick diagnosis!", stars: 5 },
      { user: "Pooja", text: "Wait time was long.", stars: 3 },
    ],
  },
  {
    id: 3,
    name: "Dr. Rohan Mehta",
    age: 50,
    hospital: "AIIMS Delhi",
    experience: "25 years",
    education: "MBBS, DM - Cardiology, AIIMS",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    contact: "+91 9001234567",
    available: true,
    reviews: [{ user: "Sanya", text: "Saved my father’s life.", stars: 5 }],
  },
  {
    id: 4,
    name: "Dr. Sneha Patil",
    age: 42,
    hospital: "Manipal Hospital",
    experience: "15 years",
    education: "MBBS, MS - Orthopedics, KMC Manipal",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    contact: "+91 9898989898",
    available: false,
    reviews: [],
  },
  {
    id: 5,
    name: "Dr. Vikram Rao",
    age: 47,
    hospital: "Columbia Asia",
    experience: "18 years",
    education: "MBBS, MS - Surgery, CMC Vellore",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    contact: "+91 9765432109",
    available: true,
    reviews: [{ user: "Kiran", text: "Expert surgeon.", stars: 5 }],
  },
  {
    id: 6,
    name: "Dr. Neha Singh",
    age: 36,
    hospital: "Max Hospital",
    experience: "10 years",
    education: "MBBS, MD - Pediatrics, PGI Chandigarh",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    contact: "+91 9911223344",
    available: true,
    reviews: [{ user: "Sunita", text: "Very gentle with kids.", stars: 5 }],
  },
  {
    id: 7,
    name: "Dr. Rajat Kapoor",
    age: 41,
    hospital: "Medanta",
    experience: "14 years",
    education: "MBBS, DM - Neurology, AIIMS Delhi",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    contact: "+91 9801234567",
    available: false,
    reviews: [],
  },
  {
    id: 8,
    name: "Dr. Priya Iyer",
    age: 39,
    hospital: "Apollo Hospital",
    experience: "13 years",
    education: "MBBS, MS - Gynecology, MMC Chennai",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    contact: "+91 9345678901",
    available: true,
    reviews: [{ user: "Anita", text: "Helped me through pregnancy.", stars: 5 }],
  },
  {
    id: 9,
    name: "Dr. Karan Malhotra",
    age: 55,
    hospital: "AIIMS Delhi",
    experience: "30 years",
    education: "MBBS, MD - Oncology, AIIMS",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    contact: "+91 9988776655",
    available: true,
    reviews: [],
  },
  {
    id: 10,
    name: "Dr. Shreya Deshmukh",
    age: 34,
    hospital: "Ruby Hall Clinic",
    experience: "9 years",
    education: "MBBS, MD - Dermatology, BJMC Pune",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    contact: "+91 9222334455",
    available: false,
    reviews: [],
  },
  {
    id: 11,
    name: "Dr. Anil Verma",
    age: 48,
    hospital: "AIIMS Delhi",
    experience: "22 years",
    education: "MBBS, MD - Gastroenterology",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    contact: "+91 9776655443",
    available: true,
    reviews: [],
  },
  {
    id: 12,
    name: "Dr. Nisha Reddy",
    age: 37,
    hospital: "Apollo Hyderabad",
    experience: "11 years",
    education: "MBBS, MD - Pulmonology",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    contact: "+91 9888777666",
    available: true,
    reviews: [],
  },
];

// ========== Load Doctors on Dashboard ==========
function loadDoctors() {
  const list = document.getElementById("doctorList");
  if (!list) return;

  list.innerHTML = "";
  doctors.forEach((doc) => {
    const card = document.createElement("div");
    card.classList.add("doctor-card");
    card.innerHTML = `
      <img src="${doc.image}" alt="Doctor Image" onerror="this.src='assets/doctor.svg'">
      <h3>${doc.name}</h3>
      <p><strong>Experience:</strong> ${doc.experience}</p>
      <p>Status: <span class="${
        doc.available ? "status-green" : "status-red"
      }">${doc.available ? "Available" : "Unavailable"}</span></p>
      <button onclick="viewDoctor(${doc.id})">View Details</button>
    `;
    list.appendChild(card);
  });
}

// ========== View Doctor Details ==========
function viewDoctor(id) {
  localStorage.setItem("selectedDoctor", id);
  window.location.href = "doctor.html";
}

// ========== Load Doctor Detail Page ==========
function loadDoctorDetails() {
  const detailsDiv = document.getElementById("doctorDetails");
  if (!detailsDiv) return;

  const id = localStorage.getItem("selectedDoctor");
  const doc = doctors.find((d) => d.id == id);

  if (!doc) return;

  detailsDiv.innerHTML = `
    <img src="${doc.image}" alt="Doctor" onerror="this.src='assets/doctor.svg'">
    <h2>${doc.name}</h2>
    <p><strong>Age:</strong> ${doc.age}</p>
    <p><strong>Hospital:</strong> ${doc.hospital}</p>
    <p><strong>Experience:</strong> ${doc.experience}</p>
    <p><strong>Education:</strong> ${doc.education}</p>
    <p><strong>Contact:</strong> ${doc.contact}</p>
    <h3>Reviews:</h3>
    <div id="reviews"></div>
    <form id="reviewForm">
      <input type="text" id="reviewUser" placeholder="Your Name" required>
      <textarea id="reviewText" placeholder="Write your review..." required></textarea>
      <input type="number" id="reviewStars" min="1" max="5" placeholder="Stars (1-5)" required>
      <button type="submit">Submit Review</button>
    </form>
    <h3>Nearest Doctor (Google Maps):</h3>
    <div id="map" style="width:100%;height:300px;border-radius:10px;"></div>
  `;

  // Load Reviews
  const reviewContainer = document.getElementById("reviews");
  doc.reviews.forEach((rev) => {
    const div = document.createElement("div");
    div.classList.add("review");
    div.textContent = `${rev.user}: ${rev.text} ⭐${rev.stars}`;
    reviewContainer.appendChild(div);
  });

  // Add Review Form
  document.getElementById("reviewForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("reviewUser").value;
    const text = document.getElementById("reviewText").value;
    const stars = document.getElementById("reviewStars").value;
    doc.reviews.push({ user, text, stars });
    localStorage.setItem("doctors", JSON.stringify(doctors));
    loadDoctorDetails();
  });

  // Google Maps
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat, lng },
      });
      new google.maps.Marker({
        position: { lat, lng },
        map,
        title: "You are here",
      });
    });
  }
}

// ========== Search Doctors ==========
function searchDoctors() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const list = document.getElementById("doctorList");
  if (!list) return;

  list.innerHTML = "";
  doctors
    .filter((doc) => doc.name.toLowerCase().includes(query))
    .forEach((doc) => {
      const card = document.createElement("div");
      card.classList.add("doctor-card");
      card.innerHTML = `
        <img src="${doc.image}" alt="Doctor Image" onerror="this.src='assets/doctor.svg'">
        <h3>${doc.name}</h3>
        <p><strong>Experience:</strong> ${doc.experience}</p>
        <p>Status: <span class="${
          doc.available ? "status-green" : "status-red"
        }">${doc.available ? "Available" : "Unavailable"}</span></p>
        <button onclick="viewDoctor(${doc.id})">View Details</button>
      `;
      list.appendChild(card);
    });
}

// ========== On Page Load ==========
document.addEventListener("DOMContentLoaded", () => {
  loadDoctors();
  loadDoctorDetails();
});
