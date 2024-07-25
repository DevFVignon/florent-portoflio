import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import projectsData from '../../datas/projects.json';
import images from './imageLoader';  
import Skeleton from '@mui/material/Skeleton';

function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state for images

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const getImageSrc = (path) => {
    const imageName = path.replace('../../assets/images_projets/', '');
    const imageSrc = images[imageName];
    if (!imageSrc) {
      console.error(`Image not found: ${imageName}`);
    }
    return imageSrc;
  };

  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <div className="projects_container">
        {projectsData.map((project, index) => (
          <div key={index} onClick={() => handleOpen(project)}>
            <img src={getImageSrc(project.pictures[0])} alt={project.name} />
          </div>
        ))}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyle">
          {selectedProject && (
            <>
              <div className="modal-displayWithoutGallery">
                <Typography id="modal-modal-title-mobile" variant="h5" component="h4">
                  {selectedProject.name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="projet-firstImage">
                    <img 
                      src={getImageSrc(selectedProject.pictures[0])} 
                      alt={selectedProject.name} 
                      className="imageStyle" 
                      onLoad={() => setLoading(false)}
                      onError={() => setLoading(false)}
                    />
                    {loading && <Skeleton variant="rectangular" width="100%" height={200} />}
                  </div>
                </Typography>
                <Typography>
                  <h4 id="modal-modal-title-desktop">{selectedProject.name}</h4>
                  <strong>Year:</strong> {selectedProject.year}
                  <br />
                  <strong>Description:</strong> {selectedProject.description}
                  <br />
                  <strong>Technologies:</strong> {selectedProject.technologies}
                  <br />
                  <strong>Lien GitHub:</strong> <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="project-link">{selectedProject.github}</a>
                  <br />
                </Typography>
              </div>
              <Typography>
                <div className="project-images">
                  {selectedProject.pictures.slice(1).map((picture, idx) => (
                    <div key={idx} style={{ marginTop: '10px' }}>
                      <img 
                        src={getImageSrc(picture)} 
                        alt={`${selectedProject.name} screenshot ${idx + 1}`} 
                        className="imageStyle" 
                        onLoad={() => setLoading(false)}
                        onError={() => setLoading(false)}
                      />
                      {loading && <Skeleton variant="rectangular" width="100%" height={200} />}
                    </div>
                  ))}
                </div>
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </section>
  );
}

export default Projects;
