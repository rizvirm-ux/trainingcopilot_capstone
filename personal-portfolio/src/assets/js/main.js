// This file handles the tab switching functionality and populates the Project Gallery with data from the JSON file.

// Function to handle tab switching
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked tab and corresponding content
      tab.classList.add("active");
      const target = tab.id.replace("-tab", "");
      document.getElementById(target).classList.add("active");
    });
  });

  // Load project data into the Project Gallery tab
  loadProjects();
});

// Function to load project data from JSON file
function loadProjects() {
    alert("inside loadProjects");
  fetch("./data/projects.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load project data");
      }
      return response.json();
    })
    .then((projects) => {
      const projectList = document.getElementById("project-list");
      alert(projectList)
      projectList.innerHTML = ""; // Clear existing content

      projects.forEach((project) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${project["Project Name"]}</td>
          <td>${project["Project Start Date"]}</td>
          <td>${project["Project End Date"]}</td>
          <td>${project["Project Responsibility"]}</td>
        `;

        projectList.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error loading project data:", error);
    });
}