import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import "./ProjectDetail.css";
import { isAdmin, isUser } from "../auth/auth";

export default function ProjectDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Tasks");

  // Role detection
  const role = isAdmin() ? "admin" : isUser() ? "user" : "guest";

  // Tabs based on role
  const tabs =
    role === "admin"
      ? ["Tasks", "Overview", "Activity", "Filters", "Reports"]
      : role === "user"
        ? ["Tasks", "Overview", "Activity"]
        : ["Overview"];

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`);
        const data = await response.json();
        setProject(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching project:", error);
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading project...</div>;
  }

  if (!project) {
    return <div className="error">Project not found</div>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div className="flex-grow-1 overflow-auto">
        <div className="project-detail-container">
          <button className="back-button" onClick={() => nav(-1)}>
            ← Back to Projects
          </button>

          <div
            className="project-header"
            style={{ backgroundColor: project.color }}
          >
            <h1>{project.name}</h1>
            <p className="project-description">{project.description}</p>
            <span className={`status-badge ${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>

          {/* Tabs */}
          <div className="project-tabs">
            {tabs.map((t) => (
              <button
                key={t}
                className={`tab-button ${activeTab === t ? "active" : ""}`}
                onClick={() => setActiveTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="tab-content">
            {activeTab === "Tasks" && (
              <div>
                <h2>Project Tasks</h2>
                <p>Task list or content goes here.</p>
              </div>
            )}

            {activeTab === "Overview" && (
              <div>
                <h3>Overview</h3>
                <p>Overview content tailored for the {role} role.</p>
              </div>
            )}

            {activeTab === "Activity" && (
              <div>
                <h3>Activity</h3>
                <p>Activity feed and recent changes.</p>
              </div>
            )}

            {role === "admin" && activeTab === "Filters" && (
              <div>
                <h3>Admin Filters</h3>
                <p>Admin-only filters and controls (export, advanced filters).</p>
              </div>
            )}

            {role === "admin" && activeTab === "Reports" && (
              <div>
                <h3>Admin Reports</h3>
                <p>Detailed reports visible only to admins.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
