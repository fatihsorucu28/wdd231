const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true, type: "wdd" },
  { code: "CSE110", name: "Intro to Programming", credits: 2, completed: false, type: "cse" },
  // more courses...
];

function displayCourses(filter = "all") {
  const container = document.getElementById("courseContainer");
  container.innerHTML = "";
  let total = 0;

  const filtered = filter === "all" ? courses : courses.filter(c => c.type === filter);
  filtered.forEach(course => {
    const div = document.createElement("div");
    div.className = course.completed ? "course completed" : "course";
    div.innerHTML = `<h3>${course.code}</h3><p>${course.name} - ${course.credits} credits</p>`;
    container.appendChild(div);
    total += course.credits;
  });

  document.getElementById("creditCount").textContent = total;
}

function filterCourses(type) {
  displayCourses(type);
}

window.addEventListener("DOMContentLoaded", () => displayCourses());
